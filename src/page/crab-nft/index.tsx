import React, { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { GET_USERS_NFT_CLAIMED } from '../../config';
import { NftTable } from '../../component/NftTable';
import { PageLayout, PageContent, PageFooter } from '../../component';
import { downloadCsv } from '../../utils';
import { Button, Statistic, Breadcrumb, Tooltip, notification } from 'antd';
import { data as nftEligibleData } from './data';
import { statistics as statisticsData } from './statistics';
import type { TypeNftTableDataSource, TypeGetUsersNftClaimed } from '../../type';
import { useNavigate } from 'react-router-dom';

const Page: React.FC = () => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const [csvRowsTotal, setCsvRowsTotal] = useState<string[][]>([]);
  const [csvRowsClaimed, setCsvRowsClaimed] = useState<string[][]>([]);
  const [csvRowsUnclaim, setCsvRowsUnclaim] = useState<string[][]>([]);
  const [csvRowsNewClaim, setCsvRowsNewClaim] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [disabledCheck, setDisabledCheck] = useState(false);
  const [nftTableDataSource, setNftTableDataSource] = useState<TypeNftTableDataSource[]>([]);

  const getUsersNftClaimed = async (offset: number): Promise<TypeGetUsersNftClaimed> => {
    const result: TypeGetUsersNftClaimed = { totalCount: 0, pageInfo: { hasNextPage: false }, nodes: [] };
    try {
      const { data } = await client.query({
        variables: {
          first: 50,
          offset: offset,
        },
        query: GET_USERS_NFT_CLAIMED,
      });
      result.totalCount = data?.remarkedNftAddresses?.totalCount || 0;
      result.pageInfo = data?.remarkedNftAddresses?.pageInfo || { hasNextPage: false };
      result.nodes = result.nodes.concat(data?.remarkedNftAddresses?.nodes || []);
    } catch (err) {
      console.error(err);
      notification.warning({
        message: 'Oops, something went wrong',
        description: (err as Error).message,
      });
    }
    return result;
  };

  const handleClickCheckClaim = async () => {
    setLoading(true);

    const claimeds = await getUsersNftClaimed(0);
    while (claimeds.pageInfo.hasNextPage) {
      const c = await getUsersNftClaimed(claimeds.nodes.length);
      if (c.totalCount === 0 || c.nodes.length === 0) {
        break;
      }
      claimeds.totalCount = c.totalCount;
      claimeds.pageInfo = c.pageInfo;
      claimeds.nodes = claimeds.nodes.concat(c.nodes);
    }

    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    worker.onerror = (err) => {
      setLoading(false);
      worker.terminate();
      console.error('worker error:', err.message);
    };
    worker.onmessage = (ev) => {
      worker.terminate();
      const transformed = ev.data;
      setCsvRowsTotal(transformed.csvRowsTotal);
      setCsvRowsClaimed(transformed.csvRowsClaimed);
      setCsvRowsUnclaim(transformed.csvRowsUnclaim);
      setCsvRowsNewClaim(transformed.csvRowsNewClaim);
      setNftTableDataSource(transformed.nftTableDataSource);

      setDisabledCheck(true);
      setLoading(false);
    };
    worker.postMessage(claimeds.nodes);
  };

  const handleClickExportClaimed = () => {
    downloadCsv(
      [['Contribute的地址', '接收NFT的地址', 'Contribute数量']]
        .concat(csvRowsClaimed)
        .map((v) => v.join(','))
        .join('\n'),
      'crab-nft-claimed.csv'
    );
  };

  const handleClickExportUnclaim = () => {
    downloadCsv(
      [['Contribute的地址', 'Contribute数量']]
        .concat(csvRowsUnclaim)
        .map((v) => v.join(','))
        .join('\n'),
      'crab-nft-unclaim.csv'
    );
  };

  const handleClickExportTotal = () => {
    downloadCsv(
      [['Contribute的地址', '接收NFT的地址', 'Contribute数量']]
        .concat(csvRowsTotal)
        .map((v) => v.join(','))
        .join('\n'),
      'crab-nft-total.csv'
    );
  };

  const handleNewClaim = () => {
    downloadCsv(
      [['Contribute的地址', '接收NFT的地址', 'Contribute数量']]
        .concat(csvRowsNewClaim)
        .map((v) => v.join(','))
        .join('\n'),
      'crab-nft-claimed-new.csv'
    );
  };

  return (
    <PageLayout>
      <PageContent>
        <div className="flex items-end justify-end space-x-24 mb-2">
          <div className="flex items-center space-x-6">
            <Statistic loading={loading} title="Total NFT Eligible" value={nftEligibleData.length} />
            <Statistic
              loading={loading}
              title={<Tooltip title="Last Time / Current">Total Claimed</Tooltip>}
              value={`${statisticsData.filter((item) => item[1] === 1).length}/${csvRowsClaimed.length}`}
            />
            <Statistic
              loading={loading}
              title={<Tooltip title="Last Time / Current">Total Unclaim</Tooltip>}
              value={`${statisticsData.filter((item) => item[1] === 0).length}/${csvRowsUnclaim.length}`}
            />
          </div>
          <div className="flex justify-end items-end space-x-2">
            <Button
              className="rounded-md"
              onClick={handleClickCheckClaim}
              disabled={disabledCheck}
              loading={loading}
              type="primary"
            >
              Check Claim
            </Button>
            <Button
              className="rounded-md"
              onClick={handleClickExportClaimed}
              loading={loading}
              disabled={csvRowsClaimed.length === 0}
            >
              Export Claimed
            </Button>
            <Button
              className="rounded-md"
              onClick={handleClickExportUnclaim}
              loading={loading}
              disabled={csvRowsUnclaim.length === 0}
            >
              Export Unclaim
            </Button>
            <Button
              className="rounded-md"
              onClick={handleClickExportTotal}
              loading={loading}
              disabled={csvRowsTotal.length === 0}
            >
              Export Total
            </Button>
            <Button
              className="rounded-md"
              onClick={handleNewClaim}
              loading={loading}
              disabled={csvRowsNewClaim.length === 0}
            >
              New Claim
            </Button>
          </div>
        </div>
        <Breadcrumb className="pl-px pb-1">
          <Breadcrumb.Item className="antd-breadcrumb-item" onClick={() => navigate('/')}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>NFT</Breadcrumb.Item>
        </Breadcrumb>
        <NftTable loading={loading} dataSource={nftTableDataSource} />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
};

export default React.memo(Page);
(self.webpackChunkcrab_plo_rewards=self.webpackChunkcrab_plo_rewards||[]).push([[807],{5395:function(e,t,n){var i;!function(r){"use strict";var s,o=1e6,a=1e6,c="[big.js] ",h=c+"Invalid ",u=h+"decimal places",l=c+"Division by zero",p={},d=void 0,f=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function E(e,t,n,i){var r=e.c;if(n===d&&(n=e.constructor.RM),0!==n&&1!==n&&2!==n&&3!==n)throw Error("[big.js] Invalid rounding mode");if(t<1)i=3===n&&(i||!!r[0])||0===t&&(1===n&&r[0]>=5||2===n&&(r[0]>5||5===r[0]&&(i||r[1]!==d))),r.length=1,i?(e.e=e.e-t+1,r[0]=1):r[0]=e.e=0;else if(t<r.length){if(i=1===n&&r[t]>=5||2===n&&(r[t]>5||5===r[t]&&(i||r[t+1]!==d||1&r[t-1]))||3===n&&(i||!!r[0]),r.length=t--,i)for(;++r[t]>9;)r[t]=0,t--||(++e.e,r.unshift(1));for(t=r.length;!r[--t];)r.pop()}return e}function v(e,t,n){var i=e.e,r=e.c.join(""),s=r.length;if(t)r=r.charAt(0)+(s>1?"."+r.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)r="0"+r;r="0."+r}else if(i>0)if(++i>s)for(i-=s;i--;)r+="0";else i<s&&(r=r.slice(0,i)+"."+r.slice(i));else s>1&&(r=r.charAt(0)+"."+r.slice(1));return e.s<0&&n?"-"+r:r}p.abs=function(){var e=new this.constructor(this);return e.s=1,e},p.cmp=function(e){var t,n=this,i=n.c,r=(e=new n.constructor(e)).c,s=n.s,o=e.s,a=n.e,c=e.e;if(!i[0]||!r[0])return i[0]?s:r[0]?-o:0;if(s!=o)return s;if(t=s<0,a!=c)return a>c^t?1:-1;for(o=(a=i.length)<(c=r.length)?a:c,s=-1;++s<o;)if(i[s]!=r[s])return i[s]>r[s]^t?1:-1;return a==c?0:a>c^t?1:-1},p.div=function(e){var t=this,n=t.constructor,i=t.c,r=(e=new n(e)).c,s=t.s==e.s?1:-1,a=n.DP;if(a!==~~a||a<0||a>o)throw Error(u);if(!r[0])throw Error(l);if(!i[0])return e.s=s,e.c=[e.e=0],e;var c,h,p,f,v,N=r.slice(),m=c=r.length,T=i.length,x=i.slice(0,c),A=x.length,k=e,_=k.c=[],I=0,D=a+(k.e=t.e-e.e)+1;for(k.s=s,s=D<0?0:D,N.unshift(0);A++<c;)x.push(0);do{for(p=0;p<10;p++){if(c!=(A=x.length))f=c>A?1:-1;else for(v=-1,f=0;++v<c;)if(r[v]!=x[v]){f=r[v]>x[v]?1:-1;break}if(!(f<0))break;for(h=A==c?r:N;A;){if(x[--A]<h[A]){for(v=A;v&&!x[--v];)x[v]=9;--x[v],x[A]+=10}x[A]-=h[A]}for(;!x[0];)x.shift()}_[I++]=f?p:++p,x[0]&&f?x[A]=i[m]||0:x=[i[m]]}while((m++<T||x[0]!==d)&&s--);return _[0]||1==I||(_.shift(),k.e--,D--),I>D&&E(k,D,n.RM,x[0]!==d),k},p.eq=function(e){return 0===this.cmp(e)},p.gt=function(e){return this.cmp(e)>0},p.gte=function(e){return this.cmp(e)>-1},p.lt=function(e){return this.cmp(e)<0},p.lte=function(e){return this.cmp(e)<1},p.minus=p.sub=function(e){var t,n,i,r,s=this,o=s.constructor,a=s.s,c=(e=new o(e)).s;if(a!=c)return e.s=-c,s.plus(e);var h=s.c.slice(),u=s.e,l=e.c,p=e.e;if(!h[0]||!l[0])return l[0]?e.s=-c:h[0]?e=new o(s):e.s=1,e;if(a=u-p){for((r=a<0)?(a=-a,i=h):(p=u,i=l),i.reverse(),c=a;c--;)i.push(0);i.reverse()}else for(n=((r=h.length<l.length)?h:l).length,a=c=0;c<n;c++)if(h[c]!=l[c]){r=h[c]<l[c];break}if(r&&(i=h,h=l,l=i,e.s=-e.s),(c=(n=l.length)-(t=h.length))>0)for(;c--;)h[t++]=0;for(c=t;n>a;){if(h[--n]<l[n]){for(t=n;t&&!h[--t];)h[t]=9;--h[t],h[n]+=10}h[n]-=l[n]}for(;0===h[--c];)h.pop();for(;0===h[0];)h.shift(),--p;return h[0]||(e.s=1,h=[p=0]),e.c=h,e.e=p,e},p.mod=function(e){var t,n=this,i=n.constructor,r=n.s,s=(e=new i(e)).s;if(!e.c[0])throw Error(l);return n.s=e.s=1,t=1==e.cmp(n),n.s=r,e.s=s,t?new i(n):(r=i.DP,s=i.RM,i.DP=i.RM=0,n=n.div(e),i.DP=r,i.RM=s,this.minus(n.times(e)))},p.plus=p.add=function(e){var t,n,i,r=this,s=r.constructor;if(e=new s(e),r.s!=e.s)return e.s=-e.s,r.minus(e);var o=r.e,a=r.c,c=e.e,h=e.c;if(!a[0]||!h[0])return h[0]||(a[0]?e=new s(r):e.s=r.s),e;if(a=a.slice(),t=o-c){for(t>0?(c=o,i=h):(t=-t,i=a),i.reverse();t--;)i.push(0);i.reverse()}for(a.length-h.length<0&&(i=h,h=a,a=i),t=h.length,n=0;t;a[t]%=10)n=(a[--t]=a[t]+h[t]+n)/10|0;for(n&&(a.unshift(n),++c),t=a.length;0===a[--t];)a.pop();return e.c=a,e.e=c,e},p.pow=function(e){var t=this,n=new t.constructor("1"),i=n,r=e<0;if(e!==~~e||e<-1e6||e>a)throw Error(h+"exponent");for(r&&(e=-e);1&e&&(i=i.times(t)),e>>=1;)t=t.times(t);return r?n.div(i):i},p.prec=function(e,t){if(e!==~~e||e<1||e>o)throw Error(h+"precision");return E(new this.constructor(this),e,t)},p.round=function(e,t){if(e===d)e=0;else if(e!==~~e||e<-o||e>o)throw Error(u);return E(new this.constructor(this),e+this.e+1,t)},p.sqrt=function(){var e,t,n,i=this,r=i.constructor,s=i.s,o=i.e,a=new r("0.5");if(!i.c[0])return new r(i);if(s<0)throw Error(c+"No square root");0===(s=Math.sqrt(i+""))||s===1/0?((t=i.c.join("")).length+o&1||(t+="0"),o=((o+1)/2|0)-(o<0||1&o),e=new r(((s=Math.sqrt(t))==1/0?"5e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+o)):e=new r(s+""),o=e.e+(r.DP+=4);do{n=e,e=a.times(n.plus(i.div(n)))}while(n.c.slice(0,o).join("")!==e.c.slice(0,o).join(""));return E(e,(r.DP-=4)+e.e+1,r.RM)},p.times=p.mul=function(e){var t,n=this,i=n.constructor,r=n.c,s=(e=new i(e)).c,o=r.length,a=s.length,c=n.e,h=e.e;if(e.s=n.s==e.s?1:-1,!r[0]||!s[0])return e.c=[e.e=0],e;for(e.e=c+h,o<a&&(t=r,r=s,s=t,h=o,o=a,a=h),t=new Array(h=o+a);h--;)t[h]=0;for(c=a;c--;){for(a=0,h=o+c;h>c;)a=t[h]+s[c]*r[h-c-1]+a,t[h--]=a%10,a=a/10|0;t[h]=a}for(a?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e},p.toExponential=function(e,t){var n=this,i=n.c[0];if(e!==d){if(e!==~~e||e<0||e>o)throw Error(u);for(n=E(new n.constructor(n),++e,t);n.c.length<e;)n.c.push(0)}return v(n,!0,!!i)},p.toFixed=function(e,t){var n=this,i=n.c[0];if(e!==d){if(e!==~~e||e<0||e>o)throw Error(u);for(e=e+(n=E(new n.constructor(n),e+n.e+1,t)).e+1;n.c.length<e;)n.c.push(0)}return v(n,!1,!!i)},p.toJSON=p.toString=function(){var e=this,t=e.constructor;return v(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])},p.toNumber=function(){var e=Number(v(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(c+"Imprecise conversion");return e},p.toPrecision=function(e,t){var n=this,i=n.constructor,r=n.c[0];if(e!==d){if(e!==~~e||e<1||e>o)throw Error(h+"precision");for(n=E(new i(n),e,t);n.c.length<e;)n.c.push(0)}return v(n,e<=n.e||n.e<=i.NE||n.e>=i.PE,!!r)},p.valueOf=function(){var e=this,t=e.constructor;if(!0===t.strict)throw Error(c+"valueOf disallowed");return v(e,e.e<=t.NE||e.e>=t.PE,!0)},s=function e(){function t(n){var i=this;if(!(i instanceof t))return n===d?e():new t(n);if(n instanceof t)i.s=n.s,i.e=n.e,i.c=n.c.slice();else{if("string"!==typeof n){if(!0===t.strict)throw TypeError(h+"number");n=0===n&&1/n<0?"-0":String(n)}!function(e,t){var n,i,r;if(!f.test(t))throw Error(h+"number");e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".",""));(i=t.search(/e/i))>0?(n<0&&(n=i),n+=+t.slice(i+1),t=t.substring(0,i)):n<0&&(n=t.length);for(r=t.length,i=0;i<r&&"0"==t.charAt(i);)++i;if(i==r)e.c=[e.e=0];else{for(;r>0&&"0"==t.charAt(--r););for(e.e=n-i-1,e.c=[],n=0;i<=r;)e.c[n++]=+t.charAt(i++)}}(i,n)}i.constructor=t}return t.prototype=p,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.strict=false,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}(),s.default=s.Big=s,void 0===(i=function(){return s}.call(t,n,t,e))||(e.exports=i)}()},7743:(e,t,n)=>{"use strict";n.d(t,{Ps:()=>z});var i=n(9388);function r(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(s)){if("number"===typeof o.index||r(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,h=t.column+a,u=`${e.name}:${o}:${h}\n`,l=i.split(/\r\n|[\n\r]/g),p=l[r];if(p.length>120){const e=Math.floor(h/80),t=h%80,n=[];for(let i=0;i<p.length;i+=80)n.push(p.slice(i,i+80));return u+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return u+c([[o-1+" |",l[r-1]],[`${o} |`,p],["|","^".padStart(h)],[`${o+1} |`,l[r+1]]])}function c(e){const t=e.filter((e=>{let[t,n]=e;return void 0!==n})),n=Math.max(...t.map((e=>{let[t]=e;return t.length})));return t.map((e=>{let[t,i]=e;return t.padStart(n)+(i?" "+i:"")})).join("\n")}class h extends Error{constructor(e){for(var t,n,i,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];const{nodes:c,source:l,positions:p,path:d,originalError:f,extensions:E}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(s);super(e),this.name="GraphQLError",this.path=null!==d&&void 0!==d?d:void 0,this.originalError=null!==f&&void 0!==f?f:void 0,this.nodes=u(Array.isArray(c)?c:c?[c]:void 0);const v=u(null===(t=this.nodes)||void 0===t?void 0:t.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!==l&&void 0!==l?l:null===v||void 0===v||null===(n=v[0])||void 0===n?void 0:n.source,this.positions=null!==p&&void 0!==p?p:null===v||void 0===v?void 0:v.map((e=>e.start)),this.locations=p&&l?p.map((e=>o(l,e))):null===v||void 0===v?void 0:v.map((e=>o(e.source,e.start)));const N="object"==typeof(m=null===f||void 0===f?void 0:f.extensions)&&null!==m?null===f||void 0===f?void 0:f.extensions:void 0;var m;this.extensions=null!==(i=null!==E&&void 0!==E?E:N)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!==f&&void 0!==f&&f.stack?Object.defineProperty(this,"stack",{value:f.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function u(e){return void 0===e||0===e.length?void 0:e}function l(e,t,n){return new h(`Syntax Error: ${n}`,void 0,e,[t])}var p=n(365);let d;!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(d||(d={}));var f=n(3208),E=n(7810),v=n(610);let N;!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(N||(N={}));class m{constructor(e){const t=new p.WU(N.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==N.EOF)do{if(e.next)e=e.next;else{const t=D(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===N.COMMENT);return e}}function T(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function x(e,t){return A(e.charCodeAt(t))&&k(e.charCodeAt(t+1))}function A(e){return e>=55296&&e<=56319}function k(e){return e>=56320&&e<=57343}function _(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return N.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function I(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new p.WU(t,n,i,s,o,r)}function D(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const t=n.charCodeAt(r);switch(t){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===n.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return O(e,r);case 33:return I(e,N.BANG,r,r+1);case 36:return I(e,N.DOLLAR,r,r+1);case 38:return I(e,N.AMP,r,r+1);case 40:return I(e,N.PAREN_L,r,r+1);case 41:return I(e,N.PAREN_R,r,r+1);case 46:if(46===n.charCodeAt(r+1)&&46===n.charCodeAt(r+2))return I(e,N.SPREAD,r,r+3);break;case 58:return I(e,N.COLON,r,r+1);case 61:return I(e,N.EQUALS,r,r+1);case 64:return I(e,N.AT,r,r+1);case 91:return I(e,N.BRACKET_L,r,r+1);case 93:return I(e,N.BRACKET_R,r,r+1);case 123:return I(e,N.BRACE_L,r,r+1);case 124:return I(e,N.PIPE,r,r+1);case 125:return I(e,N.BRACE_R,r,r+1);case 34:return 34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)?F(e,r):C(e,r)}if((0,v.X1)(t)||45===t)return y(e,r,t);if((0,v.LQ)(t))return P(e,r);throw l(e.source,r,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":T(t)||x(n,r)?`Unexpected character: ${_(e,r)}.`:`Invalid character: ${_(e,r)}.`)}return I(e,N.EOF,i,i)}function O(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(10===e||13===e)break;if(T(e))++r;else{if(!x(n,r))break;r+=2}}return I(e,N.COMMENT,t,r,n.slice(t+1,r))}function y(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(45===s&&(s=i.charCodeAt(++r)),48===s){if(s=i.charCodeAt(++r),(0,v.X1)(s))throw l(e.source,r,`Invalid number, unexpected digit after 0: ${_(e,r)}.`)}else r=g(e,r,s),s=i.charCodeAt(r);if(46===s&&(o=!0,s=i.charCodeAt(++r),r=g(e,r,s),s=i.charCodeAt(r)),69!==s&&101!==s||(o=!0,s=i.charCodeAt(++r),43!==s&&45!==s||(s=i.charCodeAt(++r)),r=g(e,r,s),s=i.charCodeAt(r)),46===s||(0,v.LQ)(s))throw l(e.source,r,`Invalid number, expected digit but got: ${_(e,r)}.`);return I(e,o?N.FLOAT:N.INT,t,r,i.slice(t,r))}function g(e,t,n){if(!(0,v.X1)(n))throw l(e.source,t,`Invalid number, expected digit but got: ${_(e,t)}.`);const i=e.source.body;let r=t+1;for(;(0,v.X1)(i.charCodeAt(r));)++r;return r}function C(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const i=n.charCodeAt(r);if(34===i)return o+=n.slice(s,r),I(e,N.STRING,t,r+1,o);if(92!==i){if(10===i||13===i)break;if(T(i))++r;else{if(!x(n,r))throw l(e.source,r,`Invalid character within String: ${_(e,r)}.`);r+=2}}else{o+=n.slice(s,r);const t=117===n.charCodeAt(r+1)?123===n.charCodeAt(r+2)?w(e,r):R(e,r):b(e,r);o+=t.value,r+=t.size,s=r}}throw l(e.source,r,"Unterminated string.")}function w(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const e=n.charCodeAt(t+r++);if(125===e){if(r<5||!T(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|L(e),i<0)break}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function R(e,t){const n=e.source.body,i=S(n,t+2);if(T(i))return{value:String.fromCodePoint(i),size:6};if(A(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=S(n,t+8);if(k(e))return{value:String.fromCodePoint(i,e),size:12}}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function S(e,t){return L(e.charCodeAt(t))<<12|L(e.charCodeAt(t+1))<<8|L(e.charCodeAt(t+2))<<4|L(e.charCodeAt(t+3))}function L(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function b(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw l(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function F(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<i;){const i=n.charCodeAt(s);if(34===i&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const i=I(e,N.BLOCK_STRING,t,s+3,(0,E.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=r,i}if(92!==i||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==i&&13!==i)if(T(i))++s;else{if(!x(n,s))throw l(e.source,s,`Invalid character within String: ${_(e,s)}.`);s+=2}else a+=n.slice(o,s),c.push(a),13===i&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,r=s;else a+=n.slice(o,s),o=s+1,s+=4}throw l(e.source,s,"Unterminated string.")}function P(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(!(0,v.HQ)(e))break;++r}return I(e,N.NAME,t,r,n.slice(t,r))}var M=n(5551);class U{constructor(e,t){const n=(0,M.T)(e)?e:new M.H(e);this._lexer=new m(n),this._options=t}parseName(){const e=this.expectToken(N.NAME);return this.node(e,{kind:f.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:f.h.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF)})}parseDefinition(){if(this.peek(N.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===N.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw l(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(N.BRACE_L))return this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:p.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(N.NAME)&&(n=this.parseName()),this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(N.NAME);switch(e.value){case"query":return p.ku.QUERY;case"mutation":return p.ku.MUTATION;case"subscription":return p.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:f.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(N.DOLLAR),this.node(e,{kind:f.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:f.h.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R)})}parseSelection(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(N.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:f.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(N.PAREN_L,t,N.PAREN_R)}parseArgument(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this._lexer.token,n=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:f.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(N.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(N.NAME)?this.node(e,{kind:f.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:f.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;const t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)?this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case N.BRACKET_L:return this.parseList(e);case N.BRACE_L:return this.parseObject(e);case N.INT:return this._lexer.advance(),this.node(t,{kind:f.h.INT,value:t.value});case N.FLOAT:return this._lexer.advance(),this.node(t,{kind:f.h.FLOAT,value:t.value});case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:f.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:f.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:f.h.NULL});default:return this.node(t,{kind:f.h.ENUM,value:t.value})}case N.DOLLAR:if(e){if(this.expectToken(N.DOLLAR),this._lexer.token.kind===N.NAME){const e=this._lexer.token.value;throw l(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:f.h.STRING,value:e.value,block:e.kind===N.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:f.h.LIST,values:this.any(N.BRACKET_L,(()=>this.parseValueLiteral(e)),N.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:f.h.OBJECT,fields:this.any(N.BRACE_L,(()=>this.parseObjectField(e)),N.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:f.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(N.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(N.AT),this.node(t,{kind:f.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(N.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(N.BRACKET_R),t=this.node(e,{kind:f.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(N.BANG)?this.node(e,{kind:f.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:f.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return this.node(e,{kind:f.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(N.COLON);const n=this.parseNamedType();return this.node(e,{kind:f.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:f.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(N.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(N.COLON);const r=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:f.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s})}parseArgumentDefs(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(N.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(N.EQUALS)&&(r=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:f.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:f.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:f.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(N.EQUALS)?this.delimitedMany(N.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:f.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw l(this._lexer.source,this._lexer.token.start,`${B(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===N.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:f.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:f.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);const n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:f.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s})}parseDirectiveLocations(){return this.delimitedMany(N.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(d,t.value))return t;throw this.unexpected(e)}node(e,t){var n;return!0!==(null===(n=this._options)||void 0===n?void 0:n.noLocation)&&(t.loc=new p.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw l(this._lexer.source,t.start,`Expected ${K(e)}, found ${B(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this._lexer.advance(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==N.NAME||t.value!==e)throw l(this._lexer.source,t.start,`Expected "${e}", found ${B(t)}.`);this._lexer.advance()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===N.NAME&&t.value===e&&(this._lexer.advance(),!0)}unexpected(e){const t=null!==e&&void 0!==e?e:this._lexer.token;return l(this._lexer.source,t.start,`Unexpected ${B(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}}function B(e){const t=e.value;return K(e.kind)+(null!=t?` "${t}"`:"")}function K(e){return function(e){return e===N.BANG||e===N.DOLLAR||e===N.AMP||e===N.PAREN_L||e===N.PAREN_R||e===N.SPREAD||e===N.COLON||e===N.EQUALS||e===N.AT||e===N.BRACKET_L||e===N.BRACKET_R||e===N.BRACE_L||e===N.PIPE||e===N.BRACE_R}(e)?`"${e}"`:e}var V=new Map,G=new Map,$=!0,j=!1;function Y(e){return e.replace(/[\s,]+/g," ").trim()}function q(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=Y((o=e.loc).source.body.substring(o.start,o.end)),s=G.get(i);s&&!s.has(r)?$&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||G.set(i,s=new Set),s.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var o})),(0,i.pi)((0,i.pi)({},e),{definitions:n})}function Q(e){var t=Y(e);if(!V.has(t)){var n=function(e,t){return new U(e,t).parseDocument()}(e,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");V.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"===typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(q(n)))}return V.get(t)}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"===typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),Q(i)}var J,X=z,H=function(){V.clear(),G.clear()},W=function(){$=!1},Z=function(){j=!0},ee=function(){j=!1};(J=z||(z={})).gql=X,J.resetCaches=H,J.disableFragmentWarnings=W,J.enableExperimentalFragmentVariables=Z,J.disableExperimentalFragmentVariables=ee,z.default=z}}]);
//# sourceMappingURL=807.45558b2c.chunk.js.map
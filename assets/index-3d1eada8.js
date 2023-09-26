var Sb=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var g9=Sb((on,an)=>{function Eb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x1={exports:{}},kc={},y1={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Tb=Symbol.for("react.portal"),Ab=Symbol.for("react.fragment"),Nb=Symbol.for("react.strict_mode"),jb=Symbol.for("react.profiler"),Ob=Symbol.for("react.provider"),Db=Symbol.for("react.context"),_b=Symbol.for("react.forward_ref"),Pb=Symbol.for("react.suspense"),Mb=Symbol.for("react.memo"),Rb=Symbol.for("react.lazy"),oh=Symbol.iterator;function Ib(e){return e===null||typeof e!="object"?null:(e=oh&&e[oh]||e["@@iterator"],typeof e=="function"?e:null)}var v1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w1=Object.assign,b1={};function Lo(e,t,n){this.props=e,this.context=t,this.refs=b1,this.updater=n||v1}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k1(){}k1.prototype=Lo.prototype;function lp(e,t,n){this.props=e,this.context=t,this.refs=b1,this.updater=n||v1}var cp=lp.prototype=new k1;cp.constructor=lp;w1(cp,Lo.prototype);cp.isPureReactComponent=!0;var ah=Array.isArray,C1=Object.prototype.hasOwnProperty,up={current:null},S1={key:!0,ref:!0,__self:!0,__source:!0};function E1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)C1.call(t,r)&&!S1.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:xs,type:e,key:o,ref:a,props:i,_owner:up.current}}function $b(e,t){return{$$typeof:xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs}function Lb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sh=/\/+/g;function wu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lb(""+e.key):t.toString(36)}function ll(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xs:case Tb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wu(a,0):r,ah(i)?(n="",e!=null&&(n=e.replace(sh,"$&/")+"/"),ll(i,t,n,"",function(c){return c})):i!=null&&(fp(i)&&(i=$b(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ah(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+wu(o,s);a+=ll(o,t,n,l,i)}else if(l=Ib(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+wu(o,s++),a+=ll(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _s(e,t,n){if(e==null)return e;var r=[],i=0;return ll(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Fb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Bt={current:null},cl={transition:null},zb={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:up};Te.Children={map:_s,forEach:function(e,t,n){_s(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _s(e,function(){t++}),t},toArray:function(e){return _s(e,function(t){return t})||[]},only:function(e){if(!fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=Lo;Te.Fragment=Ab;Te.Profiler=jb;Te.PureComponent=lp;Te.StrictMode=Nb;Te.Suspense=Pb;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb;Te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=up.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)C1.call(t,l)&&!S1.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:xs,type:e.type,key:i,ref:o,props:r,_owner:a}};Te.createContext=function(e){return e={$$typeof:Db,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ob,_context:e},e.Consumer=e};Te.createElement=E1;Te.createFactory=function(e){var t=E1.bind(null,e);return t.type=e,t};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:_b,render:e}};Te.isValidElement=fp;Te.lazy=function(e){return{$$typeof:Rb,_payload:{_status:-1,_result:e},_init:Fb}};Te.memo=function(e,t){return{$$typeof:Mb,type:e,compare:t===void 0?null:t}};Te.startTransition=function(e){var t=cl.transition;cl.transition={};try{e()}finally{cl.transition=t}};Te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Te.useCallback=function(e,t){return Bt.current.useCallback(e,t)};Te.useContext=function(e){return Bt.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return Bt.current.useDeferredValue(e)};Te.useEffect=function(e,t){return Bt.current.useEffect(e,t)};Te.useId=function(){return Bt.current.useId()};Te.useImperativeHandle=function(e,t,n){return Bt.current.useImperativeHandle(e,t,n)};Te.useInsertionEffect=function(e,t){return Bt.current.useInsertionEffect(e,t)};Te.useLayoutEffect=function(e,t){return Bt.current.useLayoutEffect(e,t)};Te.useMemo=function(e,t){return Bt.current.useMemo(e,t)};Te.useReducer=function(e,t,n){return Bt.current.useReducer(e,t,n)};Te.useRef=function(e){return Bt.current.useRef(e)};Te.useState=function(e){return Bt.current.useState(e)};Te.useSyncExternalStore=function(e,t,n){return Bt.current.useSyncExternalStore(e,t,n)};Te.useTransition=function(){return Bt.current.useTransition()};Te.version="18.2.0";y1.exports=Te;var k=y1.exports;const me=Di(k),_f=Eb({__proto__:null,default:me},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bb=k,Ub=Symbol.for("react.element"),Wb=Symbol.for("react.fragment"),Hb=Object.prototype.hasOwnProperty,Vb=Bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yb={key:!0,ref:!0,__self:!0,__source:!0};function T1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hb.call(t,r)&&!Yb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ub,type:e,key:o,ref:a,props:i,_owner:Vb.current}}kc.Fragment=Wb;kc.jsx=T1;kc.jsxs=T1;x1.exports=kc;var f=x1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(this,arguments)}var Dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dr||(Dr={}));const lh="popstate";function Xb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Pf("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pl(i)}return Kb(t,n,null,e)}function dt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qb(){return Math.random().toString(36).substr(2,8)}function ch(e,t){return{usr:e.state,key:e.key,idx:t}}function Pf(e,t,n,r){return n===void 0&&(n=null),Ba({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fo(t):t,{state:n,key:t&&t.key||r||Qb()})}function Pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Dr.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Ba({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=Dr.Pop;let C=u(),h=C==null?null:C-c;c=C,l&&l({action:s,location:x.location,delta:h})}function p(C,h){s=Dr.Push;let m=Pf(x.location,C,h);n&&n(m,C),c=u()+1;let v=ch(m,c),T=x.createHref(m);try{a.pushState(v,"",T)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(T)}o&&l&&l({action:s,location:x.location,delta:1})}function g(C,h){s=Dr.Replace;let m=Pf(x.location,C,h);n&&n(m,C),c=u();let v=ch(m,c),T=x.createHref(m);a.replaceState(v,"",T),o&&l&&l({action:s,location:x.location,delta:0})}function y(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Pl(C);return dt(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let x={get action(){return s},get location(){return e(i,a)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lh,d),l=C,()=>{i.removeEventListener(lh,d),l=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let h=y(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(C){return a.go(C)}};return x}var uh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uh||(uh={}));function Gb(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fo(t):t,i=pp(r.pathname||"/",n);if(i==null)return null;let o=A1(e);qb(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=a2(o[s],c2(i));return a}function A1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(dt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ir([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(dt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),A1(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:i2(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of N1(o.path))i(o,a,l)}),t}function N1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=N1(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function qb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:o2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jb=/^:\w+$/,Zb=3,e2=2,t2=1,n2=10,r2=-2,fh=e=>e==="*";function i2(e,t){let n=e.split("/"),r=n.length;return n.some(fh)&&(r+=r2),t&&(r+=e2),n.filter(i=>!fh(i)).reduce((i,o)=>i+(Jb.test(o)?Zb:o===""?t2:n2),r)}function o2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function a2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=s2({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=s.route;o.push({params:r,pathname:Ir([i,u.pathname]),pathnameBase:p2(Ir([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Ir([i,u.pathnameBase]))}return o}function s2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=l2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let p=s[d]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=u2(s[d]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function l2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function c2(e){try{return decodeURI(e)}catch(t){return dp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function u2(e,t){try{return decodeURIComponent(e)}catch(n){return dp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function pp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function f2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fo(e):e;return{pathname:n?n.startsWith("/")?n:d2(n,t):t,search:m2(r),hash:h2(i)}}function d2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function O1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fo(e):(i=Ba({},e),dt(!i.pathname||!i.pathname.includes("?"),bu("?","pathname","search",i)),dt(!i.pathname||!i.pathname.includes("#"),bu("#","pathname","hash",i)),dt(!i.search||!i.search.includes("#"),bu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=f2(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ir=e=>e.join("/").replace(/\/\/+/g,"/"),p2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,h2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function g2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const D1=["post","put","patch","delete"];new Set(D1);const x2=["get",...D1];new Set(x2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}const mp=k.createContext(null),_1=k.createContext(null),_i=k.createContext(null),Cc=k.createContext(null),xr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),P1=k.createContext(null);function y2(e,t){let{relative:n}=t===void 0?{}:t;ys()||dt(!1);let{basename:r,navigator:i}=k.useContext(_i),{hash:o,pathname:a,search:s}=gp(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Ir([r,a])),i.createHref({pathname:l,search:s,hash:o})}function ys(){return k.useContext(Cc)!=null}function zo(){return ys()||dt(!1),k.useContext(Cc).location}function M1(e){k.useContext(_i).static||k.useLayoutEffect(e)}function hp(){let{isDataRoute:e}=k.useContext(xr);return e?P2():v2()}function v2(){ys()||dt(!1);let e=k.useContext(mp),{basename:t,navigator:n}=k.useContext(_i),{matches:r}=k.useContext(xr),{pathname:i}=zo(),o=JSON.stringify(j1(r).map(l=>l.pathnameBase)),a=k.useRef(!1);return M1(()=>{a.current=!0}),k.useCallback(function(l,c){if(c===void 0&&(c={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let u=O1(l,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Ir([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,o,i,e])}const w2=k.createContext(null);function b2(e){let t=k.useContext(xr).outlet;return t&&k.createElement(w2.Provider,{value:e},t)}function R1(){let{matches:e}=k.useContext(xr),t=e[e.length-1];return t?t.params:{}}function gp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(xr),{pathname:i}=zo(),o=JSON.stringify(j1(r).map(a=>a.pathnameBase));return k.useMemo(()=>O1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function k2(e,t){return C2(e,t)}function C2(e,t,n){ys()||dt(!1);let{navigator:r}=k.useContext(_i),{matches:i}=k.useContext(xr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=zo(),c;if(t){var u;let x=typeof t=="string"?Fo(t):t;s==="/"||(u=x.pathname)!=null&&u.startsWith(s)||dt(!1),c=x}else c=l;let d=c.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",g=Gb(e,{pathname:p}),y=N2(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Ir([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Ir([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?k.createElement(Cc.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Dr.Pop}},y):y}function S2(){let e=_2(),t=g2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,o)}const E2=k.createElement(S2,null);class T2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(xr.Provider,{value:this.props.routeContext},k.createElement(P1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A2(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(xr.Provider,{value:t},r)}function N2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||dt(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,c)=>{let u=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||E2);let p=t.concat(o.slice(0,c+1)),g=()=>{let y;return u?y=d:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,k.createElement(A2,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?k.createElement(T2,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var I1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I1||{}),Rl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rl||{});function j2(e){let t=k.useContext(mp);return t||dt(!1),t}function O2(e){let t=k.useContext(_1);return t||dt(!1),t}function D2(e){let t=k.useContext(xr);return t||dt(!1),t}function $1(e){let t=D2(),n=t.matches[t.matches.length-1];return n.route.id||dt(!1),n.route.id}function _2(){var e;let t=k.useContext(P1),n=O2(Rl.UseRouteError),r=$1(Rl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function P2(){let{router:e}=j2(I1.UseNavigateStable),t=$1(Rl.UseNavigateStable),n=k.useRef(!1);return M1(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ml({fromRouteId:t},o)))},[e,t])}function M2(e){return b2(e.context)}function Zt(e){dt(!1)}function R2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:o,static:a=!1}=e;ys()&&dt(!1);let s=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Fo(r));let{pathname:c="/",search:u="",hash:d="",state:p=null,key:g="default"}=r,y=k.useMemo(()=>{let x=pp(c,s);return x==null?null:{location:{pathname:x,search:u,hash:d,state:p,key:g},navigationType:i}},[s,c,u,d,p,g,i]);return y==null?null:k.createElement(_i.Provider,{value:l},k.createElement(Cc.Provider,{children:n,value:y}))}function I2(e){let{children:t,location:n}=e;return k2(Mf(t),n)}new Promise(()=>{});function Mf(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Mf(r.props.children,o));return}r.type!==Zt&&dt(!1),!r.props.index||!r.props.children||dt(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Mf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}function L1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function L2(e,t){return e.button===0&&(!t||t==="_self")&&!$2(e)}function Rf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function F2(e,t){let n=Rf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const z2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],B2=["aria-current","caseSensitive","className","end","style","to","children"],U2="startTransition",dh=_f[U2];function W2(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=Xb({window:i,v5Compat:!0}));let a=o.current,[s,l]=k.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=k.useCallback(d=>{c&&dh?dh(()=>l(d)):l(d)},[l,c]);return k.useLayoutEffect(()=>a.listen(u),[a,u]),k.createElement(R2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const H2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pi=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:u}=t,d=L1(t,z2),{basename:p}=k.useContext(_i),g,y=!1;if(typeof c=="string"&&V2.test(c)&&(g=c,H2))try{let m=new URL(window.location.href),v=c.startsWith("//")?new URL(m.protocol+c):new URL(c),T=pp(v.pathname,p);v.origin===m.origin&&T!=null?c=T+v.search+v.hash:y=!0}catch{}let x=y2(c,{relative:i}),C=Y2(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:i});function h(m){r&&r(m),m.defaultPrevented||C(m)}return k.createElement("a",Il({},d,{href:g||x,onClick:y||o?r:h,ref:n,target:l}))}),vs=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:c}=t,u=L1(t,B2),d=gp(l,{relative:u.relative}),p=zo(),g=k.useContext(_1),{navigator:y}=k.useContext(_i),x=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,C=p.pathname,h=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(C=C.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());let m=C===x||!a&&C.startsWith(x)&&C.charAt(x.length)==="/",v=h!=null&&(h===x||!a&&h.startsWith(x)&&h.charAt(x.length)==="/"),T=m?r:void 0,O;typeof o=="function"?O=o({isActive:m,isPending:v}):O=[o,m?"active":null,v?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:m,isPending:v}):s;return k.createElement(Pi,Il({},u,{"aria-current":T,className:O,ref:n,style:_,to:l}),typeof c=="function"?c({isActive:m,isPending:v}):c)});var ph;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ph||(ph={}));var mh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mh||(mh={}));function Y2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=hp(),l=zo(),c=gp(e,{relative:a});return k.useCallback(u=>{if(L2(u,n)){u.preventDefault();let d=r!==void 0?r:Pl(l)===Pl(c);s(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[l,s,c,r,i,n,e,o,a])}function xp(e){let t=k.useRef(Rf(e)),n=k.useRef(!1),r=zo(),i=k.useMemo(()=>F2(r.search,n.current?null:t.current),[r.search]),o=hp(),a=k.useCallback((s,l)=>{const c=Rf(typeof s=="function"?s(i):s);n.current=!0,o("?"+c,l)},[o,i]);return[i,a]}var If={},F1={exports:{}},fn={},z1={exports:{}},B1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var M=z.length;z.push($);e:for(;0<M;){var te=M-1>>>1,Y=z[te];if(0<i(Y,$))z[te]=$,z[M]=Y,M=te;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],M=z.pop();if(M!==$){z[0]=M;e:for(var te=0,Y=z.length,se=Y>>>1;te<se;){var le=2*(te+1)-1,ge=z[le],we=le+1,Ae=z[we];if(0>i(ge,M))we<Y&&0>i(Ae,ge)?(z[te]=Ae,z[we]=M,te=we):(z[te]=ge,z[le]=M,te=le);else if(we<Y&&0>i(Ae,M))z[te]=Ae,z[we]=M,te=we;else break e}}return $}function i(z,$){var M=z.sortIndex-$.sortIndex;return M!==0?M:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,p=3,g=!1,y=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=z)r(c),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(c)}}function T(z){if(x=!1,v(z),!y)if(n(l)!==null)y=!0,Ee(O);else{var $=n(c);$!==null&&Se(T,$.startTime-z)}}function O(z,$){y=!1,x&&(x=!1,h(F),F=-1),g=!0;var M=p;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||z&&!ye());){var te=d.callback;if(typeof te=="function"){d.callback=null,p=d.priorityLevel;var Y=te(d.expirationTime<=$);$=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),v($)}else r(l);d=n(l)}if(d!==null)var se=!0;else{var le=n(c);le!==null&&Se(T,le.startTime-$),se=!1}return se}finally{d=null,p=M,g=!1}}var _=!1,E=null,F=-1,ee=5,B=-1;function ye(){return!(e.unstable_now()-B<ee)}function V(){if(E!==null){var z=e.unstable_now();B=z;var $=!0;try{$=E(!0,z)}finally{$?W():(_=!1,E=null)}}else _=!1}var W;if(typeof m=="function")W=function(){m(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=V,W=function(){de.postMessage(null)}}else W=function(){C(V,0)};function Ee(z){E=z,_||(_=!0,W())}function Se(z,$){F=C(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ee(O))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var M=p;p=$;try{return z()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=p;p=z;try{return $()}finally{p=M}},e.unstable_scheduleCallback=function(z,$,M){var te=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?te+M:te):M=te,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=M+Y,z={id:u++,callback:$,priorityLevel:z,startTime:M,expirationTime:Y,sortIndex:-1},M>te?(z.sortIndex=M,t(c,z),n(l)===null&&z===n(c)&&(x?(h(F),F=-1):x=!0,Se(T,M-te))):(z.sortIndex=Y,t(l,z),y||g||(y=!0,Ee(O))),z},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(z){var $=p;return function(){var M=p;p=$;try{return z.apply(this,arguments)}finally{p=M}}}})(B1);z1.exports=B1;var X2=z1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=k,cn=X2;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W1=new Set,Ua={};function Mi(e,t){Co(e,t),Co(e+"Capture",t)}function Co(e,t){for(Ua[e]=t,e=0;e<t.length;e++)W1.add(t[e])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,Q2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},gh={};function K2(e){return $f.call(gh,e)?!0:$f.call(hh,e)?!1:Q2.test(e)?gh[e]=!0:(hh[e]=!0,!1)}function G2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q2(e,t,n,r){if(t===null||typeof t>"u"||G2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ut(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yp,vp);At[t]=new Ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yp,vp);At[t]=new Ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yp,vp);At[t]=new Ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Ut(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function wp(e,t,n,r){var i=At.hasOwnProperty(t)?At[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q2(t,n,i,r)&&(n=null),r||i===null?K2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yr=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Y1=Symbol.for("react.offscreen"),xh=Symbol.iterator;function ea(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Object.assign,ku;function xa(e){if(ku===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ku=t&&t[1]||""}return`
`+ku+e}var Cu=!1;function Su(e,t){if(!e||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function J2(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=Su(e.type,!1),e;case 11:return e=Su(e.type.render,!1),e;case 1:return e=Su(e.type,!0),e;default:return""}}function Bf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gi:return"Fragment";case Ki:return"Portal";case Lf:return"Profiler";case bp:return"StrictMode";case Ff:return"Suspense";case zf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case V1:return(e.displayName||"Context")+".Consumer";case H1:return(e._context.displayName||"Context")+".Provider";case kp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cp:return t=e.displayName||null,t!==null?t:Bf(e.type)||"Memo";case Er:t=e._payload,e=e._init;try{return Bf(e(t))}catch{}}return null}function Z2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(t);case 8:return t===bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ek(e){var t=X1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){e._valueTracker||(e._valueTracker=ek(e))}function Q1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uf(e,t){var n=t.checked;return rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function K1(e,t){t=t.checked,t!=null&&wp(e,"checked",t,!1)}function Wf(e,t){K1(e,t);var n=Xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hf(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hf(e,t,n){(t!=="number"||$l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ya=Array.isArray;function co(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return rt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(ya(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xr(n)}}function G1(e,t){var n=Xr(t.value),r=Xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function q1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?q1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,J1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tk=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(e){tk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ea[t]=Ea[e]})});function Z1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ea.hasOwnProperty(e)&&Ea[e]?(""+t).trim():t+"px"}function ex(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nk=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(e,t){if(t){if(nk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Qf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gf=null,uo=null,fo=null;function kh(e){if(e=ks(e)){if(typeof Gf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Nc(t),Gf(e.stateNode,e.type,t))}}function tx(e){uo?fo?fo.push(e):fo=[e]:uo=e}function nx(){if(uo){var e=uo,t=fo;if(fo=uo=null,kh(e),t)for(e=0;e<t.length;e++)kh(t[e])}}function rx(e,t){return e(t)}function ix(){}var Eu=!1;function ox(e,t,n){if(Eu)return e(t,n);Eu=!0;try{return rx(e,t,n)}finally{Eu=!1,(uo!==null||fo!==null)&&(ix(),nx())}}function Ha(e,t){var n=e.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var qf=!1;if(dr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){qf=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{qf=!1}function rk(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ta=!1,Ll=null,Fl=!1,Jf=null,ik={onError:function(e){Ta=!0,Ll=e}};function ok(e,t,n,r,i,o,a,s,l){Ta=!1,Ll=null,rk.apply(ik,arguments)}function ak(e,t,n,r,i,o,a,s,l){if(ok.apply(this,arguments),Ta){if(Ta){var c=Ll;Ta=!1,Ll=null}else throw Error(U(198));Fl||(Fl=!0,Jf=c)}}function Ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ax(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ch(e){if(Ri(e)!==e)throw Error(U(188))}function sk(e){var t=e.alternate;if(!t){if(t=Ri(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ch(i),e;if(o===r)return Ch(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function sx(e){return e=sk(e),e!==null?lx(e):null}function lx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lx(e);if(t!==null)return t;e=e.sibling}return null}var cx=cn.unstable_scheduleCallback,Sh=cn.unstable_cancelCallback,lk=cn.unstable_shouldYield,ck=cn.unstable_requestPaint,ot=cn.unstable_now,uk=cn.unstable_getCurrentPriorityLevel,Ep=cn.unstable_ImmediatePriority,ux=cn.unstable_UserBlockingPriority,zl=cn.unstable_NormalPriority,fk=cn.unstable_LowPriority,fx=cn.unstable_IdlePriority,Sc=null,Qn=null;function dk(e){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Sc,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:hk,pk=Math.log,mk=Math.LN2;function hk(e){return e>>>=0,e===0?32:31-(pk(e)/mk|0)|0}var Is=64,$s=4194304;function va(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=va(s):(o&=a,o!==0&&(r=va(o)))}else a=n&~i,a!==0?r=va(a):o!==0&&(r=va(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-In(t),i=1<<n,r|=e[n],t&=~i;return r}function gk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-In(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=gk(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Zf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dx(){var e=Is;return Is<<=1,!(Is&4194240)&&(Is=64),e}function Tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-In(t),e[t]=n}function yk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-In(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-In(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Fe=0;function px(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mx,Ap,hx,gx,xx,ed=!1,Ls=[],$r=null,Lr=null,Fr=null,Va=new Map,Ya=new Map,Nr=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(t.pointerId)}}function na(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ks(t),t!==null&&Ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wk(e,t,n,r,i){switch(t){case"focusin":return $r=na($r,e,t,n,r,i),!0;case"dragenter":return Lr=na(Lr,e,t,n,r,i),!0;case"mouseover":return Fr=na(Fr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Va.set(o,na(Va.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ya.set(o,na(Ya.get(o)||null,e,t,n,r,i)),!0}return!1}function yx(e){var t=fi(e.target);if(t!==null){var n=Ri(t);if(n!==null){if(t=n.tag,t===13){if(t=ax(n),t!==null){e.blockedOn=t,xx(e.priority,function(){hx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=td(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return t=ks(n),t!==null&&Ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Th(e,t,n){ul(e)&&n.delete(t)}function bk(){ed=!1,$r!==null&&ul($r)&&($r=null),Lr!==null&&ul(Lr)&&(Lr=null),Fr!==null&&ul(Fr)&&(Fr=null),Va.forEach(Th),Ya.forEach(Th)}function ra(e,t){e.blockedOn===t&&(e.blockedOn=null,ed||(ed=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,bk)))}function Xa(e){function t(i){return ra(i,e)}if(0<Ls.length){ra(Ls[0],e);for(var n=1;n<Ls.length;n++){var r=Ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&ra($r,e),Lr!==null&&ra(Lr,e),Fr!==null&&ra(Fr,e),Va.forEach(t),Ya.forEach(t),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)yx(n),n.blockedOn===null&&Nr.shift()}var po=yr.ReactCurrentBatchConfig,Ul=!0;function kk(e,t,n,r){var i=Fe,o=po.transition;po.transition=null;try{Fe=1,Np(e,t,n,r)}finally{Fe=i,po.transition=o}}function Ck(e,t,n,r){var i=Fe,o=po.transition;po.transition=null;try{Fe=4,Np(e,t,n,r)}finally{Fe=i,po.transition=o}}function Np(e,t,n,r){if(Ul){var i=td(e,t,n,r);if(i===null)Iu(e,t,r,Wl,n),Eh(e,r);else if(wk(i,e,t,n,r))r.stopPropagation();else if(Eh(e,r),t&4&&-1<vk.indexOf(e)){for(;i!==null;){var o=ks(i);if(o!==null&&mx(o),o=td(e,t,n,r),o===null&&Iu(e,t,r,Wl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Iu(e,t,r,null,n)}}var Wl=null;function td(e,t,n,r){if(Wl=null,e=Sp(r),e=fi(e),e!==null)if(t=Ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ax(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wl=e,null}function vx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uk()){case Ep:return 1;case ux:return 4;case zl:case fk:return 16;case fx:return 536870912;default:return 16}default:return 16}}var _r=null,jp=null,fl=null;function wx(){if(fl)return fl;var e,t=jp,n=t.length,r,i="value"in _r?_r.value:_r.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return fl=i.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fs(){return!0}function Ah(){return!1}function dn(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fs:Ah,this.isPropagationStopped=Ah,this}return rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),t}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=dn(Bo),bs=rt({},Bo,{view:0,detail:0}),Sk=dn(bs),Au,Nu,ia,Ec=rt({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Au=e.screenX-ia.screenX,Nu=e.screenY-ia.screenY):Nu=Au=0,ia=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),Nh=dn(Ec),Ek=rt({},Ec,{dataTransfer:0}),Tk=dn(Ek),Ak=rt({},bs,{relatedTarget:0}),ju=dn(Ak),Nk=rt({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),jk=dn(Nk),Ok=rt({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dk=dn(Ok),_k=rt({},Bo,{data:0}),jh=dn(_k),Pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ik(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rk[e])?!!t[e]:!1}function Dp(){return Ik}var $k=rt({},bs,{key:function(e){if(e.key){var t=Pk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dp,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lk=dn($k),Fk=rt({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=dn(Fk),zk=rt({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dp}),Bk=dn(zk),Uk=rt({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wk=dn(Uk),Hk=rt({},Ec,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vk=dn(Hk),Yk=[9,13,27,32],_p=dr&&"CompositionEvent"in window,Aa=null;dr&&"documentMode"in document&&(Aa=document.documentMode);var Xk=dr&&"TextEvent"in window&&!Aa,bx=dr&&(!_p||Aa&&8<Aa&&11>=Aa),Dh=String.fromCharCode(32),_h=!1;function kx(e,t){switch(e){case"keyup":return Yk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function Qk(e,t){switch(e){case"compositionend":return Cx(t);case"keypress":return t.which!==32?null:(_h=!0,Dh);case"textInput":return e=t.data,e===Dh&&_h?null:e;default:return null}}function Kk(e,t){if(qi)return e==="compositionend"||!_p&&kx(e,t)?(e=wx(),fl=jp=_r=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bx&&t.locale!=="ko"?null:t.data;default:return null}}var Gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gk[e.type]:t==="textarea"}function Sx(e,t,n,r){tx(r),t=Hl(t,"onChange"),0<t.length&&(n=new Op("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Na=null,Qa=null;function qk(e){Rx(e,0)}function Tc(e){var t=eo(e);if(Q1(t))return e}function Jk(e,t){if(e==="change")return t}var Ex=!1;if(dr){var Ou;if(dr){var Du="oninput"in document;if(!Du){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),Du=typeof Mh.oninput=="function"}Ou=Du}else Ou=!1;Ex=Ou&&(!document.documentMode||9<document.documentMode)}function Rh(){Na&&(Na.detachEvent("onpropertychange",Tx),Qa=Na=null)}function Tx(e){if(e.propertyName==="value"&&Tc(Qa)){var t=[];Sx(t,Qa,e,Sp(e)),ox(qk,t)}}function Zk(e,t,n){e==="focusin"?(Rh(),Na=t,Qa=n,Na.attachEvent("onpropertychange",Tx)):e==="focusout"&&Rh()}function e3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tc(Qa)}function t3(e,t){if(e==="click")return Tc(t)}function n3(e,t){if(e==="input"||e==="change")return Tc(t)}function r3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:r3;function Ka(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(t,i)||!Fn(e[i],t[i]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $h(e,t){var n=Ih(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Ax(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ax(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nx(){for(var e=window,t=$l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i3(e){var t=Nx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ax(n.ownerDocument.documentElement,n)){if(r!==null&&Pp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$h(n,o);var a=$h(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o3=dr&&"documentMode"in document&&11>=document.documentMode,Ji=null,nd=null,ja=null,rd=!1;function Lh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||Ji==null||Ji!==$l(r)||(r=Ji,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&Ka(ja,r)||(ja=r,r=Hl(nd,"onSelect"),0<r.length&&(t=new Op("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ji)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zi={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},_u={},jx={};dr&&(jx=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Ac(e){if(_u[e])return _u[e];if(!Zi[e])return e;var t=Zi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jx)return _u[e]=t[n];return e}var Ox=Ac("animationend"),Dx=Ac("animationiteration"),_x=Ac("animationstart"),Px=Ac("transitionend"),Mx=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(e,t){Mx.set(e,t),Mi(t,[e])}for(var Pu=0;Pu<Fh.length;Pu++){var Mu=Fh[Pu],a3=Mu.toLowerCase(),s3=Mu[0].toUpperCase()+Mu.slice(1);Gr(a3,"on"+s3)}Gr(Ox,"onAnimationEnd");Gr(Dx,"onAnimationIteration");Gr(_x,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(Px,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l3=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function zh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ak(r,t,void 0,e),e.currentTarget=null}function Rx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;zh(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;zh(i,s,c),o=l}}}if(Fl)throw e=Jf,Fl=!1,Jf=null,e}function He(e,t){var n=t[ld];n===void 0&&(n=t[ld]=new Set);var r=e+"__bubble";n.has(r)||(Ix(t,e,2,!1),n.add(r))}function Ru(e,t,n){var r=0;t&&(r|=4),Ix(n,e,r,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Ga(e){if(!e[Bs]){e[Bs]=!0,W1.forEach(function(n){n!=="selectionchange"&&(l3.has(n)||Ru(n,!1,e),Ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,Ru("selectionchange",!1,t))}}function Ix(e,t,n,r){switch(vx(t)){case 1:var i=kk;break;case 4:i=Ck;break;default:i=Np}n=i.bind(null,t,n,e),i=void 0,!qf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Iu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=fi(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}ox(function(){var c=o,u=Sp(n),d=[];e:{var p=Mx.get(e);if(p!==void 0){var g=Op,y=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":g=Lk;break;case"focusin":y="focus",g=ju;break;case"focusout":y="blur",g=ju;break;case"beforeblur":case"afterblur":g=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Tk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bk;break;case Ox:case Dx:case _x:g=jk;break;case Px:g=Wk;break;case"scroll":g=Sk;break;case"wheel":g=Vk;break;case"copy":case"cut":case"paste":g=Dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Oh}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=c,v;m!==null;){v=m;var T=v.stateNode;if(v.tag===5&&T!==null&&(v=T,h!==null&&(T=Ha(m,h),T!=null&&x.push(qa(m,T,v)))),C)break;m=m.return}0<x.length&&(p=new g(p,y,null,n,u),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Kf&&(y=n.relatedTarget||n.fromElement)&&(fi(y)||y[pr]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?fi(y):null,y!==null&&(C=Ri(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=Nh,T="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Oh,T="onPointerLeave",h="onPointerEnter",m="pointer"),C=g==null?p:eo(g),v=y==null?p:eo(y),p=new x(T,m+"leave",g,n,u),p.target=C,p.relatedTarget=v,T=null,fi(u)===c&&(x=new x(h,m+"enter",y,n,u),x.target=v,x.relatedTarget=C,T=x),C=T,g&&y)t:{for(x=g,h=y,m=0,v=x;v;v=Hi(v))m++;for(v=0,T=h;T;T=Hi(T))v++;for(;0<m-v;)x=Hi(x),m--;for(;0<v-m;)h=Hi(h),v--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=Hi(x),h=Hi(h)}x=null}else x=null;g!==null&&Bh(d,p,g,x,!1),y!==null&&C!==null&&Bh(d,C,y,x,!0)}}e:{if(p=c?eo(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=Jk;else if(Ph(p))if(Ex)O=n3;else{O=e3;var _=Zk}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=t3);if(O&&(O=O(e,c))){Sx(d,O,n,u);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Hf(p,"number",p.value)}switch(_=c?eo(c):window,e){case"focusin":(Ph(_)||_.contentEditable==="true")&&(Ji=_,nd=c,ja=null);break;case"focusout":ja=nd=Ji=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Lh(d,n,u);break;case"selectionchange":if(o3)break;case"keydown":case"keyup":Lh(d,n,u)}var E;if(_p)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else qi?kx(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(bx&&n.locale!=="ko"&&(qi||F!=="onCompositionStart"?F==="onCompositionEnd"&&qi&&(E=wx()):(_r=u,jp="value"in _r?_r.value:_r.textContent,qi=!0)),_=Hl(c,F),0<_.length&&(F=new jh(F,e,null,n,u),d.push({event:F,listeners:_}),E?F.data=E:(E=Cx(n),E!==null&&(F.data=E)))),(E=Xk?Qk(e,n):Kk(e,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(u=new jh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Rx(d,t)})}function qa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ha(e,n),o!=null&&r.unshift(qa(e,o,i)),o=Ha(e,t),o!=null&&r.push(qa(e,o,i))),e=e.return}return r}function Hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Ha(n,o),l!=null&&a.unshift(qa(n,l,s))):i||(l=Ha(n,o),l!=null&&a.push(qa(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var c3=/\r\n?/g,u3=/\u0000|\uFFFD/g;function Uh(e){return(typeof e=="string"?e:""+e).replace(c3,`
`).replace(u3,"")}function Us(e,t,n){if(t=Uh(t),Uh(e)!==t&&n)throw Error(U(425))}function Vl(){}var id=null,od=null;function ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,f3=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,d3=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(p3)}:sd;function p3(e){setTimeout(function(){throw e})}function $u(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xa(t)}function zr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Uo,Ja="__reactProps$"+Uo,pr="__reactContainer$"+Uo,ld="__reactEvents$"+Uo,m3="__reactListeners$"+Uo,h3="__reactHandles$"+Uo;function fi(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pr]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[Yn])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[Yn]||e[pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function eo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Nc(e){return e[Ja]||null}var cd=[],to=-1;function qr(e){return{current:e}}function Qe(e){0>to||(e.current=cd[to],cd[to]=null,to--)}function We(e,t){to++,cd[to]=e.current,e.current=t}var Qr={},Rt=qr(Qr),Xt=qr(!1),wi=Qr;function So(e,t){var n=e.type.contextTypes;if(!n)return Qr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(e){return e=e.childContextTypes,e!=null}function Yl(){Qe(Xt),Qe(Rt)}function Vh(e,t,n){if(Rt.current!==Qr)throw Error(U(168));We(Rt,t),We(Xt,n)}function $x(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Z2(e)||"Unknown",i));return rt({},n,r)}function Xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qr,wi=Rt.current,We(Rt,e),We(Xt,Xt.current),!0}function Yh(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=$x(e,t,wi),r.__reactInternalMemoizedMergedChildContext=e,Qe(Xt),Qe(Rt),We(Rt,e)):Qe(Xt),We(Xt,n)}var sr=null,jc=!1,Lu=!1;function Lx(e){sr===null?sr=[e]:sr.push(e)}function g3(e){jc=!0,Lx(e)}function Jr(){if(!Lu&&sr!==null){Lu=!0;var e=0,t=Fe;try{var n=sr;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sr=null,jc=!1}catch(i){throw sr!==null&&(sr=sr.slice(e+1)),cx(Ep,Jr),i}finally{Fe=t,Lu=!1}}return null}var no=[],ro=0,Ql=null,Kl=0,yn=[],vn=0,bi=null,lr=1,cr="";function ri(e,t){no[ro++]=Kl,no[ro++]=Ql,Ql=e,Kl=t}function Fx(e,t,n){yn[vn++]=lr,yn[vn++]=cr,yn[vn++]=bi,bi=e;var r=lr;e=cr;var i=32-In(r)-1;r&=~(1<<i),n+=1;var o=32-In(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,lr=1<<32-In(t)+i|n<<i|r,cr=o+e}else lr=1<<o|n<<i|r,cr=e}function Mp(e){e.return!==null&&(ri(e,1),Fx(e,1,0))}function Rp(e){for(;e===Ql;)Ql=no[--ro],no[ro]=null,Kl=no[--ro],no[ro]=null;for(;e===bi;)bi=yn[--vn],yn[vn]=null,cr=yn[--vn],yn[vn]=null,lr=yn[--vn],yn[vn]=null}var sn=null,rn=null,qe=!1,_n=null;function zx(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,rn=zr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,rn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bi!==null?{id:lr,overflow:cr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,rn=null,!0):!1;default:return!1}}function ud(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fd(e){if(qe){var t=rn;if(t){var n=t;if(!Xh(e,t)){if(ud(e))throw Error(U(418));t=zr(n.nextSibling);var r=sn;t&&Xh(e,t)?zx(r,n):(e.flags=e.flags&-4097|2,qe=!1,sn=e)}}else{if(ud(e))throw Error(U(418));e.flags=e.flags&-4097|2,qe=!1,sn=e}}}function Qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function Ws(e){if(e!==sn)return!1;if(!qe)return Qh(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ad(e.type,e.memoizedProps)),t&&(t=rn)){if(ud(e))throw Bx(),Error(U(418));for(;t;)zx(e,t),t=zr(t.nextSibling)}if(Qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rn=zr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rn=null}}else rn=sn?zr(e.stateNode.nextSibling):null;return!0}function Bx(){for(var e=rn;e;)e=zr(e.nextSibling)}function Eo(){rn=sn=null,qe=!1}function Ip(e){_n===null?_n=[e]:_n.push(e)}var x3=yr.ReactCurrentBatchConfig;function On(e,t){if(e&&e.defaultProps){t=rt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gl=qr(null),ql=null,io=null,$p=null;function Lp(){$p=io=ql=null}function Fp(e){var t=Gl.current;Qe(Gl),e._currentValue=t}function dd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mo(e,t){ql=e,$p=io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Vt=!0),e.firstContext=null)}function Cn(e){var t=e._currentValue;if($p!==e)if(e={context:e,memoizedValue:t,next:null},io===null){if(ql===null)throw Error(U(308));io=e,ql.dependencies={lanes:0,firstContext:e}}else io=io.next=e;return t}var di=null;function zp(e){di===null?di=[e]:di.push(e)}function Ux(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zp(t)):(n.next=i.next,i.next=n),t.interleaved=n,mr(e,r)}function mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Bp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,De&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mr(e,n)}return i=r.interleaved,i===null?(t.next=t,zp(r)):(t.next=i.next,i.next=t),r.interleaved=t,mr(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tp(e,n)}}function Kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jl(e,t,n,r){var i=e.updateQueue;Tr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,u=c=l=null,s=o;do{var p=s.lane,g=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=rt({},d,p);break e;case 2:Tr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ci|=a,e.lanes=a,e.memoizedState=d}}function Gh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Hx=new U1.Component().refs;function pd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oc={isMounted:function(e){return(e=e._reactInternals)?Ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zt(),i=Wr(e),o=ur(r,i);o.payload=t,n!=null&&(o.callback=n),t=Br(e,o,i),t!==null&&($n(t,e,i,r),pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zt(),i=Wr(e),o=ur(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Br(e,o,i),t!==null&&($n(t,e,i,r),pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),r=Wr(e),i=ur(n,r);i.tag=2,t!=null&&(i.callback=t),t=Br(e,i,r),t!==null&&($n(t,e,r,n),pl(t,e,r))}};function qh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ka(n,r)||!Ka(i,o):!0}function Vx(e,t,n){var r=!1,i=Qr,o=t.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(i=Qt(t)?wi:Rt.current,r=t.contextTypes,o=(r=r!=null)?So(e,i):Qr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oc.enqueueReplaceState(t,t.state,null)}function md(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hx,Bp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Cn(o):(o=Qt(t)?wi:Rt.current,i.context=So(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oc.enqueueReplaceState(i,i.state,null),Jl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Hx&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Hs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zh(e){var t=e._init;return t(e._payload)}function Yx(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Hr(h,m),h.index=0,h.sibling=null,h}function o(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,m,v,T){return m===null||m.tag!==6?(m=Vu(v,h.mode,T),m.return=h,m):(m=i(m,v),m.return=h,m)}function l(h,m,v,T){var O=v.type;return O===Gi?u(h,m,v.props.children,T,v.key):m!==null&&(m.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Zh(O)===m.type)?(T=i(m,v.props),T.ref=oa(h,m,v),T.return=h,T):(T=vl(v.type,v.key,v.props,null,h.mode,T),T.ref=oa(h,m,v),T.return=h,T)}function c(h,m,v,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Yu(v,h.mode,T),m.return=h,m):(m=i(m,v.children||[]),m.return=h,m)}function u(h,m,v,T,O){return m===null||m.tag!==7?(m=xi(v,h.mode,T,O),m.return=h,m):(m=i(m,v),m.return=h,m)}function d(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vu(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ps:return v=vl(m.type,m.key,m.props,null,h.mode,v),v.ref=oa(h,null,m),v.return=h,v;case Ki:return m=Yu(m,h.mode,v),m.return=h,m;case Er:var T=m._init;return d(h,T(m._payload),v)}if(ya(m)||ea(m))return m=xi(m,h.mode,v,null),m.return=h,m;Hs(h,m)}return null}function p(h,m,v,T){var O=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:s(h,m,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ps:return v.key===O?l(h,m,v,T):null;case Ki:return v.key===O?c(h,m,v,T):null;case Er:return O=v._init,p(h,m,O(v._payload),T)}if(ya(v)||ea(v))return O!==null?null:u(h,m,v,T,null);Hs(h,v)}return null}function g(h,m,v,T,O){if(typeof T=="string"&&T!==""||typeof T=="number")return h=h.get(v)||null,s(m,h,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ps:return h=h.get(T.key===null?v:T.key)||null,l(m,h,T,O);case Ki:return h=h.get(T.key===null?v:T.key)||null,c(m,h,T,O);case Er:var _=T._init;return g(h,m,v,_(T._payload),O)}if(ya(T)||ea(T))return h=h.get(v)||null,u(m,h,T,O,null);Hs(m,T)}return null}function y(h,m,v,T){for(var O=null,_=null,E=m,F=m=0,ee=null;E!==null&&F<v.length;F++){E.index>F?(ee=E,E=null):ee=E.sibling;var B=p(h,E,v[F],T);if(B===null){E===null&&(E=ee);break}e&&E&&B.alternate===null&&t(h,E),m=o(B,m,F),_===null?O=B:_.sibling=B,_=B,E=ee}if(F===v.length)return n(h,E),qe&&ri(h,F),O;if(E===null){for(;F<v.length;F++)E=d(h,v[F],T),E!==null&&(m=o(E,m,F),_===null?O=E:_.sibling=E,_=E);return qe&&ri(h,F),O}for(E=r(h,E);F<v.length;F++)ee=g(E,h,F,v[F],T),ee!==null&&(e&&ee.alternate!==null&&E.delete(ee.key===null?F:ee.key),m=o(ee,m,F),_===null?O=ee:_.sibling=ee,_=ee);return e&&E.forEach(function(ye){return t(h,ye)}),qe&&ri(h,F),O}function x(h,m,v,T){var O=ea(v);if(typeof O!="function")throw Error(U(150));if(v=O.call(v),v==null)throw Error(U(151));for(var _=O=null,E=m,F=m=0,ee=null,B=v.next();E!==null&&!B.done;F++,B=v.next()){E.index>F?(ee=E,E=null):ee=E.sibling;var ye=p(h,E,B.value,T);if(ye===null){E===null&&(E=ee);break}e&&E&&ye.alternate===null&&t(h,E),m=o(ye,m,F),_===null?O=ye:_.sibling=ye,_=ye,E=ee}if(B.done)return n(h,E),qe&&ri(h,F),O;if(E===null){for(;!B.done;F++,B=v.next())B=d(h,B.value,T),B!==null&&(m=o(B,m,F),_===null?O=B:_.sibling=B,_=B);return qe&&ri(h,F),O}for(E=r(h,E);!B.done;F++,B=v.next())B=g(E,h,F,B.value,T),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?F:B.key),m=o(B,m,F),_===null?O=B:_.sibling=B,_=B);return e&&E.forEach(function(V){return t(h,V)}),qe&&ri(h,F),O}function C(h,m,v,T){if(typeof v=="object"&&v!==null&&v.type===Gi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ps:e:{for(var O=v.key,_=m;_!==null;){if(_.key===O){if(O=v.type,O===Gi){if(_.tag===7){n(h,_.sibling),m=i(_,v.props.children),m.return=h,h=m;break e}}else if(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Zh(O)===_.type){n(h,_.sibling),m=i(_,v.props),m.ref=oa(h,_,v),m.return=h,h=m;break e}n(h,_);break}else t(h,_);_=_.sibling}v.type===Gi?(m=xi(v.props.children,h.mode,T,v.key),m.return=h,h=m):(T=vl(v.type,v.key,v.props,null,h.mode,T),T.ref=oa(h,m,v),T.return=h,h=T)}return a(h);case Ki:e:{for(_=v.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=i(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Yu(v,h.mode,T),m.return=h,h=m}return a(h);case Er:return _=v._init,C(h,m,_(v._payload),T)}if(ya(v))return y(h,m,v,T);if(ea(v))return x(h,m,v,T);Hs(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,v),m.return=h,h=m):(n(h,m),m=Vu(v,h.mode,T),m.return=h,h=m),a(h)):n(h,m)}return C}var To=Yx(!0),Xx=Yx(!1),Cs={},Kn=qr(Cs),Za=qr(Cs),es=qr(Cs);function pi(e){if(e===Cs)throw Error(U(174));return e}function Up(e,t){switch(We(es,t),We(Za,e),We(Kn,Cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yf(t,e)}Qe(Kn),We(Kn,t)}function Ao(){Qe(Kn),Qe(Za),Qe(es)}function Qx(e){pi(es.current);var t=pi(Kn.current),n=Yf(t,e.type);t!==n&&(We(Za,e),We(Kn,n))}function Wp(e){Za.current===e&&(Qe(Kn),Qe(Za))}var tt=qr(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fu=[];function Hp(){for(var e=0;e<Fu.length;e++)Fu[e]._workInProgressVersionPrimary=null;Fu.length=0}var ml=yr.ReactCurrentDispatcher,zu=yr.ReactCurrentBatchConfig,ki=0,nt=null,ht=null,yt=null,ec=!1,Oa=!1,ts=0,y3=0;function jt(){throw Error(U(321))}function Vp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function Yp(e,t,n,r,i,o){if(ki=o,nt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?k3:C3,e=n(r,i),Oa){o=0;do{if(Oa=!1,ts=0,25<=o)throw Error(U(301));o+=1,yt=ht=null,t.updateQueue=null,ml.current=S3,e=n(r,i)}while(Oa)}if(ml.current=tc,t=ht!==null&&ht.next!==null,ki=0,yt=ht=nt=null,ec=!1,t)throw Error(U(300));return e}function Xp(){var e=ts!==0;return ts=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?nt.memoizedState=yt=e:yt=yt.next=e,yt}function Sn(){if(ht===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var t=yt===null?nt.memoizedState:yt.next;if(t!==null)yt=t,ht=e;else{if(e===null)throw Error(U(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?nt.memoizedState=yt=e:yt=yt.next=e}return yt}function ns(e,t){return typeof t=="function"?t(e):t}function Bu(e){var t=Sn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=ht,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((ki&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,nt.lanes|=u,Ci|=u}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Fn(r,t.memoizedState)||(Vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,nt.lanes|=o,Ci|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uu(e){var t=Sn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Fn(o,t.memoizedState)||(Vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kx(){}function Gx(e,t){var n=nt,r=Sn(),i=t(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Vt=!0),r=r.queue,Qp(Zx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,rs(9,Jx.bind(null,n,r,i,t),void 0,null),wt===null)throw Error(U(349));ki&30||qx(n,t,i)}return i}function qx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jx(e,t,n,r){t.value=n,t.getSnapshot=r,ey(t)&&ty(e)}function Zx(e,t,n){return n(function(){ey(t)&&ty(e)})}function ey(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function ty(e){var t=mr(e,1);t!==null&&$n(t,e,1,-1)}function e0(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:e},t.queue=e,e=e.dispatch=b3.bind(null,nt,e),[t.memoizedState,e]}function rs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ny(){return Sn().memoizedState}function hl(e,t,n,r){var i=Un();nt.flags|=e,i.memoizedState=rs(1|t,n,void 0,r===void 0?null:r)}function Dc(e,t,n,r){var i=Sn();r=r===void 0?null:r;var o=void 0;if(ht!==null){var a=ht.memoizedState;if(o=a.destroy,r!==null&&Vp(r,a.deps)){i.memoizedState=rs(t,n,o,r);return}}nt.flags|=e,i.memoizedState=rs(1|t,n,o,r)}function t0(e,t){return hl(8390656,8,e,t)}function Qp(e,t){return Dc(2048,8,e,t)}function ry(e,t){return Dc(4,2,e,t)}function iy(e,t){return Dc(4,4,e,t)}function oy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ay(e,t,n){return n=n!=null?n.concat([e]):null,Dc(4,4,oy.bind(null,t,e),n)}function Kp(){}function sy(e,t){var n=Sn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ly(e,t){var n=Sn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cy(e,t,n){return ki&21?(Fn(n,t)||(n=dx(),nt.lanes|=n,Ci|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Vt=!0),e.memoizedState=n)}function v3(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=zu.transition;zu.transition={};try{e(!1),t()}finally{Fe=n,zu.transition=r}}function uy(){return Sn().memoizedState}function w3(e,t,n){var r=Wr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fy(e))dy(t,n);else if(n=Ux(e,t,n,r),n!==null){var i=zt();$n(n,e,r,i),py(n,t,r)}}function b3(e,t,n){var r=Wr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fy(e))dy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Fn(s,a)){var l=t.interleaved;l===null?(i.next=i,zp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ux(e,t,i,r),n!==null&&(i=zt(),$n(n,e,r,i),py(n,t,r))}}function fy(e){var t=e.alternate;return e===nt||t!==null&&t===nt}function dy(e,t){Oa=ec=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function py(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tp(e,n)}}var tc={readContext:Cn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},k3={readContext:Cn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:Cn,useEffect:t0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hl(4194308,4,oy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){return hl(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=w3.bind(null,nt,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:e0,useDebugValue:Kp,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=e0(!1),t=e[0];return e=v3.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=nt,i=Un();if(qe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),wt===null)throw Error(U(349));ki&30||qx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,t0(Zx.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,Jx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Un(),t=wt.identifierPrefix;if(qe){var n=cr,r=lr;n=(r&~(1<<32-In(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ts++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=y3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C3={readContext:Cn,useCallback:sy,useContext:Cn,useEffect:Qp,useImperativeHandle:ay,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Bu,useRef:ny,useState:function(){return Bu(ns)},useDebugValue:Kp,useDeferredValue:function(e){var t=Sn();return cy(t,ht.memoizedState,e)},useTransition:function(){var e=Bu(ns)[0],t=Sn().memoizedState;return[e,t]},useMutableSource:Kx,useSyncExternalStore:Gx,useId:uy,unstable_isNewReconciler:!1},S3={readContext:Cn,useCallback:sy,useContext:Cn,useEffect:Qp,useImperativeHandle:ay,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Uu,useRef:ny,useState:function(){return Uu(ns)},useDebugValue:Kp,useDeferredValue:function(e){var t=Sn();return ht===null?t.memoizedState=e:cy(t,ht.memoizedState,e)},useTransition:function(){var e=Uu(ns)[0],t=Sn().memoizedState;return[e,t]},useMutableSource:Kx,useSyncExternalStore:Gx,useId:uy,unstable_isNewReconciler:!1};function No(e,t){try{var n="",r=t;do n+=J2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Wu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var E3=typeof WeakMap=="function"?WeakMap:Map;function my(e,t,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rc||(rc=!0,Ed=r),hd(e,t)},n}function hy(e,t,n){n=ur(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hd(e,t),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function n0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new E3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=F3.bind(null,e,t,n),t.then(e,e))}function r0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function i0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ur(-1,1),t.tag=2,Br(n,t,1))),n.lanes|=1),e)}var T3=yr.ReactCurrentOwner,Vt=!1;function Lt(e,t,n,r){t.child=e===null?Xx(t,null,n,r):To(t,e.child,n,r)}function o0(e,t,n,r,i){n=n.render;var o=t.ref;return mo(t,i),r=Yp(e,t,n,r,o,i),n=Xp(),e!==null&&!Vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(qe&&n&&Mp(t),t.flags|=1,Lt(e,t,r,i),t.child)}function a0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!rm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gy(e,t,o,r,i)):(e=vl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(a,r)&&e.ref===t.ref)return hr(e,t,i)}return t.flags|=1,e=Hr(o,r),e.ref=t.ref,e.return=t,t.child=e}function gy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ka(o,r)&&e.ref===t.ref)if(Vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Vt=!0);else return t.lanes=e.lanes,hr(e,t,i)}return gd(e,t,n,r,i)}function xy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ao,tn),tn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,We(ao,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,We(ao,tn),tn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,We(ao,tn),tn|=r;return Lt(e,t,i,n),t.child}function yy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gd(e,t,n,r,i){var o=Qt(n)?wi:Rt.current;return o=So(t,o),mo(t,i),n=Yp(e,t,n,r,o,i),r=Xp(),e!==null&&!Vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(qe&&r&&Mp(t),t.flags|=1,Lt(e,t,n,i),t.child)}function s0(e,t,n,r,i){if(Qt(n)){var o=!0;Xl(t)}else o=!1;if(mo(t,i),t.stateNode===null)gl(e,t),Vx(t,n,r),md(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=Qt(n)?wi:Rt.current,c=So(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Jh(t,a,r,c),Tr=!1;var p=t.memoizedState;a.state=p,Jl(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Xt.current||Tr?(typeof u=="function"&&(pd(t,n,u,r),l=t.memoizedState),(s=Tr||qh(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wx(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:On(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=Qt(n)?wi:Rt.current,l=So(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&Jh(t,a,r,l),Tr=!1,p=t.memoizedState,a.state=p,Jl(t,r,a,i);var y=t.memoizedState;s!==d||p!==y||Xt.current||Tr?(typeof g=="function"&&(pd(t,n,g,r),y=t.memoizedState),(c=Tr||qh(t,n,c,r,p,y,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xd(e,t,n,r,o,i)}function xd(e,t,n,r,i,o){yy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Yh(t,n,!1),hr(e,t,o);r=t.stateNode,T3.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=To(t,e.child,null,o),t.child=To(t,null,s,o)):Lt(e,t,s,o),t.memoizedState=r.state,i&&Yh(t,n,!0),t.child}function vy(e){var t=e.stateNode;t.pendingContext?Vh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vh(e,t.context,!1),Up(e,t.containerInfo)}function l0(e,t,n,r,i){return Eo(),Ip(i),t.flags|=256,Lt(e,t,n,r),t.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function vd(e){return{baseLanes:e,cachePool:null,transitions:null}}function wy(e,t,n){var r=t.pendingProps,i=tt.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),We(tt,i&1),e===null)return fd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Mc(a,r,0,null),e=xi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vd(n),t.memoizedState=yd,e):Gp(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return A3(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Hr(s,o):(o=xi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=yd,r}return o=e.child,e=o.sibling,r=Hr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gp(e,t){return t=Mc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vs(e,t,n,r){return r!==null&&Ip(r),To(t,e.child,null,n),e=Gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A3(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Wu(Error(U(422))),Vs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Mc({mode:"visible",children:r.children},i,0,null),o=xi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&To(t,e.child,null,a),t.child.memoizedState=vd(a),t.memoizedState=yd,o);if(!(t.mode&1))return Vs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(U(419)),r=Wu(o,r,void 0),Vs(e,t,a,r)}if(s=(a&e.childLanes)!==0,Vt||s){if(r=wt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,mr(e,i),$n(r,e,i,-1))}return nm(),r=Wu(Error(U(421))),Vs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rn=zr(i.nextSibling),sn=t,qe=!0,_n=null,e!==null&&(yn[vn++]=lr,yn[vn++]=cr,yn[vn++]=bi,lr=e.id,cr=e.overflow,bi=t),t=Gp(t,r.children),t.flags|=4096,t)}function c0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dd(e.return,t,n)}function Hu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function by(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Lt(e,t,r.children,n),r=tt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&c0(e,n,t);else if(e.tag===19)c0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(We(tt,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hu(t,!0,n,null,o);break;case"together":Hu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ci|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Hr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N3(e,t,n){switch(t.tag){case 3:vy(t),Eo();break;case 5:Qx(t);break;case 1:Qt(t.type)&&Xl(t);break;case 4:Up(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;We(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(We(tt,tt.current&1),t.flags|=128,null):n&t.child.childLanes?wy(e,t,n):(We(tt,tt.current&1),e=hr(e,t,n),e!==null?e.sibling:null);We(tt,tt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return by(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),We(tt,tt.current),r)break;return null;case 22:case 23:return t.lanes=0,xy(e,t,n)}return hr(e,t,n)}var ky,wd,Cy,Sy;ky=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};Cy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pi(Kn.current);var o=null;switch(n){case"input":i=Uf(e,i),r=Uf(e,r),o=[];break;case"select":i=rt({},i,{value:void 0}),r=rt({},r,{value:void 0}),o=[];break;case"textarea":i=Vf(e,i),r=Vf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}Xf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&He("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Sy=function(e,t,n,r){n!==r&&(t.flags|=4)};function aa(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j3(e,t,n){var r=t.pendingProps;switch(Rp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Qt(t.type)&&Yl(),Ot(t),null;case 3:return r=t.stateNode,Ao(),Qe(Xt),Qe(Rt),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ws(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_n!==null&&(Nd(_n),_n=null))),wd(e,t),Ot(t),null;case 5:Wp(t);var i=pi(es.current);if(n=t.type,e!==null&&t.stateNode!=null)Cy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Ot(t),null}if(e=pi(Kn.current),Ws(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yn]=t,r[Ja]=o,e=(t.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<wa.length;i++)He(wa[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":yh(r,o),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},He("invalid",r);break;case"textarea":wh(r,o),He("invalid",r)}Xf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Us(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Us(r.textContent,s,e),i=["children",""+s]):Ua.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&He("scroll",r)}switch(n){case"input":Ms(r),vh(r,o,!0);break;case"textarea":Ms(r),bh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=q1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yn]=t,e[Ja]=r,ky(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qf(n,r),n){case"dialog":He("cancel",e),He("close",e),i=r;break;case"iframe":case"object":case"embed":He("load",e),i=r;break;case"video":case"audio":for(i=0;i<wa.length;i++)He(wa[i],e);i=r;break;case"source":He("error",e),i=r;break;case"img":case"image":case"link":He("error",e),He("load",e),i=r;break;case"details":He("toggle",e),i=r;break;case"input":yh(e,r),i=Uf(e,r),He("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=rt({},r,{value:void 0}),He("invalid",e);break;case"textarea":wh(e,r),i=Vf(e,r),He("invalid",e);break;default:i=r}Xf(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?ex(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&J1(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(e,l):typeof l=="number"&&Wa(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ua.hasOwnProperty(o)?l!=null&&o==="onScroll"&&He("scroll",e):l!=null&&wp(e,o,l,a))}switch(n){case"input":Ms(e),vh(e,r,!1);break;case"textarea":Ms(e),bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?co(e,!!r.multiple,o,!1):r.defaultValue!=null&&co(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)Sy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=pi(es.current),pi(Kn.current),Ws(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yn]=t,(o=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:Us(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Us(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=t,t.stateNode=r}return Ot(t),null;case 13:if(Qe(tt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&rn!==null&&t.mode&1&&!(t.flags&128))Bx(),Eo(),t.flags|=98560,o=!1;else if(o=Ws(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Yn]=t}else Eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),o=!1}else _n!==null&&(Nd(_n),_n=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||tt.current&1?gt===0&&(gt=3):nm())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return Ao(),wd(e,t),e===null&&Ga(t.stateNode.containerInfo),Ot(t),null;case 10:return Fp(t.type._context),Ot(t),null;case 17:return Qt(t.type)&&Yl(),Ot(t),null;case 19:if(Qe(tt),o=t.memoizedState,o===null)return Ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)aa(o,!1);else{if(gt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Zl(e),a!==null){for(t.flags|=128,aa(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return We(tt,tt.current&1|2),t.child}e=e.sibling}o.tail!==null&&ot()>jo&&(t.flags|=128,r=!0,aa(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),aa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!qe)return Ot(t),null}else 2*ot()-o.renderingStartTime>jo&&n!==1073741824&&(t.flags|=128,r=!0,aa(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ot(),t.sibling=null,n=tt.current,We(tt,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return tm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function O3(e,t){switch(Rp(t),t.tag){case 1:return Qt(t.type)&&Yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),Qe(Xt),Qe(Rt),Hp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wp(t),null;case 13:if(Qe(tt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(tt),null;case 4:return Ao(),null;case 10:return Fp(t.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var Ys=!1,Pt=!1,D3=typeof WeakSet=="function"?WeakSet:Set,ne=null;function oo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){it(e,t,r)}else n.current=null}function bd(e,t,n){try{n()}catch(r){it(e,t,r)}}var u0=!1;function _3(e,t){if(id=Ul,e=Nx(),Pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++u===r&&(l=a),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Ul=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,C=y.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:On(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(T){it(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return y=u0,u0=!1,y}function Da(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bd(t,n,o)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function kd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ey(e){var t=e.alternate;t!==null&&(e.alternate=null,Ey(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[Ja],delete t[ld],delete t[m3],delete t[h3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ty(e){return e.tag===5||e.tag===3||e.tag===4}function f0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ty(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(Cd(e,t,n),e=e.sibling;e!==null;)Cd(e,t,n),e=e.sibling}function Sd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sd(e,t,n),e=e.sibling;e!==null;)Sd(e,t,n),e=e.sibling}var Ct=null,Dn=!1;function kr(e,t,n){for(n=n.child;n!==null;)Ay(e,t,n),n=n.sibling}function Ay(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:Pt||oo(n,t);case 6:var r=Ct,i=Dn;Ct=null,kr(e,t,n),Ct=r,Dn=i,Ct!==null&&(Dn?(e=Ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(Dn?(e=Ct,n=n.stateNode,e.nodeType===8?$u(e.parentNode,n):e.nodeType===1&&$u(e,n),Xa(e)):$u(Ct,n.stateNode));break;case 4:r=Ct,i=Dn,Ct=n.stateNode.containerInfo,Dn=!0,kr(e,t,n),Ct=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&bd(n,t,a),i=i.next}while(i!==r)}kr(e,t,n);break;case 1:if(!Pt&&(oo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){it(n,t,s)}kr(e,t,n);break;case 21:kr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,kr(e,t,n),Pt=r):kr(e,t,n);break;default:kr(e,t,n)}}function d0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D3),t.forEach(function(r){var i=B3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ct=s.stateNode,Dn=!1;break e;case 3:Ct=s.stateNode.containerInfo,Dn=!0;break e;case 4:Ct=s.stateNode.containerInfo,Dn=!0;break e}s=s.return}if(Ct===null)throw Error(U(160));Ay(o,a,i),Ct=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){it(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ny(t,e),t=t.sibling}function Ny(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nn(t,e),Bn(e),r&4){try{Da(3,e,e.return),_c(3,e)}catch(x){it(e,e.return,x)}try{Da(5,e,e.return)}catch(x){it(e,e.return,x)}}break;case 1:Nn(t,e),Bn(e),r&512&&n!==null&&oo(n,n.return);break;case 5:if(Nn(t,e),Bn(e),r&512&&n!==null&&oo(n,n.return),e.flags&32){var i=e.stateNode;try{Wa(i,"")}catch(x){it(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&K1(i,o),Qf(s,a);var c=Qf(s,o);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?ex(i,d):u==="dangerouslySetInnerHTML"?J1(i,d):u==="children"?Wa(i,d):wp(i,u,d,c)}switch(s){case"input":Wf(i,o);break;case"textarea":G1(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?co(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?co(i,!!o.multiple,o.defaultValue,!0):co(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ja]=o}catch(x){it(e,e.return,x)}}break;case 6:if(Nn(t,e),Bn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){it(e,e.return,x)}}break;case 3:if(Nn(t,e),Bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(t.containerInfo)}catch(x){it(e,e.return,x)}break;case 4:Nn(t,e),Bn(e);break;case 13:Nn(t,e),Bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zp=ot())),r&4&&d0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(c=Pt)||u,Nn(t,e),Pt=c):Nn(t,e),Bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(ne=e,u=e.child;u!==null;){for(d=ne=u;ne!==null;){switch(p=ne,g=p.child,p.tag){case 0:case 11:case 14:case 15:Da(4,p,p.return);break;case 1:oo(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){it(r,n,x)}}break;case 5:oo(p,p.return);break;case 22:if(p.memoizedState!==null){m0(d);continue}}g!==null?(g.return=p,ne=g):m0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Z1("display",a))}catch(x){it(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){it(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(t,e),Bn(e),r&4&&d0(e);break;case 21:break;default:Nn(t,e),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ty(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var o=f0(e);Sd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=f0(e);Cd(e,s,a);break;default:throw Error(U(161))}}catch(l){it(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P3(e,t,n){ne=e,jy(e)}function jy(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ys;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Pt;s=Ys;var c=Pt;if(Ys=a,(Pt=l)&&!c)for(ne=i;ne!==null;)a=ne,l=a.child,a.tag===22&&a.memoizedState!==null?h0(i):l!==null?(l.return=a,ne=l):h0(i);for(;o!==null;)ne=o,jy(o),o=o.sibling;ne=i,Ys=s,Pt=c}p0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):p0(e)}}function p0(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||_c(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:On(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Pt||t.flags&512&&kd(t)}catch(p){it(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function m0(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function h0(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(l){it(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){it(t,i,l)}}var o=t.return;try{kd(t)}catch(l){it(t,o,l)}break;case 5:var a=t.return;try{kd(t)}catch(l){it(t,a,l)}}}catch(l){it(t,t.return,l)}if(t===e){ne=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ne=s;break}ne=t.return}}var M3=Math.ceil,nc=yr.ReactCurrentDispatcher,qp=yr.ReactCurrentOwner,bn=yr.ReactCurrentBatchConfig,De=0,wt=null,ft=null,Tt=0,tn=0,ao=qr(0),gt=0,is=null,Ci=0,Pc=0,Jp=0,_a=null,Ht=null,Zp=0,jo=1/0,ir=null,rc=!1,Ed=null,Ur=null,Xs=!1,Pr=null,ic=0,Pa=0,Td=null,xl=-1,yl=0;function zt(){return De&6?ot():xl!==-1?xl:xl=ot()}function Wr(e){return e.mode&1?De&2&&Tt!==0?Tt&-Tt:x3.transition!==null?(yl===0&&(yl=dx()),yl):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:vx(e.type)),e):1}function $n(e,t,n,r){if(50<Pa)throw Pa=0,Td=null,Error(U(185));ws(e,n,r),(!(De&2)||e!==wt)&&(e===wt&&(!(De&2)&&(Pc|=n),gt===4&&jr(e,Tt)),Kt(e,r),n===1&&De===0&&!(t.mode&1)&&(jo=ot()+500,jc&&Jr()))}function Kt(e,t){var n=e.callbackNode;xk(e,t);var r=Bl(e,e===wt?Tt:0);if(r===0)n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sh(n),t===1)e.tag===0?g3(g0.bind(null,e)):Lx(g0.bind(null,e)),d3(function(){!(De&6)&&Jr()}),n=null;else{switch(px(r)){case 1:n=Ep;break;case 4:n=ux;break;case 16:n=zl;break;case 536870912:n=fx;break;default:n=zl}n=$y(n,Oy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Oy(e,t){if(xl=-1,yl=0,De&6)throw Error(U(327));var n=e.callbackNode;if(ho()&&e.callbackNode!==n)return null;var r=Bl(e,e===wt?Tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oc(e,r);else{t=r;var i=De;De|=2;var o=_y();(wt!==e||Tt!==t)&&(ir=null,jo=ot()+500,gi(e,t));do try{$3();break}catch(s){Dy(e,s)}while(1);Lp(),nc.current=o,De=i,ft!==null?t=0:(wt=null,Tt=0,t=gt)}if(t!==0){if(t===2&&(i=Zf(e),i!==0&&(r=i,t=Ad(e,i))),t===1)throw n=is,gi(e,0),jr(e,r),Kt(e,ot()),n;if(t===6)jr(e,r);else{if(i=e.current.alternate,!(r&30)&&!R3(i)&&(t=oc(e,r),t===2&&(o=Zf(e),o!==0&&(r=o,t=Ad(e,o))),t===1))throw n=is,gi(e,0),jr(e,r),Kt(e,ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:ii(e,Ht,ir);break;case 3:if(jr(e,r),(r&130023424)===r&&(t=Zp+500-ot(),10<t)){if(Bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){zt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sd(ii.bind(null,e,Ht,ir),t);break}ii(e,Ht,ir);break;case 4:if(jr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-In(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M3(r/1960))-r,10<r){e.timeoutHandle=sd(ii.bind(null,e,Ht,ir),r);break}ii(e,Ht,ir);break;case 5:ii(e,Ht,ir);break;default:throw Error(U(329))}}}return Kt(e,ot()),e.callbackNode===n?Oy.bind(null,e):null}function Ad(e,t){var n=_a;return e.current.memoizedState.isDehydrated&&(gi(e,t).flags|=256),e=oc(e,t),e!==2&&(t=Ht,Ht=n,t!==null&&Nd(t)),e}function Nd(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function R3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jr(e,t){for(t&=~Jp,t&=~Pc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-In(t),r=1<<n;e[n]=-1,t&=~r}}function g0(e){if(De&6)throw Error(U(327));ho();var t=Bl(e,0);if(!(t&1))return Kt(e,ot()),null;var n=oc(e,t);if(e.tag!==0&&n===2){var r=Zf(e);r!==0&&(t=r,n=Ad(e,r))}if(n===1)throw n=is,gi(e,0),jr(e,t),Kt(e,ot()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ii(e,Ht,ir),Kt(e,ot()),null}function em(e,t){var n=De;De|=1;try{return e(t)}finally{De=n,De===0&&(jo=ot()+500,jc&&Jr())}}function Si(e){Pr!==null&&Pr.tag===0&&!(De&6)&&ho();var t=De;De|=1;var n=bn.transition,r=Fe;try{if(bn.transition=null,Fe=1,e)return e()}finally{Fe=r,bn.transition=n,De=t,!(De&6)&&Jr()}}function tm(){tn=ao.current,Qe(ao)}function gi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,f3(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:Ao(),Qe(Xt),Qe(Rt),Hp();break;case 5:Wp(r);break;case 4:Ao();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:Fp(r.type._context);break;case 22:case 23:tm()}n=n.return}if(wt=e,ft=e=Hr(e.current,null),Tt=tn=t,gt=0,is=null,Jp=Pc=Ci=0,Ht=_a=null,di!==null){for(t=0;t<di.length;t++)if(n=di[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}di=null}return e}function Dy(e,t){do{var n=ft;try{if(Lp(),ml.current=tc,ec){for(var r=nt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ec=!1}if(ki=0,yt=ht=nt=null,Oa=!1,ts=0,qp.current=null,n===null||n.return===null){gt=1,is=t,ft=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Tt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=r0(a);if(g!==null){g.flags&=-257,i0(g,a,s,o,t),g.mode&1&&n0(o,c,t),t=g,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){n0(o,c,t),nm();break e}l=Error(U(426))}}else if(qe&&s.mode&1){var C=r0(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),i0(C,a,s,o,t),Ip(No(l,s));break e}}o=l=No(l,s),gt!==4&&(gt=2),_a===null?_a=[o]:_a.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=my(o,l,t);Kh(o,h);break e;case 1:s=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ur===null||!Ur.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=hy(o,s,t);Kh(o,T);break e}}o=o.return}while(o!==null)}My(n)}catch(O){t=O,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function _y(){var e=nc.current;return nc.current=tc,e===null?tc:e}function nm(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||!(Ci&268435455)&&!(Pc&268435455)||jr(wt,Tt)}function oc(e,t){var n=De;De|=2;var r=_y();(wt!==e||Tt!==t)&&(ir=null,gi(e,t));do try{I3();break}catch(i){Dy(e,i)}while(1);if(Lp(),De=n,nc.current=r,ft!==null)throw Error(U(261));return wt=null,Tt=0,gt}function I3(){for(;ft!==null;)Py(ft)}function $3(){for(;ft!==null&&!lk();)Py(ft)}function Py(e){var t=Iy(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?My(e):ft=t,qp.current=null}function My(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=O3(n,t),n!==null){n.flags&=32767,ft=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gt=6,ft=null;return}}else if(n=j3(n,t,tn),n!==null){ft=n;return}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);gt===0&&(gt=5)}function ii(e,t,n){var r=Fe,i=bn.transition;try{bn.transition=null,Fe=1,L3(e,t,n,r)}finally{bn.transition=i,Fe=r}return null}function L3(e,t,n,r){do ho();while(Pr!==null);if(De&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(yk(e,o),e===wt&&(ft=wt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,$y(zl,function(){return ho(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bn.transition,bn.transition=null;var a=Fe;Fe=1;var s=De;De|=4,qp.current=null,_3(e,n),Ny(n,e),i3(od),Ul=!!id,od=id=null,e.current=n,P3(n),ck(),De=s,Fe=a,bn.transition=o}else e.current=n;if(Xs&&(Xs=!1,Pr=e,ic=i),o=e.pendingLanes,o===0&&(Ur=null),dk(n.stateNode),Kt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rc)throw rc=!1,e=Ed,Ed=null,e;return ic&1&&e.tag!==0&&ho(),o=e.pendingLanes,o&1?e===Td?Pa++:(Pa=0,Td=e):Pa=0,Jr(),null}function ho(){if(Pr!==null){var e=px(ic),t=bn.transition,n=Fe;try{if(bn.transition=null,Fe=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,ic=0,De&6)throw Error(U(331));var i=De;for(De|=4,ne=e.current;ne!==null;){var o=ne,a=o.child;if(ne.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(ne=c;ne!==null;){var u=ne;switch(u.tag){case 0:case 11:case 15:Da(8,u,o)}var d=u.child;if(d!==null)d.return=u,ne=d;else for(;ne!==null;){u=ne;var p=u.sibling,g=u.return;if(Ey(u),u===c){ne=null;break}if(p!==null){p.return=g,ne=p;break}ne=g}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}ne=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ne=a;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Da(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,ne=h;break e}ne=o.return}}var m=e.current;for(ne=m;ne!==null;){a=ne;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ne=v;else e:for(a=m;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_c(9,s)}}catch(O){it(s,s.return,O)}if(s===a){ne=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,ne=T;break e}ne=s.return}}if(De=i,Jr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Sc,e)}catch{}r=!0}return r}finally{Fe=n,bn.transition=t}}return!1}function x0(e,t,n){t=No(n,t),t=my(e,t,1),e=Br(e,t,1),t=zt(),e!==null&&(ws(e,1,t),Kt(e,t))}function it(e,t,n){if(e.tag===3)x0(e,e,n);else for(;t!==null;){if(t.tag===3){x0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){e=No(n,e),e=hy(t,e,1),t=Br(t,e,1),e=zt(),t!==null&&(ws(t,1,e),Kt(t,e));break}}t=t.return}}function F3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,wt===e&&(Tt&n)===n&&(gt===4||gt===3&&(Tt&130023424)===Tt&&500>ot()-Zp?gi(e,0):Jp|=n),Kt(e,t)}function Ry(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var n=zt();e=mr(e,t),e!==null&&(ws(e,t,n),Kt(e,n))}function z3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ry(e,n)}function B3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Ry(e,n)}var Iy;Iy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Vt=!1,N3(e,t,n);Vt=!!(e.flags&131072)}else Vt=!1,qe&&t.flags&1048576&&Fx(t,Kl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var i=So(t,Rt.current);mo(t,n),i=Yp(null,t,r,e,i,n);var o=Xp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(o=!0,Xl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bp(t),i.updater=Oc,t.stateNode=i,i._reactInternals=t,md(t,r,e,n),t=xd(null,t,r,!0,o,n)):(t.tag=0,qe&&o&&Mp(t),Lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=W3(r),e=On(r,e),i){case 0:t=gd(null,t,r,e,n);break e;case 1:t=s0(null,t,r,e,n);break e;case 11:t=o0(null,t,r,e,n);break e;case 14:t=a0(null,t,r,On(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),gd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),s0(e,t,r,i,n);case 3:e:{if(vy(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wx(e,t),Jl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=No(Error(U(423)),t),t=l0(e,t,r,n,i);break e}else if(r!==i){i=No(Error(U(424)),t),t=l0(e,t,r,n,i);break e}else for(rn=zr(t.stateNode.containerInfo.firstChild),sn=t,qe=!0,_n=null,n=Xx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===i){t=hr(e,t,n);break e}Lt(e,t,r,n)}t=t.child}return t;case 5:return Qx(t),e===null&&fd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ad(r,i)?a=null:o!==null&&ad(r,o)&&(t.flags|=32),yy(e,t),Lt(e,t,a,n),t.child;case 6:return e===null&&fd(t),null;case 13:return wy(e,t,n);case 4:return Up(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=To(t,null,r,n):Lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),o0(e,t,r,i,n);case 7:return Lt(e,t,t.pendingProps,n),t.child;case 8:return Lt(e,t,t.pendingProps.children,n),t.child;case 12:return Lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,We(Gl,r._currentValue),r._currentValue=a,o!==null)if(Fn(o.value,a)){if(o.children===i.children&&!Xt.current){t=hr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ur(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dd(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),dd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mo(t,n),i=Cn(i),r=r(i),t.flags|=1,Lt(e,t,r,n),t.child;case 14:return r=t.type,i=On(r,t.pendingProps),i=On(r.type,i),a0(e,t,r,i,n);case 15:return gy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),gl(e,t),t.tag=1,Qt(r)?(e=!0,Xl(t)):e=!1,mo(t,n),Vx(t,r,i),md(t,r,i,n),xd(null,t,r,!0,e,n);case 19:return by(e,t,n);case 22:return xy(e,t,n)}throw Error(U(156,t.tag))};function $y(e,t){return cx(e,t)}function U3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new U3(e,t,n,r)}function rm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W3(e){if(typeof e=="function")return rm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kp)return 11;if(e===Cp)return 14}return 2}function Hr(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vl(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")rm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gi:return xi(n.children,i,o,t);case bp:a=8,i|=8;break;case Lf:return e=wn(12,n,t,i|2),e.elementType=Lf,e.lanes=o,e;case Ff:return e=wn(13,n,t,i),e.elementType=Ff,e.lanes=o,e;case zf:return e=wn(19,n,t,i),e.elementType=zf,e.lanes=o,e;case Y1:return Mc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H1:a=10;break e;case V1:a=9;break e;case kp:a=11;break e;case Cp:a=14;break e;case Er:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=wn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function Mc(e,t,n,r){return e=wn(22,e,r,t),e.elementType=Y1,e.lanes=n,e.stateNode={isHidden:!1},e}function Vu(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function Yu(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tu(0),this.expirationTimes=Tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function im(e,t,n,r,i,o,a,s,l){return e=new H3(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(o),e}function V3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ly(e){if(!e)return Qr;e=e._reactInternals;e:{if(Ri(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Qt(n))return $x(e,n,t)}return t}function Fy(e,t,n,r,i,o,a,s,l){return e=im(n,r,!0,e,i,o,a,s,l),e.context=Ly(null),n=e.current,r=zt(),i=Wr(n),o=ur(r,i),o.callback=t??null,Br(n,o,i),e.current.lanes=i,ws(e,i,r),Kt(e,r),e}function Rc(e,t,n,r){var i=t.current,o=zt(),a=Wr(i);return n=Ly(n),t.context===null?t.context=n:t.pendingContext=n,t=ur(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Br(i,t,a),e!==null&&($n(e,i,a,o),pl(e,i,a)),a}function ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function y0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function om(e,t){y0(e,t),(e=e.alternate)&&y0(e,t)}function Y3(){return null}var zy=typeof reportError=="function"?reportError:function(e){console.error(e)};function am(e){this._internalRoot=e}Ic.prototype.render=am.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Rc(e,t,null,null)};Ic.prototype.unmount=am.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Si(function(){Rc(null,e,null,null)}),t[pr]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=gx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&yx(e)}};function sm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function v0(){}function X3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ac(a);o.call(c)}}var a=Fy(t,r,e,0,null,!1,!1,"",v0);return e._reactRootContainer=a,e[pr]=a.current,Ga(e.nodeType===8?e.parentNode:e),Si(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ac(l);s.call(c)}}var l=im(e,0,!1,null,null,!1,!1,"",v0);return e._reactRootContainer=l,e[pr]=l.current,Ga(e.nodeType===8?e.parentNode:e),Si(function(){Rc(t,l,n,r)}),l}function Lc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ac(a);s.call(l)}}Rc(t,a,e,i)}else a=X3(n,t,e,i,r);return ac(a)}mx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=va(t.pendingLanes);n!==0&&(Tp(t,n|1),Kt(t,ot()),!(De&6)&&(jo=ot()+500,Jr()))}break;case 13:Si(function(){var r=mr(e,1);if(r!==null){var i=zt();$n(r,e,1,i)}}),om(e,1)}};Ap=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var n=zt();$n(t,e,134217728,n)}om(e,134217728)}};hx=function(e){if(e.tag===13){var t=Wr(e),n=mr(e,t);if(n!==null){var r=zt();$n(n,e,t,r)}om(e,t)}};gx=function(){return Fe};xx=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}};Gf=function(e,t,n){switch(t){case"input":if(Wf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nc(r);if(!i)throw Error(U(90));Q1(r),Wf(r,i)}}}break;case"textarea":G1(e,n);break;case"select":t=n.value,t!=null&&co(e,!!n.multiple,t,!1)}};rx=em;ix=Si;var Q3={usingClientEntryPoint:!1,Events:[ks,eo,Nc,tx,nx,em]},sa={findFiberByHostInstance:fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},K3={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sx(e),e===null?null:e.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||Y3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Sc=Qs.inject(K3),Qn=Qs}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q3;fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sm(t))throw Error(U(200));return V3(e,t,null,n)};fn.createRoot=function(e,t){if(!sm(e))throw Error(U(299));var n=!1,r="",i=zy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=im(e,1,!1,null,null,n,!1,r,i),e[pr]=t.current,Ga(e.nodeType===8?e.parentNode:e),new am(t)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=sx(t),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return Si(e)};fn.hydrate=function(e,t,n){if(!$c(t))throw Error(U(200));return Lc(null,e,t,!0,n)};fn.hydrateRoot=function(e,t,n){if(!sm(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fy(t,null,e,1,n??null,i,!1,o,a),e[pr]=t.current,Ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ic(t)};fn.render=function(e,t,n){if(!$c(t))throw Error(U(200));return Lc(null,e,t,!1,n)};fn.unmountComponentAtNode=function(e){if(!$c(e))throw Error(U(40));return e._reactRootContainer?(Si(function(){Lc(null,null,e,!1,function(){e._reactRootContainer=null,e[pr]=null})}),!0):!1};fn.unstable_batchedUpdates=em;fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$c(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Lc(e,t,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";function By(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(By)}catch(e){console.error(e)}}By(),F1.exports=fn;var Uy=F1.exports;const Ks=Di(Uy);var w0=Uy;If.createRoot=w0.createRoot,If.hydrateRoot=w0.hydrateRoot;var Mt=function(){return Mt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Mt.apply(this,arguments)};function os(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Wy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var G3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,q3=Wy(function(e){return G3.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ve="-ms-",Ma="-moz-",Ie="-webkit-",Hy="comm",Fc="rule",lm="decl",J3="@import",Vy="@keyframes",Z3="@layer",e4=Math.abs,cm=String.fromCharCode,jd=Object.assign;function t4(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function Yy(e){return e.trim()}function or(e,t){return(e=t.exec(e))?e[0]:e}function ke(e,t,n){return e.replace(t,n)}function wl(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function Oo(e,t,n){return e.slice(t,n)}function Wn(e){return e.length}function Xy(e){return e.length}function ba(e,t){return t.push(e),e}function n4(e,t){return e.map(t).join("")}function b0(e,t){return e.filter(function(n){return!or(n,t)})}var zc=1,Do=1,Qy=0,En=0,ct=0,Wo="";function Bc(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zc,column:Do,length:a,return:"",siblings:s}}function Sr(e,t){return jd(Bc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vi(e){for(;e.root;)e=Sr(e.root,{children:[e]});ba(e,e.siblings)}function r4(){return ct}function i4(){return ct=En>0?vt(Wo,--En):0,Do--,ct===10&&(Do=1,zc--),ct}function Ln(){return ct=En<Qy?vt(Wo,En++):0,Do++,ct===10&&(Do=1,zc++),ct}function yi(){return vt(Wo,En)}function bl(){return En}function Uc(e,t){return Oo(Wo,e,t)}function Od(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o4(e){return zc=Do=1,Qy=Wn(Wo=e),En=0,[]}function a4(e){return Wo="",e}function Xu(e){return Yy(Uc(En-1,Dd(e===91?e+2:e===40?e+1:e)))}function s4(e){for(;(ct=yi())&&ct<33;)Ln();return Od(e)>2||Od(ct)>3?"":" "}function l4(e,t){for(;--t&&Ln()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return Uc(e,bl()+(t<6&&yi()==32&&Ln()==32))}function Dd(e){for(;Ln();)switch(ct){case e:return En;case 34:case 39:e!==34&&e!==39&&Dd(ct);break;case 40:e===41&&Dd(e);break;case 92:Ln();break}return En}function c4(e,t){for(;Ln()&&e+ct!==47+10;)if(e+ct===42+42&&yi()===47)break;return"/*"+Uc(t,En-1)+"*"+cm(e===47?e:Ln())}function u4(e){for(;!Od(yi());)Ln();return Uc(e,En)}function f4(e){return a4(kl("",null,null,null,[""],e=o4(e),0,[0],e))}function kl(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,g=0,y=0,x=1,C=1,h=1,m=0,v="",T=i,O=o,_=r,E=v;C;)switch(y=m,m=Ln()){case 40:if(y!=108&&vt(E,d-1)==58){wl(E+=ke(Xu(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Xu(m);break;case 9:case 10:case 13:case 32:E+=s4(y);break;case 92:E+=l4(bl()-1,7);continue;case 47:switch(yi()){case 42:case 47:ba(d4(c4(Ln(),bl()),t,n,l),l);break;default:E+="/"}break;case 123*x:s[c++]=Wn(E)*h;case 125*x:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+u:h==-1&&(E=ke(E,/\f/g,"")),g>0&&Wn(E)-d&&ba(g>32?C0(E+";",r,n,d-1,l):C0(ke(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(ba(_=k0(E,t,n,c,u,i,s,v,T=[],O=[],d,o),o),m===123)if(u===0)kl(E,t,_,_,T,o,d,s,O);else switch(p===99&&vt(E,3)===110?100:p){case 100:case 108:case 109:case 115:kl(e,_,_,r&&ba(k0(e,_,_,0,0,i,s,v,i,T=[],d,O),O),i,O,d,s,r?T:O);break;default:kl(E,_,_,_,[""],O,0,s,O)}}c=u=g=0,x=h=1,v=E="",d=a;break;case 58:d=1+Wn(E),g=y;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&i4()==125)continue}switch(E+=cm(m),m*x){case 38:h=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(Wn(E)-1)*h,h=1;break;case 64:yi()===45&&(E+=Xu(Ln())),p=yi(),u=d=Wn(v=E+=u4(bl())),m++;break;case 45:y===45&&Wn(E)==2&&(x=0)}}return o}function k0(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,g=i===0?o:[""],y=Xy(g),x=0,C=0,h=0;x<r;++x)for(var m=0,v=Oo(e,p+1,p=e4(C=a[x])),T=e;m<y;++m)(T=Yy(C>0?g[m]+" "+v:ke(v,/&\f/g,g[m])))&&(l[h++]=T);return Bc(e,t,n,i===0?Fc:s,l,c,u,d)}function d4(e,t,n,r){return Bc(e,t,n,Hy,cm(r4()),Oo(e,2,-2),0,r)}function C0(e,t,n,r,i){return Bc(e,t,n,lm,Oo(e,0,r),Oo(e,r+1,-1),r,i)}function Ky(e,t,n){switch(t4(e,t)){case 5103:return Ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+e+e;case 4789:return Ma+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+e+Ma+e+Ve+e+e;case 5936:switch(vt(e,t+11)){case 114:return Ie+e+Ve+ke(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ie+e+Ve+ke(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ie+e+Ve+ke(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ie+e+Ve+e+e;case 6165:return Ie+e+Ve+"flex-"+e+e;case 5187:return Ie+e+ke(e,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+Ve+"flex-$1$2")+e;case 5443:return Ie+e+Ve+"flex-item-"+ke(e,/flex-|-self/g,"")+(or(e,/flex-|baseline/)?"":Ve+"grid-row-"+ke(e,/flex-|-self/g,""))+e;case 4675:return Ie+e+Ve+"flex-line-pack"+ke(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ie+e+Ve+ke(e,"shrink","negative")+e;case 5292:return Ie+e+Ve+ke(e,"basis","preferred-size")+e;case 6060:return Ie+"box-"+ke(e,"-grow","")+Ie+e+Ve+ke(e,"grow","positive")+e;case 4554:return Ie+ke(e,/([^-])(transform)/g,"$1"+Ie+"$2")+e;case 6187:return ke(ke(ke(e,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),e,"")+e;case 5495:case 3959:return ke(e,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return ke(ke(e,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+e+e;case 4200:if(!or(e,/flex-|baseline/))return Ve+"grid-column-align"+Oo(e,t)+e;break;case 2592:case 3360:return Ve+ke(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,or(r.props,/grid-\w+-end/)})?~wl(e+(n=n[t].value),"span")?e:Ve+ke(e,"-start","")+e+Ve+"grid-row-span:"+(~wl(n,"span")?or(n,/\d+/):+or(n,/\d+/)-+or(e,/\d+/))+";":Ve+ke(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return or(r.props,/grid-\w+-start/)})?e:Ve+ke(ke(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ke(e,/(.+)-inline(.+)/,Ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return ke(e,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+Ma+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wl(e,"stretch")?Ky(ke(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ke(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,c){return Ve+i+":"+o+c+(a?Ve+i+"-span:"+(s?l:+l-+o)+c:"")+e});case 4949:if(vt(e,t+6)===121)return ke(e,":",":"+Ie)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return ke(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(vt(e,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+Ve+"$2box$3")+e;case 100:return ke(e,":",":"+Ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(e,"scroll-","scroll-snap-")+e}return e}function sc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function p4(e,t,n,r){switch(e.type){case Z3:if(e.children.length)break;case J3:case lm:return e.return=e.return||e.value;case Hy:return"";case Vy:return e.return=e.value+"{"+sc(e.children,r)+"}";case Fc:if(!Wn(e.value=e.props.join(",")))return""}return Wn(n=sc(e.children,r))?e.return=e.value+"{"+n+"}":""}function m4(e){var t=Xy(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function h4(e){return function(t){t.root||(t=t.return)&&e(t)}}function g4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lm:e.return=Ky(e.value,e.length,n);return;case Vy:return sc([Sr(e,{value:ke(e.value,"@","@"+Ie)})],r);case Fc:if(e.length)return n4(n=e.props,function(i){switch(or(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vi(Sr(e,{props:[ke(i,/:(read-\w+)/,":"+Ma+"$1")]})),Vi(Sr(e,{props:[i]})),jd(e,{props:b0(n,r)});break;case"::placeholder":Vi(Sr(e,{props:[ke(i,/:(plac\w+)/,":"+Ie+"input-$1")]})),Vi(Sr(e,{props:[ke(i,/:(plac\w+)/,":"+Ma+"$1")]})),Vi(Sr(e,{props:[ke(i,/:(plac\w+)/,Ve+"input-$1")]})),Vi(Sr(e,{props:[i]})),jd(e,{props:b0(n,r)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_o=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",um=typeof window<"u"&&"HTMLElement"in window,x4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),y4={},Wc=Object.freeze([]),Po=Object.freeze({});function qy(e,t,n){return n===void 0&&(n=Po),e.theme!==n.theme&&e.theme||t||n.theme}var Jy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),v4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,w4=/(^-|-$)/g;function S0(e){return e.replace(v4,"-").replace(w4,"")}var b4=/(a)(d)/gi,E0=function(e){return String.fromCharCode(e+(e>25?39:97))};function _d(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=E0(t%52)+n;return(E0(t%52)+n).replace(b4,"$1-$2")}var Qu,so=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zy=function(e){return so(5381,e)};function ev(e){return _d(Zy(e)>>>0)}function k4(e){return e.displayName||e.name||"Component"}function Ku(e){return typeof e=="string"&&!0}var tv=typeof Symbol=="function"&&Symbol.for,nv=tv?Symbol.for("react.memo"):60115,C4=tv?Symbol.for("react.forward_ref"):60112,S4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T4=((Qu={})[C4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qu[nv]=rv,Qu);function T0(e){return("type"in(t=e)&&t.type.$$typeof)===nv?rv:"$$typeof"in e?T4[e.$$typeof]:S4;var t}var A4=Object.defineProperty,N4=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,j4=Object.getOwnPropertyDescriptor,O4=Object.getPrototypeOf,N0=Object.prototype;function iv(e,t,n){if(typeof t!="string"){if(N0){var r=O4(t);r&&r!==N0&&iv(e,r,n)}var i=N4(t);A0&&(i=i.concat(A0(t)));for(var o=T0(e),a=T0(t),s=0;s<i.length;++s){var l=i[s];if(!(l in E4||n&&n[l]||a&&l in a||o&&l in o)){var c=j4(t,l);try{A4(e,l,c)}catch{}}}}return e}function Mo(e){return typeof e=="function"}function fm(e){return typeof e=="object"&&"styledComponentId"in e}function mi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function as(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Md(e,t,n){if(n===void 0&&(n=!1),!n&&!as(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Md(e[r],t[r]);else if(as(t))for(var r in t)e[r]=Md(e[r],t[r]);return e}function dm(e,t){Object.defineProperty(e,"toString",{value:t})}function Ss(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var D4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ss(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Cl=new Map,lc=new Map,Gu=1,Gs=function(e){if(Cl.has(e))return Cl.get(e);for(;lc.has(Gu);)Gu++;var t=Gu++;return Cl.set(e,t),lc.set(t,e),t},_4=function(e,t){Cl.set(e,t),lc.set(t,e)},P4="style[".concat(_o,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),M4=new RegExp("^".concat(_o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),R4=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},I4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(M4);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(_4(u,c),R4(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function $4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ov=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(_o,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_o,"active"),r.setAttribute("data-styled-version","6.0.8");var a=$4();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},L4=function(){function e(t){this.element=ov(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Ss(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),F4=function(){function e(t){this.element=ov(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),z4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),j0=um,B4={isServer:!um,useCSSOMInjection:!x4},cc=function(){function e(t,n,r){t===void 0&&(t=Po),n===void 0&&(n={});var i=this;this.options=Mt(Mt({},B4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&um&&j0&&(j0=!1,function(o){for(var a=document.querySelectorAll(P4),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(_o)!=="active"&&(I4(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),dm(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",c=function(d){var p=function(h){return lc.get(h)}(d);if(p===void 0)return"continue";var g=o.names.get(p),y=a.getGroup(d);if(g===void 0||y.length===0)return"continue";var x="".concat(_o,".g").concat(d,'[id="').concat(p,'"]'),C="";g!==void 0&&g.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),l+="".concat(y).concat(x,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)c(u);return l}(i)})}return e.registerId=function(t){return Gs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Mt(Mt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new z4(i):r?new L4(i):new F4(i)}(this.options),new D4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Gs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Gs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U4=/&/g,W4=/^\s*\/\/.*$/gm;function av(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=av(n.children,t)),n})}function H4(e){var t,n,r,i=e===void 0?Po:e,o=i.options,a=o===void 0?Po:o,s=i.plugins,l=s===void 0?Wc:s,c=function(p,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===Fc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(U4,n).replace(r,c))}),a.prefix&&u.push(g4),u.push(p4);var d=function(p,g,y,x){g===void 0&&(g=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=p.replace(W4,""),h=f4(y||g?"".concat(y," ").concat(g," { ").concat(C," }"):C);a.namespace&&(h=av(h,a.namespace));var m=[];return sc(h,m4(u.concat(h4(function(v){return m.push(v)})))),m};return d.hash=l.length?l.reduce(function(p,g){return g.name||Ss(15),so(p,g.name)},5381).toString():"",d}var V4=new cc,Rd=H4(),sv=me.createContext({shouldForwardProp:void 0,styleSheet:V4,stylis:Rd});sv.Consumer;me.createContext(void 0);function Id(){return k.useContext(sv)}var Y4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Rd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dm(this,function(){throw Ss(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rd),this.name+t.hash},e}(),X4=function(e){return e>="A"&&e<="Z"};function O0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;X4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lv=function(e){return e==null||e===!1||e===""},cv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!lv(o)&&(Array.isArray(o)&&o.isCss||Mo(o)?r.push("".concat(O0(i),":"),o,";"):as(o)?r.push.apply(r,os(os(["".concat(i," {")],cv(o),!1),["}"],!1)):r.push("".concat(O0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Gy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vr(e,t,n,r){if(lv(e))return[];if(fm(e))return[".".concat(e.styledComponentId)];if(Mo(e)){if(!Mo(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Vr(i,t,n,r)}var o;return e instanceof Y4?n?(e.inject(n,r),[e.getName(r)]):[e]:as(e)?cv(e):Array.isArray(e)?Array.prototype.concat.apply(Wc,e.map(function(a){return Vr(a,t,n,r)})):[e.toString()]}function uv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mo(n)&&!fm(n))return!1}return!0}var Q4=Zy("6.0.8"),K4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uv(t),this.componentId=n,this.baseHash=so(Q4,n),this.baseStyle=r,cc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=mi(i,this.staticRulesId);else{var o=Pd(Vr(this.rules,t,n,r)),a=_d(so(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=mi(i,a),this.staticRulesId=a}else{for(var l=so(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var p=Pd(Vr(d,t,n,r));l=so(l,p+u),c+=p}}if(c){var g=_d(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=mi(i,g)}}return i},e}(),pm=me.createContext(void 0);pm.Consumer;var qu={};function G4(e,t,n){var r=fm(e),i=e,o=!Ku(e),a=t.attrs,s=a===void 0?Wc:a,l=t.componentId,c=l===void 0?function(v,T){var O=typeof v!="string"?"sc":S0(v);qu[O]=(qu[O]||0)+1;var _="".concat(O,"-").concat(ev("6.0.8"+O+qu[O]));return T?"".concat(T,"-").concat(_):_}(t.displayName,t.parentComponentId):l,u=t.displayName;u===void 0&&function(v){return Ku(v)?"styled.".concat(v):"Styled(".concat(k4(v),")")}(e);var d=t.displayName&&t.componentId?"".concat(S0(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;g=function(v,T){return y(v,T)&&x(v,T)}}else g=y}var C=new K4(n,d,r?i.componentStyle:void 0);function h(v,T){return function(O,_,E){var F=O.attrs,ee=O.componentStyle,B=O.defaultProps,ye=O.foldedComponentIds,V=O.styledComponentId,W=O.target,re=me.useContext(pm),de=Id(),Ee=O.shouldForwardProp||de.shouldForwardProp,Se=function(se,le,ge){for(var we,Ae=Mt(Mt({},le),{className:void 0,theme:ge}),_e=0;_e<se.length;_e+=1){var at=Mo(we=se[_e])?we(Ae):we;for(var Je in at)Ae[Je]=Je==="className"?mi(Ae[Je],at[Je]):Je==="style"?Mt(Mt({},Ae[Je]),at[Je]):at[Je]}return le.className&&(Ae.className=mi(Ae.className,le.className)),Ae}(F,_,qy(_,re,B)||Po),z=Se.as||W,$={};for(var M in Se)Se[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?$.as=Se.forwardedAs:Ee&&!Ee(M,z)||($[M]=Se[M]));var te=function(se,le){var ge=Id(),we=se.generateAndInjectStyles(le,ge.styleSheet,ge.stylis);return we}(ee,Se),Y=mi(ye,V);return te&&(Y+=" "+te),Se.className&&(Y+=" "+Se.className),$[Ku(z)&&!Jy.has(z)?"class":"className"]=Y,$.ref=E,k.createElement(z,$)}(m,v,T)}var m=me.forwardRef(h);return m.attrs=p,m.componentStyle=C,m.shouldForwardProp=g,m.foldedComponentIds=r?mi(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=d,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(T){for(var O=[],_=1;_<arguments.length;_++)O[_-1]=arguments[_];for(var E=0,F=O;E<F.length;E++)Md(T,F[E],!0);return T}({},i.defaultProps,v):v}}),dm(m,function(){return".".concat(m.styledComponentId)}),o&&iv(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function D0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var _0=function(e){return Object.assign(e,{isCss:!0})};function fv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Mo(e)||as(e)){var r=e;return _0(Vr(D0(Wc,os([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Vr(i):_0(Vr(D0(i,t)))}function $d(e,t,n){if(n===void 0&&(n=Po),!t)throw Ss(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,fv.apply(void 0,os([i],o,!1)))};return r.attrs=function(i){return $d(e,t,Mt(Mt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $d(e,t,Mt(Mt({},n),i))},r}var dv=function(e){return $d(G4,e)},D=dv;Jy.forEach(function(e){D[e]=dv(e)});var q4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=uv(t),cc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Pd(Vr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&cc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function J4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fv.apply(void 0,os([e],t,!1)),i="sc-global-".concat(ev(JSON.stringify(r))),o=new q4(r,i),a=function(l){var c=Id(),u=me.useContext(pm),d=me.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(d,l,c.styleSheet,u,c.stylis),me.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function s(l,c,u,d,p){if(o.isStatic)o.renderStyles(l,y4,u,p);else{var g=Mt(Mt({},c),{theme:qy(c,d,a.defaultProps)});o.renderStyles(l,g,u,p)}}return me.memo(a)}const Z4=D.header`
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  position: absolute;
  z-index: 100;
  width: 100%;
`,e6=D.div`
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 20px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 100px;
  }
`,t6=D.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,pv=D(Pi)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  @media (min-width: 768px) {
    gap: 14px;

    font-size: 18px;
    line-height: 1.222;
  }

  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
  }
`,n6=D.button`
  background-color: transparent;
  border: none;
  line-height: 0;
  padding: 0;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
  }

  @media (min-width: 1440px) {
    display: none;
  }
`,Pn=D.svg`
  width: ${e=>e.size||"12px"};
  height: ${e=>e.size||"12px"};
  fill: ${e=>e.color||"#ffffff"};
  margin-right: ${e=>e.marginRight||"0"};
  margin-left: ${e=>e.marginLeft||"0"};
  /* opacity: ${({visible:e})=>e?"1":"0"}; */

  display: inline-block;

  @media (min-width: 768px) {
    width: ${e=>e.size768||"20px"};
    height: ${e=>e.size768||"20px"};
  }

  @media (min-width: 1440px) {
    width: ${e=>e.size1440||"30px"};
    height: ${e=>e.size1440||"30px"};
  }
`,Ft="/Drink_master/assets/sprite-ab7c71d5.svg",mt={HOME:"/",DRINKS:"/drinks",MYDRINKS:"/mydrinks",ADDDRINK:"/adddrink",ABOUTDRINK:"/drinks/:drinkId",FAVORITE:"/favorites",START:"/start",REGISTRATION:"/registration",LOGIN:"/login",ERROR:"*",DROPDOWN:"/dropdown"},r6=D.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1439px) {
    display: none;
  }
`,la=D(vs)`
  padding: 8px 16px;

  color: #f3f3f3;
  font-weight: 500;
  line-height: 1.6;

  background-color: transparent;
  border: 1px solid grey;

  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #161f37;
  }

  &.active {
    background-color: #161f37;
  }
`,i6=()=>f.jsxs(r6,{children:[f.jsx("li",{children:f.jsx(la,{to:mt.HOME,children:"Home"})}),f.jsx("li",{children:f.jsx(la,{to:mt.DRINKS,children:"Drinks"})}),f.jsx("li",{children:f.jsx(la,{to:mt.ADDDRINK,children:"Add drinks"})}),f.jsx("li",{children:f.jsx(la,{to:mt.MYDRINKS,children:"My drinks"})}),f.jsx("li",{children:f.jsx(la,{to:mt.FAVORITE,children:"Favorites "})})]}),o6=D.div`
  width: 32px;
  height: 32px;

  border-radius: 32px;
  background-color: #f3f3f3;

  /* background:
    url(<path-to-image>),
    lightgray -11.36px 0px / 157.912% 105.357% no-repeat,
    #f3f3f3; */

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background-color: white;
  }

  @media (min-width: 1280px) {
  }
`,a6=D.img`
  width: 32px;
  height: 32px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,s6=D.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 2px;

  background-color: transparent;
  border: none;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  @media (min-width: 375px) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    gap: 14px;
    margin-right: 24px;
  }
  @media (min-width: 1280px) {
    gap: 14px;
    margin-right: 0px;
  }
`,l6=({onClick:e})=>f.jsxs(s6,{onClick:e,children:[f.jsx(o6,{children:f.jsx(a6,{src:"./src/assets/userlogo@2x.png"})}),"Victoria"]}),ca="/Drink_master/assets/ellipse-mobile-blue-f82bbc5e.png",ua="/Drink_master/assets/ellipse-mobile-yellow-932cd110.png",fa="/Drink_master/assets/ellipseright-bottom-mobile-baf8b619.png",ei="/Drink_master/assets/ellipse-blue-tablet-ef1f5de2.png",ti="/Drink_master/assets/ellipse-yellow-tablet-4307eb80.png",c6=D.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: #0a0a11;
  overflow: hidden;
  /* pointer-events: none; */

  background-image: url(${ca}), url(${ua}),
    url(${fa});
  background-position:
    110% 90%,
    60% -130px,
    -15% -170%;
  background-size: auto;
  background-repeat: no-repeat;
  @media (min-width: 475px) {
    background-image: url(${ca}), url(${ua}),
      url(${fa});
    background-position:
      140% 90%,
      70% -130px,
      -40% -170%;
  }
  @media (min-width: 575px) {
    background-image: url(${ca}), url(${ua}),
      url(${fa});
    background-position:
      170% 90%,
      120% -130px,
      -80% -170%;
  }
  @media (min-width: 675px) {
    background-image: url(${ca}), url(${ua}),
      url(${fa});
    background-position:
      220% 90%,
      160% -130px,
      -120% -170%;
  }
  @media (min-width: 720px) {
    background-image: url(${ca}), url(${ua}),
      url(${fa});
    background-position:
      270% 90%,
      -300% -130px,
      -160% -170%;
  }
  @media (min-width: 768px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -400px -65px,
      450px 300px;
  }
  @media (min-width: 900px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      500px 300px;
  }
  @media (min-width: 1000px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      600px 300px;
  }
  @media (min-width: 1100px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      700px 300px;
  }
  @media (min-width: 1200px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      800px 300px;
  }
  @media (min-width: 1300px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      900px 300px;
  }
  @media (min-width: 1400px) {
    background-image: url(${ti}), url(${ei});
    background-position:
      -450px -65px,
      1000px 300px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`,u6=D.div`
  padding: 232px 20px 200px;
  height: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    padding: 340px 20px 200px;
  }
`,f6=D.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
  }
`,da=D.li`
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
`,pa=D(vs)`
  display: inline-block;
  padding: 8px 16px;
  color: #f3f3f3;
  font-weight: 500;
  line-height: 1.6;

  background-color: transparent;
  width: 100%;
  border-radius: 40px;
  /* border: 1px solid rgba(243, 243, 243, 0.2);  */
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #161f37;
  }

  /* &.active {
    background-color: #161f37;
  } */
`,d6=({isOpen:e,onClose:t})=>(console.log(e),f.jsx(c6,{children:f.jsx(u6,{children:f.jsxs(f6,{children:[f.jsx(da,{children:f.jsx(pa,{to:mt.HOME,onClick:t,children:"Home"})}),f.jsx(da,{children:f.jsx(pa,{to:mt.DRINKS,onClick:t,children:"Drinks"})}),f.jsx(da,{children:f.jsx(pa,{to:mt.ADDDRINK,onClick:t,children:"Add drink"})}),f.jsx(da,{children:f.jsx(pa,{to:mt.MYDRINKS,onClick:t,children:"My drinks"})}),f.jsx(da,{children:f.jsx(pa,{to:mt.FAVORITE,onClick:t,children:"Favorites"})})]})})}));function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function mv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ld(e,t){return Ld=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ld(e,t)}function hv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ld(e,t)}function p6(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function m6(e,t){e.classList?e.classList.add(t):p6(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function P0(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function h6(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=P0(e.className,t):e.setAttribute("class",P0(e.className&&e.className.baseVal||"",t))}const M0={disabled:!1},gv=me.createContext(null);var xv=function(t){return t.scrollTop},ka="unmounted",oi="exited",ai="entering",Qi="entered",Fd="exiting",vr=function(e){hv(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var a=i,s=a&&!a.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?s?(l=oi,o.appearStatus=ai):l=Qi:r.unmountOnExit||r.mountOnEnter?l=ka:l=oi,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var a=i.in;return a&&o.status===ka?{status:oi}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var a=this.state.status;this.props.in?a!==ai&&a!==Qi&&(o=ai):(a===ai||a===Qi)&&(o=Fd)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,a,s;return o=a=s=i,i!=null&&typeof i!="number"&&(o=i.exit,a=i.enter,s=i.appear!==void 0?i.appear:a),{exit:o,enter:a,appear:s}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===ai){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Ks.findDOMNode(this);a&&xv(a)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===oi&&this.setState({status:ka})},n.performEnter=function(i){var o=this,a=this.props.enter,s=this.context?this.context.isMounting:i,l=this.props.nodeRef?[s]:[Ks.findDOMNode(this),s],c=l[0],u=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!i&&!a||M0.disabled){this.safeSetState({status:Qi},function(){o.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:ai},function(){o.props.onEntering(c,u),o.onTransitionEnd(p,function(){o.safeSetState({status:Qi},function(){o.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,o=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Ks.findDOMNode(this);if(!o||M0.disabled){this.safeSetState({status:oi},function(){i.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Fd},function(){i.props.onExiting(s),i.onTransitionEnd(a.exit,function(){i.safeSetState({status:oi},function(){i.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,o.nextCallback=null,i(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var a=this.props.nodeRef?this.props.nodeRef.current:Ks.findDOMNode(this),s=i==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ka)return null;var o=this.props,a=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var s=mv(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return me.createElement(gv.Provider,{value:null},typeof a=="function"?a(i,s):me.cloneElement(me.Children.only(a),s))},t}(me.Component);vr.contextType=gv;vr.propTypes={};function Yi(){}vr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Yi,onEntering:Yi,onEntered:Yi,onExit:Yi,onExiting:Yi,onExited:Yi};vr.UNMOUNTED=ka;vr.EXITED=oi;vr.ENTERING=ai;vr.ENTERED=Qi;vr.EXITING=Fd;const g6=vr;var x6=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return m6(t,r)})},Ju=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return h6(t,r)})},mm=function(e){hv(t,e);function t(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(s,l){var c=r.resolveArguments(s,l),u=c[0],d=c[1];r.removeClasses(u,"exit"),r.addClass(u,d?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(s,l)},r.onEntering=function(s,l){var c=r.resolveArguments(s,l),u=c[0],d=c[1],p=d?"appear":"enter";r.addClass(u,p,"active"),r.props.onEntering&&r.props.onEntering(s,l)},r.onEntered=function(s,l){var c=r.resolveArguments(s,l),u=c[0],d=c[1],p=d?"appear":"enter";r.removeClasses(u,p),r.addClass(u,p,"done"),r.props.onEntered&&r.props.onEntered(s,l)},r.onExit=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"appear"),r.removeClasses(c,"enter"),r.addClass(c,"exit","base"),r.props.onExit&&r.props.onExit(s)},r.onExiting=function(s){var l=r.resolveArguments(s),c=l[0];r.addClass(c,"exit","active"),r.props.onExiting&&r.props.onExiting(s)},r.onExited=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"exit"),r.addClass(c,"exit","done"),r.props.onExited&&r.props.onExited(s)},r.resolveArguments=function(s,l){return r.props.nodeRef?[r.props.nodeRef.current,s]:[s,l]},r.getClassNames=function(s){var l=r.props.classNames,c=typeof l=="string",u=c&&l?l+"-":"",d=c?""+u+s:l[s],p=c?d+"-active":l[s+"Active"],g=c?d+"-done":l[s+"Done"];return{baseClassName:d,activeClassName:p,doneClassName:g}},r}var n=t.prototype;return n.addClass=function(i,o,a){var s=this.getClassNames(o)[a+"ClassName"],l=this.getClassNames("enter"),c=l.doneClassName;o==="appear"&&a==="done"&&c&&(s+=" "+c),a==="active"&&i&&xv(i),s&&(this.appliedClasses[o][a]=s,x6(i,s))},n.removeClasses=function(i,o){var a=this.appliedClasses[o],s=a.base,l=a.active,c=a.done;this.appliedClasses[o]={},s&&Ju(i,s),l&&Ju(i,l),c&&Ju(i,c)},n.render=function(){var i=this.props;i.classNames;var o=mv(i,["classNames"]);return me.createElement(g6,uc({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(me.Component);mm.defaultProps={classNames:""};mm.propTypes={};const y6=mm,v6=D.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding-top: 60px;
  padding-right: 20px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-right: 90px;
  }
`,w6=D.div`
  background-color: #161F37;
  border-radius: 8px;
  width: 177px;
  height: 134px;
  margin: 2px;
 
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,b6=D.button`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0;
  width: 171px;
  height: 18px;
  padding: 18px;
  border: none;
  border-radius: 42px;
  background-color: transparent;
  cursor: pointer;
  color: #F3F3F3;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
`,k6=D.button`
  display: block;
  padding: 12px 45px;
  margin-top: 20px; 
  border-radius: 42px;
  outline: none;
  border: none;
  background-color: #434D67;
  color: #F3F3F3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: background-color 0.5s ease;
  &:hover {
       /* box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset; */
    background-color: #F3F3F3;
  color: #161f37;
  }
  `,yv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADISURBVHgB7ZLLDcIwDIbjPq5Vu0HYoCOUTdgAMQGrwAbdoGwAG7QbBLWVcsmD31I4cGqTM5YsJ3/8ObZkEhGmlKoRWvjUNM0UwzLcLsui4D74lXXaCxdFMXjv37heiKhDPBtjDlkMbK09VlXVA+z5DbqkGJjnhibLshycc4I1sTXzPM8jQ0GT67qO0BS//+FfWCbDbEi6cYEkmA3wE8l9CkwMYFlGnB9Ba7E4IizOa6tAluf595cOoES874VFaLlGuyettRQJ9gHaSjLjV6cT/QAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC",vv=({handleOpenUserInfoModal:e,handleLogOutModelOpen:t,handleModalClick:n,handleKeyDown:r})=>(k.useState(!1),f.jsx(v6,{children:f.jsxs(w6,{onClick:n,onKeyDown:r,children:[f.jsxs(b6,{onClick:()=>{e()},children:["Edit profile",f.jsx("img",{src:yv,alt:"pencil",width:"14"})]}),f.jsx(k6,{onClick:t,children:"Log out"})]})})),C6=D.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 150px;
`,S6=D.div`
  background-color: #161F37;
  border-radius: 8px;
  width: 335px;
  height: 193px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 215px;
  }
`,E6=D.button`
margin-top: 14px;
margin-left: 297px;
margin-bottom: 12px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 18px;
    margin-left: 450px;
    margin-right: 0;
  }
`,T6=D.h1`
color: #F3F3F3;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.29; 
letter-spacing: -0.28px;
margin-bottom: 25px;
@media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33; 
  }
`,A6=D.div`
width: 285px;
display: flex;
align-items: center;
justify-content: space-between;
  margin: 25px;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-top: 12px;
    margin-left: 50px;
  }
`,R0=D.button`
  display: block;
  padding: 16px 41px;
  border-radius: 42px;
  outline: none;
  border: none;
  background-color: #434D67;
  color: #f3f3f3;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
@media screen and (min-width: 768px) {
    padding: 18px 69px;
  }
`;var wv={exports:{}};(function(e){(function(t,n){e.exports=n(t)})(typeof sl>"u"?typeof window>"u"?sl:window:sl,function(t){if(typeof t>"u"&&typeof t.document>"u")return!1;var n,r,i,o,a,s=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},u={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},p={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Show:"Show",Ask:"Ask",Prompt:"Prompt"},y={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},C={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},m={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},v=function(S){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+S+s)},T=function(S){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+S+s)},O=function(S){return S||(S="head"),t.document[S]!==null||(v(`
Notiflix needs to be appended to the "<`+S+'>" element, but you called it before the "<'+S+'>" element has been created.'),!1)},_=function(S,A){if(!O("head"))return!1;if(S()!==null&&!t.document.getElementById(A)){var P=t.document.createElement("style");P.id=A,P.innerHTML=S(),t.document.head.appendChild(P)}},E=function(){var S={},A=!1,P=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(A=arguments[0],P++);for(var q=function(J){for(var fe in J)Object.prototype.hasOwnProperty.call(J,fe)&&(S[fe]=A&&Object.prototype.toString.call(J[fe])==="[object Object]"?E(S[fe],J[fe]):J[fe])};P<arguments.length;P++)q(arguments[P]);return S},F=function(S){var A=t.document.createElement("div");return A.innerHTML=S,A.textContent||A.innerText||""},ee=function(S,A){S||(S="110px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+S+'" height="'+S+'" fill="'+A+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return P},B=function(S,A){S||(S="110px"),A||(A="#ff5549");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+S+'" height="'+S+'" fill="'+A+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return P},ye=function(S,A){S||(S="110px"),A||(A="#eebf31");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+S+'" height="'+S+'" fill="'+A+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return P},V=function(S,A){S||(S="110px"),A||(A="#26c0d3");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+S+'" height="'+S+'" fill="'+A+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return P},W=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+A+'" width="'+S+'" height="'+S+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return P},re=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+A+'" width="'+S+'" height="'+S+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return P},de=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" width="'+S+'" height="'+S+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+S+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+S+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+A+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return P},Ee=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" fill="'+A+'" width="'+S+'" height="'+S+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return P},Se=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" fill="'+A+'" width="'+S+'" height="'+S+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return P},z=function(S,A){S||(S="60px"),A||(A="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+A+'" width="'+S+'" height="'+S+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return P},$=function(S,A,P){S||(S="60px"),A||(A="#f8f8f8"),P||(P="#32c682");var q='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+S+'" height="'+S+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+A+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+P+'" stroke="'+P+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return q},M=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},te=0,Y=function(S,A,P,q){if(!O("body"))return!1;n||$e.Notify.init({});var J=E(!0,n,{});if(typeof P=="object"&&!Array.isArray(P)||typeof q=="object"&&!Array.isArray(q)){var fe={};typeof P=="object"?fe=P:typeof q=="object"&&(fe=q),n=E(!0,n,fe)}var pe=n[S.toLocaleLowerCase("en")];te++,typeof A!="string"&&(A="Notiflix "+S),n.plainText&&(A=F(A)),!n.plainText&&A.length>n.messageMaxLength&&(n=E(!0,n,{closeButton:!0,messageMaxLength:150}),A='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),A.length>n.messageMaxLength&&(A=A.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(pe.fontAwesomeIconColor=pe.background),n.cssAnimation||(n.cssAnimationDuration=0);var X=t.document.getElementById(u.wrapID)||t.document.createElement("div");if(X.id=u.wrapID,X.style.width=n.width,X.style.zIndex=n.zindex,X.style.opacity=n.opacity,n.position==="center-center"?(X.style.left=n.distance,X.style.top=n.distance,X.style.right=n.distance,X.style.bottom=n.distance,X.style.margin="auto",X.classList.add("nx-flex-center-center"),X.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",X.style.display="flex",X.style.flexWrap="wrap",X.style.flexDirection="column",X.style.justifyContent="center",X.style.alignItems="center",X.style.pointerEvents="none"):n.position==="center-top"?(X.style.left=n.distance,X.style.right=n.distance,X.style.top=n.distance,X.style.bottom="auto",X.style.margin="auto"):n.position==="center-bottom"?(X.style.left=n.distance,X.style.right=n.distance,X.style.bottom=n.distance,X.style.top="auto",X.style.margin="auto"):n.position==="right-bottom"?(X.style.right=n.distance,X.style.bottom=n.distance,X.style.top="auto",X.style.left="auto"):n.position==="left-top"?(X.style.left=n.distance,X.style.top=n.distance,X.style.right="auto",X.style.bottom="auto"):n.position==="left-bottom"?(X.style.left=n.distance,X.style.bottom=n.distance,X.style.top="auto",X.style.right="auto"):(X.style.right=n.distance,X.style.top=n.distance,X.style.left="auto",X.style.bottom="auto"),n.backOverlay){var N=t.document.getElementById(u.overlayID)||t.document.createElement("div");N.id=u.overlayID,N.style.width="100%",N.style.height="100%",N.style.position="fixed",N.style.zIndex=n.zindex-1,N.style.left=0,N.style.top=0,N.style.right=0,N.style.bottom=0,N.style.background=pe.backOverlayColor||n.backOverlayColor,N.className=n.cssAnimation?"nx-with-animation":"",N.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",t.document.getElementById(u.overlayID)||t.document.body.appendChild(N)}t.document.getElementById(u.wrapID)||t.document.body.appendChild(X);var I=t.document.createElement("div");I.id=n.ID+"-"+te,I.className=n.className+" "+pe.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof P!="function"?"nx-with-close-button":"")+" "+(typeof P=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),I.style.fontSize=n.fontSize,I.style.color=pe.textColor,I.style.background=pe.background,I.style.borderRadius=n.borderRadius,I.style.pointerEvents="all",n.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.fontFamily='"'+n.fontFamily+'", '+l,n.cssAnimation&&(I.style.animationDuration=n.cssAnimationDuration+"ms");var H="";if(n.closeButton&&typeof P!="function"&&(H='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+pe.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)I.innerHTML='<span class="nx-message">'+A+"</span>"+(n.closeButton?H:"");else if(n.useFontAwesome)I.innerHTML='<i style="color:'+pe.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+pe.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+A+"</span>"+(n.closeButton?H:"");else{var G="";S===c.Success?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+pe.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':S===c.Failure?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+pe.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':S===c.Warning?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+pe.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':S===c.Info&&(G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+pe.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),I.innerHTML=G+'<span class="nx-message nx-with-icon">'+A+"</span>"+(n.closeButton?H:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var oe=t.document.getElementById(u.wrapID);oe.insertBefore(I,oe.firstChild)}else t.document.getElementById(u.wrapID).appendChild(I);var ce=t.document.getElementById(I.id);if(ce){var ue,Ne,Ce=function(){ce.classList.add("nx-remove");var xe=t.document.getElementById(u.overlayID);xe&&0>=X.childElementCount&&xe.classList.add("nx-remove"),clearTimeout(ue)},kt=function(){if(ce&&ce.parentNode!==null&&ce.parentNode.removeChild(ce),0>=X.childElementCount&&X.parentNode!==null){X.parentNode.removeChild(X);var xe=t.document.getElementById(u.overlayID);xe&&xe.parentNode!==null&&xe.parentNode.removeChild(xe)}clearTimeout(Ne)};if(n.closeButton&&typeof P!="function"){var Nt=t.document.getElementById(I.id).querySelector("span.nx-close-button");Nt.addEventListener("click",function(){Ce();var xe=setTimeout(function(){kt(),clearTimeout(xe)},n.cssAnimationDuration)})}if((typeof P=="function"||n.clickToClose)&&ce.addEventListener("click",function(){typeof P=="function"&&P(),Ce();var xe=setTimeout(function(){kt(),clearTimeout(xe)},n.cssAnimationDuration)}),!n.closeButton&&typeof P!="function"){var xt=function(){ue=setTimeout(function(){Ce()},n.timeout),Ne=setTimeout(function(){kt()},n.timeout+n.cssAnimationDuration)};xt(),n.pauseOnHover&&(ce.addEventListener("mouseenter",function(){ce.classList.add("nx-paused"),clearTimeout(ue),clearTimeout(Ne)}),ce.addEventListener("mouseleave",function(){ce.classList.remove("nx-paused"),xt()}))}}if(n.showOnlyTheLastOne&&0<te)for(var st,he=t.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+te+"])"),mn=0;mn<he.length;mn++)st=he[mn],st.parentNode!==null&&st.parentNode.removeChild(st);n=E(!0,n,J)},se=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},le=function(S,A,P,q,J,fe){if(!O("body"))return!1;r||$e.Report.init({});var pe={};if(typeof J=="object"&&!Array.isArray(J)||typeof fe=="object"&&!Array.isArray(fe)){var X={};typeof J=="object"?X=J:typeof fe=="object"&&(X=fe),pe=E(!0,r,{}),r=E(!0,r,X)}var N=r[S.toLocaleLowerCase("en")];typeof A!="string"&&(A="Notiflix "+S),typeof P!="string"&&(S===d.Success?P='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':S===d.Failure?P='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':S===d.Warning?P='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':S===d.Info&&(P='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof q!="string"&&(q="Okay"),r.plainText&&(A=F(A),P=F(P),q=F(q)),r.plainText||(A.length>r.titleMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',q="Okay"),P.length>r.messageMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',q="Okay"),q.length>r.buttonMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',q="Okay")),A.length>r.titleMaxLength&&(A=A.substring(0,r.titleMaxLength)+"..."),P.length>r.messageMaxLength&&(P=P.substring(0,r.messageMaxLength)+"..."),q.length>r.buttonMaxLength&&(q=q.substring(0,r.buttonMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var I=t.document.createElement("div");I.id=p.ID,I.className=r.className,I.style.zIndex=r.zindex,I.style.borderRadius=r.borderRadius,I.style.fontFamily='"'+r.fontFamily+'", '+l,r.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center";var H="",G=r.backOverlayClickToClose===!0;r.backOverlay&&(H='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+(G?" nx-report-click-to-close":"")+'" style="background:'+(N.backOverlayColor||r.backOverlayColor)+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var oe="";if(S===d.Success?oe=ee(r.svgSize,N.svgColor):S===d.Failure?oe=B(r.svgSize,N.svgColor):S===d.Warning?oe=ye(r.svgSize,N.svgColor):S===d.Info&&(oe=V(r.svgSize,N.svgColor)),I.innerHTML=H+'<div class="'+r.className+"-content"+(r.cssAnimation?" nx-with-animation ":"")+" nx-"+r.cssAnimationStyle+'" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+'ms;"><div style="width:'+r.svgSize+"; height:"+r.svgSize+';" class="'+r.className+'-icon">'+oe+'</div><h5 class="'+r.className+'-title" style="font-weight:500; font-size:'+r.titleFontSize+"; color:"+N.titleColor+';">'+A+'</h5><p class="'+r.className+'-message" style="font-size:'+r.messageFontSize+"; color:"+N.messageColor+';">'+P+'</p><a id="NXReportButton" class="'+r.className+'-button" style="font-weight:500; font-size:'+r.buttonFontSize+"; background:"+N.buttonBackground+"; color:"+N.buttonColor+';">'+q+"</a></div>",!t.document.getElementById(I.id)){t.document.body.appendChild(I);var ce=function(){var Ce=t.document.getElementById(I.id);Ce.classList.add("nx-remove");var kt=setTimeout(function(){Ce.parentNode!==null&&Ce.parentNode.removeChild(Ce),clearTimeout(kt)},r.cssAnimationDuration)},ue=t.document.getElementById("NXReportButton");if(ue.addEventListener("click",function(){typeof J=="function"&&J(),ce()}),H&&G){var Ne=t.document.querySelector(".nx-report-click-to-close");Ne.addEventListener("click",function(){ce()})}}r=E(!0,r,pe)},ge=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},we=function(S,A,P,q,J,fe,pe,X,N){if(!O("body"))return!1;i||$e.Confirm.init({});var I=E(!0,i,{});typeof N!="object"||Array.isArray(N)||(i=E(!0,i,N)),typeof A!="string"&&(A="Notiflix Confirm"),typeof P!="string"&&(P="Do you agree with me?"),typeof J!="string"&&(J="Yes"),typeof fe!="string"&&(fe="No"),typeof pe!="function"&&(pe=void 0),typeof X!="function"&&(X=void 0),i.plainText&&(A=F(A),P=F(P),J=F(J),fe=F(fe)),i.plainText||(A.length>i.titleMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',J="Okay",fe="..."),P.length>i.messageMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',J="Okay",fe="..."),(J.length||fe.length)>i.buttonsMaxLength&&(A="Possible HTML Tags Error",P='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',J="Okay",fe="...")),A.length>i.titleMaxLength&&(A=A.substring(0,i.titleMaxLength)+"..."),P.length>i.messageMaxLength&&(P=P.substring(0,i.messageMaxLength)+"..."),J.length>i.buttonsMaxLength&&(J=J.substring(0,i.buttonsMaxLength)+"..."),fe.length>i.buttonsMaxLength&&(fe=fe.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var H=t.document.createElement("div");H.id=y.ID,H.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),H.style.zIndex=i.zindex,H.style.padding=i.distance,i.rtl&&(H.setAttribute("dir","rtl"),H.classList.add("nx-rtl-on"));var G=typeof i.position=="string"?i.position.trim():"center";H.classList.add("nx-position-"+G),H.style.fontFamily='"'+i.fontFamily+'", '+l;var oe="";i.backOverlay&&(oe='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var ce="";typeof pe=="function"&&(ce='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+fe+"</a>");var ue="",Ne=null,Ce=void 0;if(S===g.Ask||S===g.Prompt){Ne=q||"";var kt=S===g.Ask||200<Ne.length?Math.ceil(1.5*Ne.length):250,Nt=S===g.Prompt?'value="'+Ne+'"':"";ue='<div><input id="NXConfirmValidationInput" type="text" '+Nt+' maxlength="'+kt+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(H.innerHTML=oe+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+A+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+P+ue+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof pe=="function"?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+J+"</a>"+ce+"</div></div>",!t.document.getElementById(H.id)){t.document.body.appendChild(H);var xt=t.document.getElementById(H.id),st=t.document.getElementById("NXConfirmButtonOk"),he=t.document.getElementById("NXConfirmValidationInput");if(he&&(he.focus(),he.setSelectionRange(0,(he.value||"").length),he.addEventListener("keyup",function(xe){var br=xe.target.value;if(S===g.Ask&&br!==Ne)xe.preventDefault(),he.classList.add("nx-validation-failure"),he.classList.remove("nx-validation-success");else{S===g.Ask&&(he.classList.remove("nx-validation-failure"),he.classList.add("nx-validation-success"));var zn=(xe.key||"").toLocaleLowerCase("en")==="enter"||xe.keyCode===13;zn&&st.dispatchEvent(new Event("click"))}})),st.addEventListener("click",function(xe){if(S===g.Ask&&Ne&&he){var br=(he.value||"").toString();if(br!==Ne)return he.focus(),he.classList.add("nx-validation-failure"),xe.stopPropagation(),xe.preventDefault(),xe.returnValue=!1,xe.cancelBubble=!0,!1;he.classList.remove("nx-validation-failure")}typeof pe=="function"&&(S===g.Prompt&&he&&(Ce=he.value||""),pe(Ce)),xt.classList.add("nx-remove");var zn=setTimeout(function(){xt.parentNode!==null&&(xt.parentNode.removeChild(xt),clearTimeout(zn))},i.cssAnimationDuration)}),typeof pe=="function"){var mn=t.document.getElementById("NXConfirmButtonCancel");mn.addEventListener("click",function(){typeof X=="function"&&(S===g.Prompt&&he&&(Ce=he.value||""),X(Ce)),xt.classList.add("nx-remove");var xe=setTimeout(function(){xt.parentNode!==null&&(xt.parentNode.removeChild(xt),clearTimeout(xe))},i.cssAnimationDuration)})}}i=E(!0,i,I)},Ae=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},_e=function(S,A,P,q,J){if(!O("body"))return!1;o||$e.Loading.init({});var fe=E(!0,o,{});if(typeof A=="object"&&!Array.isArray(A)||typeof P=="object"&&!Array.isArray(P)){var pe={};typeof A=="object"?pe=A:typeof P=="object"&&(pe=P),o=E(!0,o,pe)}var X="";if(typeof A=="string"&&0<A.length&&(X=A),q){X=X.length>o.messageMaxLength?F(X).toString().substring(0,o.messageMaxLength)+"...":F(X).toString();var N="";0<X.length&&(N='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+X+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var I="";if(S===x.Standard)I=W(o.svgSize,o.svgColor);else if(S===x.Hourglass)I=re(o.svgSize,o.svgColor);else if(S===x.Circle)I=de(o.svgSize,o.svgColor);else if(S===x.Arrows)I=Ee(o.svgSize,o.svgColor);else if(S===x.Dots)I=Se(o.svgSize,o.svgColor);else if(S===x.Pulse)I=z(o.svgSize,o.svgColor);else if(S===x.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)I=o.customSvgCode||"";else if(S===x.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)I='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(S===x.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return v('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;I=$(o.svgSize,"#f8f8f8","#32c682")}var H=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),G=t.innerWidth,oe=H>=G?G-40+"px":H+"px",ce='<div style="width:'+oe+"; height:"+oe+';" class="'+o.className+"-icon"+(0<X.length?" nx-with-message":"")+'">'+I+"</div>",ue=t.document.createElement("div");if(ue.id=C.ID,ue.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),ue.style.zIndex=o.zindex,ue.style.background=o.backgroundColor,ue.style.animationDuration=o.cssAnimationDuration+"ms",ue.style.fontFamily='"'+o.fontFamily+'", '+l,ue.style.display="flex",ue.style.flexWrap="wrap",ue.style.flexDirection="column",ue.style.alignItems="center",ue.style.justifyContent="center",o.rtl&&(ue.setAttribute("dir","rtl"),ue.classList.add("nx-rtl-on")),ue.innerHTML=ce+N,!t.document.getElementById(ue.id)&&(t.document.body.appendChild(ue),o.clickToClose)){var Ne=t.document.getElementById(ue.id);Ne.addEventListener("click",function(){ue.classList.add("nx-remove");var Nt=setTimeout(function(){ue.parentNode!==null&&(ue.parentNode.removeChild(ue),clearTimeout(Nt))},o.cssAnimationDuration)})}}else if(t.document.getElementById(C.ID))var Ce=t.document.getElementById(C.ID),kt=setTimeout(function(){Ce.classList.add("nx-remove");var Nt=setTimeout(function(){Ce.parentNode!==null&&(Ce.parentNode.removeChild(Ce),clearTimeout(Nt))},o.cssAnimationDuration);clearTimeout(kt)},J);o=E(!0,o,fe)},at=function(S){typeof S!="string"&&(S="");var A=t.document.getElementById(C.ID);if(A)if(0<S.length){S=S.length>o.messageMaxLength?F(S).substring(0,o.messageMaxLength)+"...":F(S);var P=A.getElementsByTagName("p")[0];if(P)P.innerHTML=S;else{var q=t.document.createElement("p");q.id=o.messageID,q.className="nx-loading-message nx-loading-message-new",q.style.color=o.messageColor,q.style.fontSize=o.messageFontSize,q.innerHTML=S,A.appendChild(q)}}else v("Where is the new message?")},Je=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},Ze=0,et=function(S,A,P,q,J,fe){var pe;if(Array.isArray(P)){if(1>P.length)return v("Array of HTMLElements should contains at least one HTMLElement."),!1;pe=P}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,P)){if(1>P.length)return v("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;pe=Array.prototype.slice.call(P)}else{var X=typeof P!="string"||1>(P||"").length||(P||"").length===1&&((P||"")[0]==="#"||(P||"")[0]===".");if(X)return v("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var N=t.document.querySelectorAll(P);if(1>N.length)return v('You called the "Notiflix.Block..." function with "'+P+'" selector, but there is no such element(s) in the document.'),!1;pe=N}a||$e.Block.init({});var I=E(!0,a,{});if(typeof q=="object"&&!Array.isArray(q)||typeof J=="object"&&!Array.isArray(J)){var H={};typeof q=="object"?H=q:typeof J=="object"&&(H=J),a=E(!0,a,H)}var G="";typeof q=="string"&&0<q.length&&(G=q),a.cssAnimation||(a.cssAnimationDuration=0);var oe=m.className;typeof a.className=="string"&&(oe=a.className.trim());var ce=typeof a.querySelectorLimit=="number"?a.querySelectorLimit:200,ue=(pe||[]).length>=ce?ce:pe.length,Ne="nx-block-temporary-position";if(S){for(var Ce,kt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],Nt=0;Nt<ue;Nt++)if(Ce=pe[Nt],Ce){if(-1<kt.indexOf(Ce.tagName.toLocaleLowerCase("en")))break;var xt=Ce.querySelectorAll("[id^="+m.ID+"]");if(1>xt.length){var st="";A&&(A===h.Hourglass?st=re(a.svgSize,a.svgColor):A===h.Circle?st=de(a.svgSize,a.svgColor):A===h.Arrows?st=Ee(a.svgSize,a.svgColor):A===h.Dots?st=Se(a.svgSize,a.svgColor):A===h.Pulse?st=z(a.svgSize,a.svgColor):st=W(a.svgSize,a.svgColor));var he='<span class="'+oe+'-icon" style="width:'+a.svgSize+";height:"+a.svgSize+';">'+st+"</span>",mn="";0<G.length&&(G=G.length>a.messageMaxLength?F(G).substring(0,a.messageMaxLength)+"...":F(G),mn='<span style="font-size:'+a.messageFontSize+";color:"+a.messageColor+';" class="'+oe+'-message">'+G+"</span>"),Ze++;var xe=t.document.createElement("div");xe.id=m.ID+"-"+Ze,xe.className=oe+(a.cssAnimation?" nx-with-animation":""),xe.style.position=a.position,xe.style.zIndex=a.zindex,xe.style.background=a.backgroundColor,xe.style.animationDuration=a.cssAnimationDuration+"ms",xe.style.fontFamily='"'+a.fontFamily+'", '+l,xe.style.display="flex",xe.style.flexWrap="wrap",xe.style.flexDirection="column",xe.style.alignItems="center",xe.style.justifyContent="center",a.rtl&&(xe.setAttribute("dir","rtl"),xe.classList.add("nx-rtl-on")),xe.innerHTML=he+mn;var br=t.getComputedStyle(Ce).getPropertyValue("position"),zn=typeof br=="string"?br.toLocaleLowerCase("en"):"relative",Ui=Math.round(1.25*parseInt(a.svgSize))+40,An=Ce.offsetHeight||0,Jo="";Ui>An&&(Jo="min-height:"+Ui+"px;");var Ds="";Ds=Ce.getAttribute("id")?"#"+Ce.getAttribute("id"):Ce.classList[0]?"."+Ce.classList[0]:(Ce.tagName||"").toLocaleLowerCase("en");var w="",b=-1>=["absolute","relative","fixed","sticky"].indexOf(zn);if(b||0<Jo.length){if(!O("head"))return!1;b&&(w="position:relative!important;");var j='<style id="Style-'+m.ID+"-"+Ze+'">'+Ds+"."+Ne+"{"+w+Jo+"}</style>",R=t.document.createRange();R.selectNode(t.document.head);var Q=R.createContextualFragment(j);t.document.head.appendChild(Q),Ce.classList.add(Ne)}Ce.appendChild(xe)}}}else var Z=function(K){var ae=setTimeout(function(){K.parentNode!==null&&K.parentNode.removeChild(K);var je=K.getAttribute("id"),It=t.document.getElementById("Style-"+je);It&&It.parentNode!==null&&It.parentNode.removeChild(It),clearTimeout(ae)},a.cssAnimationDuration)},ve=function(K){if(K&&0<K.length)for(var ae,je=0;je<K.length;je++)ae=K[je],ae&&(ae.classList.add("nx-remove"),Z(ae));else T(typeof P=="string"?'"Notiflix.Block.remove();" function called with "'+P+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+P+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},ie=function(K){var ae=setTimeout(function(){K.classList.remove(Ne),clearTimeout(ae)},a.cssAnimationDuration+300)},be=setTimeout(function(){for(var K,ae=0;ae<ue;ae++)K=pe[ae],K&&(ie(K),xt=K.querySelectorAll("[id^="+m.ID+"]"),ve(xt));clearTimeout(be)},fe);a=E(!0,a,I)},$e={Notify:{init:function(S){n=E(!0,u,S),_(M,"NotiflixNotifyInternalCSS")},merge:function(S){return n?void(n=E(!0,n,S)):(v("You have to initialize the Notify module before call Merge function."),!1)},success:function(S,A,P){Y(c.Success,S,A,P)},failure:function(S,A,P){Y(c.Failure,S,A,P)},warning:function(S,A,P){Y(c.Warning,S,A,P)},info:function(S,A,P){Y(c.Info,S,A,P)}},Report:{init:function(S){r=E(!0,p,S),_(se,"NotiflixReportInternalCSS")},merge:function(S){return r?void(r=E(!0,r,S)):(v("You have to initialize the Report module before call Merge function."),!1)},success:function(S,A,P,q,J){le(d.Success,S,A,P,q,J)},failure:function(S,A,P,q,J){le(d.Failure,S,A,P,q,J)},warning:function(S,A,P,q,J){le(d.Warning,S,A,P,q,J)},info:function(S,A,P,q,J){le(d.Info,S,A,P,q,J)}},Confirm:{init:function(S){i=E(!0,y,S),_(ge,"NotiflixConfirmInternalCSS")},merge:function(S){return i?void(i=E(!0,i,S)):(v("You have to initialize the Confirm module before call Merge function."),!1)},show:function(S,A,P,q,J,fe,pe){we(g.Show,S,A,null,P,q,J,fe,pe)},ask:function(S,A,P,q,J,fe,pe,X){we(g.Ask,S,A,P,q,J,fe,pe,X)},prompt:function(S,A,P,q,J,fe,pe,X){we(g.Prompt,S,A,P,q,J,fe,pe,X)}},Loading:{init:function(S){o=E(!0,C,S),_(Ae,"NotiflixLoadingInternalCSS")},merge:function(S){return o?void(o=E(!0,o,S)):(v("You have to initialize the Loading module before call Merge function."),!1)},standard:function(S,A){_e(x.Standard,S,A,!0,0)},hourglass:function(S,A){_e(x.Hourglass,S,A,!0,0)},circle:function(S,A){_e(x.Circle,S,A,!0,0)},arrows:function(S,A){_e(x.Arrows,S,A,!0,0)},dots:function(S,A){_e(x.Dots,S,A,!0,0)},pulse:function(S,A){_e(x.Pulse,S,A,!0,0)},custom:function(S,A){_e(x.Custom,S,A,!0,0)},notiflix:function(S,A){_e(x.Notiflix,S,A,!0,0)},remove:function(S){typeof S!="number"&&(S=0),_e(null,null,null,!1,S)},change:function(S){at(S)}},Block:{init:function(S){a=E(!0,m,S),_(Je,"NotiflixBlockInternalCSS")},merge:function(S){return a?void(a=E(!0,a,S)):(v('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(S,A,P){et(!0,h.Standard,S,A,P)},hourglass:function(S,A,P){et(!0,h.Hourglass,S,A,P)},circle:function(S,A,P){et(!0,h.Circle,S,A,P)},arrows:function(S,A,P){et(!0,h.Arrows,S,A,P)},dots:function(S,A,P){et(!0,h.Dots,S,A,P)},pulse:function(S,A,P){et(!0,h.Pulse,S,A,P)},remove:function(S,A){typeof A!="number"&&(A=0),et(!1,null,S,null,null,A)}}};return typeof t.Notiflix=="object"?E(!0,t.Notiflix,{Notify:$e.Notify,Report:$e.Report,Confirm:$e.Confirm,Loading:$e.Loading,Block:$e.Block}):{Notify:$e.Notify,Report:$e.Report,Confirm:$e.Confirm,Loading:$e.Loading,Block:$e.Block}})})(wv);var N6=wv.exports;const j6=Di(N6),O6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7ZXBDYJAEEVnLUKJkliGR48WoRdtwTpsQS9ahEd7QSNVAMOEZLOZ3fmQcCH8hAvM/LcT/u665XZX0Yha0MiaAcMAn/ezffLNiixxTVcPA6Qxo9f9loTwN6nJojUq4Hi+UvH9JyG+OddyDwwofmUSoplzjyaX2mj5ujF6eEYXWSVqbgI0iEyAmUOAEMJCzVnYPnDguyGA8Ida6eoF0NKCRBgCxKJoRRgCWDnvA1FTJOeQHcUwwvvDCZugXSUQRX+SmNx8ZU4fUAO0SLAzbXQl4QAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC",D6=({onClose:e,handleModalClick:t,handleKeyDown:n})=>{const r=hp(),i=()=>{j6.Notify.success("The user log out successfully!"),console.log("The user log out successfully!"),r("/login"),e()};return f.jsxs(C6,{onClick:t,onKeyDown:n,children:[f.jsxs(S6,{children:[f.jsx(E6,{onClick:e,children:f.jsx("img",{src:O6,alt:"Close",width:24})}),f.jsx(T6,{children:"Are you sure you want to log out?"}),f.jsxs(A6,{children:[f.jsx(R0,{onClick:i,children:"Log out"}),f.jsx(R0,{onClick:e,children:"Cancel"})]})]}),"`"]})};function Ii(e){this._maxSize=e,this.clear()}Ii.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ii.prototype.get=function(e){return this._values[e]};Ii.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var _6=/[^.^\]^[]+|(?=\[\]|\.\.)/g,bv=/^\d+$/,P6=/^\d/,M6=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,R6=/^\s*(['"]?)(.*?)(\1)\s*$/,hm=512,I0=new Ii(hm),$0=new Ii(hm),L0=new Ii(hm),vi={Cache:Ii,split:zd,normalizePath:Zu,setter:function(e){var t=Zu(e);return $0.get(e)||$0.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Zu(e);return L0.get(e)||L0.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(gm(n)||bv.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){I6(Array.isArray(e)?e:zd(e),t,n)}};function Zu(e){return I0.get(e)||I0.set(e,zd(e).map(function(t){return t.replace(R6,"$2")}))}function zd(e){return e.match(_6)||[""]}function I6(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(F6(i)&&(i='"'+i+'"'),s=gm(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function gm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function $6(e){return e.match(P6)&&!e.match(bv)}function L6(e){return M6.test(e)}function F6(e){return!gm(e)&&($6(e)||L6(e))}const z6=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Hc=e=>e.match(z6)||[],Vc=e=>e[0].toUpperCase()+e.slice(1),xm=(e,t)=>Hc(e).join(t).toLowerCase(),kv=e=>Hc(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),B6=e=>Vc(kv(e)),U6=e=>xm(e,"_"),W6=e=>xm(e,"-"),H6=e=>Vc(xm(e," ")),V6=e=>Hc(e).map(Vc).join(" ");var ef={words:Hc,upperFirst:Vc,camelCase:kv,pascalCase:B6,snakeCase:U6,kebabCase:W6,sentenceCase:H6,titleCase:V6},ym={exports:{}};ym.exports=function(e){return Cv(Y6(e),e)};ym.exports.array=Cv;function Cv(e,t){var n=e.length,r=new Array(n),i={},o=n,a=X6(t),s=Q6(e);for(t.forEach(function(c){if(!s.has(c[0])||!s.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(c,u,d){if(d.has(c)){var p;try{p=", node was:"+JSON.stringify(c)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!s.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[u]){i[u]=!0;var g=a.get(c)||new Set;if(g=Array.from(g),u=g.length){d.add(c);do{var y=g[--u];l(y,s.get(y),d)}while(u);d.delete(c)}r[--n]=c}}}function Y6(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function X6(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Q6(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var K6=ym.exports;const G6=Di(K6),q6=Object.prototype.toString,J6=Error.prototype.toString,Z6=RegExp.prototype.toString,eC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",tC=/^Symbol\((.*)\)(.*)$/;function nC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function F0(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return nC(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return eC.call(e).replace(tC,"Symbol($1)");const r=q6.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+J6.call(e)+"]":r==="RegExp"?Z6.call(e):null}function go(e,t){let n=F0(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=F0(this[r],t);return o!==null?o:i},2)}function Sv(e){return e==null?[]:[].concat(e)}let rC=/\$\{\s*(\w+)\s*\}/g;class nn extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(rC,(i,o)=>go(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Sv(t).forEach(o=>{nn.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,nn)}}let ar={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${go(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${go(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${go(n,!0)}\``+i}},jn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},iC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Bd={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},oC={isValue:"${path} field must be ${value}"},Ud={noUnknown:"${path} field has unspecified keys: ${unknown}"},aC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:ar,string:jn,number:iC,date:Bd,object:Ud,array:aC,boolean:oC});const vm=e=>e&&e.__isYupSchema__;class fc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new fc(t,(s,l)=>{var c;let u=a(...s)?i:o;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!vm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const qs={context:"$",value:"."};class $i{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===qs.context,this.isValue=this.key[0]===qs.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?qs.context:this.isValue?qs.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&vi.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}$i.prototype.__isYupRef=!0;const hi=e=>e==null;function Xi(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:c,test:u,params:d,message:p,skipAbsent:g}=e;let{parent:y,context:x,abortEarly:C=a.spec.abortEarly}=i;function h(B){return $i.isRef(B)?B.getValue(n,y,x):B}function m(B={}){const ye=Object.assign({value:n,originalValue:o,label:a.spec.label,path:B.path||r,spec:a.spec},d,B.params);for(const W of Object.keys(ye))ye[W]=h(ye[W]);const V=new nn(nn.formatError(B.message||p,ye),n,ye.path,B.type||c);return V.params=ye,V}const v=C?s:l;let T={path:r,parent:y,type:c,from:i.from,createError:m,resolve:h,options:i,originalValue:o,schema:a};const O=B=>{nn.isError(B)?v(B):B?l(null):v(m())},_=B=>{nn.isError(B)?v(B):s(B)},E=g&&hi(n);if(!i.sync){try{Promise.resolve(E?!0:u.call(T,n,T)).then(O,_)}catch(B){_(B)}return}let F;try{var ee;if(F=E?!0:u.call(T,n,T),typeof((ee=F)==null?void 0:ee.then)=="function")throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(B){_(B);return}O(F)}return t.OPTIONS=e,t}function sC(e,t,n,r=n){let i,o,a;return t?(vi.forEach(t,(s,l,c)=>{let u=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",p=c?parseInt(u,10):0;if(e.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[p],e=d?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[u],e=e.fields[u]}o=u,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class dc extends Set{describe(){const t=[];for(const n of this.values())t.push($i.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new dc(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function lo(e,t=new Map){if(vm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=lo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,lo(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(lo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=lo(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Zn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new dc,this._blacklist=new dc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ar.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=lo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&hi(o))return o;let a=go(t),s=go(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:o,value:l,originalValue:a,options:n,tests:c},r,u=>{if(u.length)return i(u,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:c}=t,u=x=>{i||(i=!0,n(x,a))},d=x=>{i||(i=!0,r(x,a))},p=o.length,g=[];if(!p)return d([]);let y={value:a,originalValue:s,path:l,options:c,schema:this};for(let x=0;x<o.length;x++){const C=o[x];C(y,u,function(m){m&&(g=g.concat(m)),--p<=0&&d(g)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let c=r[s];const u=Object.assign({},a,{strict:!0,parent:r,value:c,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${c?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(d,p,g)=>this.resolve(u)._validate(c,u,p,g)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,s)=>{nn.isError(a)&&(a.value=s),o(a)},(a,s)=>{a.length?o(new nn(a,s)):i(s)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw nn.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new nn(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(nn.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(nn.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):lo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Xi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Xi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=ar.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=ar.notNull){return this.nullability(!1,t)}required(t=ar.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=ar.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Xi(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Sv(t).map(o=>new $i(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new fc(i,n):fc.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Xi({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=ar.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Xi({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=ar.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Xi({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(d=>d.name===l.name)===c)}}}Zn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Zn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=sC(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Zn.prototype[e]=Zn.prototype.oneOf;for(const e of["not","nope"])Zn.prototype[e]=Zn.prototype.notOneOf;let lC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,uC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,fC=e=>hi(e)||e===e.trim(),dC={}.toString();function Xn(){return new Ev}class Ev extends Zn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===dC?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||ar.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=jn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=jn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=jn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||jn.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=jn.email){return this.matches(lC,{name:"email",message:t,excludeEmptyString:!0})}url(t=jn.url){return this.matches(cC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=jn.uuid){return this.matches(uC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=jn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:fC})}lowercase(t=jn.lowercase){return this.transform(n=>hi(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hi(n)||n===n.toLowerCase()})}uppercase(t=jn.uppercase){return this.transform(n=>hi(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hi(n)||n===n.toUpperCase()})}}Xn.prototype=Ev.prototype;var pC=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function mC(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=pC.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let hC=new Date(""),gC=e=>Object.prototype.toString.call(e)==="[object Date]";class Yc extends Zn{constructor(){super({type:"date",check(t){return gC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=mC(t),isNaN(t)?Yc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if($i.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Bd.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Bd.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Yc.INVALID_DATE=hC;Yc.prototype;function xC(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=vi.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),$i.isRef(s)&&s.isSibling?o(s.path,a):vm(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return G6.array(Array.from(r),n).reverse()}function z0(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Tv(e){return(t,n)=>z0(e,t)-z0(e,n)}const yC=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Sl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Sl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Sl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Sl)}):"optional"in e?e.optional():e}const vC=(e,t)=>{const n=[...vi.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=vi.getter(vi.join(n),!0)(e);return!!(i&&r in i)};let B0=e=>Object.prototype.toString.call(e)==="[object Object]";function wC(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const bC=Tv([]);function Ho(e){return new Av(e)}class Av extends Zn{constructor(t){super({type:"object",check(n){return B0(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=bC,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const d of s){let p=o[d],g=d in i;if(p){let y,x=i[d];c.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:x,context:n.context,parent:l});let C=p instanceof Zn?p.spec:void 0,h=C==null?void 0:C.strict;if(C!=null&&C.strip){u=u||d in i;continue}y=!n.__validating||!h?p.cast(i[d],c):i[d],y!==void 0&&(l[d]=y)}else g&&!a&&(l[d]=i[d]);(g!==d in l||l[d]!==i[d])&&(u=!0)}return u?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,c)=>{if(!s||!B0(c)){i(l,c);return}a=a||c;let u=[];for(let d of this._nodes){let p=this.fields[d];!p||$i.isRef(p)||u.push(p.asNestedTest({options:n,key:d,parent:c,parentPath:n.path,originalParent:a}))}this.runTests({tests:u,value:c,originalValue:a,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=xC(t,n),r._sortErrors=Tv(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Sl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=vi.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return vC(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(yC)}noUnknown(t=!0,n=Ud.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=wC(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Ud.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(ef.camelCase)}snakeCase(){return this.transformKeys(ef.snakeCase)}constantCase(){return this.transformKeys(t=>ef.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Ho.prototype=Av.prototype;var kC=function(t){return CC(t)&&!SC(t)};function CC(e){return!!e&&typeof e=="object"}function SC(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||AC(e)}var EC=typeof Symbol=="function"&&Symbol.for,TC=EC?Symbol.for("react.element"):60103;function AC(e){return e.$$typeof===TC}function NC(e){return Array.isArray(e)?[]:{}}function pc(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ss(NC(e),e,t):e}function jC(e,t,n){return e.concat(t).map(function(r){return pc(r,n)})}function OC(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=pc(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=pc(t[i],n):r[i]=ss(e[i],t[i],n)}),r}function ss(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||jC,n.isMergeableObject=n.isMergeableObject||kC;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):OC(e,t,n):pc(t,n)}ss.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return ss(r,i,n)},{})};var Wd=ss,DC=typeof global=="object"&&global&&global.Object===Object&&global;const Nv=DC;var _C=typeof self=="object"&&self&&self.Object===Object&&self,PC=Nv||_C||Function("return this")();const er=PC;var MC=er.Symbol;const Kr=MC;var jv=Object.prototype,RC=jv.hasOwnProperty,IC=jv.toString,ma=Kr?Kr.toStringTag:void 0;function $C(e){var t=RC.call(e,ma),n=e[ma];try{e[ma]=void 0;var r=!0}catch{}var i=IC.call(e);return r&&(t?e[ma]=n:delete e[ma]),i}var LC=Object.prototype,FC=LC.toString;function zC(e){return FC.call(e)}var BC="[object Null]",UC="[object Undefined]",U0=Kr?Kr.toStringTag:void 0;function Li(e){return e==null?e===void 0?UC:BC:U0&&U0 in Object(e)?$C(e):zC(e)}function Ov(e,t){return function(n){return e(t(n))}}var WC=Ov(Object.getPrototypeOf,Object);const wm=WC;function Fi(e){return e!=null&&typeof e=="object"}var HC="[object Object]",VC=Function.prototype,YC=Object.prototype,Dv=VC.toString,XC=YC.hasOwnProperty,QC=Dv.call(Object);function W0(e){if(!Fi(e)||Li(e)!=HC)return!1;var t=wm(e);if(t===null)return!0;var n=XC.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Dv.call(n)==QC}var H0=Array.isArray,V0=Object.keys,KC=Object.prototype.hasOwnProperty,GC=typeof Element<"u";function Hd(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=H0(e),r=H0(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Hd(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var d=V0(e);if(o=d.length,o!==V0(t).length)return!1;for(i=o;i--!==0;)if(!KC.call(t,d[i]))return!1;if(GC&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=d[i],!(a==="_owner"&&e.$$typeof)&&!Hd(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var qC=function(t,n){try{return Hd(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Ar=Di(qC);var JC=!0;function bm(e,t){if(!JC){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function ZC(){this.__data__=[],this.size=0}function _v(e,t){return e===t||e!==e&&t!==t}function Xc(e,t){for(var n=e.length;n--;)if(_v(e[n][0],t))return n;return-1}var eS=Array.prototype,tS=eS.splice;function nS(e){var t=this.__data__,n=Xc(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():tS.call(t,n,1),--this.size,!0}function rS(e){var t=this.__data__,n=Xc(t,e);return n<0?void 0:t[n][1]}function iS(e){return Xc(this.__data__,e)>-1}function oS(e,t){var n=this.__data__,r=Xc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function wr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wr.prototype.clear=ZC;wr.prototype.delete=nS;wr.prototype.get=rS;wr.prototype.has=iS;wr.prototype.set=oS;function aS(){this.__data__=new wr,this.size=0}function sS(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function lS(e){return this.__data__.get(e)}function cS(e){return this.__data__.has(e)}function Es(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var uS="[object AsyncFunction]",fS="[object Function]",dS="[object GeneratorFunction]",pS="[object Proxy]";function Pv(e){if(!Es(e))return!1;var t=Li(e);return t==fS||t==dS||t==uS||t==pS}var mS=er["__core-js_shared__"];const tf=mS;var Y0=function(){var e=/[^.]+$/.exec(tf&&tf.keys&&tf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function hS(e){return!!Y0&&Y0 in e}var gS=Function.prototype,xS=gS.toString;function zi(e){if(e!=null){try{return xS.call(e)}catch{}try{return e+""}catch{}}return""}var yS=/[\\^$.*+?()[\]{}|]/g,vS=/^\[object .+?Constructor\]$/,wS=Function.prototype,bS=Object.prototype,kS=wS.toString,CS=bS.hasOwnProperty,SS=RegExp("^"+kS.call(CS).replace(yS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ES(e){if(!Es(e)||hS(e))return!1;var t=Pv(e)?SS:vS;return t.test(zi(e))}function TS(e,t){return e==null?void 0:e[t]}function Bi(e,t){var n=TS(e,t);return ES(n)?n:void 0}var AS=Bi(er,"Map");const ls=AS;var NS=Bi(Object,"create");const cs=NS;function jS(){this.__data__=cs?cs(null):{},this.size=0}function OS(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var DS="__lodash_hash_undefined__",_S=Object.prototype,PS=_S.hasOwnProperty;function MS(e){var t=this.__data__;if(cs){var n=t[e];return n===DS?void 0:n}return PS.call(t,e)?t[e]:void 0}var RS=Object.prototype,IS=RS.hasOwnProperty;function $S(e){var t=this.__data__;return cs?t[e]!==void 0:IS.call(t,e)}var LS="__lodash_hash_undefined__";function FS(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=cs&&t===void 0?LS:t,this}function Ei(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ei.prototype.clear=jS;Ei.prototype.delete=OS;Ei.prototype.get=MS;Ei.prototype.has=$S;Ei.prototype.set=FS;function zS(){this.size=0,this.__data__={hash:new Ei,map:new(ls||wr),string:new Ei}}function BS(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Qc(e,t){var n=e.__data__;return BS(t)?n[typeof t=="string"?"string":"hash"]:n.map}function US(e){var t=Qc(this,e).delete(e);return this.size-=t?1:0,t}function WS(e){return Qc(this,e).get(e)}function HS(e){return Qc(this,e).has(e)}function VS(e,t){var n=Qc(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Zr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zr.prototype.clear=zS;Zr.prototype.delete=US;Zr.prototype.get=WS;Zr.prototype.has=HS;Zr.prototype.set=VS;var YS=200;function XS(e,t){var n=this.__data__;if(n instanceof wr){var r=n.__data__;if(!ls||r.length<YS-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Zr(r)}return n.set(e,t),this.size=n.size,this}function Vo(e){var t=this.__data__=new wr(e);this.size=t.size}Vo.prototype.clear=aS;Vo.prototype.delete=sS;Vo.prototype.get=lS;Vo.prototype.has=cS;Vo.prototype.set=XS;function QS(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var KS=function(){try{var e=Bi(Object,"defineProperty");return e({},"",{}),e}catch{}}();const X0=KS;function Mv(e,t,n){t=="__proto__"&&X0?X0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var GS=Object.prototype,qS=GS.hasOwnProperty;function Rv(e,t,n){var r=e[t];(!(qS.call(e,t)&&_v(r,n))||n===void 0&&!(t in e))&&Mv(e,t,n)}function Kc(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),i?Mv(n,s,l):Rv(n,s,l)}return n}function JS(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ZS="[object Arguments]";function Q0(e){return Fi(e)&&Li(e)==ZS}var Iv=Object.prototype,e5=Iv.hasOwnProperty,t5=Iv.propertyIsEnumerable,n5=Q0(function(){return arguments}())?Q0:function(e){return Fi(e)&&e5.call(e,"callee")&&!t5.call(e,"callee")};const r5=n5;var i5=Array.isArray;const Ts=i5;function o5(){return!1}var $v=typeof on=="object"&&on&&!on.nodeType&&on,K0=$v&&typeof an=="object"&&an&&!an.nodeType&&an,a5=K0&&K0.exports===$v,G0=a5?er.Buffer:void 0,s5=G0?G0.isBuffer:void 0,l5=s5||o5;const Lv=l5;var c5=9007199254740991,u5=/^(?:0|[1-9]\d*)$/;function f5(e,t){var n=typeof e;return t=t??c5,!!t&&(n=="number"||n!="symbol"&&u5.test(e))&&e>-1&&e%1==0&&e<t}var d5=9007199254740991;function Fv(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=d5}var p5="[object Arguments]",m5="[object Array]",h5="[object Boolean]",g5="[object Date]",x5="[object Error]",y5="[object Function]",v5="[object Map]",w5="[object Number]",b5="[object Object]",k5="[object RegExp]",C5="[object Set]",S5="[object String]",E5="[object WeakMap]",T5="[object ArrayBuffer]",A5="[object DataView]",N5="[object Float32Array]",j5="[object Float64Array]",O5="[object Int8Array]",D5="[object Int16Array]",_5="[object Int32Array]",P5="[object Uint8Array]",M5="[object Uint8ClampedArray]",R5="[object Uint16Array]",I5="[object Uint32Array]",Xe={};Xe[N5]=Xe[j5]=Xe[O5]=Xe[D5]=Xe[_5]=Xe[P5]=Xe[M5]=Xe[R5]=Xe[I5]=!0;Xe[p5]=Xe[m5]=Xe[T5]=Xe[h5]=Xe[A5]=Xe[g5]=Xe[x5]=Xe[y5]=Xe[v5]=Xe[w5]=Xe[b5]=Xe[k5]=Xe[C5]=Xe[S5]=Xe[E5]=!1;function $5(e){return Fi(e)&&Fv(e.length)&&!!Xe[Li(e)]}function km(e){return function(t){return e(t)}}var zv=typeof on=="object"&&on&&!on.nodeType&&on,Ra=zv&&typeof an=="object"&&an&&!an.nodeType&&an,L5=Ra&&Ra.exports===zv,nf=L5&&Nv.process,F5=function(){try{var e=Ra&&Ra.require&&Ra.require("util").types;return e||nf&&nf.binding&&nf.binding("util")}catch{}}();const Ro=F5;var q0=Ro&&Ro.isTypedArray,z5=q0?km(q0):$5;const B5=z5;var U5=Object.prototype,W5=U5.hasOwnProperty;function Bv(e,t){var n=Ts(e),r=!n&&r5(e),i=!n&&!r&&Lv(e),o=!n&&!r&&!i&&B5(e),a=n||r||i||o,s=a?JS(e.length,String):[],l=s.length;for(var c in e)(t||W5.call(e,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||f5(c,l)))&&s.push(c);return s}var H5=Object.prototype;function Cm(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||H5;return e===n}var V5=Ov(Object.keys,Object);const Y5=V5;var X5=Object.prototype,Q5=X5.hasOwnProperty;function K5(e){if(!Cm(e))return Y5(e);var t=[];for(var n in Object(e))Q5.call(e,n)&&n!="constructor"&&t.push(n);return t}function Uv(e){return e!=null&&Fv(e.length)&&!Pv(e)}function Sm(e){return Uv(e)?Bv(e):K5(e)}function G5(e,t){return e&&Kc(t,Sm(t),e)}function q5(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var J5=Object.prototype,Z5=J5.hasOwnProperty;function eE(e){if(!Es(e))return q5(e);var t=Cm(e),n=[];for(var r in e)r=="constructor"&&(t||!Z5.call(e,r))||n.push(r);return n}function Em(e){return Uv(e)?Bv(e,!0):eE(e)}function tE(e,t){return e&&Kc(t,Em(t),e)}var Wv=typeof on=="object"&&on&&!on.nodeType&&on,J0=Wv&&typeof an=="object"&&an&&!an.nodeType&&an,nE=J0&&J0.exports===Wv,Z0=nE?er.Buffer:void 0,eg=Z0?Z0.allocUnsafe:void 0;function rE(e,t){if(t)return e.slice();var n=e.length,r=eg?eg(n):new e.constructor(n);return e.copy(r),r}function Hv(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function iE(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Vv(){return[]}var oE=Object.prototype,aE=oE.propertyIsEnumerable,tg=Object.getOwnPropertySymbols,sE=tg?function(e){return e==null?[]:(e=Object(e),iE(tg(e),function(t){return aE.call(e,t)}))}:Vv;const Tm=sE;function lE(e,t){return Kc(e,Tm(e),t)}function Yv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var cE=Object.getOwnPropertySymbols,uE=cE?function(e){for(var t=[];e;)Yv(t,Tm(e)),e=wm(e);return t}:Vv;const Xv=uE;function fE(e,t){return Kc(e,Xv(e),t)}function Qv(e,t,n){var r=t(e);return Ts(e)?r:Yv(r,n(e))}function dE(e){return Qv(e,Sm,Tm)}function pE(e){return Qv(e,Em,Xv)}var mE=Bi(er,"DataView");const Vd=mE;var hE=Bi(er,"Promise");const Yd=hE;var gE=Bi(er,"Set");const Xd=gE;var xE=Bi(er,"WeakMap");const Qd=xE;var ng="[object Map]",yE="[object Object]",rg="[object Promise]",ig="[object Set]",og="[object WeakMap]",ag="[object DataView]",vE=zi(Vd),wE=zi(ls),bE=zi(Yd),kE=zi(Xd),CE=zi(Qd),si=Li;(Vd&&si(new Vd(new ArrayBuffer(1)))!=ag||ls&&si(new ls)!=ng||Yd&&si(Yd.resolve())!=rg||Xd&&si(new Xd)!=ig||Qd&&si(new Qd)!=og)&&(si=function(e){var t=Li(e),n=t==yE?e.constructor:void 0,r=n?zi(n):"";if(r)switch(r){case vE:return ag;case wE:return ng;case bE:return rg;case kE:return ig;case CE:return og}return t});const Am=si;var SE=Object.prototype,EE=SE.hasOwnProperty;function TE(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&EE.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var AE=er.Uint8Array;const sg=AE;function Nm(e){var t=new e.constructor(e.byteLength);return new sg(t).set(new sg(e)),t}function NE(e,t){var n=t?Nm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var jE=/\w*$/;function OE(e){var t=new e.constructor(e.source,jE.exec(e));return t.lastIndex=e.lastIndex,t}var lg=Kr?Kr.prototype:void 0,cg=lg?lg.valueOf:void 0;function DE(e){return cg?Object(cg.call(e)):{}}function _E(e,t){var n=t?Nm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var PE="[object Boolean]",ME="[object Date]",RE="[object Map]",IE="[object Number]",$E="[object RegExp]",LE="[object Set]",FE="[object String]",zE="[object Symbol]",BE="[object ArrayBuffer]",UE="[object DataView]",WE="[object Float32Array]",HE="[object Float64Array]",VE="[object Int8Array]",YE="[object Int16Array]",XE="[object Int32Array]",QE="[object Uint8Array]",KE="[object Uint8ClampedArray]",GE="[object Uint16Array]",qE="[object Uint32Array]";function JE(e,t,n){var r=e.constructor;switch(t){case BE:return Nm(e);case PE:case ME:return new r(+e);case UE:return NE(e,n);case WE:case HE:case VE:case YE:case XE:case QE:case KE:case GE:case qE:return _E(e,n);case RE:return new r;case IE:case FE:return new r(e);case $E:return OE(e);case LE:return new r;case zE:return DE(e)}}var ug=Object.create,ZE=function(){function e(){}return function(t){if(!Es(t))return{};if(ug)return ug(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const e8=ZE;function t8(e){return typeof e.constructor=="function"&&!Cm(e)?e8(wm(e)):{}}var n8="[object Map]";function r8(e){return Fi(e)&&Am(e)==n8}var fg=Ro&&Ro.isMap,i8=fg?km(fg):r8;const o8=i8;var a8="[object Set]";function s8(e){return Fi(e)&&Am(e)==a8}var dg=Ro&&Ro.isSet,l8=dg?km(dg):s8;const c8=l8;var u8=1,f8=2,d8=4,Kv="[object Arguments]",p8="[object Array]",m8="[object Boolean]",h8="[object Date]",g8="[object Error]",Gv="[object Function]",x8="[object GeneratorFunction]",y8="[object Map]",v8="[object Number]",qv="[object Object]",w8="[object RegExp]",b8="[object Set]",k8="[object String]",C8="[object Symbol]",S8="[object WeakMap]",E8="[object ArrayBuffer]",T8="[object DataView]",A8="[object Float32Array]",N8="[object Float64Array]",j8="[object Int8Array]",O8="[object Int16Array]",D8="[object Int32Array]",_8="[object Uint8Array]",P8="[object Uint8ClampedArray]",M8="[object Uint16Array]",R8="[object Uint32Array]",Ue={};Ue[Kv]=Ue[p8]=Ue[E8]=Ue[T8]=Ue[m8]=Ue[h8]=Ue[A8]=Ue[N8]=Ue[j8]=Ue[O8]=Ue[D8]=Ue[y8]=Ue[v8]=Ue[qv]=Ue[w8]=Ue[b8]=Ue[k8]=Ue[C8]=Ue[_8]=Ue[P8]=Ue[M8]=Ue[R8]=!0;Ue[g8]=Ue[Gv]=Ue[S8]=!1;function Ia(e,t,n,r,i,o){var a,s=t&u8,l=t&f8,c=t&d8;if(n&&(a=i?n(e,r,i,o):n(e)),a!==void 0)return a;if(!Es(e))return e;var u=Ts(e);if(u){if(a=TE(e),!s)return Hv(e,a)}else{var d=Am(e),p=d==Gv||d==x8;if(Lv(e))return rE(e,s);if(d==qv||d==Kv||p&&!i){if(a=l||p?{}:t8(e),!s)return l?fE(e,tE(a,e)):lE(e,G5(a,e))}else{if(!Ue[d])return i?e:{};a=JE(e,d,s)}}o||(o=new Vo);var g=o.get(e);if(g)return g;o.set(e,a),c8(e)?e.forEach(function(C){a.add(Ia(C,t,n,C,e,o))}):o8(e)&&e.forEach(function(C,h){a.set(h,Ia(C,t,n,h,e,o))});var y=c?l?pE:dE:l?Em:Sm,x=u?void 0:y(e);return QS(x||e,function(C,h){x&&(h=C,C=e[h]),Rv(a,h,Ia(C,t,n,h,e,o))}),a}var I8=4;function pg(e){return Ia(e,I8)}function Jv(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var $8="[object Symbol]";function jm(e){return typeof e=="symbol"||Fi(e)&&Li(e)==$8}var L8="Expected a function";function Om(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(L8);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Om.Cache||Zr),n}Om.Cache=Zr;var F8=500;function z8(e){var t=Om(e,function(r){return n.size===F8&&n.clear(),r}),n=t.cache;return t}var B8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,U8=/\\(\\)?/g,W8=z8(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(B8,function(n,r,i,o){t.push(i?o.replace(U8,"$1"):r||n)}),t});const H8=W8;var V8=1/0;function Y8(e){if(typeof e=="string"||jm(e))return e;var t=e+"";return t=="0"&&1/e==-V8?"-0":t}var X8=1/0,mg=Kr?Kr.prototype:void 0,hg=mg?mg.toString:void 0;function Zv(e){if(typeof e=="string")return e;if(Ts(e))return Jv(e,Zv)+"";if(jm(e))return hg?hg.call(e):"";var t=e+"";return t=="0"&&1/e==-X8?"-0":t}function Q8(e){return e==null?"":Zv(e)}function ew(e){return Ts(e)?Jv(e,Y8):jm(e)?[e]:Hv(H8(Q8(e)))}var tw={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=typeof Symbol=="function"&&Symbol.for,Dm=bt?Symbol.for("react.element"):60103,_m=bt?Symbol.for("react.portal"):60106,Gc=bt?Symbol.for("react.fragment"):60107,qc=bt?Symbol.for("react.strict_mode"):60108,Jc=bt?Symbol.for("react.profiler"):60114,Zc=bt?Symbol.for("react.provider"):60109,eu=bt?Symbol.for("react.context"):60110,Pm=bt?Symbol.for("react.async_mode"):60111,tu=bt?Symbol.for("react.concurrent_mode"):60111,nu=bt?Symbol.for("react.forward_ref"):60112,ru=bt?Symbol.for("react.suspense"):60113,K8=bt?Symbol.for("react.suspense_list"):60120,iu=bt?Symbol.for("react.memo"):60115,ou=bt?Symbol.for("react.lazy"):60116,G8=bt?Symbol.for("react.block"):60121,q8=bt?Symbol.for("react.fundamental"):60117,J8=bt?Symbol.for("react.responder"):60118,Z8=bt?Symbol.for("react.scope"):60119;function pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dm:switch(e=e.type,e){case Pm:case tu:case Gc:case Jc:case qc:case ru:return e;default:switch(e=e&&e.$$typeof,e){case eu:case nu:case ou:case iu:case Zc:return e;default:return t}}case _m:return t}}}function nw(e){return pn(e)===tu}ze.AsyncMode=Pm;ze.ConcurrentMode=tu;ze.ContextConsumer=eu;ze.ContextProvider=Zc;ze.Element=Dm;ze.ForwardRef=nu;ze.Fragment=Gc;ze.Lazy=ou;ze.Memo=iu;ze.Portal=_m;ze.Profiler=Jc;ze.StrictMode=qc;ze.Suspense=ru;ze.isAsyncMode=function(e){return nw(e)||pn(e)===Pm};ze.isConcurrentMode=nw;ze.isContextConsumer=function(e){return pn(e)===eu};ze.isContextProvider=function(e){return pn(e)===Zc};ze.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dm};ze.isForwardRef=function(e){return pn(e)===nu};ze.isFragment=function(e){return pn(e)===Gc};ze.isLazy=function(e){return pn(e)===ou};ze.isMemo=function(e){return pn(e)===iu};ze.isPortal=function(e){return pn(e)===_m};ze.isProfiler=function(e){return pn(e)===Jc};ze.isStrictMode=function(e){return pn(e)===qc};ze.isSuspense=function(e){return pn(e)===ru};ze.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gc||e===tu||e===Jc||e===qc||e===ru||e===K8||typeof e=="object"&&e!==null&&(e.$$typeof===ou||e.$$typeof===iu||e.$$typeof===Zc||e.$$typeof===eu||e.$$typeof===nu||e.$$typeof===q8||e.$$typeof===J8||e.$$typeof===Z8||e.$$typeof===G8)};ze.typeOf=pn;tw.exports=ze;var eT=tw.exports,Mm=eT,tT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rm={};Rm[Mm.ForwardRef]=rT;Rm[Mm.Memo]=rw;function gg(e){return Mm.isMemo(e)?rw:Rm[e.$$typeof]||tT}var iT=Object.defineProperty,oT=Object.getOwnPropertyNames,xg=Object.getOwnPropertySymbols,aT=Object.getOwnPropertyDescriptor,sT=Object.getPrototypeOf,yg=Object.prototype;function iw(e,t,n){if(typeof t!="string"){if(yg){var r=sT(t);r&&r!==yg&&iw(e,r,n)}var i=oT(t);xg&&(i=i.concat(xg(t)));for(var o=gg(e),a=gg(t),s=0;s<i.length;++s){var l=i[s];if(!nT[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var c=aT(t,l);try{iT(e,l,c)}catch{}}}}return e}var lT=iw;const cT=Di(lT);var uT=1,fT=4;function dT(e){return Ia(e,uT|fT)}function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}function ow(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Mr(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var au=k.createContext(void 0);au.displayName="FormikContext";var pT=au.Provider,mT=au.Consumer;function Yo(){var e=k.useContext(au);return e||bm(!1),e}var wg=function(t){return Array.isArray(t)&&t.length===0},St=function(t){return typeof t=="function"},Xo=function(t){return t!==null&&typeof t=="object"},hT=function(t){return String(Math.floor(Number(t)))===t},rf=function(t){return Object.prototype.toString.call(t)==="[object String]"},aw=function(t){return k.Children.count(t)===0},of=function(t){return Xo(t)&&St(t.then)};function Ke(e,t,n,r){r===void 0&&(r=0);for(var i=ew(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Gn(e,t,n){for(var r=pg(e),i=r,o=0,a=ew(t);o<a.length-1;o++){var s=a[o],l=Ke(e,a.slice(0,o+1));if(l&&(Xo(l)||Array.isArray(l)))i=i[s]=pg(l);else{var c=a[o+1];i=i[s]=hT(c)&&Number(c)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function sw(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Xo(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},sw(s,t,n,r[a])):r[a]=t}return r}function gT(e,t){switch(t.type){case"SET_VALUES":return Le({},e,{values:t.payload});case"SET_TOUCHED":return Le({},e,{touched:t.payload});case"SET_ERRORS":return Ar(e.errors,t.payload)?e:Le({},e,{errors:t.payload});case"SET_STATUS":return Le({},e,{status:t.payload});case"SET_ISSUBMITTING":return Le({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return Le({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return Le({},e,{values:Gn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return Le({},e,{touched:Gn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return Le({},e,{errors:Gn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return Le({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return Le({},e,{touched:sw(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return Le({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Le({},e,{isSubmitting:!1});default:return e}}var ni={},Js={};function lw(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,c=l===void 0?!1:l,u=e.onSubmit,d=Mr(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=Le({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:u},d),g=k.useRef(p.initialValues),y=k.useRef(p.initialErrors||ni),x=k.useRef(p.initialTouched||Js),C=k.useRef(p.initialStatus),h=k.useRef(!1),m=k.useRef({});k.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var v=k.useState(0),T=v[1],O=k.useRef({values:p.initialValues,errors:p.initialErrors||ni,touched:p.initialTouched||Js,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),_=O.current,E=k.useCallback(function(N){var I=O.current;O.current=gT(I,N),I!==O.current&&T(function(H){return H+1})},[]),F=k.useCallback(function(N,I){return new Promise(function(H,G){var oe=p.validate(N,I);oe==null?H(ni):of(oe)?oe.then(function(ce){H(ce||ni)},function(ce){G(ce)}):H(oe)})},[p.validate]),ee=k.useCallback(function(N,I){var H=p.validationSchema,G=St(H)?H(I):H,oe=I&&G.validateAt?G.validateAt(I,N):yT(N,G);return new Promise(function(ce,ue){oe.then(function(){ce(ni)},function(Ne){Ne.name==="ValidationError"?ce(xT(Ne)):ue(Ne)})})},[p.validationSchema]),B=k.useCallback(function(N,I){return new Promise(function(H){return H(m.current[N].validate(I))})},[]),ye=k.useCallback(function(N){var I=Object.keys(m.current).filter(function(G){return St(m.current[G].validate)}),H=I.length>0?I.map(function(G){return B(G,Ke(N,G))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(H).then(function(G){return G.reduce(function(oe,ce,ue){return ce==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ce&&(oe=Gn(oe,I[ue],ce)),oe},{})})},[B]),V=k.useCallback(function(N){return Promise.all([ye(N),p.validationSchema?ee(N):{},p.validate?F(N):{}]).then(function(I){var H=I[0],G=I[1],oe=I[2],ce=Wd.all([H,G,oe],{arrayMerge:vT});return ce})},[p.validate,p.validationSchema,ye,F,ee]),W=hn(function(N){return N===void 0&&(N=_.values),E({type:"SET_ISVALIDATING",payload:!0}),V(N).then(function(I){return h.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:I})),I})});k.useEffect(function(){a&&h.current===!0&&Ar(g.current,p.initialValues)&&W(g.current)},[a,W]);var re=k.useCallback(function(N){var I=N&&N.values?N.values:g.current,H=N&&N.errors?N.errors:y.current?y.current:p.initialErrors||{},G=N&&N.touched?N.touched:x.current?x.current:p.initialTouched||{},oe=N&&N.status?N.status:C.current?C.current:p.initialStatus;g.current=I,y.current=H,x.current=G,C.current=oe;var ce=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!N&&!!N.isSubmitting,errors:H,touched:G,status:oe,values:I,isValidating:!!N&&!!N.isValidating,submitCount:N&&N.submitCount&&typeof N.submitCount=="number"?N.submitCount:0}})};if(p.onReset){var ue=p.onReset(_.values,$e);of(ue)?ue.then(ce):ce()}else ce()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);k.useEffect(function(){h.current===!0&&!Ar(g.current,p.initialValues)&&c&&(g.current=p.initialValues,re(),a&&W(g.current))},[c,p.initialValues,re,a,W]),k.useEffect(function(){c&&h.current===!0&&!Ar(y.current,p.initialErrors)&&(y.current=p.initialErrors||ni,E({type:"SET_ERRORS",payload:p.initialErrors||ni}))},[c,p.initialErrors]),k.useEffect(function(){c&&h.current===!0&&!Ar(x.current,p.initialTouched)&&(x.current=p.initialTouched||Js,E({type:"SET_TOUCHED",payload:p.initialTouched||Js}))},[c,p.initialTouched]),k.useEffect(function(){c&&h.current===!0&&!Ar(C.current,p.initialStatus)&&(C.current=p.initialStatus,E({type:"SET_STATUS",payload:p.initialStatus}))},[c,p.initialStatus,p.initialTouched]);var de=hn(function(N){if(m.current[N]&&St(m.current[N].validate)){var I=Ke(_.values,N),H=m.current[N].validate(I);return of(H)?(E({type:"SET_ISVALIDATING",payload:!0}),H.then(function(G){return G}).then(function(G){E({type:"SET_FIELD_ERROR",payload:{field:N,value:G}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:N,value:H}}),Promise.resolve(H))}else if(p.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),ee(_.values,N).then(function(G){return G}).then(function(G){E({type:"SET_FIELD_ERROR",payload:{field:N,value:Ke(G,N)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ee=k.useCallback(function(N,I){var H=I.validate;m.current[N]={validate:H}},[]),Se=k.useCallback(function(N){delete m.current[N]},[]),z=hn(function(N,I){E({type:"SET_TOUCHED",payload:N});var H=I===void 0?i:I;return H?W(_.values):Promise.resolve()}),$=k.useCallback(function(N){E({type:"SET_ERRORS",payload:N})},[]),M=hn(function(N,I){var H=St(N)?N(_.values):N;E({type:"SET_VALUES",payload:H});var G=I===void 0?n:I;return G?W(H):Promise.resolve()}),te=k.useCallback(function(N,I){E({type:"SET_FIELD_ERROR",payload:{field:N,value:I}})},[]),Y=hn(function(N,I,H){E({type:"SET_FIELD_VALUE",payload:{field:N,value:I}});var G=H===void 0?n:H;return G?W(Gn(_.values,N,I)):Promise.resolve()}),se=k.useCallback(function(N,I){var H=I,G=N,oe;if(!rf(N)){N.persist&&N.persist();var ce=N.target?N.target:N.currentTarget,ue=ce.type,Ne=ce.name,Ce=ce.id,kt=ce.value,Nt=ce.checked,xt=ce.outerHTML,st=ce.options,he=ce.multiple;H=I||Ne||Ce,G=/number|range/.test(ue)?(oe=parseFloat(kt),isNaN(oe)?"":oe):/checkbox/.test(ue)?bT(Ke(_.values,H),Nt,kt):st&&he?wT(st):kt}H&&Y(H,G)},[Y,_.values]),le=hn(function(N){if(rf(N))return function(I){return se(I,N)};se(N)}),ge=hn(function(N,I,H){I===void 0&&(I=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:N,value:I}});var G=H===void 0?i:H;return G?W(_.values):Promise.resolve()}),we=k.useCallback(function(N,I){N.persist&&N.persist();var H=N.target,G=H.name,oe=H.id,ce=H.outerHTML,ue=I||G||oe;ge(ue,!0)},[ge]),Ae=hn(function(N){if(rf(N))return function(I){return we(I,N)};we(N)}),_e=k.useCallback(function(N){St(N)?E({type:"SET_FORMIK_STATE",payload:N}):E({type:"SET_FORMIK_STATE",payload:function(){return N}})},[]),at=k.useCallback(function(N){E({type:"SET_STATUS",payload:N})},[]),Je=k.useCallback(function(N){E({type:"SET_ISSUBMITTING",payload:N})},[]),Ze=hn(function(){return E({type:"SUBMIT_ATTEMPT"}),W().then(function(N){var I=N instanceof Error,H=!I&&Object.keys(N).length===0;if(H){var G;try{if(G=S(),G===void 0)return}catch(oe){throw oe}return Promise.resolve(G).then(function(oe){return h.current&&E({type:"SUBMIT_SUCCESS"}),oe}).catch(function(oe){if(h.current)throw E({type:"SUBMIT_FAILURE"}),oe})}else if(h.current&&(E({type:"SUBMIT_FAILURE"}),I))throw N})}),et=hn(function(N){N&&N.preventDefault&&St(N.preventDefault)&&N.preventDefault(),N&&N.stopPropagation&&St(N.stopPropagation)&&N.stopPropagation(),Ze().catch(function(I){console.warn("Warning: An unhandled error was caught from submitForm()",I)})}),$e={resetForm:re,validateForm:W,validateField:de,setErrors:$,setFieldError:te,setFieldTouched:ge,setFieldValue:Y,setStatus:at,setSubmitting:Je,setTouched:z,setValues:M,setFormikState:_e,submitForm:Ze},S=hn(function(){return u(_.values,$e)}),A=hn(function(N){N&&N.preventDefault&&St(N.preventDefault)&&N.preventDefault(),N&&N.stopPropagation&&St(N.stopPropagation)&&N.stopPropagation(),re()}),P=k.useCallback(function(N){return{value:Ke(_.values,N),error:Ke(_.errors,N),touched:!!Ke(_.touched,N),initialValue:Ke(g.current,N),initialTouched:!!Ke(x.current,N),initialError:Ke(y.current,N)}},[_.errors,_.touched,_.values]),q=k.useCallback(function(N){return{setValue:function(H,G){return Y(N,H,G)},setTouched:function(H,G){return ge(N,H,G)},setError:function(H){return te(N,H)}}},[Y,ge,te]),J=k.useCallback(function(N){var I=Xo(N),H=I?N.name:N,G=Ke(_.values,H),oe={name:H,value:G,onChange:le,onBlur:Ae};if(I){var ce=N.type,ue=N.value,Ne=N.as,Ce=N.multiple;ce==="checkbox"?ue===void 0?oe.checked=!!G:(oe.checked=!!(Array.isArray(G)&&~G.indexOf(ue)),oe.value=ue):ce==="radio"?(oe.checked=G===ue,oe.value=ue):Ne==="select"&&Ce&&(oe.value=oe.value||[],oe.multiple=!0)}return oe},[Ae,le,_.values]),fe=k.useMemo(function(){return!Ar(g.current,_.values)},[g.current,_.values]),pe=k.useMemo(function(){return typeof s<"u"?fe?_.errors&&Object.keys(_.errors).length===0:s!==!1&&St(s)?s(p):s:_.errors&&Object.keys(_.errors).length===0},[s,fe,_.errors,p]),X=Le({},_,{initialValues:g.current,initialErrors:y.current,initialTouched:x.current,initialStatus:C.current,handleBlur:Ae,handleChange:le,handleReset:A,handleSubmit:et,resetForm:re,setErrors:$,setFormikState:_e,setFieldTouched:ge,setFieldValue:Y,setFieldError:te,setStatus:at,setSubmitting:Je,setTouched:z,setValues:M,submitForm:Ze,validateForm:W,validateField:de,isValid:pe,dirty:fe,unregisterField:Se,registerField:Ee,getFieldProps:J,getFieldMeta:P,getFieldHelpers:q,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return X}function su(e){var t=lw(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return k.useImperativeHandle(o,function(){return t}),k.createElement(pT,{value:t},n?k.createElement(n,t):i?i(t):r?St(r)?r(t):aw(r)?null:k.Children.only(r):null)}function xT(e){var t={};if(e.inner){if(e.inner.length===0)return Gn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;Ke(t,a.path)||(t=Gn(t,a.path,a.message))}}return t}function yT(e,t,n,r){n===void 0&&(n=!1);var i=Kd(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Kd(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||W0(i)?Kd(i):i!==""?i:void 0}):W0(e[r])?t[r]=Kd(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function vT(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?Wd(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=Wd(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function wT(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function bT(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var kT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?k.useLayoutEffect:k.useEffect;function hn(e){var t=k.useRef(e);return kT(function(){t.current=e}),k.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function CT(e){var t=Yo(),n=t.getFieldProps,r=t.getFieldMeta,i=t.getFieldHelpers,o=t.registerField,a=t.unregisterField,s=Xo(e),l=s?e:{name:e},c=l.name,u=l.validate;k.useEffect(function(){return c&&o(c,{validate:u}),function(){c&&a(c)}},[o,a,c,u]),c||bm(!1);var d=k.useMemo(function(){return i(c)},[i,c]);return[n(l),r(c),d]}function gr(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=Mr(e,["validate","name","render","children","as","component","className"]),c=Yo(),u=Mr(c,["validate","validationSchema"]),d=u.registerField,p=u.unregisterField;k.useEffect(function(){return d(n,{validate:t}),function(){p(n)}},[d,p,n,t]);var g=u.getFieldProps(Le({name:n},l)),y=u.getFieldMeta(n),x={field:g,form:u};if(r)return r(Le({},x,{meta:y}));if(St(i))return i(Le({},x,{meta:y}));if(a){if(typeof a=="string"){var C=l.innerRef,h=Mr(l,["innerRef"]);return k.createElement(a,Le({ref:C},g,h,{className:s}),i)}return k.createElement(a,Le({field:g,form:u},l,{className:s}),i)}var m=o||"input";if(typeof m=="string"){var v=l.innerRef,T=Mr(l,["innerRef"]);return k.createElement(m,Le({ref:v},g,T,{className:s}),i)}return k.createElement(m,Le({},g,l,{className:s}),i)}var As=k.forwardRef(function(e,t){var n=e.action,r=Mr(e,["action"]),i=n??"#",o=Yo(),a=o.handleReset,s=o.handleSubmit;return k.createElement("form",Le({onSubmit:s,ref:t,onReset:a,action:i},r))});As.displayName="Form";function cw(e){var t=function(i){return k.createElement(mT,null,function(o){return o||bm(!1),k.createElement(e,Le({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",cT(t,e)}var ST=function(t,n,r){var i=Ti(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},ET=function(t,n,r){var i=Ti(t),o=i[n];return i[n]=i[r],i[r]=o,i},af=function(t,n,r){var i=Ti(t);return i.splice(n,0,r),i},TT=function(t,n,r){var i=Ti(t);return i[n]=r,i},Ti=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(Le({},t,{length:n+1}))}else return[]},bg=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||Xo(i)){var o=Ti(i);return r(o)}return i}},uw=function(e){ow(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,c=l.name,u=l.formik.setFormikState;u(function(d){var p=bg(s,o),g=bg(a,o),y=Gn(d.values,c,o(Ke(d.values,c))),x=s?p(Ke(d.errors,c)):void 0,C=a?g(Ke(d.touched,c)):void 0;return wg(x)&&(x=void 0),wg(C)&&(C=void 0),Le({},d,{values:y,errors:s?Gn(d.errors,c,x):d.errors,touched:a?Gn(d.touched,c,C):d.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Ti(a),[dT(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return ET(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return ST(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return af(s,o,a)},function(s){return af(s,o,null)},function(s){return af(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return TT(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(vg(i)),i.pop=i.pop.bind(vg(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Ar(Ke(i.formik.values,i.name),Ke(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Ti(a):[];return o||(o=s[i]),St(s.splice)&&s.splice(i,1),St(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,c=o.name,u=o.formik,d=Mr(u,["validate","validationSchema"]),p=Le({},i,{form:d,name:c});return a?k.createElement(a,p):s?s(p):l?typeof l=="function"?l(p):aw(l)?null:k.Children.only(l):null},t}(k.Component);uw.defaultProps={validateOnChange:!0};var AT=cw(uw),NT=function(e){ow(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return Ke(this.props.formik.errors,this.props.name)!==Ke(i.formik.errors,this.props.name)||Ke(this.props.formik.touched,this.props.name)!==Ke(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,c=i.name,u=Mr(i,["component","formik","render","children","name"]),d=Ke(a.touched,c),p=Ke(a.errors,c);return d&&p?s?St(s)?s(p):null:l?St(l)?l(p):null:o?k.createElement(o,u,p):p:null},t}(k.Component),Im=cw(NT),fw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kg=me.createContext&&me.createContext(fw),Yr=globalThis&&globalThis.__assign||function(){return Yr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yr.apply(this,arguments)},jT=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function dw(e){return e&&e.map(function(t,n){return me.createElement(t.tag,Yr({key:n},t.attr),dw(t.child))})}function Tn(e){return function(t){return me.createElement(OT,Yr({attr:Yr({},e.attr)},t),dw(e.child))}}function OT(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=jT(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),me.createElement("svg",Yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Yr(Yr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&me.createElement("title",null,o),e.children)};return kg!==void 0?me.createElement(kg.Consumer,null,function(n){return t(n)}):t(fw)}function DT(e){return Tn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"}},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}function _T(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"}}]})(e)}const PT=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},k.createElement("title",null,"for-ico"),k.createElement("path",{d:"M23.293 7.293l-16 16c-0.181 0.181-0.293 0.431-0.293 0.707s0.112 0.526 0.293 0.707v0c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293l16-16c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0c-0.181-0.181-0.431-0.293-0.707-0.293s-0.526 0.112-0.707 0.293v0z"}),k.createElement("path",{d:"M8 7c-0.276 0-0.526 0.112-0.707 0.293v0c-0.181 0.181-0.293 0.431-0.293 0.707s0.112 0.526 0.293 0.707l16 16c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293v0c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707l-16-16c-0.181-0.181-0.431-0.293-0.707-0.293v0z"})),MT=D.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 150px;
  z-index: 2;
`,RT=D.div`
  background-color: #161F37;
  border-radius: 16px;
  width: 335px;
  height: 345px;
  margin: 0;
  padding: 0;
@media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;
  }
`,IT=D.button`
margin-top: 14px;
margin-left: 297px;
margin-bottom: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 18px;
    margin-left: 450px;
    margin-right: 0;
  }
`,$T=D(su)``,LT=D(As)`
  max-width: 285px;
  height: auto;
  margin: 0px 25px 50px 25px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    margin: 0px 50px 75px 50px;
  }
`,FT=D.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100px;
  margin: 0 auto;
  }
`,zT=D.img`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url({defaultAvatarURL});
  
@media screen and (min-width: 768px) {
  width: 100px;
  height: 100px;
  }
`,BT=D.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`,UT=D.img`
  position: absolute;
  z-index: 3;
  width: 28px;
  height: 28px;
  top: 64px;
  left: 35%;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 83px;
  }
`,WT=D.div`
  width: 100%;
  position: relative;
@media screen and (min-width: 768px) {
  max-width: 400px;
  }
`,HT=D(_T)`
  position: absolute;
  right: 24px;
  top: 70%;
  transform: translateY(-50%);
@media screen and (min-width: 768px) {
    top: 75%;
  }
`,VT=D(DT)`
  position: absolute;
  right: 24px;
  top: 70%;
  transform: translateY(-50%);
@media screen and (min-width: 768px) {
    top: 75%;
  }
`,YT=D(gr)`
margin-top: 93px;
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.800000011920929;
  background-color: transparent;
  padding: 18px 24px;
  padding-right: 50px;
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
   @media screen and (min-width: 768px) {
    margin-top: 136px;
    height: 56px;
    padding: 14px 24px;
    padding-right: 10px;
    font-size: 17px;
    line-height: calc(18 / 17);
  }
  &:focus,
  &:hover {
    outline: none;
    color: #f3f3f3;
    border-color: rgba(243, 243, 243, 0.5);
    background-color: transparent;
  }
  &.valid-border {
    border-color: green;
    outline: none;
    background-color: transparent;
  }
  &.invalid-border {
    border-color: red;
    outline: none;
    background-color: transparent;
  }
  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${yv});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
`,XT=D.button`
  margin-top: 18px;
  width: 100%;
  display: block;
  padding: 18px 90px;
  outline: none;
  border: none;
  border-color: #434D67;
  border-radius: 42px;
  background-color: #F3F3F3;
  color: rgba(22, 31, 55, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #434D67;
    color: #F3F3F3;
  }
  @media screen and (min-width: 768px) {
    margin-top: 25px;
    padding: 18px 143px;
    font-size: 16px;
    line-height: 1.13;
  }
`,QT=D(Im)`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #da1414;
  margin-left: 24px;
`,KT=D.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #3cbc81;
  margin-left: 24px;
`,GT=D(PT)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme==="dark"?e.theme.bgrColor:e.theme.textColor};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    fill: red;
  }
`,qT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJWSURBVHgBzVZNTxNRFD3TasS6sDHiRmww0QSj0al/wKkrl5UaYleOSzcmrlz2sfNfUF0Y4kfoGhYMCQtWMED4SGAxobAAFsyqQCgZ7m2nw9DCfELDSSYz77159+Tdd+57R0IAfFCFYgF5CXhDzX560vaQSY9OY/M0VvlXFppfLMlrcFAVahIoWU0SX1AwQ5Ik8Wek9NPjn07kVdF/AxijTxkRwMRHQK5SFkb7WKK9Y+jz8Ccim4tKxuCMcIyCKvLtY0l3w/5hlJ4exEcPrfTji2zOWNK1+Vank1I7jbyyNC4XZh3IttLrpPQmMHkFZIy0rQc4hKzGoEqMCJm14RCy9MPMvn/vLrIvn4SZAsuyBL8lLmo00xkY378OYeDpI5R+/MLG1m6YqbkEnyCIiFTqVqj/mStBMn2FLoGPRt7DyAUeAVx63qXAAikWFKRun6Yv0/eg8S4W3qJWO3D6ZxfWMaHNeoXjEvFGpq8Xry9QZOZhb0efD2FDpXvwWSUr0o3ioNJY5e//k6i6VLqxuYPa/qFXKJNXaMBnH1fXqmfaraDVrR0a20QI6FwWU+gS+KLmsqigS2Cu5LKuGc9lRUWIg/sOKfaofgxtepHe9UBz+FImC/KtodJjYJgKcgQBMU5KHPdRYwchWQ+buAlSa6xb3pOMVve3LB7zt3MfUmLeo+nCLhsm+5tWw7EYq7pmDsjKthTjMD8PpMziWFnMdBAyVnRNfyYr7DHfIb6vMSnOFxLKqLvzQpvIliOGC9B5i86zidfDCLfDZfX57mQlu62+wadVUKt/AhwivOdk9XOqAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=",JT=({onClose:e,handleModalClick:t,handleKeyDown:n})=>{const r={name:"Victoria",avatarURL:"https://res.cloudinary.com/dgooxm96o/image/upload/v1695311635/avatars/woddyy.jpg.jpg"},[i,o]=k.useState(!0),[a,s]=k.useState(null),[l,c]=k.useState(""),u=async p=>{const g=p.target.files[0];s(g);const y=new FileReader;y.addEventListener("load",()=>{c(y.result)}),y.readAsDataURL(g)};let d;return l?d=l:d=r.avatarURL,i?f.jsx(MT,{onClick:t,onKeyDown:n,children:f.jsxs(RT,{className:"modal-content",children:[f.jsx(IT,{onClick:e,tabIndex:1,className:"close-button",children:f.jsx(GT,{width:24,height:24})}),f.jsx($T,{initialValues:{avatarURL:"",name:r.name},validationSchema:Ho({avatarURL:Xn(),name:Xn().min(2).matches(/^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,"Name can only contain letters or numbers.")}),onSubmit:async p=>{console.log("submit");const g=new FormData;g.append("name",p.name),g.append("avatarURL",p.avatarURL)},children:({errors:p,touched:g,handleChange:y,setFieldTouched:x})=>f.jsxs(LT,{children:[f.jsxs(FT,{children:[f.jsx(zT,{src:d,alt:"avatar",width:100}),f.jsxs("label",{htmlFor:"avatarInput",children:[f.jsx(UT,{src:qT,alt:"plus",width:28}),f.jsx(BT,{type:"file",id:"avatarInput",accept:"image/*",onChange:u})]})]}),f.jsxs(WT,{children:[f.jsx(YT,{type:"text",name:"name",placeholder:"Name",onChange:C=>{x("name"),y(C)},className:g.name&&!p.name?"valid-border":p.name&&g.name?"invalid-border":""}),p.name&&g.name&&f.jsxs("div",{children:[f.jsx(HT,{color:"red"})," ",f.jsx(QT,{name:"name",component:"div"})]}),g.name&&!p.name&&f.jsxs("div",{children:[f.jsx(VT,{color:"green"})," ",f.jsx(KT,{children:"This is an CORRECT name"})]})]}),f.jsx(XT,{type:"submit",children:"Save changes"})]})})]})}):null},ZT=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!0),i=()=>{t(!1)},o=()=>{t(!e),r(e===!0)};k.useEffect(()=>{e===!0?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]);const[a,s]=k.useState(!1),l=()=>{console.log("openDropDown"),s(!0)},c=()=>{console.log("handleDropDownClose"),s(!1)},[u,d]=k.useState(!1),[p,g]=k.useState(!1),y=()=>{console.log("handleOpenUserInfo"),g(!0),c()},x=()=>{console.log("handleLogOutModel"),d(!0),c()},C=()=>{console.log("handleCloseLogOutModal"),d(!1)},h=()=>{console.log("handleCloseUserInfo"),g(!1)},m=T=>{console.log("handleModalClick"),T.target===T.currentTarget&&(h(),C()),T.stopPropagation()},v=T=>{T.key==="Escape"&&(h(),C())};return f.jsxs(f.Fragment,{children:[f.jsx(Z4,{children:f.jsx(e6,{children:f.jsxs(t6,{children:[f.jsxs(pv,{to:"/",children:[f.jsx(Pn,{size:"22px",size768:"28px",size1440:"28px",children:f.jsx("use",{href:`${Ft}#icon-logo`})}),"Drink Master"]}),f.jsx(i6,{}),f.jsxs("div",{children:[f.jsx(l6,{onClick:l}),a&&f.jsx(vv,{handleOpenUserInfoModal:y,handleLogOutModelOpen:x,handleModalClick:m,handleKeyDown:v}),u&&f.jsx(D6,{onClose:C,handleModalClick:m,handleKeyDown:v}),p&&f.jsx(JT,{onClose:h,handleModalClick:m,handleKeyDown:v}),f.jsx(n6,{onClick:o,children:f.jsx(Pn,{className:e?"icon-wrapper active":"icon-wrapper",size:"32px",size768:"38px",children:f.jsx("use",{href:`${Ft}#${e?"icon-x":"icon-burger-menu"}`})})})]})]})})}),f.jsx(y6,{in:e,timeout:500,classNames:"menu",unmountOnExit:!0,mountOnEnter:!0,children:f.jsx(d6,{isOpen:e,onClose:i})})]})};function pw(e,t){return function(){return e.apply(t,arguments)}}const{toString:eA}=Object.prototype,{getPrototypeOf:$m}=Object,lu=(e=>t=>{const n=eA.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tr=e=>(e=e.toLowerCase(),t=>lu(t)===e),cu=e=>t=>typeof t===e,{isArray:Qo}=Array,us=cu("undefined");function tA(e){return e!==null&&!us(e)&&e.constructor!==null&&!us(e.constructor)&&kn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const mw=tr("ArrayBuffer");function nA(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&mw(e.buffer),t}const rA=cu("string"),kn=cu("function"),hw=cu("number"),uu=e=>e!==null&&typeof e=="object",iA=e=>e===!0||e===!1,El=e=>{if(lu(e)!=="object")return!1;const t=$m(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},oA=tr("Date"),aA=tr("File"),sA=tr("Blob"),lA=tr("FileList"),cA=e=>uu(e)&&kn(e.pipe),uA=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kn(e.append)&&((t=lu(e))==="formdata"||t==="object"&&kn(e.toString)&&e.toString()==="[object FormData]"))},fA=tr("URLSearchParams"),dA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ns(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qo(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function gw(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const xw=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),yw=e=>!us(e)&&e!==xw;function Gd(){const{caseless:e}=yw(this)&&this||{},t={},n=(r,i)=>{const o=e&&gw(t,i)||i;El(t[o])&&El(r)?t[o]=Gd(t[o],r):El(r)?t[o]=Gd({},r):Qo(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ns(arguments[r],n);return t}const pA=(e,t,n,{allOwnKeys:r}={})=>(Ns(t,(i,o)=>{n&&kn(i)?e[o]=pw(i,n):e[o]=i},{allOwnKeys:r}),e),mA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),hA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gA=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&$m(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},yA=e=>{if(!e)return null;if(Qo(e))return e;let t=e.length;if(!hw(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},vA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$m(Uint8Array)),wA=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},bA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kA=tr("HTMLFormElement"),CA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Cg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),SA=tr("RegExp"),vw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ns(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},EA=e=>{vw(e,(t,n)=>{if(kn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(kn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TA=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Qo(e)?r(e):r(String(e).split(t)),n},AA=()=>{},NA=(e,t)=>(e=+e,Number.isFinite(e)?e:t),sf="abcdefghijklmnopqrstuvwxyz",Sg="0123456789",ww={DIGIT:Sg,ALPHA:sf,ALPHA_DIGIT:sf+sf.toUpperCase()+Sg},jA=(e=16,t=ww.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function OA(e){return!!(e&&kn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const DA=e=>{const t=new Array(10),n=(r,i)=>{if(uu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Qo(r)?[]:{};return Ns(r,(a,s)=>{const l=n(a,i+1);!us(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},_A=tr("AsyncFunction"),PA=e=>e&&(uu(e)||kn(e))&&kn(e.then)&&kn(e.catch),L={isArray:Qo,isArrayBuffer:mw,isBuffer:tA,isFormData:uA,isArrayBufferView:nA,isString:rA,isNumber:hw,isBoolean:iA,isObject:uu,isPlainObject:El,isUndefined:us,isDate:oA,isFile:aA,isBlob:sA,isRegExp:SA,isFunction:kn,isStream:cA,isURLSearchParams:fA,isTypedArray:vA,isFileList:lA,forEach:Ns,merge:Gd,extend:pA,trim:dA,stripBOM:mA,inherits:hA,toFlatObject:gA,kindOf:lu,kindOfTest:tr,endsWith:xA,toArray:yA,forEachEntry:wA,matchAll:bA,isHTMLForm:kA,hasOwnProperty:Cg,hasOwnProp:Cg,reduceDescriptors:vw,freezeMethods:EA,toObjectSet:TA,toCamelCase:CA,noop:AA,toFiniteNumber:NA,findKey:gw,global:xw,isContextDefined:yw,ALPHABET:ww,generateString:jA,isSpecCompliantForm:OA,toJSONObject:DA,isAsyncFn:_A,isThenable:PA};function Oe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(Oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bw=Oe.prototype,kw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{kw[e]={value:e}});Object.defineProperties(Oe,kw);Object.defineProperty(bw,"isAxiosError",{value:!0});Oe.from=(e,t,n,r,i,o)=>{const a=Object.create(bw);return L.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Oe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const MA=null;function qd(e){return L.isPlainObject(e)||L.isArray(e)}function Cw(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function Eg(e,t,n){return e?e.concat(t).map(function(i,o){return i=Cw(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function RA(e){return L.isArray(e)&&!e.some(qd)}const IA=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function fu(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!L.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||u,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(L.isDate(y))return y.toISOString();if(!l&&L.isBlob(y))throw new Oe("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(y)||L.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,x,C){let h=y;if(y&&!C&&typeof y=="object"){if(L.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(L.isArray(y)&&RA(y)||(L.isFileList(y)||L.endsWith(x,"[]"))&&(h=L.toArray(y)))return x=Cw(x),h.forEach(function(v,T){!(L.isUndefined(v)||v===null)&&t.append(a===!0?Eg([x],T,o):a===null?x:x+"[]",c(v))}),!1}return qd(y)?!0:(t.append(Eg(C,x,o),c(y)),!1)}const d=[],p=Object.assign(IA,{defaultVisitor:u,convertValue:c,isVisitable:qd});function g(y,x){if(!L.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(y),L.forEach(y,function(h,m){(!(L.isUndefined(h)||h===null)&&i.call(t,h,L.isString(m)?m.trim():m,x,p))===!0&&g(h,x?x.concat(m):[m])}),d.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Tg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Lm(e,t){this._pairs=[],e&&fu(e,this,t)}const Sw=Lm.prototype;Sw.append=function(t,n){this._pairs.push([t,n])};Sw.toString=function(t){const n=t?function(r){return t.call(this,r,Tg)}:Tg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function $A(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ew(e,t,n){if(!t)return e;const r=n&&n.encode||$A,i=n&&n.serialize;let o;if(i?o=i(t,n):o=L.isURLSearchParams(t)?t.toString():new Lm(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class LA{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ag=LA,Tw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},FA=typeof URLSearchParams<"u"?URLSearchParams:Lm,zA=typeof FormData<"u"?FormData:null,BA=typeof Blob<"u"?Blob:null,UA=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),WA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Rn={isBrowser:!0,classes:{URLSearchParams:FA,FormData:zA,Blob:BA},isStandardBrowserEnv:UA,isStandardBrowserWebWorkerEnv:WA,protocols:["http","https","file","blob","url","data"]};function HA(e,t){return fu(e,new Rn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Rn.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function VA(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function YA(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Aw(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&L.isArray(i)?i.length:a,l?(L.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!L.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&L.isArray(i[a])&&(i[a]=YA(i[a])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,i)=>{t(VA(r),i,n,0)}),n}return null}function XA(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Fm={transitional:Tw,adapter:Rn.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=L.isObject(t);if(o&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return i&&i?JSON.stringify(Aw(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return HA(t,this.formSerializer).toString();if((s=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fu(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),XA(t)):t}],transformResponse:[function(t){const n=this.transitional||Fm.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&L.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Oe.from(s,Oe.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rn.classes.FormData,Blob:Rn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],e=>{Fm.headers[e]={}});const zm=Fm,QA=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),KA=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&QA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ng=Symbol("internals");function ha(e){return e&&String(e).trim().toLowerCase()}function Tl(e){return e===!1||e==null?e:L.isArray(e)?e.map(Tl):String(e)}function GA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function lf(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function JA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ZA(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class du{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,c){const u=ha(l);if(!u)throw new Error("header name must be a non-empty string");const d=L.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=Tl(s))}const a=(s,l)=>L.forEach(s,(c,u)=>o(c,u,l));return L.isPlainObject(t)||t instanceof this.constructor?a(t,n):L.isString(t)&&(t=t.trim())&&!qA(t)?a(KA(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=ha(t),t){const r=L.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return GA(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ha(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||lf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=ha(a),a){const s=L.findKey(r,a);s&&(!n||lf(r,r[s],s,n))&&(delete r[s],i=!0)}}return L.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||lf(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return L.forEach(this,(i,o)=>{const a=L.findKey(r,o);if(a){n[a]=Tl(i),delete n[o];return}const s=t?JA(o):String(o).trim();s!==o&&delete n[o],n[s]=Tl(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ng]=this[Ng]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=ha(a);r[s]||(ZA(i,a),r[s]=!0)}return L.isArray(t)?t.forEach(o):o(t),this}}du.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(du.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});L.freezeMethods(du);const fr=du;function cf(e,t){const n=this||zm,r=t||n,i=fr.from(r.headers);let o=r.data;return L.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Nw(e){return!!(e&&e.__CANCEL__)}function js(e,t,n){Oe.call(this,e??"canceled",Oe.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(js,Oe,{__CANCEL__:!0});function eN(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Oe("Request failed with status code "+n.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tN=Rn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),L.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),L.isString(o)&&l.push("path="+o),L.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function nN(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rN(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function jw(e,t){return e&&!nN(t)?rN(e,t):t}const iN=Rn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=L.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function oN(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function aN(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[o];a||(a=c),n[i]=l,r[i]=c;let d=o,p=0;for(;d!==i;)p+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-a<t)return;const g=u&&c-u;return g?Math.round(p*1e3/g):void 0}}function jg(e,t){let n=0;const r=aN(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),c=o<=a;n=o;const u={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&c?(a-o)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const sN=typeof XMLHttpRequest<"u",lN=sN&&function(e){return new Promise(function(n,r){let i=e.data;const o=fr.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}L.isFormData(i)&&(Rn.isStandardBrowserEnv||Rn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+y))}const u=jw(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ew(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const g=fr.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};eN(function(h){n(h),l()},function(h){r(h),l()},x),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new Oe("Request aborted",Oe.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Oe("Network Error",Oe.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||Tw;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new Oe(y,x.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,e,c)),c=null},Rn.isStandardBrowserEnv){const g=(e.withCredentials||iN(u))&&e.xsrfCookieName&&tN.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&L.forEach(o.toJSON(),function(y,x){c.setRequestHeader(x,y)}),L.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",jg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",jg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=g=>{c&&(r(!g||g.type?new js(null,e,c):g),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=oN(u);if(p&&Rn.protocols.indexOf(p)===-1){r(new Oe("Unsupported protocol "+p+":",Oe.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Al={http:MA,xhr:lN};L.forEach(Al,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ow={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=L.isString(n)?Al[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Oe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(L.hasOwnProp(Al,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!L.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Al};function uf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new js(null,e)}function Og(e){return uf(e),e.headers=fr.from(e.headers),e.data=cf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ow.getAdapter(e.adapter||zm.adapter)(e).then(function(r){return uf(e),r.data=cf.call(e,e.transformResponse,r),r.headers=fr.from(r.headers),r},function(r){return Nw(r)||(uf(e),r&&r.response&&(r.response.data=cf.call(e,e.transformResponse,r.response),r.response.headers=fr.from(r.response.headers))),Promise.reject(r)})}const Dg=e=>e instanceof fr?e.toJSON():e;function Io(e,t){t=t||{};const n={};function r(c,u,d){return L.isPlainObject(c)&&L.isPlainObject(u)?L.merge.call({caseless:d},c,u):L.isPlainObject(u)?L.merge({},u):L.isArray(u)?u.slice():u}function i(c,u,d){if(L.isUndefined(u)){if(!L.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function o(c,u){if(!L.isUndefined(u))return r(void 0,u)}function a(c,u){if(L.isUndefined(u)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function s(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(c,u)=>i(Dg(c),Dg(u),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=l[u]||i,p=d(e[u],t[u],u);L.isUndefined(p)&&d!==s||(n[u]=p)}),n}const Dw="1.5.0",Bm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Bm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _g={};Bm.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Dw+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Oe(i(a," has been removed"+(n?" in "+n:"")),Oe.ERR_DEPRECATED);return n&&!_g[a]&&(_g[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function cN(e,t,n){if(typeof e!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Oe("option "+o+" must be "+l,Oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Oe("Unknown option "+o,Oe.ERR_BAD_OPTION)}}const Jd={assertOptions:cN,validators:Bm},Cr=Jd.validators;class mc{constructor(t){this.defaults=t,this.interceptors={request:new Ag,response:new Ag}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Io(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Jd.assertOptions(r,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Jd.assertOptions(i,{encode:Cr.function,serialize:Cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&L.merge(o.common,o[n.method]);o&&L.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=fr.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,d=0,p;if(!l){const y=[Og.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,c),p=y.length,u=Promise.resolve(n);d<p;)u=u.then(y[d++],y[d++]);return u}p=s.length;let g=n;for(d=0;d<p;){const y=s[d++],x=s[d++];try{g=y(g)}catch(C){x.call(this,C);break}}try{u=Og.call(this,g)}catch(y){return Promise.reject(y)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=Io(this.defaults,t);const n=jw(t.baseURL,t.url);return Ew(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){mc.prototype[t]=function(n,r){return this.request(Io(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Io(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}mc.prototype[t]=n(),mc.prototype[t+"Form"]=n(!0)});const Nl=mc;class Um{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new js(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Um(function(i){t=i}),cancel:t}}}const uN=Um;function fN(e){return function(n){return e.apply(null,n)}}function dN(e){return L.isObject(e)&&e.isAxiosError===!0}const Zd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zd).forEach(([e,t])=>{Zd[t]=e});const pN=Zd;function _w(e){const t=new Nl(e),n=pw(Nl.prototype.request,t);return L.extend(n,Nl.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return _w(Io(e,i))},n}const pt=_w(zm);pt.Axios=Nl;pt.CanceledError=js;pt.CancelToken=uN;pt.isCancel=Nw;pt.VERSION=Dw;pt.toFormData=fu;pt.AxiosError=Oe;pt.Cancel=pt.CanceledError;pt.all=function(t){return Promise.all(t)};pt.spread=fN;pt.isAxiosError=dN;pt.mergeConfig=Io;pt.AxiosHeaders=fr;pt.formToJSON=e=>Aw(L.isHTMLForm(e)?new FormData(e):e);pt.getAdapter=Ow.getAdapter;pt.HttpStatusCode=pN;pt.default=pt;const nr=pt;function Pw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Pw(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Rr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Pw(e))&&(r&&(r+=" "),r+=t);return r}const $a=e=>typeof e=="number"&&!isNaN(e),Ai=e=>typeof e=="string",Yt=e=>typeof e=="function",jl=e=>Ai(e)||Yt(e)?e:null,ff=e=>k.isValidElement(e)||Ai(e)||Yt(e)||$a(e);function mN(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function pu(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=a;const g=r?`${t}--${l}`:t,y=r?`${n}--${l}`:n,x=k.useRef(0);return k.useLayoutEffect(()=>{const C=d.current,h=g.split(" "),m=v=>{v.target===d.current&&(C.dispatchEvent(new Event("d")),C.removeEventListener("animationend",m),C.removeEventListener("animationcancel",m),x.current===0&&v.type!=="animationcancel"&&C.classList.remove(...h))};C.classList.add(...h),C.addEventListener("animationend",m),C.addEventListener("animationcancel",m)},[]),k.useEffect(()=>{const C=d.current,h=()=>{C.removeEventListener("animationend",h),i?mN(C,u,o):u()};p||(c?h():(x.current=1,C.className+=` ${y}`,C.addEventListener("animationend",h)))},[p]),me.createElement(me.Fragment,null,s)}}function Pg(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const xn={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Zs=e=>{let{theme:t,type:n,...r}=e;return me.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},df={info:function(e){return me.createElement(Zs,{...e},me.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return me.createElement(Zs,{...e},me.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return me.createElement(Zs,{...e},me.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return me.createElement(Zs,{...e},me.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return me.createElement("div",{className:"Toastify__spinner"})}};function hN(e){const[,t]=k.useReducer(g=>g+1,0),[n,r]=k.useState([]),i=k.useRef(null),o=k.useRef(new Map).current,a=g=>n.indexOf(g)!==-1,s=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:g=>o.get(g)}).current;function l(g){let{containerId:y}=g;const{limit:x}=s.props;!x||y&&s.containerId!==y||(s.count-=s.queue.length,s.queue=[])}function c(g){r(y=>g==null?[]:y.filter(x=>x!==g))}function u(){const{toastContent:g,toastProps:y,staleId:x}=s.queue.shift();p(g,y,x)}function d(g,y){let{delay:x,staleId:C,...h}=y;if(!ff(g)||function(V){return!i.current||s.props.enableMultiContainer&&V.containerId!==s.props.containerId||o.has(V.toastId)&&V.updateId==null}(h))return;const{toastId:m,updateId:v,data:T}=h,{props:O}=s,_=()=>c(m),E=v==null;E&&s.count++;const F={...O,style:O.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(h).filter(V=>{let[W,re]=V;return re!=null})),toastId:m,updateId:v,data:T,closeToast:_,isIn:!1,className:jl(h.className||O.toastClassName),bodyClassName:jl(h.bodyClassName||O.bodyClassName),progressClassName:jl(h.progressClassName||O.progressClassName),autoClose:!h.isLoading&&(ee=h.autoClose,B=O.autoClose,ee===!1||$a(ee)&&ee>0?ee:B),deleteToast(){const V=Pg(o.get(m),"removed");o.delete(m),xn.emit(4,V);const W=s.queue.length;if(s.count=m==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),W>0){const re=m==null?s.props.limit:1;if(W===1||re===1)s.displayedToast++,u();else{const de=re>W?W:re;s.displayedToast=de;for(let Ee=0;Ee<de;Ee++)u()}}else t()}};var ee,B;F.iconOut=function(V){let{theme:W,type:re,isLoading:de,icon:Ee}=V,Se=null;const z={theme:W,type:re};return Ee===!1||(Yt(Ee)?Se=Ee(z):k.isValidElement(Ee)?Se=k.cloneElement(Ee,z):Ai(Ee)||$a(Ee)?Se=Ee:de?Se=df.spinner():($=>$ in df)(re)&&(Se=df[re](z))),Se}(F),Yt(h.onOpen)&&(F.onOpen=h.onOpen),Yt(h.onClose)&&(F.onClose=h.onClose),F.closeButton=O.closeButton,h.closeButton===!1||ff(h.closeButton)?F.closeButton=h.closeButton:h.closeButton===!0&&(F.closeButton=!ff(O.closeButton)||O.closeButton);let ye=g;k.isValidElement(g)&&!Ai(g.type)?ye=k.cloneElement(g,{closeToast:_,toastProps:F,data:T}):Yt(g)&&(ye=g({closeToast:_,toastProps:F,data:T})),O.limit&&O.limit>0&&s.count>O.limit&&E?s.queue.push({toastContent:ye,toastProps:F,staleId:C}):$a(x)?setTimeout(()=>{p(ye,F,C)},x):p(ye,F,C)}function p(g,y,x){const{toastId:C}=y;x&&o.delete(x);const h={content:g,props:y};o.set(C,h),r(m=>[...m,C].filter(v=>v!==x)),xn.emit(4,Pg(h,h.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(s.containerId=e.containerId,xn.cancelEmit(3).on(0,d).on(1,g=>i.current&&c(g)).on(5,l).emit(2,s),()=>{o.clear(),xn.emit(3,s)}),[]),k.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(g){const y=new Map,x=Array.from(o.values());return e.newestOnTop&&x.reverse(),x.forEach(C=>{const{position:h}=C.props;y.has(h)||y.set(h,[]),y.get(h).push(C)}),Array.from(y,C=>g(C[0],C[1]))},containerRef:i,isToastActive:a}}function Mg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Rg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function gN(e){const[t,n]=k.useState(!1),[r,i]=k.useState(!1),o=k.useRef(null),a=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=k.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:p}=e;function g(T){if(e.draggable){T.nativeEvent.type==="touchstart"&&T.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",m),document.addEventListener("touchmove",h),document.addEventListener("touchend",m);const O=o.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=O.getBoundingClientRect(),O.style.transition="",a.x=Mg(T.nativeEvent),a.y=Rg(T.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=O.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=O.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(T){if(a.boundingRect){const{top:O,bottom:_,left:E,right:F}=a.boundingRect;T.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=E&&a.x<=F&&a.y>=O&&a.y<=_?C():x()}}function x(){n(!0)}function C(){n(!1)}function h(T){const O=o.current;a.canDrag&&O&&(a.didMove=!0,t&&C(),a.x=Mg(T),a.y=Rg(T),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),O.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,O.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",m);const T=o.current;if(a.canDrag&&a.didMove&&T){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),void e.closeToast();T.style.transition="transform 0.2s, opacity 0.2s",T.style.transform=`translate${e.draggableDirection}(0)`,T.style.opacity="1"}}k.useEffect(()=>{s.current=e}),k.useEffect(()=>(o.current&&o.current.addEventListener("d",x,{once:!0}),Yt(e.onOpen)&&e.onOpen(k.isValidElement(e.children)&&e.children.props),()=>{const T=s.current;Yt(T.onClose)&&T.onClose(k.isValidElement(T.children)&&T.children.props)}),[]),k.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",x),window.addEventListener("blur",C)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",C))}),[e.pauseOnFocusLoss]);const v={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return l&&c&&(v.onMouseEnter=C,v.onMouseLeave=x),p&&(v.onClick=T=>{d&&d(T),a.canCloseOnClick&&u()}),{playToast:x,pauseToast:C,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:v}}function Mw(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return me.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},me.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},me.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function xN(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:a,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:p}=e;const g=o||l&&c===0,y={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(y.transform=`scaleX(${c})`);const x=Rr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),C=Yt(a)?a({rtl:u,type:i,defaultClassName:x}):Rr(x,a);return me.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:C,style:y,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const yN=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=gN(e),{closeButton:o,children:a,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:p,position:g,className:y,style:x,bodyClassName:C,bodyStyle:h,progressClassName:m,progressStyle:v,updateId:T,role:O,progress:_,rtl:E,toastId:F,deleteToast:ee,isIn:B,isLoading:ye,iconOut:V,closeOnClick:W,theme:re}=e,de=Rr("Toastify__toast",`Toastify__toast-theme--${re}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":W}),Ee=Yt(y)?y({rtl:E,position:g,type:c,defaultClassName:de}):Rr(de,y),Se=!!_||!s,z={closeToast:d,type:c,theme:re};let $=null;return o===!1||($=Yt(o)?o(z):k.isValidElement(o)?k.cloneElement(o,z):Mw(z)),me.createElement(p,{isIn:B,done:ee,position:g,preventExitTransition:n,nodeRef:r},me.createElement("div",{id:F,onClick:l,className:Ee,...i,style:x,ref:r},me.createElement("div",{...B&&{role:O},className:Yt(C)?C({type:c}):Rr("Toastify__toast-body",C),style:h},V!=null&&me.createElement("div",{className:Rr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ye})},V),me.createElement("div",null,a)),$,me.createElement(xN,{...T&&!Se?{key:`pb-${T}`}:{},rtl:E,theme:re,delay:s,isRunning:t,isIn:B,closeToast:d,hide:u,type:c,style:v,className:m,controlledProgress:Se,progress:_||0})))},mu=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},vN=pu(mu("bounce",!0));pu(mu("slide",!0));pu(mu("zoom"));pu(mu("flip"));const ep=k.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=hN(e),{className:o,style:a,rtl:s,containerId:l}=e;function c(u){const d=Rr("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":s});return Yt(o)?o({position:u,rtl:s,defaultClassName:d}):Rr(d,jl(o))}return k.useEffect(()=>{t&&(t.current=r.current)},[]),me.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const p=d.length?{...a}:{...a,pointerEvents:"none"};return me.createElement("div",{className:c(u),style:p,key:`container-${u}`},d.map((g,y)=>{let{content:x,props:C}=g;return me.createElement(yN,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":y+1,"--len":d.length},key:`toast-${C.key}`},x)}))}))});ep.displayName="ToastContainer",ep.defaultProps={position:"top-right",transition:vN,autoClose:5e3,closeButton:Mw,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let pf,li=new Map,Ca=[],wN=1;function Rw(){return""+wN++}function bN(e){return e&&(Ai(e.toastId)||$a(e.toastId))?e.toastId:Rw()}function La(e,t){return li.size>0?xn.emit(0,e,t):Ca.push({content:e,options:t}),t.toastId}function hc(e,t){return{...t,type:t&&t.type||e,toastId:bN(t)}}function el(e){return(t,n)=>La(t,hc(e,n))}function Ye(e,t){return La(e,hc("default",t))}Ye.loading=(e,t)=>La(e,hc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Ye.promise=function(e,t,n){let r,{pending:i,error:o,success:a}=t;i&&(r=Ai(i)?Ye.loading(i,n):Ye.loading(i.render,{...n,...i}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,p)=>{if(d==null)return void Ye.dismiss(r);const g={type:u,...s,...n,data:p},y=Ai(d)?{render:d}:d;return r?Ye.update(r,{...g,...y}):Ye(y.render,{...g,...y}),p},c=Yt(e)?e():e;return c.then(u=>l("success",a,u)).catch(u=>l("error",o,u)),c},Ye.success=el("success"),Ye.info=el("info"),Ye.error=el("error"),Ye.warning=el("warning"),Ye.warn=Ye.warning,Ye.dark=(e,t)=>La(e,hc("default",{theme:"dark",...t})),Ye.dismiss=e=>{li.size>0?xn.emit(1,e):Ca=Ca.filter(t=>e!=null&&t.options.toastId!==e)},Ye.clearWaitingQueue=function(e){return e===void 0&&(e={}),xn.emit(5,e)},Ye.isActive=e=>{let t=!1;return li.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},Ye.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const a=li.get(o||pf);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Rw()};o.toastId!==e&&(o.staleId=e);const a=o.render||i;delete o.render,La(a,o)}},0)},Ye.done=e=>{Ye.update(e,{progress:1})},Ye.onChange=e=>(xn.on(4,e),()=>{xn.off(4,e)}),Ye.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ye.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},xn.on(2,e=>{pf=e.containerId||e,li.set(pf,e),Ca.forEach(t=>{xn.emit(0,t.content,t.options)}),Ca=[]}).on(3,e=>{li.delete(e.containerId||e),li.size===0&&xn.off(0).off(1).off(5)});const rr=D.div`
  position: ${({position:e})=>e||"static"};
  padding-left: 20px;
  padding-right: 20px;
  
  @media (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1440px;
  }
`,kN=D.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(243, 243, 243, 0.2);
`,CN=D.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
  }
`,SN=D.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,mf=D.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: 500ms linear;
  &:hover,
  &:focus {
    border: 1px solid rgba(64, 112, 205, 0.5);
    /* border: 1px solid rgba(221, 255, 0, 0.2); */
    background-color: #f3f3f3;
  }
  &:hover svg,
  &:focus svg {
    fill: #161f37;
  }
`,EN=D.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 43px;
    flex-direction: row;
    gap: 411px;
  }
`,TN=D.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,tl=D(Pi)`
  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.6;
  transition: 400ms linear;

  &:hover {
    color: #939fc0;
  }
`,AN=D.div`
  @media (min-width: 768px) {
    max-width: 309px;
  }

  @media (min-width: 1440px) {
  }
`,NN=D.p`
  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.42;
  text-align: center;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
  }
`,jN=D.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ON=D.input`
  width: 100%;
  height: 54px;
  padding: 18px 24px;
  padding-right: 48px;

  max-width: 350px;
  align-self: center;

  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.28;
  outline: none;
  border-radius: 200px;
  border: 1px solid;
  border-color: ${e=>e.invalid?"rgba(218, 20, 20, 0.50)":e.valid?"rgba(60, 188, 129, 0.50)":"rgba(243, 243, 243, 0.2)"};
  background-color: transparent;

  &:focus {
    border-color: ${e=>e.invalid?"rgba(218, 20, 20, 0.50)":e.valid?"rgba(60, 188, 129, 0.50)":"rgba(243, 243, 243, 0.5)"};
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #0a0a11 inset;
    -webkit-text-fill-color: #f3f3f3 !important;
  }

  &:-moz-autofill {
    -moz-box-shadow: 0 0 0 30px transparent inset;
    -moz-text-fill-color: #f3f3f3 !important;
    outline: none !important;
  }

  &::placeholder {
    color: #f3f3f3;
    font-weight: 400;
    line-height: 1.28;
  }

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
  }
`,DN=D.button`
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  width: 100%;
  max-width: 350px;

  padding: 18px 0px;
  align-self: center;

  color: #f3f3f3;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  background-color: transparent;

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    font-size: 17px;
  }
`,_N=D.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 153px;
  }

  @media (min-width: 1440px) {
    gap: 0px;
    justify-content: space-between;
  }
`,hf=D.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media (min-width: 1440px) {
  }
`,PN=D.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,gf=D.span`
  font-size: 12;
  line-height: 1.16;
  margin-left: 25px;
`,MN=Ho({email:Xn().email("Invalid email").required()}),RN=()=>{const e=lw({initialValues:{email:""},validationSchema:MN,onSubmit:async(i,{resetForm:o})=>{const{email:a}=i;try{await nr.post("/users/subscribe",{email:a}),Ye.success("Email was successfully send.")}catch(s){console.log(s),Ye.error("Something went wrong. Try again later.",{theme:"dark"})}o()}}),t=e.values.email==="",n=e.touched.email&&e.values.email&&e.errors.email,r=e.touched.email&&!e.errors.email;return f.jsxs(kN,{children:[f.jsx(ep,{theme:"dark"}),f.jsx(rr,{children:f.jsxs("div",{children:[f.jsxs(CN,{children:[f.jsxs(EN,{children:[f.jsxs("div",{children:[f.jsxs(pv,{to:"/",children:[f.jsx(Pn,{size:"22px",size768:"28px",size1440:"28px",children:f.jsx("use",{href:`${Ft}#icon-logo`})}),"Drink Master"]}),f.jsxs(SN,{children:[f.jsx("li",{children:f.jsx(mf,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-facebook`})})})}),f.jsx("li",{children:f.jsx(mf,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-instagram`})})})}),f.jsx("li",{children:f.jsx(mf,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-youtube`})})})})]})]}),f.jsxs(TN,{children:[f.jsx("li",{children:f.jsx(tl,{to:"/drinks",children:"Drinks"})}),f.jsx("li",{children:f.jsx(tl,{to:"/adddrink",children:"Add drink"})}),f.jsx("li",{children:f.jsx(tl,{to:"/mydrinks",children:"My drinks"})}),f.jsx("li",{children:f.jsx(tl,{to:"/favorites",children:"Favorites drinks"})})]})]}),f.jsxs(AN,{children:[f.jsx(NN,{children:"Subscribe up to our newsletter. Be in touch with latest news and special offers, etc."}),f.jsxs(jN,{onSubmit:e.handleSubmit,children:[f.jsxs("div",{style:{position:"relative"},children:[f.jsx(ON,{type:"text",name:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter the email",invalid:n,valid:r}),n?f.jsx(Pn,{size:"20px",size1440:"20px",style:{position:"absolute",top:16,right:24},children:f.jsx("use",{href:`${Ft}#icon-error-sign`})}):r?f.jsx(Pn,{size:"20px",size1440:"20px",style:{position:"absolute",top:16,right:24},children:f.jsx("use",{href:`${Ft}#icon-sucess-sign`})}):null]}),n?f.jsx(gf,{style:{color:"#DA1414"},children:"This is an ERROR email"}):r?f.jsx(gf,{style:{color:"#3CBC81"},children:"This is an CORRECT email"}):f.jsx(gf,{style:{opacity:0},children:"This is an CORRECT email"}),f.jsx(DN,{type:"submit",disabled:t,children:"Subscribe"})]})]})]}),f.jsxs(_N,{children:[f.jsx(hf,{children:"©2023 Drink Master. All rights reserved."}),f.jsxs(PN,{children:[f.jsx(hf,{children:"Privacy Policy"}),f.jsx(hf,{children:"Terms of Service"})]})]})]})})]})},IN=()=>f.jsxs(f.Fragment,{children:[f.jsx(ZT,{}),f.jsx(k.Suspense,{fallback:null,children:f.jsx(M2,{})}),f.jsx(RN,{})]}),$N=D.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  height: 100vh;

  background-image: url('./src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('./src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('./src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start@2x.jpg');
  }
`,LN=D(rr)`
  @media (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`,FN=D.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02px;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,zN=D.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02px;
  line-height: 1.28;
  color: #fafafa;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 470px;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: 1440px) {
    width: 485px;
  }
`,BN=D.div`
  display: flex;
  gap: 14px;

  @media (max-width: 767.98px) {
    justify-content: center;
  }

  @media (min-width: 1440px) {
    gap: 15px;
  }
`,Ig=D(Pi)`
  padding: 14px 40px;
  border-radius: 42px;
  min-width: 52px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  cursor: pointer;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:hover {
    color: #161f37;
    background-color: #f3f3f3;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    min-width: 59px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
  }
`,UN=()=>f.jsx($N,{children:f.jsxs(LN,{children:[f.jsx(FN,{children:"Welcome to the app!"}),f.jsx(zN,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),f.jsxs(BN,{children:[f.jsx(Ig,{to:"/registration",children:"Sign Up"}),f.jsx(Ig,{to:"/login",children:" Sign In"})]})]})}),WN=D.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 100%;
  height: 100vh;

  background-image: url('./src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('./src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('./src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start@2x.jpg');
  }
`,HN=D(rr)`
  @media (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`,VN=D.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`,YN=D.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,XN=D(Pi)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  &:hover {
    /* color: #161f37; */
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;function QN(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Calendar"},child:[{tag:"path",attr:{d:`M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z`}}]}]})(e)}function Iw(e){return Tn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function $w(e){return Tn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]})(e)}function KN(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function Lw(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function Fw(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function GN(e){return Tn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}const qN=D(Fw)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`,JN=D(Lw)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`,ZN=D.div`
  input {
    display: block;
    
  }

  .success {
    outline: 1px solid green;
  }

  .fail {
    outline: 1px solid red;
  }

  .unfilled {
    outline: 1px solid gray;
  }
`,e7=D(Iw)`
  fill: #3cbc81;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`,t7=D($w)`
  fill: #da1414;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`,n7=D(As)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    width: 400px;
  }
`,Wm=D.label`
  display: flex;
  flex-direction: column;
`,r7=D(Wm)`
  margin-bottom: 28px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Hm=D.div`
  position: relative;
`,Vm=D(gr)`
border: none;
  width: 100%;
  padding: 18px 24px;

  border-radius: 200px;
  color: #f3f3f3;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28;

  transition: color 300ms linear;

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`,i7=D(QN)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  fill: #f3f3f3;
  cursor: pointer;
`;D.div`
  position: relative;
`;const Ym=D.span`
  color: #3cbc81;
  padding-top: 8px;
  padding-left: 25px;
  font-size: 12px;
`,Xm=D(Im)`
  padding-top: 8px;
  color: #da1414;
  padding-left: 25px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,o7=D.button`
  width: 100%;
  padding: 18px;
  background-color: transparent;
  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  border-radius: 42px;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;var xf=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],xo={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return typeof console<"u"&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},fs={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},Wt=function(e,t){return t===void 0&&(t=2),("000"+e).slice(t*-1)},gn=function(e){return e===!0?1:0};function $g(e,t){var n;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(r,i)},t)}}var yf=function(e){return e instanceof Array?e:[e]};function $t(e,t,n){if(n===!0)return e.classList.add(t);e.classList.remove(t)}function Me(e,t,n){var r=window.document.createElement(e);return t=t||"",n=n||"",r.className=t,n!==void 0&&(r.textContent=n),r}function nl(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function zw(e,t){if(t(e))return e;if(e.parentNode)return zw(e.parentNode,t)}function rl(e,t){var n=Me("div","numInputWrapper"),r=Me("input","numInput "+e),i=Me("span","arrowUp"),o=Me("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),t!==void 0)for(var a in t)r.setAttribute(a,t[a]);return n.appendChild(r),n.appendChild(i),n.appendChild(o),n}function Jt(e){try{if(typeof e.composedPath=="function"){var t=e.composedPath();return t[0]}return e.target}catch{return e.target}}var vf=function(){},gc=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},a7={D:vf,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*gn(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(parseFloat(t)*1e3)},W:function(e,t,n){var r=parseInt(t),i=new Date(e.getFullYear(),0,2+(r-1)*7,0,0,0,0);return i.setDate(i.getDate()-i.getDay()+n.firstDayOfWeek),i},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:vf,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:vf,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},ui={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Fa={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[Fa.w(e,t,n)]},F:function(e,t,n){return gc(Fa.n(e,t,n)-1,!1,t)},G:function(e,t,n){return Wt(Fa.h(e,t,n))},H:function(e){return Wt(e.getHours())},J:function(e,t){return t.ordinal!==void 0?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[gn(e.getHours()>11)]},M:function(e,t){return gc(e.getMonth(),!0,t)},S:function(e){return Wt(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return Wt(e.getFullYear(),4)},d:function(e){return Wt(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return Wt(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return Wt(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},Bw=function(e){var t=e.config,n=t===void 0?xo:t,r=e.l10n,i=r===void 0?fs:r,o=e.isMobile,a=o===void 0?!1:o;return function(s,l,c){var u=c||i;return n.formatDate!==void 0&&!a?n.formatDate(s,l,u):l.split("").map(function(d,p,g){return Fa[d]&&g[p-1]!=="\\"?Fa[d](s,u,n):d!=="\\"?d:""}).join("")}},tp=function(e){var t=e.config,n=t===void 0?xo:t,r=e.l10n,i=r===void 0?fs:r;return function(o,a,s,l){if(!(o!==0&&!o)){var c=l||i,u,d=o;if(o instanceof Date)u=new Date(o.getTime());else if(typeof o!="string"&&o.toFixed!==void 0)u=new Date(o);else if(typeof o=="string"){var p=a||(n||xo).dateFormat,g=String(o).trim();if(g==="today")u=new Date,s=!0;else if(n&&n.parseDate)u=n.parseDate(o,p);else if(/Z$/.test(g)||/GMT$/.test(g))u=new Date(o);else{for(var y=void 0,x=[],C=0,h=0,m="";C<p.length;C++){var v=p[C],T=v==="\\",O=p[C-1]==="\\"||T;if(ui[v]&&!O){m+=ui[v];var _=new RegExp(m).exec(o);_&&(y=!0)&&x[v!=="Y"?"push":"unshift"]({fn:a7[v],val:_[++h]})}else T||(m+=".")}u=!n||!n.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),x.forEach(function(E){var F=E.fn,ee=E.val;return u=F(u,ee,c)||u}),u=y?u:void 0}}if(!(u instanceof Date&&!isNaN(u.getTime()))){n.errorHandler(new Error("Invalid date provided: "+d));return}return s===!0&&u.setHours(0,0,0,0),u}}};function en(e,t,n){return n===void 0&&(n=!0),n!==!1?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var s7=function(e,t,n){return e>Math.min(t,n)&&e<Math.max(t,n)},wf=function(e,t,n){return e*3600+t*60+n},l7=function(e){var t=Math.floor(e/3600),n=(e-t*3600)/60;return[t,n,e-t*3600-n*60]},c7={DAY:864e5};function bf(e){var t=e.defaultHour,n=e.defaultMinute,r=e.defaultSeconds;if(e.minDate!==void 0){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),a=e.minDate.getSeconds();t<i&&(t=i),t===i&&n<o&&(n=o),t===i&&n===o&&r<a&&(r=e.minDate.getSeconds())}if(e.maxDate!==void 0){var s=e.maxDate.getHours(),l=e.maxDate.getMinutes();t=Math.min(t,s),t===s&&(n=Math.min(l,n)),t===s&&n===l&&(r=e.maxDate.getSeconds())}return{hours:t,minutes:n,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var r=function(s){s&&Object.keys(s).forEach(function(l){return e[l]=s[l]})},i=0,o=t;i<o.length;i++){var a=o[i];r(a)}return e});var _t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_t.apply(this,arguments)},Lg=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r},u7=300;function f7(e,t){var n={config:_t(_t({},xo),lt.defaultConfig),l10n:fs};n.parseDate=tp({config:n.config,l10n:n.l10n}),n._handlers=[],n.pluginElements=[],n.loadedPlugins=[],n._bind=x,n._setHoursFromDate=p,n._positionCalendar=fe,n.changeMonth=te,n.changeYear=Ae,n.clear=Y,n.close=se,n.onMouseOver=et,n._createElement=Me,n.createDay=_,n.destroy=le,n.isEnabled=_e,n.jumpToDate=m,n.updateValue=An,n.open=S,n.redraw=N,n.set=oe,n.setDate=ue,n.toggle=st;function r(){n.utils={getDaysInMonth:function(w,b){return w===void 0&&(w=n.currentMonth),b===void 0&&(b=n.currentYear),w===1&&(b%4===0&&b%100!==0||b%400===0)?29:n.l10n.daysInMonth[w]}}}function i(){n.element=n.input=e,n.isOpen=!1,P(),J(),kt(),Ce(),r(),n.isMobile||O(),h(),(n.selectedDates.length||n.config.noCalendar)&&(n.config.enableTime&&p(n.config.noCalendar?n.latestSelectedDateObj:void 0),An(!1)),s();var w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!n.isMobile&&w&&fe(),he("onReady")}function o(){var w;return((w=n.calendarContainer)===null||w===void 0?void 0:w.getRootNode()).activeElement||document.activeElement}function a(w){return w.bind(n)}function s(){var w=n.config;w.weekNumbers===!1&&w.showMonths===1||w.noCalendar!==!0&&window.requestAnimationFrame(function(){if(n.calendarContainer!==void 0&&(n.calendarContainer.style.visibility="hidden",n.calendarContainer.style.display="block"),n.daysContainer!==void 0){var b=(n.days.offsetWidth+1)*w.showMonths;n.daysContainer.style.width=b+"px",n.calendarContainer.style.width=b+(n.weekWrapper!==void 0?n.weekWrapper.offsetWidth:0)+"px",n.calendarContainer.style.removeProperty("visibility"),n.calendarContainer.style.removeProperty("display")}})}function l(w){if(n.selectedDates.length===0){var b=n.config.minDate===void 0||en(new Date,n.config.minDate)>=0?new Date:new Date(n.config.minDate.getTime()),j=bf(n.config);b.setHours(j.hours,j.minutes,j.seconds,b.getMilliseconds()),n.selectedDates=[b],n.latestSelectedDateObj=b}w!==void 0&&w.type!=="blur"&&Ds(w);var R=n._input.value;d(),An(),n._input.value!==R&&n._debouncedChange()}function c(w,b){return w%12+12*gn(b===n.l10n.amPM[1])}function u(w){switch(w%24){case 0:case 12:return 12;default:return w%12}}function d(){if(!(n.hourElement===void 0||n.minuteElement===void 0)){var w=(parseInt(n.hourElement.value.slice(-2),10)||0)%24,b=(parseInt(n.minuteElement.value,10)||0)%60,j=n.secondElement!==void 0?(parseInt(n.secondElement.value,10)||0)%60:0;n.amPM!==void 0&&(w=c(w,n.amPM.textContent));var R=n.config.minTime!==void 0||n.config.minDate&&n.minDateHasTime&&n.latestSelectedDateObj&&en(n.latestSelectedDateObj,n.config.minDate,!0)===0,Q=n.config.maxTime!==void 0||n.config.maxDate&&n.maxDateHasTime&&n.latestSelectedDateObj&&en(n.latestSelectedDateObj,n.config.maxDate,!0)===0;if(n.config.maxTime!==void 0&&n.config.minTime!==void 0&&n.config.minTime>n.config.maxTime){var Z=wf(n.config.minTime.getHours(),n.config.minTime.getMinutes(),n.config.minTime.getSeconds()),ve=wf(n.config.maxTime.getHours(),n.config.maxTime.getMinutes(),n.config.maxTime.getSeconds()),ie=wf(w,b,j);if(ie>ve&&ie<Z){var be=l7(Z);w=be[0],b=be[1],j=be[2]}}else{if(Q){var K=n.config.maxTime!==void 0?n.config.maxTime:n.config.maxDate;w=Math.min(w,K.getHours()),w===K.getHours()&&(b=Math.min(b,K.getMinutes())),b===K.getMinutes()&&(j=Math.min(j,K.getSeconds()))}if(R){var ae=n.config.minTime!==void 0?n.config.minTime:n.config.minDate;w=Math.max(w,ae.getHours()),w===ae.getHours()&&b<ae.getMinutes()&&(b=ae.getMinutes()),b===ae.getMinutes()&&(j=Math.max(j,ae.getSeconds()))}}g(w,b,j)}}function p(w){var b=w||n.latestSelectedDateObj;b&&b instanceof Date&&g(b.getHours(),b.getMinutes(),b.getSeconds())}function g(w,b,j){n.latestSelectedDateObj!==void 0&&n.latestSelectedDateObj.setHours(w%24,b,j||0,0),!(!n.hourElement||!n.minuteElement||n.isMobile)&&(n.hourElement.value=Wt(n.config.time_24hr?w:(12+w)%12+12*gn(w%12===0)),n.minuteElement.value=Wt(b),n.amPM!==void 0&&(n.amPM.textContent=n.l10n.amPM[gn(w>=12)]),n.secondElement!==void 0&&(n.secondElement.value=Wt(j)))}function y(w){var b=Jt(w),j=parseInt(b.value)+(w.delta||0);(j/1e3>1||w.key==="Enter"&&!/[^\d]/.test(j.toString()))&&Ae(j)}function x(w,b,j,R){if(b instanceof Array)return b.forEach(function(Q){return x(w,Q,j,R)});if(w instanceof Array)return w.forEach(function(Q){return x(Q,b,j,R)});w.addEventListener(b,j,R),n._handlers.push({remove:function(){return w.removeEventListener(b,j,R)}})}function C(){he("onChange")}function h(){if(n.config.wrap&&["open","close","toggle","clear"].forEach(function(j){Array.prototype.forEach.call(n.element.querySelectorAll("[data-"+j+"]"),function(R){return x(R,"click",n[j])})}),n.isMobile){xt();return}var w=$g($e,50);if(n._debouncedChange=$g(C,u7),n.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&x(n.daysContainer,"mouseover",function(j){n.config.mode==="range"&&et(Jt(j))}),x(n._input,"keydown",Ze),n.calendarContainer!==void 0&&x(n.calendarContainer,"keydown",Ze),!n.config.inline&&!n.config.static&&x(window,"resize",w),window.ontouchstart!==void 0?x(window.document,"touchstart",we):x(window.document,"mousedown",we),x(window.document,"focus",we,{capture:!0}),n.config.clickOpens===!0&&(x(n._input,"focus",n.open),x(n._input,"click",n.open)),n.daysContainer!==void 0&&(x(n.monthNav,"click",Jo),x(n.monthNav,["keyup","increment"],y),x(n.daysContainer,"click",H)),n.timeContainer!==void 0&&n.minuteElement!==void 0&&n.hourElement!==void 0){var b=function(j){return Jt(j).select()};x(n.timeContainer,["increment"],l),x(n.timeContainer,"blur",l,{capture:!0}),x(n.timeContainer,"click",v),x([n.hourElement,n.minuteElement],["focus","click"],b),n.secondElement!==void 0&&x(n.secondElement,"focus",function(){return n.secondElement&&n.secondElement.select()}),n.amPM!==void 0&&x(n.amPM,"click",function(j){l(j)})}n.config.allowInput&&x(n._input,"blur",Je)}function m(w,b){var j=w!==void 0?n.parseDate(w):n.latestSelectedDateObj||(n.config.minDate&&n.config.minDate>n.now?n.config.minDate:n.config.maxDate&&n.config.maxDate<n.now?n.config.maxDate:n.now),R=n.currentYear,Q=n.currentMonth;try{j!==void 0&&(n.currentYear=j.getFullYear(),n.currentMonth=j.getMonth())}catch(Z){Z.message="Invalid date supplied: "+j,n.config.errorHandler(Z)}b&&n.currentYear!==R&&(he("onYearChange"),W()),b&&(n.currentYear!==R||n.currentMonth!==Q)&&he("onMonthChange"),n.redraw()}function v(w){var b=Jt(w);~b.className.indexOf("arrow")&&T(w,b.classList.contains("arrowUp")?1:-1)}function T(w,b,j){var R=w&&Jt(w),Q=j||R&&R.parentNode&&R.parentNode.firstChild,Z=mn("increment");Z.delta=b,Q&&Q.dispatchEvent(Z)}function O(){var w=window.document.createDocumentFragment();if(n.calendarContainer=Me("div","flatpickr-calendar"),n.calendarContainer.tabIndex=-1,!n.config.noCalendar){if(w.appendChild(Ee()),n.innerContainer=Me("div","flatpickr-innerContainer"),n.config.weekNumbers){var b=M(),j=b.weekWrapper,R=b.weekNumbers;n.innerContainer.appendChild(j),n.weekNumbers=R,n.weekWrapper=j}n.rContainer=Me("div","flatpickr-rContainer"),n.rContainer.appendChild(z()),n.daysContainer||(n.daysContainer=Me("div","flatpickr-days"),n.daysContainer.tabIndex=-1),V(),n.rContainer.appendChild(n.daysContainer),n.innerContainer.appendChild(n.rContainer),w.appendChild(n.innerContainer)}n.config.enableTime&&w.appendChild(Se()),$t(n.calendarContainer,"rangeMode",n.config.mode==="range"),$t(n.calendarContainer,"animate",n.config.animate===!0),$t(n.calendarContainer,"multiMonth",n.config.showMonths>1),n.calendarContainer.appendChild(w);var Q=n.config.appendTo!==void 0&&n.config.appendTo.nodeType!==void 0;if((n.config.inline||n.config.static)&&(n.calendarContainer.classList.add(n.config.inline?"inline":"static"),n.config.inline&&(!Q&&n.element.parentNode?n.element.parentNode.insertBefore(n.calendarContainer,n._input.nextSibling):n.config.appendTo!==void 0&&n.config.appendTo.appendChild(n.calendarContainer)),n.config.static)){var Z=Me("div","flatpickr-wrapper");n.element.parentNode&&n.element.parentNode.insertBefore(Z,n.element),Z.appendChild(n.element),n.altInput&&Z.appendChild(n.altInput),Z.appendChild(n.calendarContainer)}!n.config.static&&!n.config.inline&&(n.config.appendTo!==void 0?n.config.appendTo:window.document.body).appendChild(n.calendarContainer)}function _(w,b,j,R){var Q=_e(b,!0),Z=Me("span",w,b.getDate().toString());return Z.dateObj=b,Z.$i=R,Z.setAttribute("aria-label",n.formatDate(b,n.config.ariaDateFormat)),w.indexOf("hidden")===-1&&en(b,n.now)===0&&(n.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),Q?(Z.tabIndex=-1,xe(b)&&(Z.classList.add("selected"),n.selectedDateElem=Z,n.config.mode==="range"&&($t(Z,"startRange",n.selectedDates[0]&&en(b,n.selectedDates[0],!0)===0),$t(Z,"endRange",n.selectedDates[1]&&en(b,n.selectedDates[1],!0)===0),w==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),n.config.mode==="range"&&br(b)&&!xe(b)&&Z.classList.add("inRange"),n.weekNumbers&&n.config.showMonths===1&&w!=="prevMonthDay"&&R%7===6&&n.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+n.config.getWeek(b)+"</span>"),he("onDayCreate",Z),Z}function E(w){w.focus(),n.config.mode==="range"&&et(w)}function F(w){for(var b=w>0?0:n.config.showMonths-1,j=w>0?n.config.showMonths:-1,R=b;R!=j;R+=w)for(var Q=n.daysContainer.children[R],Z=w>0?0:Q.children.length-1,ve=w>0?Q.children.length:-1,ie=Z;ie!=ve;ie+=w){var be=Q.children[ie];if(be.className.indexOf("hidden")===-1&&_e(be.dateObj))return be}}function ee(w,b){for(var j=w.className.indexOf("Month")===-1?w.dateObj.getMonth():n.currentMonth,R=b>0?n.config.showMonths:-1,Q=b>0?1:-1,Z=j-n.currentMonth;Z!=R;Z+=Q)for(var ve=n.daysContainer.children[Z],ie=j-n.currentMonth===Z?w.$i+b:b<0?ve.children.length-1:0,be=ve.children.length,K=ie;K>=0&&K<be&&K!=(b>0?be:-1);K+=Q){var ae=ve.children[K];if(ae.className.indexOf("hidden")===-1&&_e(ae.dateObj)&&Math.abs(w.$i-K)>=Math.abs(b))return E(ae)}n.changeMonth(Q),B(F(Q),0)}function B(w,b){var j=o(),R=at(j||document.body),Q=w!==void 0?w:R?j:n.selectedDateElem!==void 0&&at(n.selectedDateElem)?n.selectedDateElem:n.todayDateElem!==void 0&&at(n.todayDateElem)?n.todayDateElem:F(b>0?1:-1);Q===void 0?n._input.focus():R?ee(Q,b):E(Q)}function ye(w,b){for(var j=(new Date(w,b,1).getDay()-n.l10n.firstDayOfWeek+7)%7,R=n.utils.getDaysInMonth((b-1+12)%12,w),Q=n.utils.getDaysInMonth(b,w),Z=window.document.createDocumentFragment(),ve=n.config.showMonths>1,ie=ve?"prevMonthDay hidden":"prevMonthDay",be=ve?"nextMonthDay hidden":"nextMonthDay",K=R+1-j,ae=0;K<=R;K++,ae++)Z.appendChild(_("flatpickr-day "+ie,new Date(w,b-1,K),K,ae));for(K=1;K<=Q;K++,ae++)Z.appendChild(_("flatpickr-day",new Date(w,b,K),K,ae));for(var je=Q+1;je<=42-j&&(n.config.showMonths===1||ae%7!==0);je++,ae++)Z.appendChild(_("flatpickr-day "+be,new Date(w,b+1,je%Q),je,ae));var It=Me("div","dayContainer");return It.appendChild(Z),It}function V(){if(n.daysContainer!==void 0){nl(n.daysContainer),n.weekNumbers&&nl(n.weekNumbers);for(var w=document.createDocumentFragment(),b=0;b<n.config.showMonths;b++){var j=new Date(n.currentYear,n.currentMonth,1);j.setMonth(n.currentMonth+b),w.appendChild(ye(j.getFullYear(),j.getMonth()))}n.daysContainer.appendChild(w),n.days=n.daysContainer.firstChild,n.config.mode==="range"&&n.selectedDates.length===1&&et()}}function W(){if(!(n.config.showMonths>1||n.config.monthSelectorType!=="dropdown")){var w=function(R){return n.config.minDate!==void 0&&n.currentYear===n.config.minDate.getFullYear()&&R<n.config.minDate.getMonth()?!1:!(n.config.maxDate!==void 0&&n.currentYear===n.config.maxDate.getFullYear()&&R>n.config.maxDate.getMonth())};n.monthsDropdownContainer.tabIndex=-1,n.monthsDropdownContainer.innerHTML="";for(var b=0;b<12;b++)if(w(b)){var j=Me("option","flatpickr-monthDropdown-month");j.value=new Date(n.currentYear,b).getMonth().toString(),j.textContent=gc(b,n.config.shorthandCurrentMonth,n.l10n),j.tabIndex=-1,n.currentMonth===b&&(j.selected=!0),n.monthsDropdownContainer.appendChild(j)}}}function re(){var w=Me("div","flatpickr-month"),b=window.document.createDocumentFragment(),j;n.config.showMonths>1||n.config.monthSelectorType==="static"?j=Me("span","cur-month"):(n.monthsDropdownContainer=Me("select","flatpickr-monthDropdown-months"),n.monthsDropdownContainer.setAttribute("aria-label",n.l10n.monthAriaLabel),x(n.monthsDropdownContainer,"change",function(ve){var ie=Jt(ve),be=parseInt(ie.value,10);n.changeMonth(be-n.currentMonth),he("onMonthChange")}),W(),j=n.monthsDropdownContainer);var R=rl("cur-year",{tabindex:"-1"}),Q=R.getElementsByTagName("input")[0];Q.setAttribute("aria-label",n.l10n.yearAriaLabel),n.config.minDate&&Q.setAttribute("min",n.config.minDate.getFullYear().toString()),n.config.maxDate&&(Q.setAttribute("max",n.config.maxDate.getFullYear().toString()),Q.disabled=!!n.config.minDate&&n.config.minDate.getFullYear()===n.config.maxDate.getFullYear());var Z=Me("div","flatpickr-current-month");return Z.appendChild(j),Z.appendChild(R),b.appendChild(Z),w.appendChild(b),{container:w,yearElement:Q,monthElement:j}}function de(){nl(n.monthNav),n.monthNav.appendChild(n.prevMonthNav),n.config.showMonths&&(n.yearElements=[],n.monthElements=[]);for(var w=n.config.showMonths;w--;){var b=re();n.yearElements.push(b.yearElement),n.monthElements.push(b.monthElement),n.monthNav.appendChild(b.container)}n.monthNav.appendChild(n.nextMonthNav)}function Ee(){return n.monthNav=Me("div","flatpickr-months"),n.yearElements=[],n.monthElements=[],n.prevMonthNav=Me("span","flatpickr-prev-month"),n.prevMonthNav.innerHTML=n.config.prevArrow,n.nextMonthNav=Me("span","flatpickr-next-month"),n.nextMonthNav.innerHTML=n.config.nextArrow,de(),Object.defineProperty(n,"_hidePrevMonthArrow",{get:function(){return n.__hidePrevMonthArrow},set:function(w){n.__hidePrevMonthArrow!==w&&($t(n.prevMonthNav,"flatpickr-disabled",w),n.__hidePrevMonthArrow=w)}}),Object.defineProperty(n,"_hideNextMonthArrow",{get:function(){return n.__hideNextMonthArrow},set:function(w){n.__hideNextMonthArrow!==w&&($t(n.nextMonthNav,"flatpickr-disabled",w),n.__hideNextMonthArrow=w)}}),n.currentYearElement=n.yearElements[0],zn(),n.monthNav}function Se(){n.calendarContainer.classList.add("hasTime"),n.config.noCalendar&&n.calendarContainer.classList.add("noCalendar");var w=bf(n.config);n.timeContainer=Me("div","flatpickr-time"),n.timeContainer.tabIndex=-1;var b=Me("span","flatpickr-time-separator",":"),j=rl("flatpickr-hour",{"aria-label":n.l10n.hourAriaLabel});n.hourElement=j.getElementsByTagName("input")[0];var R=rl("flatpickr-minute",{"aria-label":n.l10n.minuteAriaLabel});if(n.minuteElement=R.getElementsByTagName("input")[0],n.hourElement.tabIndex=n.minuteElement.tabIndex=-1,n.hourElement.value=Wt(n.latestSelectedDateObj?n.latestSelectedDateObj.getHours():n.config.time_24hr?w.hours:u(w.hours)),n.minuteElement.value=Wt(n.latestSelectedDateObj?n.latestSelectedDateObj.getMinutes():w.minutes),n.hourElement.setAttribute("step",n.config.hourIncrement.toString()),n.minuteElement.setAttribute("step",n.config.minuteIncrement.toString()),n.hourElement.setAttribute("min",n.config.time_24hr?"0":"1"),n.hourElement.setAttribute("max",n.config.time_24hr?"23":"12"),n.hourElement.setAttribute("maxlength","2"),n.minuteElement.setAttribute("min","0"),n.minuteElement.setAttribute("max","59"),n.minuteElement.setAttribute("maxlength","2"),n.timeContainer.appendChild(j),n.timeContainer.appendChild(b),n.timeContainer.appendChild(R),n.config.time_24hr&&n.timeContainer.classList.add("time24hr"),n.config.enableSeconds){n.timeContainer.classList.add("hasSeconds");var Q=rl("flatpickr-second");n.secondElement=Q.getElementsByTagName("input")[0],n.secondElement.value=Wt(n.latestSelectedDateObj?n.latestSelectedDateObj.getSeconds():w.seconds),n.secondElement.setAttribute("step",n.minuteElement.getAttribute("step")),n.secondElement.setAttribute("min","0"),n.secondElement.setAttribute("max","59"),n.secondElement.setAttribute("maxlength","2"),n.timeContainer.appendChild(Me("span","flatpickr-time-separator",":")),n.timeContainer.appendChild(Q)}return n.config.time_24hr||(n.amPM=Me("span","flatpickr-am-pm",n.l10n.amPM[gn((n.latestSelectedDateObj?n.hourElement.value:n.config.defaultHour)>11)]),n.amPM.title=n.l10n.toggleTitle,n.amPM.tabIndex=-1,n.timeContainer.appendChild(n.amPM)),n.timeContainer}function z(){n.weekdayContainer?nl(n.weekdayContainer):n.weekdayContainer=Me("div","flatpickr-weekdays");for(var w=n.config.showMonths;w--;){var b=Me("div","flatpickr-weekdaycontainer");n.weekdayContainer.appendChild(b)}return $(),n.weekdayContainer}function $(){if(n.weekdayContainer){var w=n.l10n.firstDayOfWeek,b=Lg(n.l10n.weekdays.shorthand);w>0&&w<b.length&&(b=Lg(b.splice(w,b.length),b.splice(0,w)));for(var j=n.config.showMonths;j--;)n.weekdayContainer.children[j].innerHTML=`
      <span class='flatpickr-weekday'>
        `+b.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function M(){n.calendarContainer.classList.add("hasWeeks");var w=Me("div","flatpickr-weekwrapper");w.appendChild(Me("span","flatpickr-weekday",n.l10n.weekAbbreviation));var b=Me("div","flatpickr-weeks");return w.appendChild(b),{weekWrapper:w,weekNumbers:b}}function te(w,b){b===void 0&&(b=!0);var j=b?w:w-n.currentMonth;j<0&&n._hidePrevMonthArrow===!0||j>0&&n._hideNextMonthArrow===!0||(n.currentMonth+=j,(n.currentMonth<0||n.currentMonth>11)&&(n.currentYear+=n.currentMonth>11?1:-1,n.currentMonth=(n.currentMonth+12)%12,he("onYearChange"),W()),V(),he("onMonthChange"),zn())}function Y(w,b){if(w===void 0&&(w=!0),b===void 0&&(b=!0),n.input.value="",n.altInput!==void 0&&(n.altInput.value=""),n.mobileInput!==void 0&&(n.mobileInput.value=""),n.selectedDates=[],n.latestSelectedDateObj=void 0,b===!0&&(n.currentYear=n._initialDate.getFullYear(),n.currentMonth=n._initialDate.getMonth()),n.config.enableTime===!0){var j=bf(n.config),R=j.hours,Q=j.minutes,Z=j.seconds;g(R,Q,Z)}n.redraw(),w&&he("onChange")}function se(){n.isOpen=!1,n.isMobile||(n.calendarContainer!==void 0&&n.calendarContainer.classList.remove("open"),n._input!==void 0&&n._input.classList.remove("active")),he("onClose")}function le(){n.config!==void 0&&he("onDestroy");for(var w=n._handlers.length;w--;)n._handlers[w].remove();if(n._handlers=[],n.mobileInput)n.mobileInput.parentNode&&n.mobileInput.parentNode.removeChild(n.mobileInput),n.mobileInput=void 0;else if(n.calendarContainer&&n.calendarContainer.parentNode)if(n.config.static&&n.calendarContainer.parentNode){var b=n.calendarContainer.parentNode;if(b.lastChild&&b.removeChild(b.lastChild),b.parentNode){for(;b.firstChild;)b.parentNode.insertBefore(b.firstChild,b);b.parentNode.removeChild(b)}}else n.calendarContainer.parentNode.removeChild(n.calendarContainer);n.altInput&&(n.input.type="text",n.altInput.parentNode&&n.altInput.parentNode.removeChild(n.altInput),delete n.altInput),n.input&&(n.input.type=n.input._type,n.input.classList.remove("flatpickr-input"),n.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(j){try{delete n[j]}catch{}})}function ge(w){return n.calendarContainer.contains(w)}function we(w){if(n.isOpen&&!n.config.inline){var b=Jt(w),j=ge(b),R=b===n.input||b===n.altInput||n.element.contains(b)||w.path&&w.path.indexOf&&(~w.path.indexOf(n.input)||~w.path.indexOf(n.altInput)),Q=!R&&!j&&!ge(w.relatedTarget),Z=!n.config.ignoredFocusElements.some(function(ve){return ve.contains(b)});Q&&Z&&(n.config.allowInput&&n.setDate(n._input.value,!1,n.config.altInput?n.config.altFormat:n.config.dateFormat),n.timeContainer!==void 0&&n.minuteElement!==void 0&&n.hourElement!==void 0&&n.input.value!==""&&n.input.value!==void 0&&l(),n.close(),n.config&&n.config.mode==="range"&&n.selectedDates.length===1&&n.clear(!1))}}function Ae(w){if(!(!w||n.config.minDate&&w<n.config.minDate.getFullYear()||n.config.maxDate&&w>n.config.maxDate.getFullYear())){var b=w,j=n.currentYear!==b;n.currentYear=b||n.currentYear,n.config.maxDate&&n.currentYear===n.config.maxDate.getFullYear()?n.currentMonth=Math.min(n.config.maxDate.getMonth(),n.currentMonth):n.config.minDate&&n.currentYear===n.config.minDate.getFullYear()&&(n.currentMonth=Math.max(n.config.minDate.getMonth(),n.currentMonth)),j&&(n.redraw(),he("onYearChange"),W())}}function _e(w,b){var j;b===void 0&&(b=!0);var R=n.parseDate(w,void 0,b);if(n.config.minDate&&R&&en(R,n.config.minDate,b!==void 0?b:!n.minDateHasTime)<0||n.config.maxDate&&R&&en(R,n.config.maxDate,b!==void 0?b:!n.maxDateHasTime)>0)return!1;if(!n.config.enable&&n.config.disable.length===0)return!0;if(R===void 0)return!1;for(var Q=!!n.config.enable,Z=(j=n.config.enable)!==null&&j!==void 0?j:n.config.disable,ve=0,ie=void 0;ve<Z.length;ve++){if(ie=Z[ve],typeof ie=="function"&&ie(R))return Q;if(ie instanceof Date&&R!==void 0&&ie.getTime()===R.getTime())return Q;if(typeof ie=="string"){var be=n.parseDate(ie,void 0,!0);return be&&be.getTime()===R.getTime()?Q:!Q}else if(typeof ie=="object"&&R!==void 0&&ie.from&&ie.to&&R.getTime()>=ie.from.getTime()&&R.getTime()<=ie.to.getTime())return Q}return!Q}function at(w){return n.daysContainer!==void 0?w.className.indexOf("hidden")===-1&&w.className.indexOf("flatpickr-disabled")===-1&&n.daysContainer.contains(w):!1}function Je(w){var b=w.target===n._input,j=n._input.value.trimEnd()!==Ui();b&&j&&!(w.relatedTarget&&ge(w.relatedTarget))&&n.setDate(n._input.value,!0,w.target===n.altInput?n.config.altFormat:n.config.dateFormat)}function Ze(w){var b=Jt(w),j=n.config.wrap?e.contains(b):b===n._input,R=n.config.allowInput,Q=n.isOpen&&(!R||!j),Z=n.config.inline&&j&&!R;if(w.keyCode===13&&j){if(R)return n.setDate(n._input.value,!0,b===n.altInput?n.config.altFormat:n.config.dateFormat),n.close(),b.blur();n.open()}else if(ge(b)||Q||Z){var ve=!!n.timeContainer&&n.timeContainer.contains(b);switch(w.keyCode){case 13:ve?(w.preventDefault(),l(),I()):H(w);break;case 27:w.preventDefault(),I();break;case 8:case 46:j&&!n.config.allowInput&&(w.preventDefault(),n.clear());break;case 37:case 39:if(!ve&&!j){w.preventDefault();var ie=o();if(n.daysContainer!==void 0&&(R===!1||ie&&at(ie))){var be=w.keyCode===39?1:-1;w.ctrlKey?(w.stopPropagation(),te(be),B(F(1),0)):B(void 0,be)}}else n.hourElement&&n.hourElement.focus();break;case 38:case 40:w.preventDefault();var K=w.keyCode===40?1:-1;n.daysContainer&&b.$i!==void 0||b===n.input||b===n.altInput?w.ctrlKey?(w.stopPropagation(),Ae(n.currentYear-K),B(F(1),0)):ve||B(void 0,K*7):b===n.currentYearElement?Ae(n.currentYear-K):n.config.enableTime&&(!ve&&n.hourElement&&n.hourElement.focus(),l(w),n._debouncedChange());break;case 9:if(ve){var ae=[n.hourElement,n.minuteElement,n.secondElement,n.amPM].concat(n.pluginElements).filter(function(qt){return qt}),je=ae.indexOf(b);if(je!==-1){var It=ae[je+(w.shiftKey?-1:1)];w.preventDefault(),(It||n._input).focus()}}else!n.config.noCalendar&&n.daysContainer&&n.daysContainer.contains(b)&&w.shiftKey&&(w.preventDefault(),n._input.focus());break}}if(n.amPM!==void 0&&b===n.amPM)switch(w.key){case n.l10n.amPM[0].charAt(0):case n.l10n.amPM[0].charAt(0).toLowerCase():n.amPM.textContent=n.l10n.amPM[0],d(),An();break;case n.l10n.amPM[1].charAt(0):case n.l10n.amPM[1].charAt(0).toLowerCase():n.amPM.textContent=n.l10n.amPM[1],d(),An();break}(j||ge(b))&&he("onKeyDown",w)}function et(w,b){if(b===void 0&&(b="flatpickr-day"),!(n.selectedDates.length!==1||w&&(!w.classList.contains(b)||w.classList.contains("flatpickr-disabled")))){for(var j=w?w.dateObj.getTime():n.days.firstElementChild.dateObj.getTime(),R=n.parseDate(n.selectedDates[0],void 0,!0).getTime(),Q=Math.min(j,n.selectedDates[0].getTime()),Z=Math.max(j,n.selectedDates[0].getTime()),ve=!1,ie=0,be=0,K=Q;K<Z;K+=c7.DAY)_e(new Date(K),!0)||(ve=ve||K>Q&&K<Z,K<R&&(!ie||K>ie)?ie=K:K>R&&(!be||K<be)&&(be=K));var ae=Array.from(n.rContainer.querySelectorAll("*:nth-child(-n+"+n.config.showMonths+") > ."+b));ae.forEach(function(je){var It=je.dateObj,qt=It.getTime(),Zo=ie>0&&qt<ie||be>0&&qt>be;if(Zo){je.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Wi){je.classList.remove(Wi)});return}else if(ve&&!Zo)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Wi){je.classList.remove(Wi)}),w!==void 0&&(w.classList.add(j<=n.selectedDates[0].getTime()?"startRange":"endRange"),R<j&&qt===R?je.classList.add("startRange"):R>j&&qt===R&&je.classList.add("endRange"),qt>=ie&&(be===0||qt<=be)&&s7(qt,R,j)&&je.classList.add("inRange"))})}}function $e(){n.isOpen&&!n.config.static&&!n.config.inline&&fe()}function S(w,b){if(b===void 0&&(b=n._positionElement),n.isMobile===!0){if(w){w.preventDefault();var j=Jt(w);j&&j.blur()}n.mobileInput!==void 0&&(n.mobileInput.focus(),n.mobileInput.click()),he("onOpen");return}else if(n._input.disabled||n.config.inline)return;var R=n.isOpen;n.isOpen=!0,R||(n.calendarContainer.classList.add("open"),n._input.classList.add("active"),he("onOpen"),fe(b)),n.config.enableTime===!0&&n.config.noCalendar===!0&&n.config.allowInput===!1&&(w===void 0||!n.timeContainer.contains(w.relatedTarget))&&setTimeout(function(){return n.hourElement.select()},50)}function A(w){return function(b){var j=n.config["_"+w+"Date"]=n.parseDate(b,n.config.dateFormat),R=n.config["_"+(w==="min"?"max":"min")+"Date"];j!==void 0&&(n[w==="min"?"minDateHasTime":"maxDateHasTime"]=j.getHours()>0||j.getMinutes()>0||j.getSeconds()>0),n.selectedDates&&(n.selectedDates=n.selectedDates.filter(function(Q){return _e(Q)}),!n.selectedDates.length&&w==="min"&&p(j),An()),n.daysContainer&&(N(),j!==void 0?n.currentYearElement[w]=j.getFullYear().toString():n.currentYearElement.removeAttribute(w),n.currentYearElement.disabled=!!R&&j!==void 0&&R.getFullYear()===j.getFullYear())}}function P(){var w=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],b=_t(_t({},JSON.parse(JSON.stringify(e.dataset||{}))),t),j={};n.config.parseDate=b.parseDate,n.config.formatDate=b.formatDate,Object.defineProperty(n.config,"enable",{get:function(){return n.config._enable},set:function(ae){n.config._enable=Ne(ae)}}),Object.defineProperty(n.config,"disable",{get:function(){return n.config._disable},set:function(ae){n.config._disable=Ne(ae)}});var R=b.mode==="time";if(!b.dateFormat&&(b.enableTime||R)){var Q=lt.defaultConfig.dateFormat||xo.dateFormat;j.dateFormat=b.noCalendar||R?"H:i"+(b.enableSeconds?":S":""):Q+" H:i"+(b.enableSeconds?":S":"")}if(b.altInput&&(b.enableTime||R)&&!b.altFormat){var Z=lt.defaultConfig.altFormat||xo.altFormat;j.altFormat=b.noCalendar||R?"h:i"+(b.enableSeconds?":S K":" K"):Z+(" h:i"+(b.enableSeconds?":S":"")+" K")}Object.defineProperty(n.config,"minDate",{get:function(){return n.config._minDate},set:A("min")}),Object.defineProperty(n.config,"maxDate",{get:function(){return n.config._maxDate},set:A("max")});var ve=function(ae){return function(je){n.config[ae==="min"?"_minTime":"_maxTime"]=n.parseDate(je,"H:i:S")}};Object.defineProperty(n.config,"minTime",{get:function(){return n.config._minTime},set:ve("min")}),Object.defineProperty(n.config,"maxTime",{get:function(){return n.config._maxTime},set:ve("max")}),b.mode==="time"&&(n.config.noCalendar=!0,n.config.enableTime=!0),Object.assign(n.config,j,b);for(var ie=0;ie<w.length;ie++)n.config[w[ie]]=n.config[w[ie]]===!0||n.config[w[ie]]==="true";xf.filter(function(ae){return n.config[ae]!==void 0}).forEach(function(ae){n.config[ae]=yf(n.config[ae]||[]).map(a)}),n.isMobile=!n.config.disableMobile&&!n.config.inline&&n.config.mode==="single"&&!n.config.disable.length&&!n.config.enable&&!n.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var ie=0;ie<n.config.plugins.length;ie++){var be=n.config.plugins[ie](n)||{};for(var K in be)xf.indexOf(K)>-1?n.config[K]=yf(be[K]).map(a).concat(n.config[K]):typeof b[K]>"u"&&(n.config[K]=be[K])}b.altInputClass||(n.config.altInputClass=q().className+" "+n.config.altInputClass),he("onParseConfig")}function q(){return n.config.wrap?e.querySelector("[data-input]"):e}function J(){typeof n.config.locale!="object"&&typeof lt.l10ns[n.config.locale]>"u"&&n.config.errorHandler(new Error("flatpickr: invalid locale "+n.config.locale)),n.l10n=_t(_t({},lt.l10ns.default),typeof n.config.locale=="object"?n.config.locale:n.config.locale!=="default"?lt.l10ns[n.config.locale]:void 0),ui.D="("+n.l10n.weekdays.shorthand.join("|")+")",ui.l="("+n.l10n.weekdays.longhand.join("|")+")",ui.M="("+n.l10n.months.shorthand.join("|")+")",ui.F="("+n.l10n.months.longhand.join("|")+")",ui.K="("+n.l10n.amPM[0]+"|"+n.l10n.amPM[1]+"|"+n.l10n.amPM[0].toLowerCase()+"|"+n.l10n.amPM[1].toLowerCase()+")";var w=_t(_t({},t),JSON.parse(JSON.stringify(e.dataset||{})));w.time_24hr===void 0&&lt.defaultConfig.time_24hr===void 0&&(n.config.time_24hr=n.l10n.time_24hr),n.formatDate=Bw(n),n.parseDate=tp({config:n.config,l10n:n.l10n})}function fe(w){if(typeof n.config.position=="function")return void n.config.position(n,w);if(n.calendarContainer!==void 0){he("onPreCalendarPosition");var b=w||n._positionElement,j=Array.prototype.reduce.call(n.calendarContainer.children,function(kb,Cb){return kb+Cb.offsetHeight},0),R=n.calendarContainer.offsetWidth,Q=n.config.position.split(" "),Z=Q[0],ve=Q.length>1?Q[1]:null,ie=b.getBoundingClientRect(),be=window.innerHeight-ie.bottom,K=Z==="above"||Z!=="below"&&be<j&&ie.top>j,ae=window.pageYOffset+ie.top+(K?-j-2:b.offsetHeight+2);if($t(n.calendarContainer,"arrowTop",!K),$t(n.calendarContainer,"arrowBottom",K),!n.config.inline){var je=window.pageXOffset+ie.left,It=!1,qt=!1;ve==="center"?(je-=(R-ie.width)/2,It=!0):ve==="right"&&(je-=R-ie.width,qt=!0),$t(n.calendarContainer,"arrowLeft",!It&&!qt),$t(n.calendarContainer,"arrowCenter",It),$t(n.calendarContainer,"arrowRight",qt);var Zo=window.document.body.offsetWidth-(window.pageXOffset+ie.right),Wi=je+R>window.document.body.offsetWidth,hb=Zo+R>window.document.body.offsetWidth;if($t(n.calendarContainer,"rightMost",Wi),!n.config.static)if(n.calendarContainer.style.top=ae+"px",!Wi)n.calendarContainer.style.left=je+"px",n.calendarContainer.style.right="auto";else if(!hb)n.calendarContainer.style.left="auto",n.calendarContainer.style.right=Zo+"px";else{var vu=pe();if(vu===void 0)return;var gb=window.document.body.offsetWidth,xb=Math.max(0,gb/2-R/2),yb=".flatpickr-calendar.centerMost:before",vb=".flatpickr-calendar.centerMost:after",wb=vu.cssRules.length,bb="{left:"+ie.left+"px;right:auto;}";$t(n.calendarContainer,"rightMost",!1),$t(n.calendarContainer,"centerMost",!0),vu.insertRule(yb+","+vb+bb,wb),n.calendarContainer.style.left=xb+"px",n.calendarContainer.style.right="auto"}}}}function pe(){for(var w=null,b=0;b<document.styleSheets.length;b++){var j=document.styleSheets[b];if(j.cssRules){try{j.cssRules}catch{continue}w=j;break}}return w??X()}function X(){var w=document.createElement("style");return document.head.appendChild(w),w.sheet}function N(){n.config.noCalendar||n.isMobile||(W(),zn(),V())}function I(){n._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(n.close,0):n.close()}function H(w){w.preventDefault(),w.stopPropagation();var b=function(ae){return ae.classList&&ae.classList.contains("flatpickr-day")&&!ae.classList.contains("flatpickr-disabled")&&!ae.classList.contains("notAllowed")},j=zw(Jt(w),b);if(j!==void 0){var R=j,Q=n.latestSelectedDateObj=new Date(R.dateObj.getTime()),Z=(Q.getMonth()<n.currentMonth||Q.getMonth()>n.currentMonth+n.config.showMonths-1)&&n.config.mode!=="range";if(n.selectedDateElem=R,n.config.mode==="single")n.selectedDates=[Q];else if(n.config.mode==="multiple"){var ve=xe(Q);ve?n.selectedDates.splice(parseInt(ve),1):n.selectedDates.push(Q)}else n.config.mode==="range"&&(n.selectedDates.length===2&&n.clear(!1,!1),n.latestSelectedDateObj=Q,n.selectedDates.push(Q),en(Q,n.selectedDates[0],!0)!==0&&n.selectedDates.sort(function(ae,je){return ae.getTime()-je.getTime()}));if(d(),Z){var ie=n.currentYear!==Q.getFullYear();n.currentYear=Q.getFullYear(),n.currentMonth=Q.getMonth(),ie&&(he("onYearChange"),W()),he("onMonthChange")}if(zn(),V(),An(),!Z&&n.config.mode!=="range"&&n.config.showMonths===1?E(R):n.selectedDateElem!==void 0&&n.hourElement===void 0&&n.selectedDateElem&&n.selectedDateElem.focus(),n.hourElement!==void 0&&n.hourElement!==void 0&&n.hourElement.focus(),n.config.closeOnSelect){var be=n.config.mode==="single"&&!n.config.enableTime,K=n.config.mode==="range"&&n.selectedDates.length===2&&!n.config.enableTime;(be||K)&&I()}C()}}var G={locale:[J,$],showMonths:[de,s,z],minDate:[m],maxDate:[m],positionElement:[Nt],clickOpens:[function(){n.config.clickOpens===!0?(x(n._input,"focus",n.open),x(n._input,"click",n.open)):(n._input.removeEventListener("focus",n.open),n._input.removeEventListener("click",n.open))}]};function oe(w,b){if(w!==null&&typeof w=="object"){Object.assign(n.config,w);for(var j in w)G[j]!==void 0&&G[j].forEach(function(R){return R()})}else n.config[w]=b,G[w]!==void 0?G[w].forEach(function(R){return R()}):xf.indexOf(w)>-1&&(n.config[w]=yf(b));n.redraw(),An(!0)}function ce(w,b){var j=[];if(w instanceof Array)j=w.map(function(R){return n.parseDate(R,b)});else if(w instanceof Date||typeof w=="number")j=[n.parseDate(w,b)];else if(typeof w=="string")switch(n.config.mode){case"single":case"time":j=[n.parseDate(w,b)];break;case"multiple":j=w.split(n.config.conjunction).map(function(R){return n.parseDate(R,b)});break;case"range":j=w.split(n.l10n.rangeSeparator).map(function(R){return n.parseDate(R,b)});break}else n.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(w)));n.selectedDates=n.config.allowInvalidPreload?j:j.filter(function(R){return R instanceof Date&&_e(R,!1)}),n.config.mode==="range"&&n.selectedDates.sort(function(R,Q){return R.getTime()-Q.getTime()})}function ue(w,b,j){if(b===void 0&&(b=!1),j===void 0&&(j=n.config.dateFormat),w!==0&&!w||w instanceof Array&&w.length===0)return n.clear(b);ce(w,j),n.latestSelectedDateObj=n.selectedDates[n.selectedDates.length-1],n.redraw(),m(void 0,b),p(),n.selectedDates.length===0&&n.clear(!1),An(b),b&&he("onChange")}function Ne(w){return w.slice().map(function(b){return typeof b=="string"||typeof b=="number"||b instanceof Date?n.parseDate(b,void 0,!0):b&&typeof b=="object"&&b.from&&b.to?{from:n.parseDate(b.from,void 0),to:n.parseDate(b.to,void 0)}:b}).filter(function(b){return b})}function Ce(){n.selectedDates=[],n.now=n.parseDate(n.config.now)||new Date;var w=n.config.defaultDate||((n.input.nodeName==="INPUT"||n.input.nodeName==="TEXTAREA")&&n.input.placeholder&&n.input.value===n.input.placeholder?null:n.input.value);w&&ce(w,n.config.dateFormat),n._initialDate=n.selectedDates.length>0?n.selectedDates[0]:n.config.minDate&&n.config.minDate.getTime()>n.now.getTime()?n.config.minDate:n.config.maxDate&&n.config.maxDate.getTime()<n.now.getTime()?n.config.maxDate:n.now,n.currentYear=n._initialDate.getFullYear(),n.currentMonth=n._initialDate.getMonth(),n.selectedDates.length>0&&(n.latestSelectedDateObj=n.selectedDates[0]),n.config.minTime!==void 0&&(n.config.minTime=n.parseDate(n.config.minTime,"H:i")),n.config.maxTime!==void 0&&(n.config.maxTime=n.parseDate(n.config.maxTime,"H:i")),n.minDateHasTime=!!n.config.minDate&&(n.config.minDate.getHours()>0||n.config.minDate.getMinutes()>0||n.config.minDate.getSeconds()>0),n.maxDateHasTime=!!n.config.maxDate&&(n.config.maxDate.getHours()>0||n.config.maxDate.getMinutes()>0||n.config.maxDate.getSeconds()>0)}function kt(){if(n.input=q(),!n.input){n.config.errorHandler(new Error("Invalid input element specified"));return}n.input._type=n.input.type,n.input.type="text",n.input.classList.add("flatpickr-input"),n._input=n.input,n.config.altInput&&(n.altInput=Me(n.input.nodeName,n.config.altInputClass),n._input=n.altInput,n.altInput.placeholder=n.input.placeholder,n.altInput.disabled=n.input.disabled,n.altInput.required=n.input.required,n.altInput.tabIndex=n.input.tabIndex,n.altInput.type="text",n.input.setAttribute("type","hidden"),!n.config.static&&n.input.parentNode&&n.input.parentNode.insertBefore(n.altInput,n.input.nextSibling)),n.config.allowInput||n._input.setAttribute("readonly","readonly"),Nt()}function Nt(){n._positionElement=n.config.positionElement||n._input}function xt(){var w=n.config.enableTime?n.config.noCalendar?"time":"datetime-local":"date";n.mobileInput=Me("input",n.input.className+" flatpickr-mobile"),n.mobileInput.tabIndex=1,n.mobileInput.type=w,n.mobileInput.disabled=n.input.disabled,n.mobileInput.required=n.input.required,n.mobileInput.placeholder=n.input.placeholder,n.mobileFormatStr=w==="datetime-local"?"Y-m-d\\TH:i:S":w==="date"?"Y-m-d":"H:i:S",n.selectedDates.length>0&&(n.mobileInput.defaultValue=n.mobileInput.value=n.formatDate(n.selectedDates[0],n.mobileFormatStr)),n.config.minDate&&(n.mobileInput.min=n.formatDate(n.config.minDate,"Y-m-d")),n.config.maxDate&&(n.mobileInput.max=n.formatDate(n.config.maxDate,"Y-m-d")),n.input.getAttribute("step")&&(n.mobileInput.step=String(n.input.getAttribute("step"))),n.input.type="hidden",n.altInput!==void 0&&(n.altInput.type="hidden");try{n.input.parentNode&&n.input.parentNode.insertBefore(n.mobileInput,n.input.nextSibling)}catch{}x(n.mobileInput,"change",function(b){n.setDate(Jt(b).value,!1,n.mobileFormatStr),he("onChange"),he("onClose")})}function st(w){if(n.isOpen===!0)return n.close();n.open(w)}function he(w,b){if(n.config!==void 0){var j=n.config[w];if(j!==void 0&&j.length>0)for(var R=0;j[R]&&R<j.length;R++)j[R](n.selectedDates,n.input.value,n,b);w==="onChange"&&(n.input.dispatchEvent(mn("change")),n.input.dispatchEvent(mn("input")))}}function mn(w){var b=document.createEvent("Event");return b.initEvent(w,!0,!0),b}function xe(w){for(var b=0;b<n.selectedDates.length;b++){var j=n.selectedDates[b];if(j instanceof Date&&en(j,w)===0)return""+b}return!1}function br(w){return n.config.mode!=="range"||n.selectedDates.length<2?!1:en(w,n.selectedDates[0])>=0&&en(w,n.selectedDates[1])<=0}function zn(){n.config.noCalendar||n.isMobile||!n.monthNav||(n.yearElements.forEach(function(w,b){var j=new Date(n.currentYear,n.currentMonth,1);j.setMonth(n.currentMonth+b),n.config.showMonths>1||n.config.monthSelectorType==="static"?n.monthElements[b].textContent=gc(j.getMonth(),n.config.shorthandCurrentMonth,n.l10n)+" ":n.monthsDropdownContainer.value=j.getMonth().toString(),w.value=j.getFullYear().toString()}),n._hidePrevMonthArrow=n.config.minDate!==void 0&&(n.currentYear===n.config.minDate.getFullYear()?n.currentMonth<=n.config.minDate.getMonth():n.currentYear<n.config.minDate.getFullYear()),n._hideNextMonthArrow=n.config.maxDate!==void 0&&(n.currentYear===n.config.maxDate.getFullYear()?n.currentMonth+1>n.config.maxDate.getMonth():n.currentYear>n.config.maxDate.getFullYear()))}function Ui(w){var b=w||(n.config.altInput?n.config.altFormat:n.config.dateFormat);return n.selectedDates.map(function(j){return n.formatDate(j,b)}).filter(function(j,R,Q){return n.config.mode!=="range"||n.config.enableTime||Q.indexOf(j)===R}).join(n.config.mode!=="range"?n.config.conjunction:n.l10n.rangeSeparator)}function An(w){w===void 0&&(w=!0),n.mobileInput!==void 0&&n.mobileFormatStr&&(n.mobileInput.value=n.latestSelectedDateObj!==void 0?n.formatDate(n.latestSelectedDateObj,n.mobileFormatStr):""),n.input.value=Ui(n.config.dateFormat),n.altInput!==void 0&&(n.altInput.value=Ui(n.config.altFormat)),w!==!1&&he("onValueUpdate")}function Jo(w){var b=Jt(w),j=n.prevMonthNav.contains(b),R=n.nextMonthNav.contains(b);j||R?te(j?-1:1):n.yearElements.indexOf(b)>=0?b.select():b.classList.contains("arrowUp")?n.changeYear(n.currentYear+1):b.classList.contains("arrowDown")&&n.changeYear(n.currentYear-1)}function Ds(w){w.preventDefault();var b=w.type==="keydown",j=Jt(w),R=j;n.amPM!==void 0&&j===n.amPM&&(n.amPM.textContent=n.l10n.amPM[gn(n.amPM.textContent===n.l10n.amPM[0])]);var Q=parseFloat(R.getAttribute("min")),Z=parseFloat(R.getAttribute("max")),ve=parseFloat(R.getAttribute("step")),ie=parseInt(R.value,10),be=w.delta||(b?w.which===38?1:-1:0),K=ie+ve*be;if(typeof R.value<"u"&&R.value.length===2){var ae=R===n.hourElement,je=R===n.minuteElement;K<Q?(K=Z+K+gn(!ae)+(gn(ae)&&gn(!n.amPM)),je&&T(void 0,-1,n.hourElement)):K>Z&&(K=R===n.hourElement?K-Z-gn(!n.amPM):Q,je&&T(void 0,1,n.hourElement)),n.amPM&&ae&&(ve===1?K+ie===23:Math.abs(K-ie)>ve)&&(n.amPM.textContent=n.l10n.amPM[gn(n.amPM.textContent===n.l10n.amPM[0])]),R.value=Wt(K)}}return i(),n}function yo(e,t){for(var n=Array.prototype.slice.call(e).filter(function(a){return a instanceof HTMLElement}),r=[],i=0;i<n.length;i++){var o=n[i];try{if(o.getAttribute("data-fp-omit")!==null)continue;o._flatpickr!==void 0&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=f7(o,t||{}),r.push(o._flatpickr)}catch(a){console.error(a)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return yo(this,e)},HTMLElement.prototype.flatpickr=function(e){return yo([this],e)});var lt=function(e,t){return typeof e=="string"?yo(window.document.querySelectorAll(e),t):e instanceof Node?yo([e],t):yo(e,t)};lt.defaultConfig={};lt.l10ns={en:_t({},fs),default:_t({},fs)};lt.localize=function(e){lt.l10ns.default=_t(_t({},lt.l10ns.default),e)};lt.setDefaults=function(e){lt.defaultConfig=_t(_t({},lt.defaultConfig),e)};lt.parseDate=tp({});lt.formatDate=Bw({});lt.compareDates=en;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(e){return yo(this,e)});Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof e=="string"?parseInt(e,10):e))};typeof window<"u"&&(window.flatpickr=lt);const d7=({errors:e,touched:t,placeholderText:n})=>{const{setFieldValue:r,values:i}=Yo(),o=i.date?"success":t.date&&e.date?"fail":"unfilled";return k.useEffect(()=>{lt("#date",{altFormat:"d/m/Y",dateFormat:"d/m/Y",minDate:"01-01-1930",maxDate:" today",onChange:function(a,s){r("date",s)}})},[r]),f.jsxs(Wm,{children:[f.jsxs(Hm,{children:[f.jsx(Vm,{id:"date",name:"date",type:"text",placeholder:n,"aria-label":n,className:o}),f.jsx(i7,{size:"20"})]}),i.date&&t.date&&!e.date&&f.jsx(Ym,{children:"This is CORRECT date"}),f.jsx(Xm,{name:"date",component:"span"})]})},Fg=({fieldName:e,placeholderText:t})=>{const{touched:n,errors:r,values:i}=Yo(),o=i[e]&&n[e]&&!r[e]?"success":n[e]&&r[e]?"fail":"unfilled";return f.jsx("div",{children:f.jsxs(Wm,{children:[f.jsxs(Hm,{children:[f.jsx(Vm,{className:o,name:e,type:"text",placeholder:t,"aria-label":t}),i[e]&&n[e]&&!r[e]&&f.jsx(e7,{size:24}),i[e]&&n[e]&&r[e]&&f.jsx(t7,{size:24})]}),i[e]&&n[e]&&!r[e]&&f.jsxs(Ym,{children:["This is CORRECT ",e]}),f.jsx(Xm,{name:e,component:"span"})]})})},p7=({fieldName:e,fieldType:t,touched:n,errors:r,placeholderText:i})=>{const[o,a]=k.useState(!1),{values:s}=Yo(),l=s[e]&&n[e]&&!r[e]?"success":n[e]&&r[e]?"fail":"unfilled";return f.jsx("div",{children:f.jsxs(r7,{children:[f.jsxs(Hm,{children:[f.jsx(Vm,{className:l,name:e,type:t,placeholder:i}),o?f.jsx(JN,{onClick:()=>a(!o),size:24}):f.jsx(qN,{onClick:()=>a(!o),size:24})]}),s[e]&&n[e]&&!r[e]&&f.jsxs(Ym,{children:["This is CORRECT ",e]}),f.jsx(Xm,{name:e,component:"span"})]})})},m7=Ho().shape({name:Xn().min(3,"The name is too short!").required(" Name is required"),date:Xn().required("* Birth date is required"),email:Xn().email("* This is an ERROR e-mail").required("* E-mail is required"),password:Xn().min(7,"This is an ERROR password, too short! Minimum 7 symbols.").max(20,"This is an ERROR password, too Long!").required("Password is required")}),h7=()=>f.jsx(ZN,{children:f.jsx(su,{initialValues:{date:"",name:"",email:"",password:""},validationSchema:m7,onSubmit:(e,{resetForm:t,setSubmitting:n})=>{n(!0),console.log(e),n(!1),t()},children:({isSubmitting:e,errors:t,touched:n})=>f.jsxs(n7,{children:[f.jsx(Fg,{fieldName:"name",fieldType:"name",placeholderText:"Name",touched:n,errors:t}),f.jsx(d7,{errors:t,touched:n,placeholderText:"dd/mm/yyyy"}),f.jsx(Fg,{fieldName:"email",fieldType:"email",placeholderText:"Email",touched:n,errors:t}),f.jsx(p7,{fieldName:"password",fieldType:"password",placeholderText:"Password",touched:n,errors:t}),f.jsx(o7,{type:"submit",disabled:e,children:"Submit"})]})})}),g7=()=>f.jsx(WN,{children:f.jsx(HN,{children:f.jsxs(VN,{children:[f.jsx(YN,{children:"Sign Up"}),f.jsx(h7,{}),f.jsx(XN,{to:"/login",children:" Sign In"})]})})});function x7(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function y7(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var v7=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(y7(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=x7(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Dt="-ms-",xc="-moz-",Pe="-webkit-",Uw="comm",Qm="rule",Km="decl",w7="@import",Ww="@keyframes",b7="@layer",k7=Math.abs,hu=String.fromCharCode,C7=Object.assign;function S7(e,t){return Et(e,0)^45?(((t<<2^Et(e,0))<<2^Et(e,1))<<2^Et(e,2))<<2^Et(e,3):0}function Hw(e){return e.trim()}function E7(e,t){return(e=t.exec(e))?e[0]:e}function Re(e,t,n){return e.replace(t,n)}function np(e,t){return e.indexOf(t)}function Et(e,t){return e.charCodeAt(t)|0}function ds(e,t,n){return e.slice(t,n)}function Hn(e){return e.length}function Gm(e){return e.length}function il(e,t){return t.push(e),e}function T7(e,t){return e.map(t).join("")}var gu=1,$o=1,Vw=0,Gt=0,ut=0,Ko="";function xu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:gu,column:$o,length:a,return:""}}function ga(e,t){return C7(xu("",null,null,"",null,null,0),e,{length:-e.length},t)}function A7(){return ut}function N7(){return ut=Gt>0?Et(Ko,--Gt):0,$o--,ut===10&&($o=1,gu--),ut}function ln(){return ut=Gt<Vw?Et(Ko,Gt++):0,$o++,ut===10&&($o=1,gu++),ut}function qn(){return Et(Ko,Gt)}function Ol(){return Gt}function Os(e,t){return ds(Ko,e,t)}function ps(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yw(e){return gu=$o=1,Vw=Hn(Ko=e),Gt=0,[]}function Xw(e){return Ko="",e}function Dl(e){return Hw(Os(Gt-1,rp(e===91?e+2:e===40?e+1:e)))}function j7(e){for(;(ut=qn())&&ut<33;)ln();return ps(e)>2||ps(ut)>3?"":" "}function O7(e,t){for(;--t&&ln()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Os(e,Ol()+(t<6&&qn()==32&&ln()==32))}function rp(e){for(;ln();)switch(ut){case e:return Gt;case 34:case 39:e!==34&&e!==39&&rp(ut);break;case 40:e===41&&rp(e);break;case 92:ln();break}return Gt}function D7(e,t){for(;ln()&&e+ut!==47+10;)if(e+ut===42+42&&qn()===47)break;return"/*"+Os(t,Gt-1)+"*"+hu(e===47?e:ln())}function _7(e){for(;!ps(qn());)ln();return Os(e,Gt)}function P7(e){return Xw(_l("",null,null,null,[""],e=Yw(e),0,[0],e))}function _l(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,g=0,y=0,x=1,C=1,h=1,m=0,v="",T=i,O=o,_=r,E=v;C;)switch(y=m,m=ln()){case 40:if(y!=108&&Et(E,d-1)==58){np(E+=Re(Dl(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Dl(m);break;case 9:case 10:case 13:case 32:E+=j7(y);break;case 92:E+=O7(Ol()-1,7);continue;case 47:switch(qn()){case 42:case 47:il(M7(D7(ln(),Ol()),t,n),l);break;default:E+="/"}break;case 123*x:s[c++]=Hn(E)*h;case 125*x:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+u:h==-1&&(E=Re(E,/\f/g,"")),g>0&&Hn(E)-d&&il(g>32?Bg(E+";",r,n,d-1):Bg(Re(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(il(_=zg(E,t,n,c,u,i,s,v,T=[],O=[],d),o),m===123)if(u===0)_l(E,t,_,_,T,o,d,s,O);else switch(p===99&&Et(E,3)===110?100:p){case 100:case 108:case 109:case 115:_l(e,_,_,r&&il(zg(e,_,_,0,0,i,s,v,i,T=[],d),O),i,O,d,s,r?T:O);break;default:_l(E,_,_,_,[""],O,0,s,O)}}c=u=g=0,x=h=1,v=E="",d=a;break;case 58:d=1+Hn(E),g=y;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&N7()==125)continue}switch(E+=hu(m),m*x){case 38:h=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(Hn(E)-1)*h,h=1;break;case 64:qn()===45&&(E+=Dl(ln())),p=qn(),u=d=Hn(v=E+=_7(Ol())),m++;break;case 45:y===45&&Hn(E)==2&&(x=0)}}return o}function zg(e,t,n,r,i,o,a,s,l,c,u){for(var d=i-1,p=i===0?o:[""],g=Gm(p),y=0,x=0,C=0;y<r;++y)for(var h=0,m=ds(e,d+1,d=k7(x=a[y])),v=e;h<g;++h)(v=Hw(x>0?p[h]+" "+m:Re(m,/&\f/g,p[h])))&&(l[C++]=v);return xu(e,t,n,i===0?Qm:s,l,c,u)}function M7(e,t,n){return xu(e,t,n,Uw,hu(A7()),ds(e,2,-2),0)}function Bg(e,t,n,r){return xu(e,t,n,Km,ds(e,0,r),ds(e,r+1,-1),r)}function vo(e,t){for(var n="",r=Gm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function R7(e,t,n,r){switch(e.type){case b7:if(e.children.length)break;case w7:case Km:return e.return=e.return||e.value;case Uw:return"";case Ww:return e.return=e.value+"{"+vo(e.children,r)+"}";case Qm:e.value=e.props.join(",")}return Hn(n=vo(e.children,r))?e.return=e.value+"{"+n+"}":""}function I7(e){var t=Gm(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function $7(e){return function(t){t.root||(t=t.return)&&e(t)}}var L7=function(t,n,r){for(var i=0,o=0;i=o,o=qn(),i===38&&o===12&&(n[r]=1),!ps(o);)ln();return Os(t,Gt)},F7=function(t,n){var r=-1,i=44;do switch(ps(i)){case 0:i===38&&qn()===12&&(n[r]=1),t[r]+=L7(Gt-1,n,r);break;case 2:t[r]+=Dl(i);break;case 4:if(i===44){t[++r]=qn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=hu(i)}while(i=ln());return t},z7=function(t,n){return Xw(F7(Yw(t),n))},Ug=new WeakMap,B7=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ug.get(r))&&!i){Ug.set(t,!0);for(var o=[],a=z7(n,o),s=r.props,l=0,c=0;l<a.length;l++)for(var u=0;u<s.length;u++,c++)t.props[c]=o[l]?a[l].replace(/&\f/g,s[u]):s[u]+" "+a[l]}}},U7=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Qw(e,t){switch(S7(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+xc+e+Dt+e+e;case 6828:case 4268:return Pe+e+Dt+e+e;case 6165:return Pe+e+Dt+"flex-"+e+e;case 5187:return Pe+e+Re(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Dt+"flex-$1$2")+e;case 5443:return Pe+e+Dt+"flex-item-"+Re(e,/flex-|-self/,"")+e;case 4675:return Pe+e+Dt+"flex-line-pack"+Re(e,/align-content|flex-|-self/,"")+e;case 5548:return Pe+e+Dt+Re(e,"shrink","negative")+e;case 5292:return Pe+e+Dt+Re(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+Re(e,"-grow","")+Pe+e+Dt+Re(e,"grow","positive")+e;case 4554:return Pe+Re(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return Re(Re(Re(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return Re(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return Re(Re(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4095:case 3583:case 4068:case 2532:return Re(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(e)-1-t>6)switch(Et(e,t+1)){case 109:if(Et(e,t+4)!==45)break;case 102:return Re(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+xc+(Et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~np(e,"stretch")?Qw(Re(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Et(e,t+1)!==115)break;case 6444:switch(Et(e,Hn(e)-3-(~np(e,"!important")&&10))){case 107:return Re(e,":",":"+Pe)+e;case 101:return Re(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Pe+(Et(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Dt+"$2box$3")+e}break;case 5936:switch(Et(e,t+11)){case 114:return Pe+e+Dt+Re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+Dt+Re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+Dt+Re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Pe+e+Dt+e+e}return e}var W7=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Km:t.return=Qw(t.value,t.length);break;case Ww:return vo([ga(t,{value:Re(t.value,"@","@"+Pe)})],i);case Qm:if(t.length)return T7(t.props,function(o){switch(E7(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vo([ga(t,{props:[Re(o,/:(read-\w+)/,":"+xc+"$1")]})],i);case"::placeholder":return vo([ga(t,{props:[Re(o,/:(plac\w+)/,":"+Pe+"input-$1")]}),ga(t,{props:[Re(o,/:(plac\w+)/,":"+xc+"$1")]}),ga(t,{props:[Re(o,/:(plac\w+)/,Dt+"input-$1")]})],i)}return""})}},H7=[W7],V7=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var C=x.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||H7,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var C=x.getAttribute("data-emotion").split(" "),h=1;h<C.length;h++)o[C[h]]=!0;s.push(x)});var l,c=[B7,U7];{var u,d=[R7,$7(function(x){u.insert(x)})],p=I7(c.concat(i,d)),g=function(C){return vo(P7(C),p)};l=function(C,h,m,v){u=m,g(C?C+"{"+h.styles+"}":h.styles),v&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new v7({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(s),y},Y7=!0;function X7(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Kw=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Y7===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Q7=function(t,n,r){Kw(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function K7(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var G7=/[A-Z]|^ms/g,q7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gw=function(t){return t.charCodeAt(1)===45},Wg=function(t){return t!=null&&typeof t!="boolean"},kf=Wy(function(e){return Gw(e)?e:e.replace(G7,"-$&").toLowerCase()}),Hg=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(q7,function(r,i,o){return Vn={name:i,styles:o,next:Vn},i})}return Gy[t]!==1&&!Gw(t)&&typeof n=="number"&&n!==0?n+"px":n};function ms(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Vn={name:n.name,styles:n.styles,next:Vn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Vn={name:r.name,styles:r.styles,next:Vn},r=r.next;var i=n.styles+";";return i}return J7(e,t,n)}case"function":{if(e!==void 0){var o=Vn,a=n(e);return Vn=o,ms(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function J7(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ms(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Wg(a)&&(r+=kf(o)+":"+Hg(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Wg(a[s])&&(r+=kf(o)+":"+Hg(o,a[s])+";");else{var l=ms(e,t,a);switch(o){case"animation":case"animationName":{r+=kf(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var Vg=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Vn,Z7=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Vn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ms(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=ms(r,n,t[s]),i&&(o+=a[s]);Vg.lastIndex=0;for(var l="",c;(c=Vg.exec(o))!==null;)l+="-"+c[1];var u=K7(o)+l;return{name:u,styles:o,next:Vn}},ej=function(t){return t()},tj=_f["useInsertionEffect"]?_f["useInsertionEffect"]:!1,nj=tj||ej,qw=k.createContext(typeof HTMLElement<"u"?V7({key:"css"}):null);qw.Provider;var rj=function(t){return k.forwardRef(function(n,r){var i=k.useContext(qw);return t(n,i,r)})},ij=k.createContext({}),oj=q3,aj=function(t){return t!=="theme"},Yg=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?oj:aj},Xg=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},sj=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Kw(n,r,i),nj(function(){return Q7(n,r,i)}),null},lj=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Xg(t,n,r),l=s||Yg(i),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var p=u.length,g=1;g<p;g++)d.push(u[g],u[0][g])}var y=rj(function(x,C,h){var m=c&&x.as||i,v="",T=[],O=x;if(x.theme==null){O={};for(var _ in x)O[_]=x[_];O.theme=k.useContext(ij)}typeof x.className=="string"?v=X7(C.registered,T,x.className):x.className!=null&&(v=x.className+" ");var E=Z7(d.concat(T),C.registered,O);v+=C.key+"-"+E.name,a!==void 0&&(v+=" "+a);var F=c&&s===void 0?Yg(m):l,ee={};for(var B in x)c&&B==="as"||F(B)&&(ee[B]=x[B]);return ee.className=v,ee.ref=h,k.createElement(k.Fragment,null,k.createElement(sj,{cache:C,serialized:E,isStringTag:typeof m=="string"}),k.createElement(m,ee))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+a}}),y.withComponent=function(x,C){return e(x,uc({},n,C,{shouldForwardProp:Xg(y,C,!0)})).apply(void 0,d)},y}},cj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Be=lj.bind();cj.forEach(function(e){Be[e]=Be(e)});const uj=Be(Fw)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`,fj=Be(Lw)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`,dj=Be(Iw)`
  fill: #3cbc81;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`,pj=Be($w)`
  fill: #da1414;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`,mj=Be(As)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  width: 335px;

  @media (min-width: 768px) {
    width: 400px;
  }
`,Jw=Be.label`
  display: flex;
  flex-direction: column;
`,hj=Be(Jw)`

  margin-bottom: 28px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Qg=Be.div`
  position: relative;
  
`,Kg=Be(gr)`
  padding: 18px 24px;
  width: 100%;

  outline: 1px solid
    ${e=>e.outlinecolor||" rgba(243, 243, 243, 0.2)"};

  border-radius: 200px;
  color: #f3f3f3;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  transition: color 300ms linear;

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
}

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`,Gg=Be.span`
  color: #3CBC81;
  padding-top: 8px;
  padding-left: 25px;
  font-size: 12px;
`,qg=Be(Im)`
  padding-top: 8px;
  padding-left: 25px;
  font-size: 12px;

  color: #DA1414;
`,gj=Be.button`
  width: 100%;
  padding: 18px;
  background-color: transparent;
  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  border-radius: 42px;

  cursor: pointer;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`,xj=Ho().shape({email:Xn().email("This is an ERROR e-mail").required("E-mail is required"),password:Xn().min(7,"This is an ERROR password, too short! Minimum 7 symbols.").max(16,"This is an ERROR password, too Long!").required("Password is required")}),yj=()=>{const[e,t]=k.useState(!1),n=(r,i)=>{console.log(r),i.resetForm()};return f.jsx(su,{initialValues:{email:"",password:""},validationSchema:xj,onSubmit:n,validateOnBlur:!0,children:({errors:r,touched:i,handleChange:o,handleBlur:a,values:s})=>f.jsxs(mj,{children:[f.jsxs(Jw,{children:[f.jsxs(Qg,{children:[f.jsx(Kg,{type:"email",name:"email",placeholder:"Email",onChange:o,onBlur:a,outlinecolor:i.email&&r.email&&"#DA1414"||i.email&&s.email&&!r.email&&"#3CBC81"}),s.email&&i.email&&!r.email&&f.jsx(dj,{size:24}),s.email&&i.email&&r.email&&f.jsx(pj,{size:24})]}),s.email&&i.email&&!r.email&&f.jsx(Gg,{children:"This is CORRECT e-mail"}),f.jsx(qg,{name:"email",component:"span"})]}),f.jsxs(hj,{children:[f.jsxs(Qg,{children:[f.jsx(Kg,{type:e?"text":"password",name:"password",placeholder:"Password",onChange:o,onBlur:a,outlinecolor:i.password&&r.password&&"#DA1414"||i.password&&s.password&&!r.password&&"#3CBC81"}),e?f.jsx(fj,{onClick:()=>t(!e),size:24}):f.jsx(uj,{onClick:()=>t(!e),size:24})]}),s.password&&i.password&&!r.password&&f.jsx(Gg,{children:"This is CORRECT password"}),f.jsx(qg,{name:"password",component:"span"})]}),f.jsx(gj,{type:"submit",children:"Sign In"})]})})},vj=D.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  height: 100vh;

  background-image: url('./src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('./src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('./src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start@2x.jpg');
  }
`,wj=D(rr)`
  @media (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`,bj=D.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`,kj=D.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,Cj=D(Pi)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  &:hover {
    /* color: #161f37; */
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`,Sj=()=>f.jsx(vj,{children:f.jsx(wj,{children:f.jsxs(bj,{children:[f.jsx(kj,{children:"Sign In"}),f.jsx(yj,{}),f.jsx(Cj,{to:"/registration",children:" Sign Up"})]})})}),Ej=D.div`
    width: 100%;
    max-height: 392px;

    @media screen and (min-width: 375px) {
        width:335px;
    }

    @media screen and (min-width: 768px) {
        width:342px;
        max-height: 398px;
    }
    @media screen and (min-width: 1440px) {
        width:400px;
        max-height: 438px;
    }
`,Tj=D.img`  
    width: 100%;
    height: 360px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 342px;
    }
    @media screen and (min-width: 1440px) {
        width: 400px;
        height: 400px;
    }
`,Aj=D.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
`,Nj=D.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.12;
    color: #f3f3f3;

    @media screen and (min-width: 768px) {
        font-size: 17px;
        line-height: 1.33;
    }
`,jj=D(vs)`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29; 
    color: rgba(243, 243, 243, 0.50);

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.12;
    }
`,Zw=({data:e})=>{const{_id:t,drink:n,drinkThumb:r}=e;return f.jsxs(Ej,{children:[f.jsx(Tj,{src:r,alt:`${n} photo`}),f.jsxs(Aj,{children:[f.jsx(Nj,{children:n}),f.jsx(jj,{to:`/drinks/${t}`,children:"See more"})]})]})},Oj=D.div`
    position: relative;
`;D.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    width: 335px;
    height:54px;
    background-color: #161F37;
    border-radius: 200px;
    cursor: pointer;

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width: 200px;
        height:56px;
        padding: 14px 24px;
    }
`;D.p`
    color: #F3F3F3;
    font-size: 14px;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.56;
    }
`;D.svg`
    width: 20px;
    height: 20px;
    transition: all .2s ease;
    transform: ${({open:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`;const Dj=D.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width  : 335px;
    max-height: ${({height:e})=>e||""};
    overflow-y: ${({height:e})=>e?"scroll":"visible"};
    padding: 18px 24px;
    background-color: #161F37;
    border-radius: 20px;

    &::-webkit-scrollbar {
        width: 24px;
        height: 110px;
    }

    &::-webkit-scrollbar-thumb {
        border: 8px solid transparent;
        background-clip: padding-box;
        border-radius: 20px;
        background-color: #434D67;
    }

    &::-webkit-scrollbar-track {
        margin-block: 8px;   
    }

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width : 200px;
        padding: 14px 24px;
    }
`,_j=D.button`
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border:none;
    color: #F3F3F3;
    font-family: 'Manrope';
    font-size: 14px;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.56;
    }
`,Pj=({handleSelect:e,height:t,items:n})=>f.jsx(Dj,{onClick:e,height:t,children:n.map(r=>f.jsx("li",{children:f.jsx(_j,{children:r})},r))}),Mj=D.svg`
    width: 20px;
    height: 20px;
    transition: all .2s ease;
    transform: ${({open:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,eb=({isOpen:e})=>f.jsx(Mj,{open:e,children:f.jsx("use",{href:`${Ft}#icon-chevron-down`})}),Rj=D.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    width: 335px;
    height:54px;
    background-color: #161F37;
    border-radius: 200px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover,
    &:focus{
        border: 1px solid rgba(243, 243, 243);
    }

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width: 200px;
        height:56px;
        padding: 14px 24px;
    }
`,Ij=D.p`
    color: #F3F3F3;
    font-size: 14px;
    line-height: 1.29;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.56;
    }
`,$j=({handleControlClick:e,selectedOption:t,isOpen:n})=>f.jsxs(Rj,{onClick:e,children:[f.jsx(Ij,{children:t}),f.jsx(eb,{isOpen:n})]}),Jg=({items:e,placeholder:t,height:n,onSelect:r})=>{const[i,o]=k.useState(t),[a,s]=k.useState(!1),l=k.useRef(null),c=()=>{s(d=>!d)},u=d=>{d.target.tagName==="BUTTON"&&(o(d.target.textContent),r(d.target.textContent),c())};return k.useEffect(()=>{const d=p=>{l.current&&!l.current.contains(p.target)&&s(!1)};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[]),f.jsxs(Oj,{ref:l,children:[f.jsx($j,{handleControlClick:c,selectedOption:i,isOpen:a}),a&&f.jsx(Pj,{handleSelect:u,height:n,items:e})]})},Lj=D.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 40px;


    @media screen and (min-width: 768px) {
        margin-top: 46px;
        flex-direction: row;
        gap: 8px;
    }

    @media screen and (min-width: 1440px) {
       margin-top: 80px;
    }
`,Fj=D.form`
    position: relative;
    display: inline-block
`,zj=D.button`
    position: absolute;
    background-color: transparent;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:18px;
    right:24px;
`,Bj=D.input`
    padding:0 24px;
    width: 335px;
    height:54px;
    border-radius: 200px;
    background-color: transparent;
    border:1px solid rgba(243, 243, 243, 0.20);
    opacity: 0.8;
    font-family: 'Manrope';
    font-size: 17px;
    line-height: 1.56;
    color: #f3f3f3;
    outline: none;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width: 264px;
        height:56px;
    }

    &::placeholder{
        color:#f3f3f3
    }

    &:hover,
    &:focus,
    &:active{
        border: 1px solid rgba(243, 243, 243);
    }
`,Uj=D.svg`
    width: 20px;
    height: 20px;
`,Wj=["Ordinary Drink","Cocktail","Snake","Other/Unknow","Cocoa","Shot","Coffee/Tea","Homemade Liqueur","Punch / Party Drink","Beer","Soft Drink"],Hj=["Light rum","Applejack","Gin","Dark rum","Sweet Vermouth","Strawberry","Scotch","Apricot brandy","Wine","Lemon"],Vj=({categories:e,shouldRenderBtn:t,ingredients:n})=>{const[r,i]=k.useState(""),[o,a]=k.useState(""),[s,l]=k.useState("");return f.jsxs(Lj,{children:[f.jsxs(Fj,{children:[f.jsx("label",{children:f.jsx(Bj,{type:"text",value:s,onChange:c=>l(c.target.value),placeholder:"Enter the text"})}),t&&f.jsx(zj,{type:"submit",children:f.jsx(Uj,{children:f.jsx("use",{href:`${Ft}#icon-search`})})})]}),f.jsx(Jg,{items:Wj,placeholder:"All categories",onSelect:i}),f.jsx(Jg,{items:Hj,placeholder:"Ingredients",height:"295px",onSelect:a})]})},Yj=D.h2`
    font-size: 32px;
    font-weight: 600;
    line-height: 1.19; 
    color: #F3F3F3;

    @media screen and (min-width: 768px) {
        font-size: 56px;
        line-height: 1.071;
    }

    @media screen and (min-width: 1440px) {
        font-size: 64px;
        line-height: 1.0625;
    }
`,Xj=({children:e})=>f.jsx(Yj,{children:e});var tb={exports:{}};(function(e,t){(function(n,r){e.exports=r(k)})(sl,n=>(()=>{var r={703:(s,l,c)=>{var u=c(414);function d(){}function p(){}p.resetWarningCache=d,s.exports=function(){function g(C,h,m,v,T,O){if(O!==u){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function y(){return g}g.isRequired=g;var x={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:y,element:g,elementType:g,instanceOf:y,node:g,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:p,resetWarningCache:d};return x.PropTypes=x,x}},697:(s,l,c)=>{s.exports=c(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:s=>{s.exports=n}},i={};function o(s){var l=i[s];if(l!==void 0)return l.exports;var c=i[s]={exports:{}};return r[s](c,c.exports,o),c.exports}o.n=s=>{var l=s&&s.__esModule?()=>s.default:()=>s;return o.d(l,{a:l}),l},o.d=(s,l)=>{for(var c in l)o.o(l,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:l[c]})},o.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>ye});var s=o(98),l=o.n(s),c=o(697),u=o.n(c);function d(){return d=Object.assign?Object.assign.bind():function(V){for(var W=1;W<arguments.length;W++){var re=arguments[W];for(var de in re)Object.prototype.hasOwnProperty.call(re,de)&&(V[de]=re[de])}return V},d.apply(this,arguments)}var p=function(V){var W=V.pageClassName,re=V.pageLinkClassName,de=V.page,Ee=V.selected,Se=V.activeClassName,z=V.activeLinkClassName,$=V.getEventListener,M=V.pageSelectedHandler,te=V.href,Y=V.extraAriaContext,se=V.pageLabelBuilder,le=V.rel,ge=V.ariaLabel||"Page "+de+(Y?" "+Y:""),we=null;return Ee&&(we="page",ge=V.ariaLabel||"Page "+de+" is your current page",W=W!==void 0?W+" "+Se:Se,re!==void 0?z!==void 0&&(re=re+" "+z):re=z),l().createElement("li",{className:W},l().createElement("a",d({rel:le,role:te?void 0:"button",className:re,href:te,tabIndex:Ee?"-1":"0","aria-label":ge,"aria-current":we,onKeyPress:M},$(M)),se(de)))};p.propTypes={pageSelectedHandler:u().func.isRequired,selected:u().bool.isRequired,pageClassName:u().string,pageLinkClassName:u().string,activeClassName:u().string,activeLinkClassName:u().string,extraAriaContext:u().string,href:u().string,ariaLabel:u().string,page:u().number.isRequired,getEventListener:u().func.isRequired,pageLabelBuilder:u().func.isRequired,rel:u().string};const g=p;function y(){return y=Object.assign?Object.assign.bind():function(V){for(var W=1;W<arguments.length;W++){var re=arguments[W];for(var de in re)Object.prototype.hasOwnProperty.call(re,de)&&(V[de]=re[de])}return V},y.apply(this,arguments)}var x=function(V){var W=V.breakLabel,re=V.breakAriaLabel,de=V.breakClassName,Ee=V.breakLinkClassName,Se=V.breakHandler,z=V.getEventListener,$=de||"break";return l().createElement("li",{className:$},l().createElement("a",y({className:Ee,role:"button",tabIndex:"0","aria-label":re,onKeyPress:Se},z(Se)),W))};x.propTypes={breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabel:u().string,breakClassName:u().string,breakLinkClassName:u().string,breakHandler:u().func.isRequired,getEventListener:u().func.isRequired};const C=x;function h(V){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return V??W}function m(V){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},m(V)}function v(){return v=Object.assign?Object.assign.bind():function(V){for(var W=1;W<arguments.length;W++){var re=arguments[W];for(var de in re)Object.prototype.hasOwnProperty.call(re,de)&&(V[de]=re[de])}return V},v.apply(this,arguments)}function T(V,W){for(var re=0;re<W.length;re++){var de=W[re];de.enumerable=de.enumerable||!1,de.configurable=!0,"value"in de&&(de.writable=!0),Object.defineProperty(V,de.key,de)}}function O(V,W){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(re,de){return re.__proto__=de,re},O(V,W)}function _(V,W){if(W&&(m(W)==="object"||typeof W=="function"))return W;if(W!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(V)}function E(V){if(V===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return V}function F(V){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(W){return W.__proto__||Object.getPrototypeOf(W)},F(V)}function ee(V,W,re){return W in V?Object.defineProperty(V,W,{value:re,enumerable:!0,configurable:!0,writable:!0}):V[W]=re,V}var B=function(V){(function($,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(M&&M.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),M&&O($,M)})(z,V);var W,re,de,Ee,Se=(de=z,Ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,M=F(de);if(Ee){var te=F(this).constructor;$=Reflect.construct(M,arguments,te)}else $=M.apply(this,arguments);return _(this,$)});function z($){var M,te;return function(Y,se){if(!(Y instanceof se))throw new TypeError("Cannot call a class as a function")}(this,z),ee(E(M=Se.call(this,$)),"handlePreviousPage",function(Y){var se=M.state.selected;M.handleClick(Y,null,se>0?se-1:void 0,{isPrevious:!0})}),ee(E(M),"handleNextPage",function(Y){var se=M.state.selected,le=M.props.pageCount;M.handleClick(Y,null,se<le-1?se+1:void 0,{isNext:!0})}),ee(E(M),"handlePageSelected",function(Y,se){if(M.state.selected===Y)return M.callActiveCallback(Y),void M.handleClick(se,null,void 0,{isActive:!0});M.handleClick(se,null,Y)}),ee(E(M),"handlePageChange",function(Y){M.state.selected!==Y&&(M.setState({selected:Y}),M.callCallback(Y))}),ee(E(M),"getEventListener",function(Y){return ee({},M.props.eventListener,Y)}),ee(E(M),"handleClick",function(Y,se,le){var ge=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},we=ge.isPrevious,Ae=we!==void 0&&we,_e=ge.isNext,at=_e!==void 0&&_e,Je=ge.isBreak,Ze=Je!==void 0&&Je,et=ge.isActive,$e=et!==void 0&&et;Y.preventDefault?Y.preventDefault():Y.returnValue=!1;var S=M.state.selected,A=M.props.onClick,P=le;if(A){var q=A({index:se,selected:S,nextSelectedPage:le,event:Y,isPrevious:Ae,isNext:at,isBreak:Ze,isActive:$e});if(q===!1)return;Number.isInteger(q)&&(P=q)}P!==void 0&&M.handlePageChange(P)}),ee(E(M),"handleBreakClick",function(Y,se){var le=M.state.selected;M.handleClick(se,Y,le<Y?M.getForwardJump():M.getBackwardJump(),{isBreak:!0})}),ee(E(M),"callCallback",function(Y){M.props.onPageChange!==void 0&&typeof M.props.onPageChange=="function"&&M.props.onPageChange({selected:Y})}),ee(E(M),"callActiveCallback",function(Y){M.props.onPageActive!==void 0&&typeof M.props.onPageActive=="function"&&M.props.onPageActive({selected:Y})}),ee(E(M),"getElementPageRel",function(Y){var se=M.state.selected,le=M.props,ge=le.nextPageRel,we=le.prevPageRel,Ae=le.selectedPageRel;return se-1===Y?we:se===Y?Ae:se+1===Y?ge:void 0}),ee(E(M),"pagination",function(){var Y=[],se=M.props,le=se.pageRangeDisplayed,ge=se.pageCount,we=se.marginPagesDisplayed,Ae=se.breakLabel,_e=se.breakClassName,at=se.breakLinkClassName,Je=se.breakAriaLabels,Ze=M.state.selected;if(ge<=le)for(var et=0;et<ge;et++)Y.push(M.getPageElement(et));else{var $e=le/2,S=le-$e;Ze>ge-le/2?$e=le-(S=ge-Ze):Ze<le/2&&(S=le-($e=Ze));var A,P,q=function(X){return M.getPageElement(X)},J=[];for(A=0;A<ge;A++){var fe=A+1;if(fe<=we)J.push({type:"page",index:A,display:q(A)});else if(fe>ge-we)J.push({type:"page",index:A,display:q(A)});else if(A>=Ze-$e&&A<=Ze+(Ze===0&&le>1?S-1:S))J.push({type:"page",index:A,display:q(A)});else if(Ae&&J.length>0&&J[J.length-1].display!==P&&(le>0||we>0)){var pe=A<Ze?Je.backward:Je.forward;P=l().createElement(C,{key:A,breakAriaLabel:pe,breakLabel:Ae,breakClassName:_e,breakLinkClassName:at,breakHandler:M.handleBreakClick.bind(null,A),getEventListener:M.getEventListener}),J.push({type:"break",index:A,display:P})}}J.forEach(function(X,N){var I=X;X.type==="break"&&J[N-1]&&J[N-1].type==="page"&&J[N+1]&&J[N+1].type==="page"&&J[N+1].index-J[N-1].index<=2&&(I={type:"page",index:X.index,display:q(X.index)}),Y.push(I.display)})}return Y}),$.initialPage!==void 0&&$.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat($.initialPage,") and forcePage (").concat($.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),te=$.initialPage?$.initialPage:$.forcePage?$.forcePage:0,M.state={selected:te},M}return W=z,(re=[{key:"componentDidMount",value:function(){var $=this.props,M=$.initialPage,te=$.disableInitialCallback,Y=$.extraAriaContext,se=$.pageCount,le=$.forcePage;M===void 0||te||this.callCallback(M),Y&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(se)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(se,"). Did you forget a Math.ceil()?")),M!==void 0&&M>se-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(M," > ").concat(se-1,").")),le!==void 0&&le>se-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(le," > ").concat(se-1,")."))}},{key:"componentDidUpdate",value:function($){this.props.forcePage!==void 0&&this.props.forcePage!==$.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger($.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var $=this.state.selected,M=this.props,te=M.pageCount,Y=$+M.pageRangeDisplayed;return Y>=te?te-1:Y}},{key:"getBackwardJump",value:function(){var $=this.state.selected-this.props.pageRangeDisplayed;return $<0?0:$}},{key:"getElementHref",value:function($){var M=this.props,te=M.hrefBuilder,Y=M.pageCount,se=M.hrefAllControls;if(te)return se||$>=0&&$<Y?te($+1,Y,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function($){var M=$===this.state.selected;if(this.props.ariaLabelBuilder&&$>=0&&$<this.props.pageCount){var te=this.props.ariaLabelBuilder($+1,M);return this.props.extraAriaContext&&!M&&(te=te+" "+this.props.extraAriaContext),te}}},{key:"getPageElement",value:function($){var M=this.state.selected,te=this.props,Y=te.pageClassName,se=te.pageLinkClassName,le=te.activeClassName,ge=te.activeLinkClassName,we=te.extraAriaContext,Ae=te.pageLabelBuilder;return l().createElement(g,{key:$,pageSelectedHandler:this.handlePageSelected.bind(null,$),selected:M===$,rel:this.getElementPageRel($),pageClassName:Y,pageLinkClassName:se,activeClassName:le,activeLinkClassName:ge,extraAriaContext:we,href:this.getElementHref($),ariaLabel:this.ariaLabelBuilder($),page:$+1,pageLabelBuilder:Ae,getEventListener:this.getEventListener})}},{key:"render",value:function(){var $=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&$!==void 0)return $&&$(this.props);var M=this.props,te=M.disabledClassName,Y=M.disabledLinkClassName,se=M.pageCount,le=M.className,ge=M.containerClassName,we=M.previousLabel,Ae=M.previousClassName,_e=M.previousLinkClassName,at=M.previousAriaLabel,Je=M.prevRel,Ze=M.nextLabel,et=M.nextClassName,$e=M.nextLinkClassName,S=M.nextAriaLabel,A=M.nextRel,P=this.state.selected,q=P===0,J=P===se-1,fe="".concat(h(Ae)).concat(q?" ".concat(h(te)):""),pe="".concat(h(et)).concat(J?" ".concat(h(te)):""),X="".concat(h(_e)).concat(q?" ".concat(h(Y)):""),N="".concat(h($e)).concat(J?" ".concat(h(Y)):""),I=q?"true":"false",H=J?"true":"false";return l().createElement("ul",{className:le||ge,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:fe},l().createElement("a",v({className:X,href:this.getElementHref(P-1),tabIndex:q?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":I,"aria-label":at,rel:Je},this.getEventListener(this.handlePreviousPage)),we)),this.pagination(),l().createElement("li",{className:pe},l().createElement("a",v({className:N,href:this.getElementHref(P+1),tabIndex:J?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":H,"aria-label":S,rel:A},this.getEventListener(this.handleNextPage)),Ze)))}}])&&T(W.prototype,re),Object.defineProperty(W,"prototype",{writable:!1}),z}(s.Component);ee(B,"propTypes",{pageCount:u().number.isRequired,pageRangeDisplayed:u().number,marginPagesDisplayed:u().number,previousLabel:u().node,previousAriaLabel:u().string,prevPageRel:u().string,prevRel:u().string,nextLabel:u().node,nextAriaLabel:u().string,nextPageRel:u().string,nextRel:u().string,breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabels:u().shape({forward:u().string,backward:u().string}),hrefBuilder:u().func,hrefAllControls:u().bool,onPageChange:u().func,onPageActive:u().func,onClick:u().func,initialPage:u().number,forcePage:u().number,disableInitialCallback:u().bool,containerClassName:u().string,className:u().string,pageClassName:u().string,pageLinkClassName:u().string,pageLabelBuilder:u().func,activeClassName:u().string,activeLinkClassName:u().string,previousClassName:u().string,nextClassName:u().string,previousLinkClassName:u().string,nextLinkClassName:u().string,disabledClassName:u().string,disabledLinkClassName:u().string,breakClassName:u().string,breakLinkClassName:u().string,extraAriaContext:u().string,ariaLabelBuilder:u().func,eventListener:u().string,renderOnZeroPageCount:u().func,selectedPageRel:u().string}),ee(B,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(V){return V},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ye=B})(),a})())})(tb);var Qj=tb.exports;const Kj=Di(Qj),Gj=D(Kj).attrs({activeClassName:"active"})`
    padding: 14px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;

    @media screen and (min-width: 768px) {
        padding: 14px 24px;
        margin-top:80px;
    }

    li{
        width:27px;
        height:27px;
        &:not(:nth-child(-n+2))
        {
            margin-left:24px;
        }
    }

    li a {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.33;
        color:#f3f3f3;
        cursor: pointer;
    }

    li.previous{
        margin-right:48px;

        @media screen and (min-width: 768px) {
            margin-right:40px;
        }
    }

    li.next{
        margin-left:48px;

        @media screen and (min-width: 768px) {
            margin-left:40px;
        }
    }

    li.previous a,
    li.next a,
    li.break a {
        display: flex;
        justify-content: center;
        align-items:center;
    }

    li.active a{
        background-color:rgba(64, 112, 205, 0.50);
    }


    li.disabled a {
        color: grey;
    }

    li.disable,
    li.disabled a {
        cursor: default;
    }
`,qm=({limit:e,currentPage:t,itemsLength:n,handlePageChange:r,pageRangeDisplayed:i})=>{const o=Math.ceil(n/e),a=({selected:s})=>{r(s),window.scrollTo({top:0,behavior:"smooth"})};return f.jsx("div",{className:"App",children:f.jsx(Gj,{previousLabel:f.jsx("svg",{style:{width:"8px",height:"15px"},children:f.jsx("use",{href:`${Ft}#icon-paginateLeft`})}),nextLabel:f.jsx("svg",{style:{width:"8px",height:"15px"},children:f.jsx("use",{href:`${Ft}#icon-paginateRight`})}),pageCount:o,onPageChange:a,forcePage:t,renderOnZeroPageCount:null,breakLabel:"...",pageRangeDisplayed:i,marginPagesDisplayed:1})})},qj=D.section`
    overflow: hidden;
    max-width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;

    @media screen and (min-width: 768px) {
        padding-top: 140px;
        padding-bottom: 140px;
    }

    @media screen and (min-width: 1440px) {
        padding-top: 160px;
    }
`,Jj=D.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 20px;

    margin-top: 40px;

    @media screen and (min-width: 768px) {
        column-gap: 20px;
        row-gap: 40px;
    }

    @media screen and (min-width: 1440px) {
        row-gap: 80px;
    }
`;function Mn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ni(e){return!!e&&!!e[Ge]}function ji(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===sO}(e)||Array.isArray(e)||!!e[o1]||!!(!((t=e.constructor)===null||t===void 0)&&t[o1])||Jm(e)||Zm(e))}function Oi(e,t,n){n===void 0&&(n=!1),Go(e)===0?(n?Object.keys:bo)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Go(e){var t=e[Ge];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Jm(e)?2:Zm(e)?3:0}function wo(e,t){return Go(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Zj(e,t){return Go(e)===2?e.get(t):e[t]}function nb(e,t,n){var r=Go(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function rb(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Jm(e){return oO&&e instanceof Map}function Zm(e){return aO&&e instanceof Set}function ci(e){return e.o||e.t}function eh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ob(e);delete t[Ge];for(var n=bo(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function th(e,t){return t===void 0&&(t=!1),nh(e)||Ni(e)||!ji(e)||(Go(e)>1&&(e.set=e.add=e.clear=e.delete=eO),Object.freeze(e),t&&Oi(e,function(n,r){return th(r,!0)},!0)),e}function eO(){Mn(2)}function nh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Jn(e){var t=sp[e];return t||Mn(18,e),t}function tO(e,t){sp[e]||(sp[e]=t)}function ip(){return hs}function Cf(e,t){t&&(Jn("Patches"),e.u=[],e.s=[],e.v=t)}function yc(e){op(e),e.p.forEach(nO),e.p=null}function op(e){e===hs&&(hs=e.l)}function Zg(e){return hs={p:[],l:hs,h:e,m:!0,_:0}}function nO(e){var t=e[Ge];t.i===0||t.i===1?t.j():t.g=!0}function Sf(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Jn("ES5").S(t,e,r),r?(n[Ge].P&&(yc(t),Mn(4)),ji(e)&&(e=vc(t,e),t.l||wc(t,e)),t.u&&Jn("Patches").M(n[Ge].t,e,t.u,t.s)):e=vc(t,n,[]),yc(t),t.u&&t.v(t.u,t.s),e!==ib?e:void 0}function vc(e,t,n){if(nh(t))return t;var r=t[Ge];if(!r)return Oi(t,function(s,l){return e1(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return wc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=eh(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Oi(o,function(s,l){return e1(e,r,i,s,l,n,a)}),wc(e,i,!1),n&&e.u&&Jn("Patches").N(r,n,e.u,e.s)}return r.o}function e1(e,t,n,r,i,o,a){if(Ni(i)){var s=vc(e,i,o&&t&&t.i!==3&&!wo(t.R,r)?o.concat(r):void 0);if(nb(n,r,s),!Ni(s))return;e.m=!1}else a&&n.add(i);if(ji(i)&&!nh(i)){if(!e.h.D&&e._<1)return;vc(e,i),t&&t.A.l||wc(e,i)}}function wc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&th(t,n)}function Ef(e,t){var n=e[Ge];return(n?ci(n):e)[t]}function t1(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Or(e){e.P||(e.P=!0,e.l&&Or(e.l))}function Tf(e){e.o||(e.o=eh(e.t))}function ap(e,t,n){var r=Jm(t)?Jn("MapSet").F(t,n):Zm(t)?Jn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:ip(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,c=gs;a&&(l=[s],c=Sa);var u=Proxy.revocable(l,c),d=u.revoke,p=u.proxy;return s.k=p,s.j=d,p}(t,n):Jn("ES5").J(t,n);return(n?n.A:ip()).p.push(r),r}function rO(e){return Ni(e)||Mn(22,e),function t(n){if(!ji(n))return n;var r,i=n[Ge],o=Go(n);if(i){if(!i.P&&(i.i<4||!Jn("ES5").K(i)))return i.t;i.I=!0,r=n1(n,o),i.I=!1}else r=n1(n,o);return Oi(r,function(a,s){i&&Zj(i.t,a)===s||nb(r,a,t(s))}),o===3?new Set(r):r}(e)}function n1(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return eh(e)}function iO(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[Ge];return gs.get(l,o)},set:function(l){var c=this[Ge];gs.set(c,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][Ge];if(!s.P)switch(s.i){case 5:r(s)&&Or(s);break;case 4:n(s)&&Or(s)}}}function n(o){for(var a=o.t,s=o.k,l=bo(s),c=l.length-1;c>=0;c--){var u=l[c];if(u!==Ge){var d=a[u];if(d===void 0&&!wo(a,u))return!0;var p=s[u],g=p&&p[Ge];if(g?g.t!==d:!rb(p,d))return!0}}var y=!!a[Ge];return l.length!==bo(a).length+(y?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};tO("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(u,d){if(u){for(var p=Array(d.length),g=0;g<d.length;g++)Object.defineProperty(p,""+g,e(g,!0));return p}var y=ob(d);delete y[Ge];for(var x=bo(y),C=0;C<x.length;C++){var h=x[C];y[h]=e(h,u||!!y[h].enumerable)}return Object.create(Object.getPrototypeOf(d),y)}(s,o),c={i:s?5:4,A:a?a.A:ip(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ge,{value:c,writable:!0}),l},S:function(o,a,s){s?Ni(a)&&a[Ge].A===o&&t(o.p):(o.u&&function l(c){if(c&&typeof c=="object"){var u=c[Ge];if(u){var d=u.t,p=u.k,g=u.R,y=u.i;if(y===4)Oi(p,function(v){v!==Ge&&(d[v]!==void 0||wo(d,v)?g[v]||l(p[v]):(g[v]=!0,Or(u)))}),Oi(d,function(v){p[v]!==void 0||wo(p,v)||(g[v]=!1,Or(u))});else if(y===5){if(r(u)&&(Or(u),g.length=!0),p.length<d.length)for(var x=p.length;x<d.length;x++)g[x]=!1;else for(var C=d.length;C<p.length;C++)g[C]=!0;for(var h=Math.min(p.length,d.length),m=0;m<h;m++)p.hasOwnProperty(m)||(g[m]=!0),g[m]===void 0&&l(p[m])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var r1,hs,rh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",oO=typeof Map<"u",aO=typeof Set<"u",i1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",ib=rh?Symbol.for("immer-nothing"):((r1={})["immer-nothing"]=!0,r1),o1=rh?Symbol.for("immer-draftable"):"__$immer_draftable",Ge=rh?Symbol.for("immer-state"):"__$immer_state",sO=""+Object.prototype.constructor,bo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ob=Object.getOwnPropertyDescriptors||function(e){var t={};return bo(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},sp={},gs={get:function(e,t){if(t===Ge)return e;var n=ci(e);if(!wo(n,t))return function(i,o,a){var s,l=t1(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!ji(r)?r:r===Ef(e.t,t)?(Tf(e),e.o[t]=ap(e.A.h,r,e)):r},has:function(e,t){return t in ci(e)},ownKeys:function(e){return Reflect.ownKeys(ci(e))},set:function(e,t,n){var r=t1(ci(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ef(ci(e),t),o=i==null?void 0:i[Ge];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(rb(n,i)&&(n!==void 0||wo(e.t,t)))return!0;Tf(e),Or(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ef(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Tf(e),Or(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ci(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mn(12)}},Sa={};Oi(gs,function(e,t){Sa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)},Sa.set=function(e,t,n){return gs.set.call(this,e[0],t,n,e[0])};var lO=function(){function e(n){var r=this;this.O=i1,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(x){var C=this;x===void 0&&(x=s);for(var h=arguments.length,m=Array(h>1?h-1:0),v=1;v<h;v++)m[v-1]=arguments[v];return l.produce(x,function(T){var O;return(O=o).call.apply(O,[C,T].concat(m))})}}var c;if(typeof o!="function"&&Mn(6),a!==void 0&&typeof a!="function"&&Mn(7),ji(i)){var u=Zg(r),d=ap(r,i,void 0),p=!0;try{c=o(d),p=!1}finally{p?yc(u):op(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(x){return Cf(u,a),Sf(x,u)},function(x){throw yc(u),x}):(Cf(u,a),Sf(c,u))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===ib&&(c=void 0),r.D&&th(c,!0),a){var g=[],y=[];Jn("Patches").M(i,c,g,y),a(g,y)}return c}Mn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var u=arguments.length,d=Array(u>1?u-1:0),p=1;p<u;p++)d[p-1]=arguments[p];return r.produceWithPatches(c,function(g){return i.apply(void 0,[g].concat(d))})};var a,s,l=r.produce(i,o,function(c,u){a=c,s=u});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){ji(n)||Mn(8),Ni(n)&&(n=rO(n));var r=Zg(this),i=ap(this,n,void 0);return i[Ge].C=!0,op(r),i},t.finishDraft=function(n,r){var i=n&&n[Ge],o=i.A;return Cf(o,r),Sf(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!i1&&Mn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Jn("Patches").$;return Ni(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),un=new lO;un.produce;un.produceWithPatches.bind(un);un.setAutoFreeze.bind(un);un.setUseProxies.bind(un);un.applyPatches.bind(un);un.createDraft.bind(un);un.finishDraft.bind(un);var ab=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),cO=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},bc=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},uO=Object.defineProperty,fO=Object.defineProperties,dO=Object.getOwnPropertyDescriptors,a1=Object.getOwnPropertySymbols,pO=Object.prototype.hasOwnProperty,mO=Object.prototype.propertyIsEnumerable,s1=function(e,t,n){return t in e?uO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},za=function(e,t){for(var n in t||(t={}))pO.call(t,n)&&s1(e,n,t[n]);if(a1)for(var r=0,i=a1(t);r<i.length;r++){var n=i[r];mO.call(t,n)&&s1(e,n,t[n])}return e},Af=function(e,t){return fO(e,dO(t))},hO=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(c){i(c)}},a=function(l){try{s(n.throw(l))}catch(c){i(c)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})};function ko(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return za(za({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}(function(e){ab(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,bc([void 0],n[0].concat(this)))):new(t.bind.apply(t,bc([void 0],n.concat(this))))},t})(Array);(function(e){ab(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,bc([void 0],n[0].concat(this)))):new(t.bind.apply(t,bc([void 0],n.concat(this))))},t})(Array);var gO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",sb=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=gO[Math.random()*64|0];return t},xO=["name","message","stack","code"],Nf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),l1=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),yO=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=xO;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=ko(t+"/fulfilled",function(c,u,d,p){return{payload:c,meta:Af(za({},p||{}),{arg:d,requestId:u,requestStatus:"fulfilled"})}}),o=ko(t+"/pending",function(c,u,d){return{payload:void 0,meta:Af(za({},d||{}),{arg:u,requestId:c,requestStatus:"pending"})}}),a=ko(t+"/rejected",function(c,u,d,p,g){return{payload:p,error:(r&&r.serializeError||yO)(c||"Rejected"),meta:Af(za({},g||{}),{arg:d,requestId:u,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(u,d,p){var g=r!=null&&r.idGenerator?r.idGenerator(c):sb(),y=new s,x;function C(m){x=m,y.abort()}var h=function(){return hO(this,null,function(){var m,v,T,O,_,E,F;return cO(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,4,,5]),O=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,c,{getState:d,extra:p}),wO(O)?[4,O]:[3,2];case 1:O=ee.sent(),ee.label=2;case 2:if(O===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(B,ye){return y.signal.addEventListener("abort",function(){return ye({name:"AbortError",message:x||"Aborted"})})}),u(o(g,c,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:g,arg:c},{getState:d,extra:p}))),[4,Promise.race([_,Promise.resolve(n(c,{dispatch:u,getState:d,extra:p,requestId:g,signal:y.signal,abort:C,rejectWithValue:function(B,ye){return new Nf(B,ye)},fulfillWithValue:function(B,ye){return new l1(B,ye)}})).then(function(B){if(B instanceof Nf)throw B;return B instanceof l1?i(B.payload,g,c,B.meta):i(B,g,c)})])];case 3:return T=ee.sent(),[3,5];case 4:return E=ee.sent(),T=E instanceof Nf?a(null,g,c,E.payload,E.meta):a(E,g,c),[3,5];case 5:return F=r&&!r.dispatchConditionRejection&&a.match(T)&&T.meta.condition,F||u(T),[2,T]}})})}();return Object.assign(h,{abort:C,requestId:g,arg:c,unwrap:function(){return h.then(vO)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function vO(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function wO(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ih="listenerMiddleware";ko(ih+"/add");ko(ih+"/removeAll");ko(ih+"/remove");var c1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);iO();nr.defaults.baseURL="https://rest-api-drink-master.onrender.com/api";const qo="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFiMTQ2OGEwMzA3MzgyNjgxNzY5OSIsImlhdCI6MTY5NTcxOTcxMiwiZXhwIjoxNjk1NzkxNzEyfQ.PItbRSr3g0SSyvvPfJl5IWxf5mdBmYXMyNKFCdEfmAg";nr.defaults.headers.common.Authorization=`Bearer ${qo}`;const bO=async()=>{try{return(await nr.get("/drinks/favorite",{headers:{Authorization:`Bearer ${qo}`}})).data.data}catch(e){console.error("Помилка при отриманні даних:",e)}},kO=async e=>{console.log(e);try{return(await nr.delete("/drinks/favorite/remove",{headers:{Authorization:`Bearer ${qo}`},data:{recipeId:e}})).data.data}catch(t){console.error("Помилка при отриманні даних:",t)}},CO=async e=>{try{return(await nr.post("/drinks/favorite/add",{headers:{Authorization:`Bearer ${qo}`},data:{recipeId:e}})).data.data}catch(t){console.error("Помилка при отриманні даних:",t)}},SO=async(e,t)=>{const{data:n}=await nr.get(`/drinks/byid/${e}`,{signal:t.signal});return n},EO=async()=>{try{return(await nr.get("/drinks/own",{headers:{Authorization:`Bearer ${qo}`}})).data.data}catch(e){console.error("Помилка при отриманні даних:",e)}},TO=async e=>{try{return(await nr.delete("/drinks/own/remove",{headers:{Authorization:`Bearer ${qo}`},data:{recipeId:e}})).data.data}catch(t){console.error("Помилка при отриманні даних:",t)}},AO=async({page:e,limit:t})=>{try{return(await nr.get("/drinks/mainpage",{params:{page:e,limit:t}})).data.data}catch(n){console.error("Помилка при отриманні даних про всі коктейлі: ",n)}},yu=()=>f.jsxs("div",{style:{color:"white",padding:"100px 50px",display:"flex",flexDirection:"column",alignItems:"center"},children:[f.jsx("h1",{style:{padding:"50px"},children:"We are looking for your drink..."}),f.jsx("svg",{id:"icon-drink",viewBox:"0 0 48 48",fill:"currentColor",width:"192",height:"192",children:f.jsx("path",{d:`M16 30v11c0 1.1-0.9 2-2 2l-5.5 0c-1.38 0-2.5 
        1.12-2.5 2.5s1.12 2.5 2.5 2.5h20c1.38 0 2.5-1.12
        2.5-2.5s-1.12-2.5-2.5-2.5h-5.5c-1.1 0-2-0.9-2-2v-11l8.090-8.189c1.96
        1.378 4.34 2.189 6.91 2.189 6.63 0 12-5.37 12-12s-5.37-12-12-12c-6.29
        0-11.45 4.84-11.96 11h-22.060c-1.090 0-1.98 0.9-1.98 2 0 0.561 0.23
        1.070 0.6 1.431l15.4 15.569zM32.7 18.181l3.72-3.771c0.359-0.36
        0.58-0.86 0.58-1.41 0-1.1-0.891-2-1.98-2h-5.95c0.491-3.39 3.4-6
        6.931-6 3.87 0 7 3.13 7 7s-3.13 7-7 7c-1.19-0-2.321-0.3-3.301-0.819z`})})]}),NO=Be.section`
  padding-top: 200px;
  padding-bottom: 112px;
  background-color: #0a0a11;
`,jO=Be.div`
  position: absolute;
  transform: translate(-80%, -60%);
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,lb=()=>f.jsxs(NO,{children:[f.jsx(jO,{}),f.jsx(rr,{children:f.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[f.jsx("span",{style:{color:"#363535",fontSize:150,fontWeight:600},children:"4"}),f.jsx("picture",{children:f.jsx("img",{style:{margin:"0"},src:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png",srcSet:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x, ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x",alt:"coctail",loading:"lazy"})}),f.jsx("span",{style:{color:"#363535",fontSize:150,fontWeight:600},children:"4"})]})})]}),OO=["Ordinary Drink","Cocktail","Snake","Other/Unknow","Cocoa"],DO=()=>{const[e,t]=xp(),n=e.get("page")?Number(e.get("page"))-1:0,[r,i]=k.useState([]),[o,a]=k.useState(n),[s,l]=k.useState(10),[c,u]=k.useState(!1),[d,p]=k.useState(3),[g,y]=k.useState(!1),[x,C]=k.useState(!1),h=()=>{y(!1),window.innerWidth>=1440?(l(9),u(!0),p(6)):window.innerWidth>=768?(l(10),u(!0)):(l(10),p(3),u(!1)),y(!0)};if(k.useEffect(()=>(h(),window.addEventListener("resize",h),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",h)}),[]),k.useEffect(()=>{g&&(async()=>{C(!0);const O=await AO({page:o+1,limit:s});i(O),C(!1)})()},[o,s,g]),o+1>Math.ceil(451/s))return f.jsx(lb,{});const m=r.map(T=>f.jsx("li",{children:f.jsx(Zw,{data:T})},T.id)),v=T=>{t({page:T+1}),a(T)};return f.jsx(qj,{children:f.jsxs(rr,{children:[f.jsx(Xj,{children:"Drinks"}),x&&f.jsx(yu,{}),r.length&&!x&&f.jsxs("div",{children:[f.jsx(Vj,{categories:OO,shouldRenderBtn:c}),f.jsx(Jj,{children:m}),f.jsx(qm,{limit:s,currentPage:o,itemsLength:451,handlePageChange:v,pageRangeDisplayed:d})]})]})})},cb=D.section`
  padding: 150px 0;
  @media (min-width: 768px) {
    padding: 140px 0;
  }
  @media (min-width: 1440px) {
    padding-top: 158px;
  }
`,ub=D.h1`
  margin-bottom: 40px;

  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  @media (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 62px;
    font-size: 64px;
  }
`,fb=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,db=D.p`
  width: 236px;
  margin-top: 32px;
  margin-bottom: 0;
  text-align: center;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42;
`;D.div`
  margin: 0 auto;
`;const pb=D.ul`
  margin-bottom: 40px;
  display: grid;
  grid-row-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(335px, 1fr));
    grid-gap: 20px;
    grid-row-gap: 80px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(335px, 1fr));
  }
`,_O=D.div`
  /* flex: 1; */
`,PO=D.img`
  margin-bottom: 18px;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,MO=D.h2`
  margin-bottom: 4px;

  color: #f3f3f3;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.18;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
  }
`,RO=D.p`
  margin-bottom: 18px;

  color: #f3f3f3;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.18;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
  }
`,IO=D.p`
  margin-bottom: 18px;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.18;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
  }
`,$O=D.div`
  display: flex;
`,LO=D(vs)`
  margin-right: 8px;

  display: block;
  padding: 14px 40px;
  gap: 10px;
  border-radius: 42px;
  background: #161f37;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  &:hover {
    background: #f3f3f3;
    color: #161F37;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }
`,FO=D.button`
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  background: #161f37;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  &:hover {
    background: #f3f3f3;
    color: #161f37;
  }
`,zO="/Drink_master/assets/block-64bbac3a.jpg",BO="/Drink_master/assets/block@2x-1f107f3f.jpg",mb=({cardData:e,onDelete:t})=>{const{drink:n,description:r,alcoholic:i,_id:o,drinkThumb:a}=e,s=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return f.jsxs(_O,{children:[f.jsx("picture",{children:f.jsx(PO,{src:a,alt:"coctail",loading:"lazy",onError:l=>{l.target.src=s()?BO:zO}})}),f.jsx(MO,{children:n}),f.jsx(RO,{children:i}),f.jsx(IO,{children:r}),f.jsxs($O,{children:[f.jsx(LO,{to:"/aboutdrink",children:"See more"}),f.jsx(FO,{type:"button",id:o,onClick:()=>t(o),children:f.jsx(GN,{size:24})})]})]})},UO=()=>{const[e,t]=k.useState([]),[n,r]=k.useState(!1),[i,o]=xp(),a=i.get("page")?Number(i.get("page"))-1:0,[s,l]=k.useState(a),[c,u]=k.useState(null);k.useState(!1);const[d,p]=k.useState(3);k.useEffect(()=>{(async()=>{try{r(!0);const v=await bO();t(v),r(!1)}catch(v){console.log(v.message)}})()},[]);const g=s*c,y=()=>{window.innerWidth>=1440?(u(9),p(6)):window.innerWidth>=768?u(8):(u(8),p(3))};k.useEffect(()=>(y(),window.addEventListener("resize",y),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",y)}),[]);const x=m=>{o({page:m+1}),l(m)},C=m=>{const v=e.filter(T=>T._id!==m);t(v),kO(m)},h=e.slice(g,g+c).map(m=>f.jsx("li",{children:f.jsx(mb,{cardData:m,onDelete:C})},m._id));return f.jsx(cb,{children:f.jsx(rr,{children:f.jsxs("div",{children:[f.jsx(ub,{children:"Favorites"}),n?f.jsx(yu,{}):e.length>0?f.jsxs(f.Fragment,{children:[f.jsx(pb,{children:h}),f.jsx(qm,{limit:c,currentPage:s,itemsLength:e.length,handlePageChange:x,pageRangeDisplayed:d})]}):f.jsxs("div",{children:[f.jsx("picture",{children:f.jsx("img",{style:{margin:"0 auto"},src:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png",srcSet:`./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,
                  ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x`,alt:"coctail",loading:"lazy"})}),f.jsx(fb,{children:f.jsx(db,{children:"You haven't added any favorite cocktails yet"})})]})]})})})},WO=()=>f.jsx(UO,{}),HO=()=>{const[e,t]=k.useState([]),[n,r]=k.useState(!1),[i,o]=xp(),a=i.get("page")?Number(i.get("page"))-1:0,[s,l]=k.useState(a),[c,u]=k.useState(null);k.useState(!1);const[d,p]=k.useState(3);k.useEffect(()=>{(async()=>{try{r(!0);const v=await EO();t(v),r(!1)}catch(v){console.log(v.message)}})()},[]);const g=s*c,y=()=>{window.innerWidth>=1440?(u(9),p(6)):window.innerWidth>=768?u(8):(u(8),p(3))};k.useEffect(()=>(y(),window.addEventListener("resize",y),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",y)}),[]);const x=m=>{o({page:m+1}),l(m)},C=m=>{const v=e.filter(T=>T._id!==m);t(v),TO(m)},h=e.slice(g,g+c).map(m=>f.jsx("li",{children:f.jsx(mb,{cardData:m,onDelete:C})},m._id));return f.jsx(cb,{children:f.jsx(rr,{children:f.jsxs("div",{children:[f.jsx(ub,{children:"My drinks"}),n?f.jsx(yu,{}):e.length>0?f.jsxs(f.Fragment,{children:[f.jsx(pb,{children:h}),f.jsx(qm,{limit:c,currentPage:s,itemsLength:e.length,handlePageChange:x,pageRangeDisplayed:d})]}):f.jsxs("div",{children:[f.jsx("picture",{children:f.jsx("img",{style:{margin:"0 auto"},src:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png",srcSet:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x, ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x",alt:"coctail",loading:"lazy"})}),f.jsx(fb,{children:f.jsx(db,{children:"You haven't added any own cocktails yet"})})]})]})})})},VO=()=>f.jsx(HO,{}),jf="/Drink_master/assets/ellipseleft-footer-543ed15b.png",Of="/Drink_master/assets/ellipseright-footer-59bb3a22.png",YO="/Drink_master/assets/background380-29b49821.png",ol="/Drink_master/assets/background550-76772f6f.png",u1="/Drink_master/assets/background850-64ff8188.png",XO=D.div`
  width: 100%;
  background-image: url(${jf}), url(${Of}),
    url(${ol}), url(${ol});
  background-repeat: no-repeat;
  background-position:
    60% 137%,
    20% 145%,
    100% -5%,
    -20% 20%;

  @media (min-width: 768px) {
    background-image: url(${jf}), url(${Of}),
      url(${u1}), url(${ol});
    background-position:
      70% 132%,
      30% 138%,
      200% -150px,
      -300% 270px;
  }

  @media (min-width: 1440px) {
    background-image: url(${jf}), url(${Of}),
      url(${u1}), url(${ol}), url(${YO});
    background-position:
      -28% 134%,
      60% 139%,
      -350% -150px,
      210% 270px,
      100% 250px;
  }
  @media (min-width: 1600px) {
    background-position:
      0% 134%,
      60% 139%,
      -220% -150px,
      210% 270px,
      100% 250px;
  }
  @media (min-width: 1800px) {
    background-position:
      20% 134%,
      60% 139%,
      -140% -150px,
      160% 270px,
      85% 250px;
  }
  @media (min-width: 2000px) {
    background-position:
      30% 134%,
      60% 139%,
      -120% -150px,
      160% 270px,
      85% 250px;
  }
`,QO=J4`
@font-face {
  font-family: 'Manrope';
src: url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.eot');
    src: local('Manrope Bold'), local('Manrope-Bold'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
  font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot');
    src: local('Manrope Semibold'), local('Manrope-Semibold'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff') format('woff'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.eot');
    src: local('Manrope Regular'), local('Manrope-Regular'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.eot');
    src: local('Manrope Medium'), local('Manrope-Medium'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
margin: 0;
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
font-size:14px;
  color: #111111;
  width: 100%;
  height: 100vh;
  background-color: #0a0a11;
   scroll-behavior: smooth;

 }

 
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
    max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color:inherit;
}

.error-message {
  font-size: 14px;
  color:red;
}
`,KO=D.section`
  padding-top: 152px;
  padding-bottom: 112px;

  @media (min-width: 768px) {
    padding-top: 204px;
    padding-bottom: 120px;
  }

  @media (min-width: 1440px) {
    padding-top: 269px;
    padding-bottom: 160px;
  }
`,GO=D.h1`
  margin-bottom: 16px;

  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media (min-width: 768px) {
    margin-bottom: 28px;

    font-size: 56px;
    line-height: 1.07;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
  }
`,qO=D.p`
  margin-bottom: 32px;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;

  @media (min-width: 768px) {
    margin-bottom: 48px;

    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`,JO=D(Pi)`
  margin-bottom: 47px;

  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 42px;
  background: #f3f3f3;

  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:hover,
  &:focus {
    color: #f3f3f3;
    background-color: #161f37;
  }
  @media (min-width: 768px) {
    margin-bottom: 54px;

    font-size: 16px;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    /* margin-bottom: 40px; */
  }
`,ZO=D.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,eD=D.div`
  @media (min-width: 1440px) {
    max-width: 715px;
    margin-top: 57px;
  }
`,tD=()=>f.jsx(KO,{children:f.jsx(rr,{children:f.jsxs(ZO,{children:[f.jsxs(eD,{children:[f.jsx(GO,{children:"Craft Your Perfect Drink with Drink Master"}),f.jsx(qO,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),f.jsx(JO,{to:"/adddrink",children:"Add drink"})]}),f.jsx("picture",{children:f.jsx("img",{style:{width:360},src:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png",srcSet:"./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x, ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x",alt:"coctail",loading:"lazy"})})]})})}),nD=[{categoryName:"Ordinary Drink",cocktails:[{id:"639b6de9ff77d221f190c50f",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c508",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c50d",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"39b6de9ff77d221f190c51e",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c520",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"}]},{categoryName:"Cocktail",cocktails:[{id:"639b6de9ff77d221f190c50f",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c508",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c50d",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"39b6de9ff77d221f190c51e",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c520",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"}]},{categoryName:"Shake",cocktails:[{id:"639b6de9ff77d221f190c50f",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c508",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c50d",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"39b6de9ff77d221f190c51e",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c520",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"}]},{categoryName:"Other/Unknow",cocktails:[{id:"639b6de9ff77d221f190c50f",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c508",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c50d",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"39b6de9ff77d221f190c51e",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"},{id:"639b6de9ff77d221f190c520",drink:"Quentin",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"}]}],rD=D(vs)`
    display: inline-block;
    padding: 14px 40px;
    border-radius: 42px;
    background-color: #f3f3f3;

    color: #161f37;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    text-align: center;
    transition:
        color 300ms linear,
        background-color 300ms linear;

    &:hover,
    &:focus {
        color: #f3f3f3;
        background-color: #161f37;
    }

    @media (min-width: 768px) {
        padding: 18px 44px;
        font-size: 16px;
        line-height: 1.12;
    }
`,iD=({children:e,navigateTo:t})=>f.jsx(rD,{to:t,children:e}),oD=D.section`
    padding-bottom: 80px;

    @media screen and (min-width: 768px) {
        padding-bottom: 140px;
    }
`,aD=D.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,sD=D.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
        row-gap:80px;   
        margin-bottom: 80px;
    }
`,lD=D.h3`
    color: #f3f3f3;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.14;
    
    @media screen and (min-width: 768px) {
        font-size: 40;
        line-height: 1.1;
    }
`,cD=D.ul`
    margin-top: 24px;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        margin-top: 40px;
    }
`,uD=({items:e,numbCocktailsToShow:t})=>f.jsx(oD,{children:f.jsx(rr,{children:f.jsxs(aD,{children:[f.jsx(sD,{children:e.map(n=>f.jsxs("li",{children:[f.jsx(lD,{children:n.categoryName}),f.jsx(cD,{children:n.cocktails.slice(0,t).map(r=>f.jsx("li",{children:f.jsx(Zw,{data:r})},r.id))})]},n.categoryName))}),f.jsx(iD,{navigateTo:"/drinks",children:"Other drinks"})]})})}),fD=()=>{const[e,t]=k.useState(1),n=()=>{window.innerWidth>=1440?t(3):window.innerWidth>=768?t(2):t(1)};return k.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),f.jsxs(f.Fragment,{children:[f.jsx(tD,{}),f.jsx(uD,{items:nD,numbCocktailsToShow:e})]})},dD=D.div`
  max-width: 375px;
  padding-top: 152px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 40px;

    font-size: 32px;
    font-weight: 600;
    line-height: calc(38 / 32);
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: calc(32 / 28);
  }

  h2,
  h3 {
    color: #f3f3f3;
  }

  & > div {
    margin-bottom: 80px;
  }
`,pD=D.div`
  margin-bottom: 80px;
`,mD=D.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,hD=D.div`
  /* width: 104px; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #f3f3f380;
  border-radius: 200px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 16px;
    border: none;
    background: transparent;
    color: #f3f3f380;
  }

  button:hover,
  button:active {
    color: #f3f3f3;
  }

  span {
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 14px;
    line-height: calc(18 / 14);
    text-align: center;
    color: #f3f3f3;
  }
`,gD=D.div`
  display: flex;
  align-items: center;

  margin-bottom: 18px;

  select,
  input {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 18px;
    padding-right: 36px;
    margin-right: 8px;

    background: transparent;
    border: 1px solid #f3f3f380;
    border-radius: 200px;

    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 400;
    color: #f3f3f3;

    &:focus {
      border: 1px solid #f3f3f3;
      outline: none;
    }
  }

  select {
    width: 200px;
    appearance: none;
    cursor: pointer;
  }

  input {
    width: 100px;
  }

  button {
    display: block;
    padding: 0;
    border: none;
    background: none;
    color: #f3f3f380;
  }

  button:hover,
  button:active {
    color: #f3f3f3;
  }
`,xD=D.div`
  position: relative;

  span {
    /* content: ''; */
    display: block;
    position: absolute;
    pointer-events: none;
    top: 16px;
    right: 24px;
    color: #fff;
    /* clip-path: polygon(100% 0%, 0 0%, 50% 100%); */
  }

  option {
    background-color: #161f37;
    color: #f3f3f366;
  }
`;function yD(e){return Tn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(e)}function vD(e){return Tn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(e)}function wD(e){return Tn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(e)}const bD=()=>{const e=[{name:"Lem"},{name:"Passoa"},{name:"Prosecco"}],t={name:e[0].name,volume:""};return f.jsx(AT,{name:"ingridients",render:({form:{values:{ingridients:n}},push:r,insert:i,remove:o})=>f.jsxs(pD,{children:[f.jsxs(mD,{children:[f.jsx("h3",{children:"Ingredients"}),f.jsxs(hD,{children:[f.jsx("button",{type:"button",onClick:()=>o(),children:f.jsx(vD,{size:16})}),f.jsx("span",{children:n.length}),f.jsx("button",{type:"button",onClick:()=>r(t),children:f.jsx(wD,{size:16})})]})]}),f.jsx("div",{children:n.length>0&&n.map((a,s)=>f.jsxs(gD,{role:"ingridientsSelect","aria-labelledby":"ingridientsSelect-group",children:[f.jsxs(xD,{children:[f.jsx(gr,{name:`ingridients.${s}.name`,as:"select",children:e.map(({name:l},c)=>f.jsx("option",{value:l,children:l},c))}),f.jsx("span",{style:{color:"#fff"},children:f.jsx(KN,{size:18})})]}),f.jsx(gr,{name:`ingridients.${s}.volume`}),f.jsx("button",{type:"button",onClick:()=>o(s),children:f.jsx(yD,{size:18})})]},s))})]})})},kD=Be.button`
  width: 100%;
  height: 34px;
  padding-bottom: 14px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  &::after {
    padding-bottom: 14px;
  }

  span {
    display: block;
  }
`,CD=Be.span`
  color: #f3f3f380;
`,SD=Be.div`
  max-height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f3f3f380;
    border-radius: 4px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: yellow;
  } */

  position: absolute;
  top: 24px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: #f3f3f380;

  border-radius: 12px;
  background-color: #161f37;
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: #f3f3f3;
  }
`,ED=Be.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,f1=({items:e,title:t})=>{const[n,r]=k.useState(!1),[i,o]=k.useState(""),a=t.toLowerCase(),[,,{setValue:s}]=CT({name:a}),l=()=>{r(u=>!u)},c=u=>{o(u),l(),s(u)};return f.jsxs(ED,{children:[f.jsxs(kD,{type:"button",onClick:l,children:[f.jsx(CD,{children:t}),f.jsxs("div",{style:{display:"flex"},children:[f.jsx("span",{children:i||e[0]}),f.jsx(eb,{isOpen:n})]})]}),n&&f.jsx(SD,{children:e.map((u,d)=>f.jsx("div",{onClick:()=>c(u),children:u},d))})]})},TD=Be.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-18px);
  }
`,d1=Be(gr)`
  height: 34px;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  /* &:focus ~ label {
    color: red;
  } */

  &::placeholder {
    opacity: 0;
  }
`;Be(gr)`
  height: 34px;
  padding-bottom: 14px;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  &::after {
    padding-bottom: 14px;
  }
`;const p1=Be.label`
  color: #f3f3f380;

  position: absolute;
  top: 0;
  left: 0;
`,m1=Be.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  &:focus > label {
    color: red;
  }
`,h1=Be.label`
  margin-left: 4px;
  color: #f3f3f380;

  &:first-of-type {
    margin-right: 14px;
  }
`,g1=Be(gr)`
  display: flex;
  justify-content: center;
  align-items: center;

  appearance: none;
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 16px;
  height: 16px;
  border: 1.5px solid #f3f3f380;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    border: 1.5px solid #fff;
  }

  label {
    color: #fff;
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #fff;
  }

  &:checked::before {
    transform: scale(1);
  }
`,AD=Be.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: #fff;
  }
`,ND=()=>{const e={category:["Ordinary Drink","Cocktail","Shake","Other/Unknown","Cocoa","Shot","Coffee/Tea","Homemade Liqueur","Punch/Party Drink","Beer","Soft Drink"],glass:["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"]};return f.jsxs(TD,{children:[f.jsxs(m1,{children:[f.jsx(p1,{htmlFor:"title",children:"Enter item title"}),f.jsx(d1,{name:"title",placeholder:"Enter item title"})]}),f.jsxs(m1,{children:[f.jsx(p1,{htmlFor:"recipe",children:"Enter about recipe"}),f.jsx(d1,{name:"recipe",placeholder:"Enter about recipe"})]}),f.jsx(f1,{items:e.category,title:"Category"}),f.jsx(f1,{items:e.glass,title:"Glass"}),f.jsxs(AD,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[f.jsxs("div",{children:[f.jsx(g1,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),f.jsx(h1,{htmlFor:"radioAlco",children:"Alcoholic"})]}),f.jsxs("div",{children:[f.jsx(g1,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),f.jsx(h1,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})},jD=D(gr)`
  display: block;
  width: 100%;
  height: 184px;
  padding: 16px 18px;

  color: #f3f3f380;

  background-color: transparent;
  border: 1px solid #f3f3f380;
  border-radius: 14px;
  outline: transparent;
  overflow: visible;

  &:focus {
    border: 1px solid #fff;
  }

  &::placeholder {
    overflow: visible;
    color: #f3f3f380;
  }

  &:focus::placeholder {
    position: absolute;
    top: -40px;

    z-index: 999;
  }

  &::-webkit-resizer {
    display: none;
  }
`,OD=D.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,DD=()=>f.jsxs(OD,{children:[f.jsx("h3",{children:"Recipe Preparation"}),f.jsx(jD,{name:"drinkRecipePreparation",placeholder:"Enter the recipe",as:"textarea"})]}),_D=D.button`
  padding: 14px 40px;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: #161f37;
  line-height: calc(18 / 14);

  background-color: #f3f3f3;
  border: none;
  border-radius: 42px;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:focus,
  &:hover {
    color: #f3f3f3;
    background-color: #161f37;
  }
`,PD=Ho(),MD={title:"TEST TITLE",recipe:"TEST RECIPE",category:"Other/Unknown",glass:"Whiskey Glass",alcoholicType:"Non-alcoholic",ingridients:[],file:""},RD=()=>{const e=t=>{t.id=sb(),console.log(t)};return f.jsx(su,{initialValues:MD,validationSchema:PD,onSubmit:e,children:({setFieldValue:t})=>f.jsxs(As,{children:[f.jsx("input",{width:200,height:200,type:"file",name:"file",onChange:n=>{t("file",n.currentTarget.files[0])}}),f.jsx(ND,{}),f.jsx(bD,{}),f.jsx(DD,{}),f.jsx(_D,{type:"submit",children:"Add"})]})})},al="/Drink_master/assets/temp-popular-drink-8c4845c4.png",ID=D.div`
  margin-bottom: 28px;

  h3 {
    margin-bottom: 28px;
  }

  h6 {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 500;
    line-height: calc(22 / 16);
    color: #f3f3f3;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul > li:not(:last-of-type) {
    margin-bottom: 24px;
  }

  li {
    display: flex;
  }

  li > img {
    margin-right: 14px;
  }

  p {
    max-height: 62px;
    color: #f3f3f380;

    text-overflow: ellipsis;
    overflow: hidden;
  }
`,$D=()=>{const e=[{imgLink:al,title:"Gin Lemon",descr:"A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."},{imgLink:al,title:"Gin Lemon",descr:"A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."},{imgLink:al,title:"Gin Lemon",descr:"A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."},{imgLink:al,title:"Gin Lemon",descr:"A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."}];return f.jsxs(ID,{children:[f.jsx("h3",{children:"Popular drinks"}),f.jsx("ul",{children:e.map(({imgLink:t,title:n,descr:r},i)=>f.jsxs("li",{children:[f.jsx("img",{src:t,width:90,height:90}),f.jsxs("div",{children:[f.jsx("h6",{children:n}),f.jsx("p",{children:r})]})]},i))})]})},LD=D.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,Df=D.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: 500ms linear;
  &:hover,
  &:focus {
    border: 1px solid rgba(64, 112, 205, 0.5);
    /* border: 1px solid rgba(221, 255, 0, 0.2); */
    background-color: #f3f3f3;
  }
  &:hover svg,
  &:focus svg {
    fill: #161f37;
  }
`,FD=()=>f.jsxs(LD,{children:[f.jsx("li",{children:f.jsx(Df,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-facebook`})})})}),f.jsx("li",{children:f.jsx(Df,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-instagram`})})})}),f.jsx("li",{children:f.jsx(Df,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:f.jsx(Pn,{size:"22px",size768:"28px",fill:"#f3f3f3",children:f.jsx("use",{href:`${Ft}#icon-youtube`})})})})]}),zD=()=>f.jsxs(dD,{children:[f.jsxs("div",{children:[f.jsx("h2",{children:"Add drink"}),f.jsx(RD,{})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"Follow us"}),f.jsx(FD,{})]}),f.jsx("div",{children:f.jsx($D,{})})]}),BD=D.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }
  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
  }
`,UD=D.section`
  color: #F3F3F3;
  padding: 80px 20px 80px 20px;
  @media (min-width: 768px) {
    padding: 140px 32px 140px 32px;
  }
  @media (min-width: 1440px) {
    padding: 140px 100px 140px 100px;
  }
`,WD=D.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 247px;
    justify-content: space-between;
  }
`,HD=D.div`
  width: 100%;
  height: 400px;
  max-width: 704px;
  object-fit: cover;
  overflow: hidden;
  background-color: grey;
  border-radius: 8px;
  @media (min-width: 1440px) {
    width: 400px;
  }
`,VD=D.p`
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;
  color: rgba(243, 243, 243, 0.50);
  /* color: rgba(22, 31, 55, 0.5); */
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,YD=D.p`
  font-size: 14px;
  font-style: normal;
  line-height: 1.25;
  margin-top: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
    max-width: 593px;
  }
`,XD=D.button`
color: #161F37;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.28;
border-radius: 42px;
background: #F3F3F3;
padding: 14px 40px;
margin-top: 40px;
@media (min-width: 768px) {
   padding: 18px 44px;
   font-size: 16px;
   line-height: 1.12;
  }
`,QD=D.h2`
color: rgba(243, 243, 243, 0.50);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.25;
margin-top: 20px;
 @media (min-width: 768px) {
    margin-top: 80px;
  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`,KD=D.h2`
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 1.14;
margin-top: 80px;
@media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;

  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }

`,GD=D.div`
    display: flex;
    flex-direction: column;
    gap: 40px;    
    margin-top: 40px; 
  
  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 60px;
    justify-content: space-between;
    margin-top: 60px;  
  }
`,qD=D.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
@media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
  @media (min-width: 1440px) {
  width: 549px;   
  }
`,JD=D.div`    
  /* width: 100%;  */
  height: 430px;
  max-width: 704px;
  object-fit: cover;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  background-color: grey;
  border-radius: 8px;
@media (min-width: 768px) {
    width: 704px;
  };
  @media (min-width: 1440px) {
  width: 631px; 
  height: 480px;
  }
`,ZD=D.ul`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  margin-top: 42px;
  list-style: none;
  @media (min-width: 768px) {
    margin-top: 24px;
    gap: 35px;
  }
`,e9=D.div`
  width: 157px;
  height: 157px;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  object-fit: cover;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,t9=D.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 14px;
  }
`,n9=D.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`,r9=D.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,i9=({data:e})=>f.jsx(ZD,{children:e.map(({title:t,measure:n,src:r})=>f.jsxs("li",{children:[f.jsx(e9,{children:f.jsx("img",{src:r||"http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries-Small.png",alt:t,loading:"lazy",style:{display:"block",width:"100%",height:"auto"}})}),f.jsxs(t9,{children:[f.jsx(n9,{children:t}),f.jsx(r9,{children:n||" "})]})]},t))}),o9="/Drink_master/assets/coctails-mob-18ca057d.jpg",a9="/Drink_master/assets/coctails-mob@2x-7b6104ad.jpg",s9="/Drink_master/assets/coctails-tablet-9bb53f5b.jpg",l9="/Drink_master/assets/coctails-tablet@2x-6bd5ea57.jpg",c9="/Drink_master/assets/coctails-pc-0e4dd42f.jpg",u9="/Drink_master/assets/coctails-pc@2x-4b5efb24.jpg",f9=()=>f.jsxs("picture",{children:[f.jsx("source",{media:"(min-width: 1440px)",srcSet:`${c9} 1x, ${u9}`,type:"image/jpeg"}),f.jsx("source",{media:"(min-width: 768px)",srcSet:`${s9} 1x, ${l9} 2x`,type:"image/jpeg"}),f.jsx("img",{srcSet:a9,src:o9,alt:"picture",loading:"lazy"})]}),d9=()=>{const[e,t]=k.useState(null),[n,r]=k.useState(!1),[i,o]=k.useState(null),{drinkId:a}=R1();return k.useEffect(()=>{const s=new AbortController;(async()=>{try{r(!0);const c=await SO(a,s),{data:u}=c;t(u)}catch(c){o(c.message)}finally{r(!1),s.abort()}})()},[a]),{drinkInfo:e,isLoading:n,error:i}},p9=()=>{const{drinkInfo:e,isLoading:t,error:n}=d9(),{drinkId:r}=R1();function i(){CO(r)}return f.jsxs(UD,{children:[n&&f.jsx("h1",{children:"Error!!!"}),t&&f.jsx(yu,{}),e&&f.jsxs(f.Fragment,{children:[f.jsxs(WD,{children:[f.jsxs("div",{children:[f.jsx(BD,{children:e.drink}),f.jsxs(VD,{children:[e.glass," / ",e.alcoholic]}),f.jsx(YD,{children:e.description}),f.jsx(XD,{type:"button",onClick:i,children:"Add to favorite drinks"})]}),f.jsx(HD,{children:f.jsx("img",{src:e.drinkThumb,alt:e.drink,style:{display:"block",width:"100%",height:"auto"}})})]}),f.jsx(QD,{children:"Ingredients"}),f.jsx(i9,{data:e.ingredients}),f.jsx(KD,{children:"Recipe Preparation"}),f.jsxs(GD,{children:[f.jsx(qD,{children:e.instructionsUK}),f.jsx(JD,{children:f.jsx(f9,{})})]})]})]})},m9="";function h9(){return console.log(m9),f.jsxs(XO,{children:[f.jsx(QO,{}),f.jsxs(I2,{children:[f.jsx(Zt,{path:"/start",element:f.jsx(UN,{})}),f.jsx(Zt,{path:mt.REGISTRATION,element:f.jsx(g7,{})}),f.jsx(Zt,{path:mt.LOGIN,element:f.jsx(Sj,{})}),f.jsxs(Zt,{path:mt.HOME,element:f.jsx(IN,{}),children:[f.jsx(Zt,{index:!0,element:f.jsx(fD,{})}),f.jsx(Zt,{path:mt.DRINKS,element:f.jsx(DO,{})}),f.jsx(Zt,{path:mt.ABOUTDRINK,element:f.jsx(p9,{})}),f.jsx(Zt,{path:mt.ADDDRINK,element:f.jsx(zD,{})}),f.jsx(Zt,{path:mt.MYDRINKS,element:f.jsx(VO,{})}),f.jsx(Zt,{path:mt.FAVORITE,element:f.jsx(WO,{})}),f.jsx(Zt,{path:"/dropdown",element:f.jsx(vv,{})}),f.jsx(Zt,{path:mt.ERROR,element:f.jsx(lb,{})})]})]})]})}If.createRoot(document.getElementById("root")).render(f.jsx(me.StrictMode,{children:f.jsx(W2,{basename:"/Drink_master",children:f.jsx(h9,{})})}))});export default g9();

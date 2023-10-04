import{r as ge,d as de,g as fe,s as le,j as U,f as se}from"./index-eead079f.js";const ye=()=>{const F=new URLSearchParams(window.location.search),K={};for(const[H,B]of F.entries())K[H]=B;return K};var ce={exports:{}};(function(F,K){(function(H,B){F.exports=B(ge)})(de,H=>(()=>{var B={703:(p,g,y)=>{var a=y(414);function q(){}function Z(){}Z.resetWarningCache=q,p.exports=function(){function m(ne,O,G,V,ie,Y){if(Y!==a){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}}function N(){return m}m.isRequired=m;var M={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:N,element:m,elementType:m,instanceOf:N,node:m,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:Z,resetWarningCache:q};return M.PropTypes=M,M}},697:(p,g,y)=>{p.exports=y(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=H}},z={};function v(p){var g=z[p];if(g!==void 0)return g.exports;var y=z[p]={exports:{}};return B[p](y,y.exports,v),y.exports}v.n=p=>{var g=p&&p.__esModule?()=>p.default:()=>p;return v.d(g,{a:g}),g},v.d=(p,g)=>{for(var y in g)v.o(g,y)&&!v.o(p,y)&&Object.defineProperty(p,y,{enumerable:!0,get:g[y]})},v.o=(p,g)=>Object.prototype.hasOwnProperty.call(p,g),v.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var W={};return(()=>{v.r(W),v.d(W,{default:()=>pe});var p=v(98),g=v.n(p),y=v(697),a=v.n(y);function q(){return q=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},q.apply(this,arguments)}var Z=function(r){var i=r.pageClassName,o=r.pageLinkClassName,l=r.page,D=r.selected,_=r.activeClassName,w=r.activeLinkClassName,t=r.getEventListener,e=r.pageSelectedHandler,u=r.href,n=r.extraAriaContext,s=r.pageLabelBuilder,c=r.rel,f=r.ariaLabel||"Page "+l+(n?" "+n:""),h=null;return D&&(h="page",f=r.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+_:_,o!==void 0?w!==void 0&&(o=o+" "+w):o=w),g().createElement("li",{className:i},g().createElement("a",q({rel:c,role:u?void 0:"button",className:o,href:u,tabIndex:D?"-1":"0","aria-label":f,"aria-current":h,onKeyPress:e},t(e)),s(l)))};Z.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const m=Z;function N(){return N=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},N.apply(this,arguments)}var M=function(r){var i=r.breakLabel,o=r.breakAriaLabel,l=r.breakClassName,D=r.breakLinkClassName,_=r.breakHandler,w=r.getEventListener,t=l||"break";return g().createElement("li",{className:t},g().createElement("a",N({className:D,role:"button",tabIndex:"0","aria-label":o,onKeyPress:_},w(_)),i))};M.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const ne=M;function O(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function G(r){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},G(r)}function V(){return V=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},V.apply(this,arguments)}function ie(r,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function Y(r,i){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},Y(r,i)}function Q(r,i){if(i&&(G(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(r)}function P(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function X(r){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},X(r)}function x(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var te=function(r){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)})(w,r);var i,o,l,D,_=(l=w,D=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=X(l);if(D){var u=X(this).constructor;t=Reflect.construct(e,arguments,u)}else t=e.apply(this,arguments);return Q(this,t)});function w(t){var e,u;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,w),x(P(e=_.call(this,t)),"handlePreviousPage",function(n){var s=e.state.selected;e.handleClick(n,null,s>0?s-1:void 0,{isPrevious:!0})}),x(P(e),"handleNextPage",function(n){var s=e.state.selected,c=e.props.pageCount;e.handleClick(n,null,s<c-1?s+1:void 0,{isNext:!0})}),x(P(e),"handlePageSelected",function(n,s){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,n)}),x(P(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),x(P(e),"getEventListener",function(n){return x({},e.props.eventListener,n)}),x(P(e),"handleClick",function(n,s,c){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=f.isPrevious,E=h!==void 0&&h,J=f.isNext,$=J!==void 0&&J,I=f.isBreak,k=I!==void 0&&I,R=f.isActive,j=R!==void 0&&R;n.preventDefault?n.preventDefault():n.returnValue=!1;var A=e.state.selected,d=e.props.onClick,L=c;if(d){var C=d({index:s,selected:A,nextSelectedPage:c,event:n,isPrevious:E,isNext:$,isBreak:k,isActive:j});if(C===!1)return;Number.isInteger(C)&&(L=C)}L!==void 0&&e.handlePageChange(L)}),x(P(e),"handleBreakClick",function(n,s){var c=e.state.selected;e.handleClick(s,n,c<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),x(P(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),x(P(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),x(P(e),"getElementPageRel",function(n){var s=e.state.selected,c=e.props,f=c.nextPageRel,h=c.prevPageRel,E=c.selectedPageRel;return s-1===n?h:s===n?E:s+1===n?f:void 0}),x(P(e),"pagination",function(){var n=[],s=e.props,c=s.pageRangeDisplayed,f=s.pageCount,h=s.marginPagesDisplayed,E=s.breakLabel,J=s.breakClassName,$=s.breakLinkClassName,I=s.breakAriaLabels,k=e.state.selected;if(f<=c)for(var R=0;R<f;R++)n.push(e.getPageElement(R));else{var j=c/2,A=c-j;k>f-c/2?j=c-(A=f-k):k<c/2&&(A=c-(j=k));var d,L,C=function(T){return e.getPageElement(T)},b=[];for(d=0;d<f;d++){var ee=d+1;if(ee<=h)b.push({type:"page",index:d,display:C(d)});else if(ee>f-h)b.push({type:"page",index:d,display:C(d)});else if(d>=k-j&&d<=k+(k===0&&c>1?A-1:A))b.push({type:"page",index:d,display:C(d)});else if(E&&b.length>0&&b[b.length-1].display!==L&&(c>0||h>0)){var re=d<k?I.backward:I.forward;L=g().createElement(ne,{key:d,breakAriaLabel:re,breakLabel:E,breakClassName:J,breakLinkClassName:$,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),b.push({type:"break",index:d,display:L})}}b.forEach(function(T,S){var ae=T;T.type==="break"&&b[S-1]&&b[S-1].type==="page"&&b[S+1]&&b[S+1].type==="page"&&b[S+1].index-b[S-1].index<=2&&(ae={type:"page",index:T.index,display:C(T.index)}),n.push(ae.display)})}return n}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:u},e}return i=w,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,u=t.disableInitialCallback,n=t.extraAriaContext,s=t.pageCount,c=t.forcePage;e===void 0||u||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),c!==void 0&&c>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(c," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,u=e.pageCount,n=t+e.pageRangeDisplayed;return n>=u?u-1:n}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,u=e.hrefBuilder,n=e.pageCount,s=e.hrefAllControls;if(u)return s||t>=0&&t<n?u(t+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var u=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(t){var e=this.state.selected,u=this.props,n=u.pageClassName,s=u.pageLinkClassName,c=u.activeClassName,f=u.activeLinkClassName,h=u.extraAriaContext,E=u.pageLabelBuilder;return g().createElement(m,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:n,pageLinkClassName:s,activeClassName:c,activeLinkClassName:f,extraAriaContext:h,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,u=e.disabledClassName,n=e.disabledLinkClassName,s=e.pageCount,c=e.className,f=e.containerClassName,h=e.previousLabel,E=e.previousClassName,J=e.previousLinkClassName,$=e.previousAriaLabel,I=e.prevRel,k=e.nextLabel,R=e.nextClassName,j=e.nextLinkClassName,A=e.nextAriaLabel,d=e.nextRel,L=this.state.selected,C=L===0,b=L===s-1,ee="".concat(O(E)).concat(C?" ".concat(O(u)):""),re="".concat(O(R)).concat(b?" ".concat(O(u)):""),T="".concat(O(J)).concat(C?" ".concat(O(n)):""),S="".concat(O(j)).concat(b?" ".concat(O(n)):""),ae=C?"true":"false",ue=b?"true":"false";return g().createElement("ul",{className:c||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:ee},g().createElement("a",V({className:T,href:this.getElementHref(L-1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ae,"aria-label":$,rel:I},this.getEventListener(this.handlePreviousPage)),h)),this.pagination(),g().createElement("li",{className:re},g().createElement("a",V({className:S,href:this.getElementHref(L+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ue,"aria-label":A,rel:d},this.getEventListener(this.handleNextPage)),k)))}}])&&ie(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),w}(p.Component);x(te,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),x(te,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const pe=te})(),W})())})(ce);var be=ce.exports;const me=fe(be),ve=le(me).attrs({activeClassName:"active"})`
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    padding: 14px 24px;
    margin-top: 80px;
  }

  li {
    width: 27px;
    height: 27px;
    &:not(:nth-child(-n + 2)) {
      margin-left: 24px;
    }
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    color: var(--text-color);
    cursor: pointer;
  }

  li.previous {
    margin-right: 48px;

    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }

  li.next {
    margin-left: 48px;

    @media screen and (min-width: 768px) {
      margin-left: 40px;
    }
  }

  li.previous a,
  li.next a,
  li.break a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.active a {
    background-color: var(--pagination-background-color);
    color: #f3f3f3;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a{
    cursor: default;
  }

  li.disabled a svg{
    &:hover,
    &:focus,
    &:active{
      fill: var(--pagination-array-color)
    }
    
  }
`,oe=le.svg`
  width: 8px;
  height: 15px;
  fill: var(--pagination-array-color);
  transition:
    fill 200ms linear;

  &:hover,
  &:focus,
  &:active{
    fill: var(--text-color);
  }
`,xe=({limit:F,currentPage:K,itemsLength:H,handlePageChange:B,pageRangeDisplayed:z})=>{const v=Math.ceil(H/F),W=({selected:p})=>{B(p),window.scrollTo({top:0,behavior:"smooth"})};return U.jsx("div",{children:U.jsx(ve,{previousLabel:U.jsx(oe,{children:U.jsx("use",{href:`${se}#icon-paginateLeft`})}),nextLabel:U.jsx(oe,{children:U.jsx("use",{href:`${se}#icon-paginateRight`})}),pageCount:v,onPageChange:W,forcePage:K,renderOnZeroPageCount:null,breakLabel:"...",pageRangeDisplayed:z,marginPagesDisplayed:1})})};export{xe as P,ye as g};

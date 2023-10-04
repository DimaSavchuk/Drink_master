import{s as d,d as O,g as M,e as P,r as x,j as t,f as A,b as D,h as F,i as V,k as q,l as _,u as G,c as H,C as X}from"./index-eead079f.js";import{C as J}from"./CocktailCard-8cc69319.js";import{A as K}from"./SelectOpenArrow.styled-0ece1c25.js";import{g as T,P as Q}from"./Paginator-c72c6d62.js";import{I as Y}from"./InfoComponent-30387cdf.js";import{L as Z}from"./LittleLoading-a4402ff3.js";import"./asr_blue_iced_tea_mobile@2x-e4321999.js";import"./LittleLoading.styled-37960483.js";const ee=d.div`
  position: relative;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  width: 335px;
  height: 54px;
  background-color: #161f37;
  border-radius: 200px;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 56px;
    padding: 14px 24px;
  }
`;d.p`
  color: #f3f3f3;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`;d.svg`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  transform: ${({open:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`;const te=d.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 335px;
  max-height: ${({height:e})=>e||""};
  overflow-y: ${({height:e})=>e?"scroll":"visible"};
  overflow-x: hidden;
  padding: 18px 24px;
  background-color: var(--select-list-color);
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 110px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: var(--scroll-color);
  }

  &::-webkit-scrollbar-track {
    margin-block: 12px;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 14px 24px;
  }
`,ne=d.button`
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: var(--see-more-link-color);
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 1.29;
  text-align: start;
  transition: border-bottom 300ms linear;

  &:hover,
  &:focus,
  &:active {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`,re=d.p`
  color: var(--text-color);
`,ie=d.li`
  width: 100%;
  /* margin-bottom: 10px; */
`,oe=d.input`
  /* width: 100%;
  height: 35px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-input-color);
  opacity: 0.8;
  padding: 0 12px;

  font-size: 14px;
  line-height: 1.29;
  color: var(--text-color);
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  display: block;
  padding: 4px;

  /* margin-bottom: 8px; */

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-style: none;
  background-color: var(--button-hover-color);
  border-bottom: 1px solid #f3f3f311;

  &:focus {
    color: var(--text-color);
    outline: transparent;
  }

  &::placeholder {
    color: var(--see-more-link-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`,ae=e=>e.filters.categories,se=e=>e.filters.ingredients,ce=e=>e.filters.isLoading;var U="Expected a function",$=0/0,le="[object Symbol]",de=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,xe=parseInt,ue=typeof O=="object"&&O&&O.Object===Object&&O,fe=typeof self=="object"&&self&&self.Object===Object&&self,me=ue||fe||Function("return this")(),be=Object.prototype,we=be.toString,ve=Math.max,ye=Math.min,z=function(){return me.Date.now()};function je(e,r,i){var l,s,w,g,o,c,p=0,u=!1,a=!1,f=!0;if(typeof e!="function")throw new TypeError(U);r=N(r)||0,E(i)&&(u=!!i.leading,a="maxWait"in i,w=a?ve(N(i.maxWait)||0,r):w,f="trailing"in i?!!i.trailing:f);function S(n){var b=l,I=s;return l=s=void 0,p=n,g=e.apply(I,b),g}function C(n){return p=n,o=setTimeout(v,r),u?S(n):g}function j(n){var b=n-c,I=n-p,R=r-b;return a?ye(R,w-I):R}function L(n){var b=n-c,I=n-p;return c===void 0||b>=r||b<0||a&&I>=w}function v(){var n=z();if(L(n))return k(n);o=setTimeout(v,j(n))}function k(n){return o=void 0,f&&l?S(n):(l=s=void 0,g)}function h(){o!==void 0&&clearTimeout(o),p=0,l=c=s=o=void 0}function m(){return o===void 0?g:k(z())}function y(){var n=z(),b=L(n);if(l=arguments,s=this,c=n,b){if(o===void 0)return C(c);if(a)return o=setTimeout(v,r),S(c)}return o===void 0&&(o=setTimeout(v,r)),g}return y.cancel=h,y.flush=m,y}function ke(e,r,i){var l=!0,s=!0;if(typeof e!="function")throw new TypeError(U);return E(i)&&(l="leading"in i?!!i.leading:l,s="trailing"in i?!!i.trailing:s),je(e,r,{leading:l,maxWait:r,trailing:s})}function E(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Se(e){return!!e&&typeof e=="object"}function Ce(e){return typeof e=="symbol"||Se(e)&&we.call(e)==le}function N(e){if(typeof e=="number")return e;if(Ce(e))return $;if(E(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=E(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(de,"");var i=he.test(e);return i||ge.test(e)?xe(e.slice(2),i?2:8):pe.test(e)?$:+e}var Le=ke;const Ie=M(Le),Pe=({handleSelect:e,height:r,items:i})=>{const l=P(ce),[s,w]=x.useState(""),[g,o]=x.useState([]);x.useEffect(()=>{o(i)},[i]);const c=Ie(p=>{const u=p.target.value;w(u);const a=i.filter(f=>f.toLowerCase().includes(u.toLowerCase()));o(a)},500);return t.jsx(te,{onClick:e,height:r,children:l?t.jsx(re,{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(ie,{children:t.jsx(oe,{value:s,onChange:c,placeholder:"Search..."})}),g.map(p=>t.jsx("li",{children:t.jsx(ne,{children:p})},p))]})})},Oe=({isOpen:e})=>t.jsx(K,{open:e,children:t.jsx("use",{href:`${A}#icon-chevron-down-black`})}),Te=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  width: 335px;
  height: 54px;
  background-color: #161f37;
  border-radius: 200px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243);
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 56px;
    padding: 14px 24px;
  }
`,Ee=d.p`
  color: #f3f3f3;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`,ze=({handleControlClick:e,selectedOption:r,isOpen:i})=>t.jsxs(Te,{onClick:e,children:[t.jsx(Ee,{children:r}),t.jsx(Oe,{isOpen:i})]}),B=({items:e,placeholder:r,height:i,onSelect:l})=>{const[s,w]=x.useState(r),[g,o]=x.useState(!1),c=x.useRef(null),p=()=>{o(a=>!a)},u=a=>{a.target.tagName==="BUTTON"&&(w(a.target.textContent),l(a.target.textContent),p())};return x.useEffect(()=>{const a=f=>{c.current&&!c.current.contains(f.target)&&o(!1)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[]),t.jsxs(ee,{ref:c,children:[t.jsx(ze,{handleControlClick:p,selectedOption:s,isOpen:g}),g&&t.jsx(Pe,{handleSelect:u,height:i,items:e})]})},Re=d.div`
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
`,$e=d.form`
  position: relative;
  display: inline-block;
`,Ne=d.button`
  position: absolute;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 18px;
  right: 24px;
`,Be=d.input`
  padding: 0 24px;
  width: 335px;
  height: 54px;
  border-radius: 200px;
  background-color: transparent;
  border: 1px solid var(--border-input-color);
  opacity: 0.8;
  font-size: 17px;
  line-height: 1.56;
  color: var(--text-color);
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  &::placeholder {
    color: var(--text-color);
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`,We=d.svg`
  stroke:var(--text-color);
  width: 20px;
  height: 20px;
`,Ae=({shouldRenderBtn:e,page:r,limit:i,updPage:l})=>{const s=D(),[w,g]=F(),o=P(ae),c=P(se),p=c.map(h=>h.title),{cocktailName:u,categoryName:a,ingredientName:f}=T(),[S,C]=x.useState(u||"");x.useEffect(()=>{o.length||s(V()),c.length||s(q())},[o.length,c.length,s]),x.useEffect(()=>{(async()=>{const m={};u&&(m.drink=u),a&&(m.category=a),f&&(m["ingredients.title"]=f),m.page=r,m.limit=i,s(_(m))})()},[w,u,a,f,r,i,s]);const j=(h,m,y)=>{const n=T();m!==y?n[h]=m:delete n[h],n.page&&(n.page=1),l(0);const b=new URLSearchParams(n).toString();window.history.pushState({},"",`?${b}`),g(n)},L=h=>{h.preventDefault();const y=h.currentTarget.elements.query.value.trim();j("cocktailName",y,"")},v=h=>{j("categoryName",h,"All categories")},k=h=>{j("ingredientName",h,"All ingredients")};return t.jsxs(Re,{children:[t.jsxs($e,{onSubmit:L,children:[t.jsx("label",{children:t.jsx(Be,{type:"text",placeholder:"Enter the text",name:"query",value:S,onChange:h=>C(h.target.value)})}),e&&t.jsx(Ne,{type:"submit",children:t.jsx(We,{children:t.jsx("use",{href:`${A}#icon-search`})})})]}),t.jsx(B,{items:o,placeholder:a||"All categories",height:"405px",onSelect:v}),t.jsx(B,{items:p,placeholder:f||"All ingredients",height:"295px",onSelect:k})]})},De=d.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.071;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`,Fe=({children:e})=>t.jsx(De,{children:e}),Ue=e=>e.cocktails.cocktails,Me=e=>e.cocktails.totalCocktails,Ve=e=>e.cocktails.isLoading,qe=d.section`
  overflow: hidden;
  max-width: 100%;
  padding-top: 152px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 224px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 244px;
  }
`,W=d.div`
  margin-top: 40px;
`,_e=d.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
    row-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 80px;
  }
`,Ge=()=>{const[e,r]=F(),i=e.get("page")?Number(e.get("page"))-1:0,l=P(Ue),s=P(Me),w=P(Ve),[g,o]=x.useState(i),[c,p]=x.useState(9),[u,a]=x.useState(3),f=T(),[S,C]=x.useState(!1),j=g+1>Math.ceil(s/c),L=G(),v=D();x.useEffect(()=>{const n=new URLSearchParams(f).toString();v(H(`${L.pathname}?${n}`))},[v,L,f]);const k=()=>{window.innerWidth>=1440?(p(9),C(!0),a(6)):window.innerWidth>=768?(p(10),C(!0)):(p(10),a(3),C(!1))};x.useEffect(()=>(k(),window.addEventListener("resize",k),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",k)}),[]);const h=n=>{const b=T();b.page=n;const I=new URLSearchParams(b).toString();window.history.pushState({},"",`?${I}`),r(b)},m=l.slice(0,c).map(n=>t.jsx("li",{children:t.jsx(J,{data:n})},n._id)),y=n=>{h(n+1),o(n)};return t.jsx(qe,{children:t.jsxs(X,{children:[t.jsx(Fe,{children:"Drinks"}),t.jsx(Ae,{page:g+1,limit:c,shouldRenderBtn:S,updPage:o}),w?t.jsx(Z,{}):l.length>0&&!j&&t.jsxs(W,{children:[t.jsx(_e,{children:m}),s>c&&t.jsx(Q,{limit:c,currentPage:g,itemsLength:s,handlePageChange:y,pageRangeDisplayed:u})]}),!w&&(j||l.length===0)&&t.jsx(W,{children:t.jsx(Y,{children:"We didn`t find anything by your request or some error occured."})})]})})},tt=()=>t.jsx(Ge,{});export{tt as default};

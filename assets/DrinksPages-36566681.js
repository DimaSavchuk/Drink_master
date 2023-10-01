import{s as p,d as O,g as M,e as S,r as g,j as t,f as A,b as D,h as F,i as V,k as _,l as G,C as H,a as X,u as J,c as K}from"./index-d9fde066.js";import{C as Q}from"./CocktailCard-a444fb00.js";import{A as Y}from"./SelectOpenArrow.styled-6a186142.js";import{P as Z}from"./Paginator-32dd3471.js";import{I as ee}from"./InfoComponent-e72ff818.js";import"./asr_blue_iced_tea_mobile@2x-e4321999.js";const te=p.div`
  position: relative;
`;p.div`
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
`;p.p`
  color: #f3f3f3;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`;p.svg`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  transform: ${({open:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`;const ne=p.ul`
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
`,ie=p.button`
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 1.29;
  text-align: start;
  transition:
    border-bottom 300ms linear;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 1px solid var(--see-more-link-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`,re=p.p`
  color: var(--text-color);
`,oe=p.li`
  width: 100%;
  margin-bottom: 10px;
`,ae=p.input`
  width: 100%;
  height: 35px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-input-color);
  opacity: 0.8;
  padding: 0 12px;

  font-size:14px;
  line-height: 1.29;
  color: var(--text-color);
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: var(--text-color);
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`,se=e=>e.filters.categories,ce=e=>e.filters.ingredients,U=e=>e.filters.isLoading;var q="Expected a function",N=0/0,le="[object Symbol]",de=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,xe=parseInt,ge=typeof O=="object"&&O&&O.Object===Object&&O,fe=typeof self=="object"&&self&&self.Object===Object&&self,me=ge||fe||Function("return this")(),be=Object.prototype,we=be.toString,ye=Math.max,ve=Math.min,E=function(){return me.Date.now()};function je(e,n,i){var d,c,b,u,o,l,h=0,f=!1,a=!1,m=!0;if(typeof e!="function")throw new TypeError(q);n=B(n)||0,T(i)&&(f=!!i.leading,a="maxWait"in i,b=a?ye(B(i.maxWait)||0,n):b,m="trailing"in i?!!i.trailing:m);function y(r){var w=d,P=c;return d=c=void 0,h=r,u=e.apply(P,w),u}function C(r){return h=r,o=setTimeout(k,n),f?y(r):u}function v(r){var w=r-l,P=r-h,R=n-w;return a?ve(R,b-P):R}function I(r){var w=r-l,P=r-h;return l===void 0||w>=n||w<0||a&&P>=b}function k(){var r=E();if(I(r))return L(r);o=setTimeout(k,v(r))}function L(r){return o=void 0,m&&d?y(r):(d=c=void 0,u)}function s(){o!==void 0&&clearTimeout(o),h=0,d=l=c=o=void 0}function x(){return o===void 0?u:L(E())}function j(){var r=E(),w=I(r);if(d=arguments,c=this,l=r,w){if(o===void 0)return C(l);if(a)return o=setTimeout(k,n),y(l)}return o===void 0&&(o=setTimeout(k,n)),u}return j.cancel=s,j.flush=x,j}function ke(e,n,i){var d=!0,c=!0;if(typeof e!="function")throw new TypeError(q);return T(i)&&(d="leading"in i?!!i.leading:d,c="trailing"in i?!!i.trailing:c),je(e,n,{leading:d,maxWait:n,trailing:c})}function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Se(e){return!!e&&typeof e=="object"}function Ce(e){return typeof e=="symbol"||Se(e)&&we.call(e)==le}function B(e){if(typeof e=="number")return e;if(Ce(e))return N;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(de,"");var i=he.test(e);return i||ue.test(e)?xe(e.slice(2),i?2:8):pe.test(e)?N:+e}var Ie=ke;const Le=M(Ie),Pe=({handleSelect:e,height:n,items:i})=>{const d=S(U),[c,b]=g.useState(""),[u,o]=g.useState([]);g.useEffect(()=>{o(i)},[i]);const l=Le(h=>{const f=h.target.value;b(f);const a=i.filter(m=>m.toLowerCase().includes(f.toLowerCase()));o(a)},500);return t.jsx(ne,{onClick:e,height:n,children:d?t.jsx(re,{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(oe,{children:t.jsx(ae,{value:c,onChange:l,placeholder:"Search..."})}),u.map(h=>t.jsx("li",{children:t.jsx(ie,{children:h})},h))]})})},Oe=({isOpen:e})=>t.jsx(Y,{open:e,children:t.jsx("use",{href:`${A}#icon-chevron-down-black`})}),Te=p.div`
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
`,Ee=p.p`
  color: #f3f3f3;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`,ze=({handleControlClick:e,selectedOption:n,isOpen:i})=>t.jsxs(Te,{onClick:e,children:[t.jsx(Ee,{children:n}),t.jsx(Oe,{isOpen:i})]}),$=({items:e,placeholder:n,height:i,onSelect:d})=>{const[c,b]=g.useState(n),[u,o]=g.useState(!1),l=g.useRef(null),h=()=>{o(a=>!a)},f=a=>{a.target.tagName==="BUTTON"&&(b(a.target.textContent),d(a.target.textContent),h())};return g.useEffect(()=>{const a=m=>{l.current&&!l.current.contains(m.target)&&o(!1)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[]),t.jsxs(te,{ref:l,children:[t.jsx(ze,{handleControlClick:h,selectedOption:c,isOpen:u}),u&&t.jsx(Pe,{handleSelect:f,height:i,items:e})]})},Re=p.div`
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
`,Ne=p.form`
  position: relative;
  display: inline-block;
`,Be=p.button`
  position: absolute;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 18px;
  right: 24px;
`,$e=p.input`
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
`,We=p.svg`
  stroke:var(--text-color);
  width: 20px;
  height: 20px;
`,z=()=>{const e=new URLSearchParams(window.location.search),n={};for(const[i,d]of e.entries())n[i]=d;return n},Ae=({shouldRenderBtn:e,page:n,limit:i,updPage:d})=>{const c=D(),[b,u]=F(),o=S(se),l=S(ce);S(U);const h=l.map(s=>s.title),{cocktailName:f,categoryName:a,ingredientName:m}=z(),[y,C]=g.useState(f||"");g.useEffect(()=>{o.length||c(V()),l.length||c(_())},[o.length,l.length,c]),g.useEffect(()=>{(async()=>{const x={};f&&(x.drink=f),a&&(x.category=a),m&&(x["ingredients.title"]=m),x.page=n,x.limit=i,c(G(x))})()},[b,f,a,m,n,i,c]);const v=(s,x,j)=>{const r=z();x!==j?r[s]=x:delete r[s],r.page&&(r.page=1),d(0);const w=new URLSearchParams(r).toString();window.history.pushState({},"",`?${w}`),u(r)},I=s=>{s.preventDefault();const j=s.currentTarget.elements.query.value.trim();v("cocktailName",j,"")},k=s=>{v("categoryName",s,"All categories")},L=s=>{v("ingredientName",s,"All ingredients")};return t.jsxs(Re,{children:[t.jsxs(Ne,{onSubmit:I,children:[t.jsx("label",{children:t.jsx($e,{type:"text",placeholder:"Enter the text",name:"query",value:y,onChange:s=>C(s.target.value)})}),e&&t.jsx(Be,{type:"submit",children:t.jsx(We,{children:t.jsx("use",{href:`${A}#icon-search`})})})]}),t.jsx($,{items:o,placeholder:a||"All categories",height:"405px",onSelect:k}),t.jsx($,{items:h,placeholder:m||"All ingredients",height:"295px",onSelect:L})]})},De=p.h2`
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
`,Fe=({children:e})=>t.jsx(De,{children:e}),Ue=e=>e.cocktails.cocktails,qe=e=>e.cocktails.totalCocktails,Me=e=>e.cocktails.isLoading,Ve=p.section`
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
`,W=p.div`
  margin-top: 40px;
`,_e=p.ul`
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
`,Ge=()=>{const[e,n]=F(),i=e.get("page")?Number(e.get("page"))-1:0,d=S(Ue),c=S(qe),b=S(Me),[u,o]=g.useState(i),[l,h]=g.useState(9),[f,a]=g.useState(3),[m,y]=g.useState(!1),C=u+1>Math.ceil(c/l),v=()=>{window.innerWidth>=1440?(h(9),y(!0),a(6)):window.innerWidth>=768?(h(10),y(!0)):(h(10),a(3),y(!1))};g.useEffect(()=>(v(),window.addEventListener("resize",v),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",v)}),[]);const I=s=>{const x=z();x.page=s;const j=new URLSearchParams(x).toString();window.history.pushState({},"",`?${j}`),n(x)},k=d.slice(0,l).map(s=>t.jsx("li",{children:t.jsx(Q,{data:s})},s.id)),L=s=>{I(s+1),o(s)};return t.jsx(Ve,{children:t.jsxs(H,{children:[t.jsx(Fe,{children:"Drinks"}),t.jsx(Ae,{page:u+1,limit:l,shouldRenderBtn:m,updPage:o}),b?t.jsx(X,{}):d.length>0&&!C&&t.jsxs(W,{children:[t.jsx(_e,{children:k}),c>l&&t.jsx(Z,{limit:l,currentPage:u,itemsLength:c,handlePageChange:L,pageRangeDisplayed:f})]}),!b&&(C||d.length===0)&&t.jsx(W,{children:t.jsx(ee,{children:"We didn`t find anything by your request or some error occured."})})]})})},Ze=()=>{const e=J(),n=D();return g.useEffect(()=>{n(K(e.pathname))},[n]),t.jsx(Ge,{})};export{Ze as default};

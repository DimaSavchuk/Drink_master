import{s as a,N as m,j as r,H as x}from"./index-eead079f.js";import{p as h,a as g}from"./InfoComponent-30387cdf.js";import{d as w,i as f,j as b,k as u}from"./axiosConfig-59bdbc45.js";const L=a.section`
  padding: 152px 0;
  @media (min-width: 768px) {
    padding: 224px 0;
  }
  @media (min-width: 1440px) {
    padding-top: 244px;
  }
`,M=a.h1`
  margin-bottom: 40px;

  color: var(--link-color);
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
`;a.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;a.p`
  width: 236px;
  margin-top: 32px;
  margin-bottom: 0;
  text-align: center;
  color: var(--link-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42;
`;a.div`
  margin: 0 auto;
`;const R=a.ul`
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
`,k=a.div``,v=a.img`
  margin-bottom: 18px;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,y=a.h2`
  margin-bottom: 4px;

  color: var(--link-color);
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
`,j=a.p`
  margin-bottom: 18px;

  color: var(--link-color);
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
`,D=a.p`
  margin-bottom: 18px;

  color: var(--link-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.18;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 3.7em;
  text-overflow: ellipsis; 
  white-space: normal;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
  }
`,z=a.div`
  display: flex;
`,C=a(m)`
  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  gap: 10px;
  border-radius: 42px;
  background: var(--button-color);

  color: var(--button-hover-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  &:hover {
    background: var(--button-hover-color);
    color: var(--button-color);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }
`,F=a.button`
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  background: var(--button-color);

  color: var(--button-hover-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  &:hover {
    background: var(--button-hover-color);
    color: var(--button-color);
  }
`,W=(t,i,e,o)=>{if(t===0&&i>0){const n=i;e({page:n+1}),o(n)}},l=({cardData:t,onDelete:i})=>{const{drink:e,description:o,alcoholic:n,_id:s,drinkThumb:d}=t,p=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return r.jsxs(k,{children:[r.jsx("picture",{children:r.jsx(v,{src:d,alt:"coctail",loading:"lazy",onError:c=>{c.target.src=p()?h:g}})}),r.jsx(y,{children:e}),r.jsx(j,{children:n}),r.jsx(D,{children:o}),r.jsxs(z,{children:[r.jsx(C,{to:`/drinks/${s}`,children:"See more"}),r.jsx(F,{type:"button",id:s,onClick:()=>i(s),children:r.jsx(x,{size:24})})]})]})},O=(t,i,e)=>{const o=i.filter(n=>n._id!==t);e(o),w(t)},S=(t,i,e)=>{const o=i.filter(n=>n._id!==t);e(o),f(t)},_=(t,i,e,o)=>t.slice(i,i+e).map(n=>r.jsx("li",{children:r.jsx(l,{cardData:n,onDelete:s=>O(s,t,o)})},n._id)),q=(t,i,e,o)=>t.slice(i,i+e).map(n=>r.jsx("li",{children:r.jsx(l,{cardData:n,onDelete:s=>S(s,t,o)})},n._id)),B=async(t,i)=>{try{t(!0);const e=await b();i(e),t(!1)}catch(e){console.log(e.message)}},N=async(t,i)=>{try{t(!0);const e=await u();i(e),t(!1)}catch(e){console.log(e.message)}},A=(t,i,e)=>{i({page:t+1}),e(t)},H=()=>{const t=window.innerWidth>=1440?9:(window.innerWidth>=768,8),i=window.innerWidth>=1440?6:3;return{newLimit:t,newPageRangeDisplayed:i}},I=(t,i,e)=>{const o=i*e,n=o+e,s=t.slice(o,n),d=s.length;return{startIndex:o,endIndex:n,elementsOnPage:s,numberOfElementsOnPage:d}};export{R as C,L as S,M as T,W as a,B as b,I as c,q as d,_ as e,N as f,A as h,H as u};

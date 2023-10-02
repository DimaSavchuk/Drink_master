import{s as a,N as m,j as r,A as x}from"./index-1deecc6a.js";import{p as h,a as g}from"./InfoComponent-7e896b21.js";import{d as w,i as f,j as b,k as u}from"./axiosConfig-33152748.js";const L=a.section`
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
`,k=a.div`
 `,v=a.img`
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
`,W=(t,i,n,o)=>{if(t===0&&i>0){const e=i;n({page:e+1}),o(e)}},l=({cardData:t,onDelete:i})=>{const{drink:n,description:o,alcoholic:e,_id:s,drinkThumb:d}=t,p=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return r.jsxs(k,{children:[r.jsx("picture",{children:r.jsx(v,{src:d,alt:"coctail",loading:"lazy",onError:c=>{c.target.src=p()?h:g}})}),r.jsx(y,{children:n}),r.jsx(j,{children:e}),r.jsx(D,{children:o}),r.jsxs(z,{children:[r.jsx(C,{to:`/drinks/${s}`,children:"See more"}),r.jsx(F,{type:"button",id:s,onClick:()=>i(s),children:r.jsx(x,{size:24})})]})]})},O=(t,i,n)=>{const o=i.filter(e=>e._id!==t);n(o),w(t)},S=(t,i,n)=>{const o=i.filter(e=>e._id!==t);n(o),f(t)},_=(t,i,n,o)=>t.slice(i,i+n).map(e=>r.jsx("li",{children:r.jsx(l,{cardData:e,onDelete:s=>O(s,t,o)})},e._id)),q=(t,i,n,o)=>t.slice(i,i+n).map(e=>r.jsx("li",{children:r.jsx(l,{cardData:e,onDelete:s=>S(s,t,o)})},e._id)),A=async(t,i)=>{try{t(!0);const n=await b();i(n),t(!1)}catch(n){console.log(n.message)}},B=async(t,i)=>{try{t(!0);const n=await u();i(n),t(!1)}catch(n){console.log(n.message)}},N=(t,i,n)=>{i({page:t+1}),n(t)},I=()=>{const t=window.innerWidth>=1440?9:(window.innerWidth>=768,8),i=window.innerWidth>=1440?6:3;return{newLimit:t,newPageRangeDisplayed:i}},$=(t,i,n)=>{const o=i*n,e=o+n,s=t.slice(o,e),d=s.length;return{startIndex:o,endIndex:e,elementsOnPage:s,numberOfElementsOnPage:d}};export{R as C,L as S,M as T,W as a,A as b,$ as c,q as d,_ as e,B as f,N as h,I as u};

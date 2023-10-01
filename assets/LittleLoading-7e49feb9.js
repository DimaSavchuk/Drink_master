import{s as i,N as d,j as e,D as c}from"./index-10cdc6f2.js";import{p as h,a as l}from"./InfoComponent-6ea8d758.js";const p=i.div`
  width: 100%;
  max-height: 392px;
  transition: border-bottom 700ms linear;
  border-bottom: 1px solid var(--background-color);

  &:hover,
  &:focus,
  &:active {
    border-bottom: 1px solid var(--card-hover);
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
    max-height: 398px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    max-height: 438px;
  }
`,m=i.img`
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
`,x=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`,w=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.33;
  }
`,g=i(d)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: var(--see-more-link-color);
  transition: color 250ms linear;

  &:hover,
  &:focus,
  &:active {
    color: var(--see-more-link-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`,u=({data:r})=>{const{_id:o,drink:t,drinkThumb:a}=r,s=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return e.jsxs(p,{children:[e.jsx(m,{src:a,alt:`${t} photo`,loading:"lazy",onError:n=>{n.target.src=s()?h:l}}),e.jsxs(x,{children:[e.jsx(w,{children:t}),e.jsx(g,{to:`/drinks/${o}`,children:"See more"})]})]})},f=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  backdrop-filter: blur(4px);
`,b=()=>e.jsx(f,{children:e.jsx(c,{visible:!0,height:"120",width:"120",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})});export{u as C,b as L};

import{s as e,N as s,j as i}from"./index-bbbbca06.js";import{p as c}from"./block-069414ed.js";import{p as h}from"./InfoComponent-aab09abd.js";const m=e.div`
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
`,l=e.img`
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
`,p=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`,x=e.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.33;
  }
`,w=e(s)`
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
`,v=({data:n})=>{const{_id:r,drink:t,drinkThumb:a}=n,d=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return i.jsxs(m,{children:[i.jsx(l,{src:a,alt:`${t} photo`,loading:"lazy",onError:o=>{o.target.src=d()?h:c}}),i.jsxs(p,{children:[i.jsx(x,{children:t}),i.jsx(w,{to:`/drinks/${r}`,children:"See more"})]})]})};export{v as C};

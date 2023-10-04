import{s as e,N as s,j as i}from"./index-eead079f.js";import{p as c,a as h}from"./InfoComponent-30387cdf.js";const m=e.div`
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
`,x=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`,p=e.p`
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
`,k=({data:o})=>{const{_id:r,drink:t,drinkThumb:a}=o,d=()=>window.matchMedia?window.matchMedia("only screen and (min-resolution: 192dpi)").matches:!1;return i.jsxs(m,{children:[i.jsx(l,{src:a,alt:`${t} photo`,loading:"lazy",onError:n=>{n.target.src=d()?c:h}}),i.jsxs(x,{children:[i.jsx(p,{children:t}),i.jsx(w,{to:`/drinks/${r}`,children:"See more"})]})]})};export{k as C};

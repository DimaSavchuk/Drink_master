import{s as o,r as a,j as t,e as i,I as c}from"./index-56f9d02c.js";const b=e=>e.motivation.firstRecipe,h=e=>e.motivation.firstFavorite,d=o.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(10, 10, 17, 0.4) 0%,
    rgba(10, 10, 17, 0.4) 100%
  );
  backdrop-filter: blur(4px);
`,p=o.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({background:e})=>`linear-gradient(0deg, rgba(10, 10, 17, 0.4) 0%, rgba(10, 10, 17, 0.4) 100%),
    url(${e[0]})
    `};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${({background:e})=>`linear-gradient(0deg, rgba(10, 10, 17, 0.4) 0%, rgba(10, 10, 17, 0.4) 100%),
    url(${e[1]})`};
  }
`,l=o.svg`
  display: block;
  margin: 218px auto 40px auto;
  width: 268px;
  height: 242px;
`,g=o.div`
  position: relative;
  margin: 218px auto 40px auto;
  width: 268px;
  height: 242px;
`,x=o.p`
  position: absolute;
  top: 32px;
  margin-bottom: 20px;

  color: #f3f3f3;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`,u=o.button`
  position: absolute;
  top: 180px;
  right: 110px;
  display: flex;
  width: 48px;
  height: 48px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  transition: background-color 300ms linear;
  border-radius: 58px;
  background-color: #161f37;

  &:hover,
  &:focus {
    background-color: #f3f3f3;
  }
  &:hover svg,
  &:focus svg {
    stroke: #161f37;
  }
`,m=({isShown:e,text:r="Wow! You have added the first recipe to your drinks!",onClose:n,image:s})=>(a.useEffect(()=>{e===!0?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),t.jsx(d,{children:t.jsx(p,{background:s,children:t.jsxs(g,{children:[t.jsx(l,{children:t.jsx("use",{href:`${i}#icon-motiv-vector`})}),t.jsx(x,{children:r}),t.jsx(u,{onClick:n,children:t.jsx(c,{size:28,size768:28,size1440:28,children:t.jsx("use",{href:`${i}#icon-close-motiv`})})})]})})}));export{m as M,b as a,h as s};

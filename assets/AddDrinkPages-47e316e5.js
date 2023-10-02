import{s,r,G as y,o as S,j as e,p as h,e as j,F as z,E as G,q as O,t as A,v as b,w as V,x as U,y as _,z as Q,n as Y,N as X,I as L,u as H,a as J,b as K}from"./index-853f690c.js";import{b as Z,c as ee,e as te,o as oe,h as re}from"./axiosConfig-31499234.js";import{A as ie}from"./SelectOpenArrow.styled-83c5609a.js";import{L as ne}from"./LittleLoading-e6228fa8.js";const ae=s.div`
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

  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24 / 18);
  }

  h2,
  h3,
  h4 {
    color: var(--text-color);
  }

  & > div {
    margin-bottom: 80px;
  }

  & > div > div:not(:last-of-type) {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding-top: 224px;
    padding-bottom: 140px;
    padding-left: 32px;
    padding-right: 32px;

    h2 {
      font-size: 56px;
      font-weight: 600;
      line-height: calc(60 / 56);
    }

    h3 {
      font-size: 40px;
      font-weight: 600;
      line-height: calc(44 / 40);
    }

    h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: calc(32 / 24);
    }
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 244px;
    padding-bottom: 140px;
    padding-left: 100px;
    padding-right: 100px;

    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    h2 {
      margin-bottom: 40px;

      font-size: 64px;
      font-weight: 600;
      line-height: calc(68 / 64);
    }

    h3 {
      font-size: 40px;
      font-weight: 600;
      line-height: calc(44 / 40);
    }

    h4 {
      font-size: 32px;
      font-weight: 500;
      line-height: calc(32 / 24);
    }
  }
`,le=s.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,se=s.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,ce=s.button`
  padding: 14px 40px;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: var(--button-hover-color);
  line-height: calc(18 / 14);

  background-color: var(--button-color);
  border: none;
  border-radius: 42px;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:focus,
  &:hover {
    color: var(--button-color);
    background-color: var(--button-hover-color);
  }
`,de=()=>{const[t,i]=r.useState(null),[c,a]=r.useState(!1),[o,d]=r.useState(null);return r.useEffect(()=>{const l=new AbortController;(async()=>{try{a(!0);const n=await Z("",l);i(n)}catch(n){d(n.message)}finally{a(!1),l.abort()}})()},[]),{drinkGlasses:t,isLoading:c,error:o}},pe=()=>{const[t,i]=r.useState(null),[c,a]=r.useState(!1),[o,d]=r.useState(null);return r.useEffect(()=>{const l=new AbortController;(async()=>{try{a(!0);const n=await ee("",l);i(n)}catch(n){d(n.message)}finally{a(!1),l.abort()}})()},[]),{drinkCategories:t,isLoading:c,error:o}},he=()=>{const[t,i]=r.useState(null),[c,a]=r.useState(!1),[o,d]=r.useState(null);return r.useEffect(()=>{const l=new AbortController;(async()=>{try{a(!0);const n=await te("",l);i(n)}catch(n){d(n.message)}finally{a(!1),l.abort()}})()},[]),{drinkIngredients:t,isLoading:c,error:o}};function xe(t){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function ge(t){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function B(t){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function ue(t){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const fe=s.div`
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  input {
    display: none;
    visibility: hidden;
    width: 0.01;
    height: 0.01;
    overflow: hidden;
  }
`,me=s.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0.5;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`,be=s.div`
  display: block;
  position: relative;

  label {
    width: 335px;
    height: 320px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    background-color: var(--add-drink-form-background-color);

    cursor: pointer;
  }

  @media (min-width: 768px) {
    label {
      width: 320px;
      height: 320px;
    }
  }

  @media (min-width: 1440px) {
    label {
      width: 400px;
      height: 400px;
    }
  }

  label:hover,
  label:focus,
  label:active {
    background-color: #161f37d7;
  }

  label:hover span,
  label:focus span,
  label:active span {
    background-color: #fff;
  }

  label:hover div,
  label:focus div,
  label:active div {
    color: #fff;
  }
`,ve=s.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,we=s.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,ke=s.div`
  position: absolute;
  bottom: -12px;
  right: 0;

  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;
`,je=({setValue:t})=>{const[i,c]=r.useState(""),[a,o]=S("file"),d=l=>{const x=l.currentTarget.files[0]??null,n=x?URL.createObjectURL(x):null;n&&(c(n),t("file",x))};return r.useEffect(()=>{if(a.value===null){c("");return}},[a]),e.jsxs(fe,{children:[e.jsx("input",{type:"file",name:"file",id:"add-file",onChange:d,accept:"image/*"}),e.jsx(be,{children:e.jsxs("label",{htmlFor:"add-file",children:[i&&e.jsx(me,{children:e.jsx("img",{id:"uploaded-file",src:i})}),e.jsxs(ve,{children:[e.jsx(we,{children:i?e.jsx(ue,{size:16}):e.jsx(B,{size:16})}),i?"Update file":"Add image"]})]})}),o.touched&&o.error?e.jsx(ke,{children:o.error}):null]})},ye=h.button`
  width: 100%;
  height: 34px;
  padding-bottom: 14px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;
  color: var(--text-color);

  border-style: none;
  border-bottom: 1px solid var(--see-more-link-color);
  background: transparent;

  &:focus {
    border-bottom: 1px solid var(--text-color);

    outline: transparent;
  }

  &:focus span,
  &:hover span {
    color: var(--text-color);
  }

  &::after {
    padding-bottom: 14px;
  }

  span {
    display: block;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`,Se=h.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};

  span {
    display: block;
  }
`,ze=h.span`
  color: var(--see-more-link-color);
`,Ie=h.div`
  max-height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  transition: 500ms linear color;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--see-more-link-color);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }

  position: absolute;
  top: 24px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-radius: 12px;
  background-color: var(--button-hover-color);
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: var(--text-color);
  }
`,Fe=h.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,Ce=h.div`
  cursor: pointer;
`,Le=h.input`
  display: block;
  padding: 4px;

  margin-bottom: 8px;

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
`,q=({isOpen:t})=>e.jsx(ie,{open:t,children:e.jsx("use",{href:`${j}#icon-chevron-down`})}),Ee=h.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Pe=h.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,$=h.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,D=h.div`
  position: relative;

  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  &:hover label,
  &:focus-within label {
    color: var(--text-color);
    transition: 200ms ease transform;
  }
`,T=h(z)`
  display: block;
  height: 34px;

  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: right;
  color: var(--text-color);

  border-style: none;
  border-bottom: 1px solid var(--see-more-link-color);
  background: transparent;

  &:focus {
    border-bottom: 1px solid var(--text-color);
    outline: transparent;
  }

  &::placeholder {
    opacity: 0;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`,R=h.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,M=h(z)`
  margin: 0;
  width: 16px;
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font: inherit;
  color: currentColor;

  border: 1.5px solid var(--see-more-link-color);
  border-radius: 50%;

  appearance: none;
  cursor: pointer;

  & + label {
    cursor: pointer;
  }

  &:hover + label {
    color: var(--text-color);
  }

  &:checked {
    border: 1.5px solid var(--text-color);
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: var(--text-color);
  }

  &:checked::before {
    transform: scale(1);
  }
`,Ae=h.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: var(--text-color);
  }
`,P=h.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: right;
`,W=({items:t,title:i,touched:c,error:a})=>{const[o,d]=r.useState(!1),[l,x]=r.useState(""),n=r.useRef(),u=r.useRef(),f=r.useRef(),I=i.toLowerCase(),v=g=>t.filter(p=>p.toLowerCase().includes(g.toLowerCase())),[,m,{setValue:w}]=S({name:I}),F=()=>{d(g=>!g)},C=g=>{F(),w(g),x("")};return r.useEffect(()=>{u&&(x(""),o&&u.current&&u.current.focus())},[o]),r.useEffect(()=>{const g=p=>{n.current&&n.current.contains(p.target)&&d(!0),f.current&&!f.current.contains(p.target)&&d(!1)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}}),e.jsxs(Fe,{children:[e.jsxs(ye,{type:"button",ref:n,menuOpen:o,children:[e.jsx(ze,{children:i}),t&&e.jsxs(Se,{selected:m.value,children:[e.jsx("span",{children:m.value?m.value:""}),e.jsx(q,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Ie,{ref:f,children:[t.length>20&&e.jsx(Le,{ref:u,type:"text",name:`${i}Filter`,placeholder:"Search...",onChange:g=>x(g.target.value)}),v(l).map((g,p)=>e.jsx(Ce,{onClick:()=>C(g),children:g},p))]})}),c&&a?e.jsx(P,{children:a}):null]})},$e=({categoriesList:t,glassesList:i,setValue:c,touched:a,errors:o})=>e.jsxs(Ee,{children:[e.jsx(je,{setValue:c}),e.jsxs(Pe,{children:[e.jsxs(D,{children:[e.jsx($,{htmlFor:"title",children:"Enter item title"}),e.jsx(T,{name:"title",placeholder:"Enter item title"}),a.title&&o.title?e.jsx(P,{children:o.title}):null]}),e.jsxs(D,{children:[e.jsx($,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(T,{name:"recipe",placeholder:"Enter about recipe"}),a.recipe&&o.recipe?e.jsx(P,{children:o.recipe}):null]}),e.jsx(W,{items:t,title:"Category",touched:a.category,error:o.category}),e.jsx(W,{items:i,title:"Glass",touched:a.glass,error:o.glass}),e.jsxs(Ae,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(M,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(R,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(M,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(R,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),De=s.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,Te=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Re=s.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--see-more-link-color);
  border-radius: 200px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 16px;
    border: none;
    background: transparent;
    color: var(--see-more-link-color);
  }

  button:hover,
  button:active {
    color: var(--text-color);
  }

  span {
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 14px;
    line-height: calc(18 / 14);
    text-align: center;
    color: var(--text-color);
  }
`,Me=s.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  /* margin-bottom: 31px; */
`,We=s(z)`
  width: 100px;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 36px;
  margin-right: 8px;

  background: transparent;
  border: 1px solid var(--see-more-link-color);
  border-radius: 200px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: var(--text-color);

  &:focus {
    border: 1px solid var(--text-color);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 20%;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 28%;
  }
`,Be=s.button`
  display: block;
  padding: 0;
  border: none;
  background: none;
  color: var(--see-more-link-color);

  &:hover,
  &:active {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;s.div`
  position: relative;
  margin-right: 8px;

  &:focus {
    border: 1px solid var(--text-color);
    outline: none;
  }
  /* 
  span {
    display: block;
    position: absolute;
    pointer-events: none;
    top: 16px;
    right: 24px;
    color: var(--text-color);
  } */

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`;s(z)`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 36px;

  background: transparent;
  border: 1px solid var(--see-more-link-color);
  border-radius: 200px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: var(--text-color);

  cursor: pointer;
  appearance: none;

  &:focus {
    border: 1px solid var(--text-color);
    outline: none;
  }

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--see-more-link-color);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: var(--button-hover-color);
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }
`;s(G)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 4px;
  padding-left: 8px;

  /* display: block; */

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`;const qe=h.button`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: var(--text-color);

  background: transparent;
  border: 1px solid
    ${({menuOpen:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};
  border-radius: 200px;

  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
  }

  &:focus span,
  &:hover span {
    color: var(--text-color);
  }

  &::after {
    padding-bottom: 14px;
  }
`,Ne=h.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t===!1?"var(--see-more-link-color)":"var(--text-color)"};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`,Ge=h.div`
  max-height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  transition: 500ms linear color;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--see-more-link-color);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }

  position: absolute;
  top: 48px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-radius: 12px;
  background-color: var(--button-hover-color);
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: var(--text-color);
  }
`,Oe=h.div`
  margin-right: 8px;
  width: 100%;

  position: relative;

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`,Ve=h.div`
  cursor: pointer;
`,Ue=h.input`
  padding: 4px;
  margin-bottom: 8px;

  display: block;

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
`,_e=({items:t,title:i,ingredient:c,index:a})=>{const[o,d]=r.useState(!1),[l,x]=r.useState({id:"",title:""}),[n,u]=r.useState(""),[f,I]=r.useState(!1),v=r.useRef(),m=r.useRef(),w=r.useRef();i.toLowerCase();const F=p=>t.filter(k=>k.title.toLowerCase().includes(p.toLowerCase())),C=()=>{d(p=>!p)},g=p=>{x(p),C(),u(""),I(!0),c.title=p.title,c.ingredientId=p._id};return r.useEffect(()=>{m&&(u(""),o&&m.current&&m.current.focus())},[o]),r.useEffect(()=>{const p=k=>{v.current&&v.current.contains(k.target)&&d(!0),w.current&&!w.current.contains(k.target)&&d(!1)};return window.addEventListener("click",p),()=>{window.removeEventListener("click",p)}},[]),e.jsxs(Oe,{children:[e.jsx(qe,{type:"button",ref:v,menuOpen:o,children:t&&e.jsxs(Ne,{selected:f,children:[e.jsx("span",{children:l.title?l.title:"Select"}),e.jsx(q,{isOpen:o})]})}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Ge,{ref:w,children:[t.length>20&&e.jsx(Ue,{ref:m,type:"text",name:`${i}Filter`,placeholder:"Search...",onChange:p=>u(p.target.value)}),F(n).map(p=>e.jsx(Ve,{onClick:()=>g(p),children:p.title},p._id))]})})]})},Qe=s.textarea`
  /* display: block; */
  width: 100%;
  height: 184px;
  padding: 16px 18px;

  color: var(--text-color);

  background-color: transparent;
  border: 1px solid var(--see-more-link-color);
  border-radius: 14px;
  outline: transparent;

  overflow: auto;

  transition:
    100ms ease transform,
    250ms ease opacity;

  &:focus {
    border: 1px solid var(--text-color);
  }

  &::placeholder {
    color: var(--see-more-link-color);
    opacity: 1;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus ~ label {
    transform: translateY(-44px);
    opacity: 1;
  }

  &::-webkit-resizer {
    display: none;
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`,Ye=s.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,Xe=s.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,N=s.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,He=({items:t,title:i})=>{const c={title:"",measure:""},[a,o,d]=S("ingredients");return e.jsx(O,{name:"ingredients",render:({form:{values:{ingredients:l}},push:x,remove:n})=>e.jsxs(De,{children:[e.jsxs(Te,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Re,{children:[e.jsx("button",{type:"button",onClick:()=>n(),children:e.jsx(ge,{size:16})}),e.jsx("span",{children:l.length?l.length:"0"}),e.jsx("button",{type:"button",onClick:()=>x(c),children:e.jsx(B,{size:16})})]})]}),e.jsxs("div",{children:[l.length>0&&l.map((u,f)=>e.jsxs(Me,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(_e,{items:t,title:i,ingredient:u,index:f}),e.jsx("div",{style:{position:"relative"},children:e.jsx(We,{name:`ingredients.${f}.measure`,placeholder:"1 cl",index:f})}),e.jsx(Be,{type:"button",onClick:()=>n(f),children:e.jsx(xe,{size:18})})]},f)),o.touched&&o.error&&typeof o.error=="string"&&e.jsx(N,{children:o.error})]})]})})},Je=({error:t,touched:i})=>{const[c]=S("recipePreparation");return e.jsxs(Xe,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Qe,{name:"recipePreparation",placeholder:"Enter the recipe",...c}),e.jsx(Ye,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),i&&t?e.jsx(N,{children:t}):null]})},Ke=A().shape({title:b().trim().required("Please enter a drink title"),recipe:b().trim().required("Please enter information about the recipe"),category:b().required("Please select a category"),glass:b().required("Please select a glass"),ingredients:V().of(A().shape({title:b().required("Please select a title"),measure:b().required("Please enter a measure")})).required().min(1,"You must have more than 1 item"),file:U().required("Please add the drink recipe image"),recipePreparation:b().trim().required("enter about a recipe")}),Ze={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},et=()=>{const t=(o,d)=>{o.id=Y(),oe(o),d.resetForm()},i=pe(),c=de(),a=he();return e.jsxs(se,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(_,{initialValues:Ze,validationSchema:Ke,onSubmit:t,children:({setFieldValue:o,touched:d,errors:l})=>e.jsxs(Q,{children:[e.jsx($e,{categoriesList:i.drinkCategories,glassesList:c.drinkGlasses,setValue:o,errors:l,touched:d}),e.jsx(He,{items:a.drinkIngredients,title:"Ingridients"}),e.jsx(Je,{error:l.recipePreparation,touched:d.recipePreparation}),e.jsx(ce,{type:"submit",children:"Add"})]})})]})},tt=()=>{const[t,i]=r.useState(null),[c,a]=r.useState(!1),[o,d]=r.useState(null);return r.useEffect(()=>{const l=new AbortController;(async()=>{try{a(!0);const n=await re("",l);i(n.data)}catch(n){d(n.message)}finally{a(!1),l.abort()}})()},[]),{drinksPopular:t,isLoading:c,error:o}},ot=s.div`
  margin-bottom: 28px;

  h4 {
    margin-bottom: 28px;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul > li:not(:last-of-type) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    h4 {
      margin-bottom: 40px;
    }

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
    }

    ul > li:not(:last-of-type) {
      margin-bottom: unset;
    }
  }

  @media (min-width: 1440px) {
    ul {
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 28px;
    }
  }
`,rt=s(X)`
  display: flex;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: var(--see-more-link-color);

    line-clamp: 3;
    box-orient: vertical;
    text-overflow: ellipsis;
    white-space: pre-line;
    overflow: hidden;
  }

  h6 {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 500;
    line-height: calc(22 / 16);
    color: var(--text-color);
  }

  img {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 32px);
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: calc(20 / 14);
    }
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 100%;
  }
`,it=()=>{const{drinksPopular:t,isLoading:i,error:c}=tt(),a=t||[],o=3;return e.jsxs(ot,{children:[e.jsx("h4",{children:"Popular drinks"}),c&&e.jsx("div",{children:"error"}),i?e.jsx(ne,{}):e.jsx("ul",{children:a.map(({drinkThumb:d,drink:l,description:x,_id:n},u)=>{if(u<=o)return e.jsx("li",{children:e.jsxs(rt,{to:`/drinks/${n}`,children:[e.jsx("img",{src:d,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:l}),e.jsx("p",{children:x})]})]})},u)})})]})},nt=s.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,E=s.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid var(--border-link-color);
  transition: 500ms linear;
  &:hover,
  &:focus {
    border: 1px solid rgba(64, 112, 205, 0.5);
    /* border: 1px solid rgba(221, 255, 0, 0.2); */
    background-color: var(--button-color);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--button-hover-color);
  }
`,at=()=>e.jsxs(nt,{children:[e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${j}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${j}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${j}#icon-youtube`})})})})]}),lt=s.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,st=()=>e.jsxs("div",{children:[e.jsx(lt,{children:"Follow us"}),e.jsx(at,{})]}),xt=()=>{const t=H(),i=J();return r.useEffect(()=>{i(K(t.pathname))},[i]),e.jsxs(ae,{children:[e.jsx(et,{}),e.jsxs(le,{children:[e.jsx(st,{}),e.jsx(it,{})]})]})};export{xt as default};

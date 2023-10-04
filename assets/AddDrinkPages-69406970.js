import{s as c,r,G as F,t as j,j as e,v as p,f as z,F as I,E as O,w as Y,x as $,y as v,z as H,A as X,b as V,B as J,D as K,n as Z,Q as M,N as ee,I as L,u as te,e as oe,c as re,o as ie}from"./index-eead079f.js";import{b as ne,c as ae,e as se,o as le,h as ce}from"./axiosConfig-59bdbc45.js";import{A as de}from"./SelectOpenArrow.styled-0ece1c25.js";import{L as pe}from"./LittleLoading-a4402ff3.js";import{a as he,M as xe}from"./Motivation-035f70b7.js";import"./LittleLoading.styled-37960483.js";const ue="/Drink_master/assets/motivation-f3c9a525.png",ge=c.div`
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
`,fe=c.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,me=c.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,be=c.button`
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
`,ve=()=>{const[t,a]=r.useState(null),[s,n]=r.useState(!1),[o,l]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const i=await ne("",d);a(i)}catch(i){l(i.message)}finally{n(!1),d.abort()}})()},[]),{drinkGlasses:t,isLoading:s,error:o}},we=()=>{const[t,a]=r.useState(null),[s,n]=r.useState(!1),[o,l]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const i=await ae("",d);a(i)}catch(i){l(i.message)}finally{n(!1),d.abort()}})()},[]),{drinkCategories:t,isLoading:s,error:o}},ke=()=>{const[t,a]=r.useState(null),[s,n]=r.useState(!1),[o,l]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const i=await se("",d);a(i)}catch(i){l(i.message)}finally{n(!1),d.abort()}})()},[]),{drinkIngredients:t,isLoading:s,error:o}};function je(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function ye(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function q(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function Se(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const ze=c.div`
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
`,Fe=c.div`
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
`,Ie=c.div`
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
`,Ce=c.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,Ee=c.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,Le=c.div`
  position: absolute;
  bottom: 24px;

  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;
`,De=({setValue:t,fileInputRef:a})=>{const[s,n]=r.useState(""),[o,l]=j("file"),d=h=>{const i=h.currentTarget.files[0]??null,x=i?URL.createObjectURL(i):null;x&&(n(x),t("file",i))};return e.jsxs(ze,{children:[e.jsx("input",{ref:a,type:"file",name:"file",id:"add-file",onChange:d,accept:"image/*"}),e.jsx(Ie,{children:e.jsxs("label",{htmlFor:"add-file",children:[s&&a.current.value&&e.jsx(Fe,{children:e.jsx("img",{id:"uploaded-file",src:s})}),e.jsxs(Ce,{children:[e.jsx(Ee,{children:s&&a.current.value?e.jsx(Se,{size:16}):e.jsx(q,{size:16})}),s&&a.current.value?"Update file":"Add image"]})]})}),l.touched&&l.error?e.jsx(Le,{children:l.error}):null]})},Pe=p.button`
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
`,$e=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};

  span {
    display: block;
  }
`,Me=p.span`
  color: var(--see-more-link-color);
`,Te=p.div`
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
`,Ae=p.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,Re=p.div`
  cursor: pointer;
`,We=p.input`
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
`,G=({isOpen:t})=>e.jsx(de,{open:t,children:e.jsx("use",{href:`${z}#icon-chevron-down`})}),Be=p.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Ne=p.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,T=p.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,A=p.div`
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
`,R=p(I)`
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
`,W=p.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,B=p(I)`
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
`,Oe=p.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: var(--text-color);
  }
`,P=p.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: right;
`,N=({items:t,title:a,touched:s,error:n})=>{const[o,l]=r.useState(!1),[d,h]=r.useState(""),i=r.useRef(),x=r.useRef(),b=r.useRef(),C=a.toLowerCase(),w=g=>t.filter(m=>m.toLowerCase().includes(g.toLowerCase())),[,f,{setValue:k}]=j({name:C}),E=()=>{l(g=>!g)},y=g=>{E(),k(g),h("")};return r.useEffect(()=>{x&&(h(""),o&&x.current&&x.current.focus())},[o]),r.useEffect(()=>{const g=m=>{i.current&&i.current.contains(m.target)&&l(!0),b.current&&!b.current.contains(m.target)&&l(!1)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}}),e.jsxs(Ae,{children:[e.jsxs(Pe,{type:"button",ref:i,menuOpen:o,children:[e.jsx(Me,{children:a}),t&&e.jsxs($e,{selected:f.value,children:[e.jsx("span",{children:f.value?f.value:""}),e.jsx(G,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Te,{ref:b,children:[t.length>20&&e.jsx(We,{ref:x,type:"text",name:`${a}Filter`,placeholder:"Search...",onChange:g=>h(g.target.value)}),w(d).map((g,m)=>e.jsx(Re,{onClick:()=>y(g),children:g},m))]})}),s&&n?e.jsx(P,{children:n}):null]})},Ve=({categoriesList:t,glassesList:a,setValue:s,touched:n,errors:o,fileInputRef:l})=>e.jsxs(Be,{children:[e.jsx(De,{setValue:s,fileInputRef:l}),e.jsxs(Ne,{children:[e.jsxs(A,{children:[e.jsx(T,{htmlFor:"title",children:"Enter item title"}),e.jsx(R,{name:"title",placeholder:"Enter item title"}),n.title&&o.title?e.jsx(P,{children:o.title}):null]}),e.jsxs(A,{children:[e.jsx(T,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(R,{name:"recipe",placeholder:"Enter about recipe"}),n.recipe&&o.recipe?e.jsx(P,{children:o.recipe}):null]}),e.jsx(N,{items:t,title:"Category",touched:n.category,error:o.category}),e.jsx(N,{items:a,title:"Glass",touched:n.glass,error:o.glass}),e.jsxs(Oe,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(B,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(W,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(B,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(W,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),qe=c.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,Ge=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,_e=c.div`
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
`,Ue=c.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  /* margin-bottom: 31px; */
`,Qe=c.div`
  position: relative;
  width: 100px;

  margin-right: 8px;

  @media screen and (min-width: 768px) {
    flex-basis: 20%;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 28%;
  }
`,Ye=c(I)`
  /* width: 100px; */
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

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
`,He=c.button`
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
`;c.div`
  position: relative;
  margin-right: 8px;

  &:focus {
    border: 1px solid var(--text-color);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`;c(I)`
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
`;const Xe=c.div`
  position: absolute;
  bottom: -18px;
  left: 18px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
`,Je=c.div`
  position: absolute;
  width: 150px;
  bottom: -18px;
  left: -24px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 140px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 150px;
  }
`,Ke=p.button`
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
`,Ze=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t===!1?"var(--see-more-link-color)":"var(--text-color)"};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`,et=p.div`
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
`,tt=p.div`
  margin-right: 8px;
  width: 100%;
  max-width: 200px;

  position: relative;

  @media screen and (min-width: 768px) {
    max-width: unset;
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`,ot=p.div`
  cursor: pointer;
`,rt=p.input`
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
`,it=({items:t,title:a,ingredient:s,index:n})=>{const[o,l]=r.useState(!1),[d,h]=r.useState({id:"",title:""}),[i,x]=r.useState(""),[b,C]=r.useState(!1),w=r.useRef(),f=r.useRef(),k=r.useRef(),E=a.toLowerCase(),[,y,g]=j(`ingredients.${n}.title`),m=u=>t.filter(S=>S.title.toLowerCase().includes(u.toLowerCase())),U=()=>{l(u=>!u)},Q=u=>{h(u),U(),x(""),C(!0),s.title=u.title,s.ingredientId=u._id,g.setError("")};return r.useEffect(()=>{f&&(x(""),o&&f.current&&f.current.focus())},[o]),r.useEffect(()=>{const u=S=>{w.current&&w.current.contains(S.target)&&l(!0),k.current&&!k.current.contains(S.target)&&l(!1)};return window.addEventListener("click",u),()=>{window.removeEventListener("click",u)}},[]),e.jsxs(tt,{children:[e.jsx(Ke,{type:"button",ref:w,menuOpen:o,children:t&&e.jsxs(Ze,{selected:b,children:[e.jsx("span",{children:s.title?s.title:"Select"}),e.jsx(G,{isOpen:o})]})}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(et,{ref:k,children:[t.length>20&&e.jsx(rt,{ref:f,type:"text",name:`${E}Filter`,placeholder:"Search...",onChange:u=>x(u.target.value)}),m(i).map(u=>e.jsx(ot,{onClick:()=>Q(u),children:u.title},u._id))]})}),y.error&&y.touched&&e.jsx(O,{name:`ingredients.${n}.title`,children:u=>e.jsx(Xe,{children:u})})]})},nt=c.textarea`
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
`,at=c.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,st=c.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,_=c.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,lt=({items:t,title:a})=>{const s={title:"",measure:""},[,{touched:n,error:o}]=j("ingredients");return e.jsx(Y,{name:"ingredients",render:({form:{values:{ingredients:l}},push:d,remove:h})=>e.jsxs(qe,{children:[e.jsxs(Ge,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(_e,{children:[e.jsx("button",{type:"button",onClick:()=>h(),children:e.jsx(ye,{size:16})}),e.jsx("span",{children:l.length?l.length:"0"}),e.jsx("button",{type:"button",onClick:()=>d(s),children:e.jsx(q,{size:16})})]})]}),e.jsx("div",{children:l.length>0&&l.map((i,x)=>e.jsxs(Ue,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(it,{items:t,title:a,ingredient:i,index:x}),e.jsxs(Qe,{children:[e.jsx(Ye,{name:`ingredients.${x}.measure`,placeholder:"1 cl"}),e.jsx(O,{name:`ingredients.${x}.measure`,children:b=>e.jsx(Je,{children:b})})]}),e.jsx(He,{type:"button",onClick:()=>h(x),children:e.jsx(je,{size:18})})]},x))}),n&&typeof o=="string"?e.jsx(_,{children:o}):null]})})},ct=({error:t,touched:a})=>{const[s]=j("recipePreparation");return e.jsxs(st,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(nt,{name:"recipePreparation",placeholder:"Enter the recipe",...s}),e.jsx(at,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),a&&t?e.jsx(_,{children:t}):null]})},dt=$().shape({title:v().trim().required("Please enter a drink title"),recipe:v().trim().required("Please enter information about the recipe"),category:v().required("Please select a category"),glass:v().required("Please select a glass"),ingredients:H().of($().shape({title:v().required("Please select a title"),measure:v().required("Please enter a measure")})).required().min(1,"Select more than 1 item"),file:X().required("Please add the drink recipe image"),recipePreparation:v().trim().required("Please enter about a recipe")}),pt={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},ht=()=>{const t=V(),a=r.useRef(),s=(d,h)=>{d.id=Z(),le(d,t).then(()=>M.success("New drink added successfully")).catch(({message:i})=>M.error(`${i}`)),h.resetForm(),a.current.value=null},n=we(),o=ve(),l=ke();return e.jsxs(me,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(J,{initialValues:pt,validationSchema:dt,onSubmit:s,children:({setFieldValue:d,touched:h,errors:i})=>e.jsxs(K,{children:[e.jsx(Ve,{categoriesList:n.drinkCategories,glassesList:o.drinkGlasses,setValue:d,errors:i,touched:h,fileInputRef:a}),e.jsx(lt,{items:l.drinkIngredients,title:"Ingridients"}),e.jsx(ct,{error:i.recipePreparation,touched:h.recipePreparation}),e.jsx(be,{type:"submit",children:"Add"})]})})]})},xt=()=>{const[t,a]=r.useState(null),[s,n]=r.useState(!1),[o,l]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const i=await ce("",d);a(i.data)}catch(i){l(i.message)}finally{n(!1),d.abort()}})()},[]),{drinksPopular:t,isLoading:s,error:o}},ut=c.div`
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
`,gt=c(ee)`
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
`,ft=()=>{const{drinksPopular:t,isLoading:a,error:s}=xt(),n=t||[],o=3;return e.jsxs(ut,{children:[e.jsx("h4",{children:"Popular drinks"}),s&&e.jsx("div",{children:"error"}),a?e.jsx(pe,{}):e.jsx("ul",{children:n.map(({drinkThumb:l,drink:d,description:h,_id:i},x)=>{if(x<=o)return e.jsx("li",{children:e.jsxs(gt,{to:`/drinks/${i}`,children:[e.jsx("img",{src:l,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:d}),e.jsx("p",{children:h})]})]})},x)})})]})},mt=c.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,D=c.a`
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
    background-color: var(--button-color);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--button-hover-color);
  }
`,bt=()=>e.jsxs(mt,{children:[e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-youtube`})})})})]}),vt=c.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,wt=()=>e.jsxs("div",{children:[e.jsx(vt,{children:"Follow us"}),e.jsx(bt,{})]}),kt="/Drink_master/assets/motivation@2x-64f4a4e4.png",jt=[ue,kt],Et=()=>{const t=te(),a=V(),s=oe(he),[n,o]=r.useState(!1);r.useEffect(()=>{s&&o(!0)},[s]),r.useEffect(()=>{const d=localStorage.getItem("wasMotivationFirstDrinkShown");o(d!=="true")},[]),r.useEffect(()=>{a(re(t.pathname))},[a]);const l=()=>{o(!1),localStorage.setItem("wasMotivationFirstDrinkShown","true")};return e.jsxs(ge,{children:[e.jsx(ht,{}),e.jsxs(fe,{children:[e.jsx(wt,{}),e.jsx(ft,{})]}),e.jsx(ie,{in:n,timeout:500,classNames:"motivation",unmountOnExit:!0,mountOnEnter:!0,children:e.jsx(xe,{isShown:n,onClose:l,image:jt})})]})};export{Et as default};

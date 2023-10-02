import{s as a,r,G as I,o as j,j as e,p,e as z,F,E as q,q as _,t as T,v as b,w as Q,x as Y,y as X,z as H,n as J,N as K,I as E,u as Z,a as ee,b as te}from"./index-208d76cf.js";import{b as oe,c as re,e as ie,o as ne,h as le}from"./axiosConfig-86cd1284.js";import{A as ae}from"./SelectOpenArrow.styled-781b7875.js";import{L as se}from"./LittleLoading-75605952.js";const ce=a.div`
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
`,de=a.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,pe=a.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,he=a.button`
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
`,xe=()=>{const[t,l]=r.useState(null),[s,i]=r.useState(!1),[o,c]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const n=await oe("",d);l(n)}catch(n){c(n.message)}finally{i(!1),d.abort()}})()},[]),{drinkGlasses:t,isLoading:s,error:o}},ge=()=>{const[t,l]=r.useState(null),[s,i]=r.useState(!1),[o,c]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const n=await re("",d);l(n)}catch(n){c(n.message)}finally{i(!1),d.abort()}})()},[]),{drinkCategories:t,isLoading:s,error:o}},ue=()=>{const[t,l]=r.useState(null),[s,i]=r.useState(!1),[o,c]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const n=await ie("",d);l(n)}catch(n){c(n.message)}finally{i(!1),d.abort()}})()},[]),{drinkIngredients:t,isLoading:s,error:o}};function fe(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function me(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function N(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function be(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const ve=a.div`
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
`,we=a.div`
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
`,ke=a.div`
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
`,je=a.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,ye=a.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,Se=a.div`
  position: absolute;
  bottom: 24px;

  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;
`,ze=({setValue:t})=>{const[l,s]=r.useState(""),[i,o]=j("file"),c=d=>{const x=d.currentTarget.files[0]??null,n=x?URL.createObjectURL(x):null;n&&(s(n),t("file",x))};return r.useEffect(()=>{if(i.value===null){s("");return}},[i]),e.jsxs(ve,{children:[e.jsx("input",{type:"file",name:"file",id:"add-file",onChange:c,accept:"image/*"}),e.jsx(ke,{children:e.jsxs("label",{htmlFor:"add-file",children:[l&&e.jsx(we,{children:e.jsx("img",{id:"uploaded-file",src:l})}),e.jsxs(je,{children:[e.jsx(ye,{children:l?e.jsx(be,{size:16}):e.jsx(N,{size:16})}),l?"Update file":"Add image"]})]})}),o.touched&&o.error?e.jsx(Se,{children:o.error}):null]})},Ie=p.button`
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
`,Fe=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};

  span {
    display: block;
  }
`,Ce=p.span`
  color: var(--see-more-link-color);
`,Le=p.div`
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
`,Ee=p.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,Pe=p.div`
  cursor: pointer;
`,$e=p.input`
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
`,V=({isOpen:t})=>e.jsx(ae,{open:t,children:e.jsx("use",{href:`${z}#icon-chevron-down`})}),Te=p.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Ae=p.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,A=p.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,D=p.div`
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
`,R=p(F)`
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
`,M=p.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,W=p(F)`
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
`,De=p.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: var(--text-color);
  }
`,$=p.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: right;
`,B=({items:t,title:l,touched:s,error:i})=>{const[o,c]=r.useState(!1),[d,x]=r.useState(""),n=r.useRef(),u=r.useRef(),v=r.useRef(),C=l.toLowerCase(),w=g=>t.filter(m=>m.toLowerCase().includes(g.toLowerCase())),[,f,{setValue:k}]=j({name:C}),L=()=>{c(g=>!g)},y=g=>{L(),k(g),x("")};return r.useEffect(()=>{u&&(x(""),o&&u.current&&u.current.focus())},[o]),r.useEffect(()=>{const g=m=>{n.current&&n.current.contains(m.target)&&c(!0),v.current&&!v.current.contains(m.target)&&c(!1)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}}),e.jsxs(Ee,{children:[e.jsxs(Ie,{type:"button",ref:n,menuOpen:o,children:[e.jsx(Ce,{children:l}),t&&e.jsxs(Fe,{selected:f.value,children:[e.jsx("span",{children:f.value?f.value:""}),e.jsx(V,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Le,{ref:v,children:[t.length>20&&e.jsx($e,{ref:u,type:"text",name:`${l}Filter`,placeholder:"Search...",onChange:g=>x(g.target.value)}),w(d).map((g,m)=>e.jsx(Pe,{onClick:()=>y(g),children:g},m))]})}),s&&i?e.jsx($,{children:i}):null]})},Re=({categoriesList:t,glassesList:l,setValue:s,touched:i,errors:o})=>e.jsxs(Te,{children:[e.jsx(ze,{setValue:s}),e.jsxs(Ae,{children:[e.jsxs(D,{children:[e.jsx(A,{htmlFor:"title",children:"Enter item title"}),e.jsx(R,{name:"title",placeholder:"Enter item title"}),i.title&&o.title?e.jsx($,{children:o.title}):null]}),e.jsxs(D,{children:[e.jsx(A,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(R,{name:"recipe",placeholder:"Enter about recipe"}),i.recipe&&o.recipe?e.jsx($,{children:o.recipe}):null]}),e.jsx(B,{items:t,title:"Category",touched:i.category,error:o.category}),e.jsx(B,{items:l,title:"Glass",touched:i.glass,error:o.glass}),e.jsxs(De,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(M,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(M,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),Me=a.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,We=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Be=a.div`
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
`,qe=a.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  /* margin-bottom: 31px; */
`,Ne=a.div`
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
`,Ve=a(F)`
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
`,Ge=a.button`
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
`;a.div`
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
`;a(F)`
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
`;const Oe=a.div`
  position: absolute;
  bottom: -18px;
  left: 18px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
`,Ue=a.div`
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
`,_e=p.button`
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
`,Qe=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t===!1?"var(--see-more-link-color)":"var(--text-color)"};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`,Ye=p.div`
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
`,Xe=p.div`
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
`,He=p.div`
  cursor: pointer;
`,Je=p.input`
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
`,Ke=({items:t,title:l,ingredient:s,index:i})=>{const[o,c]=r.useState(!1),[d,x]=r.useState({id:"",title:""}),[n,u]=r.useState(""),[v,C]=r.useState(!1),w=r.useRef(),f=r.useRef(),k=r.useRef(),L=l.toLowerCase(),[,y,g]=j(`ingredients.${i}.title`),m=h=>t.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),O=()=>{c(h=>!h)},U=h=>{x(h),O(),u(""),C(!0),s.title=h.title,s.ingredientId=h._id,g.setError("")};return r.useEffect(()=>{f&&(u(""),o&&f.current&&f.current.focus())},[o]),r.useEffect(()=>{const h=S=>{w.current&&w.current.contains(S.target)&&c(!0),k.current&&!k.current.contains(S.target)&&c(!1)};return window.addEventListener("click",h),()=>{window.removeEventListener("click",h)}},[]),e.jsxs(Xe,{children:[e.jsx(_e,{type:"button",ref:w,menuOpen:o,children:t&&e.jsxs(Qe,{selected:v,children:[e.jsx("span",{children:s.title?s.title:"Select"}),e.jsx(V,{isOpen:o})]})}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Ye,{ref:k,children:[t.length>20&&e.jsx(Je,{ref:f,type:"text",name:`${L}Filter`,placeholder:"Search...",onChange:h=>u(h.target.value)}),m(n).map(h=>e.jsx(He,{onClick:()=>U(h),children:h.title},h._id))]})}),y.error&&y.touched&&e.jsx(q,{name:`ingredients.${i}.title`,children:h=>e.jsx(Oe,{children:h})})]})},Ze=a.textarea`
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
`,et=a.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,tt=a.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,G=a.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,ot=({items:t,title:l})=>{const s={title:"",measure:""},[,{error:i}]=j("ingredients");return e.jsx(_,{name:"ingredients",render:({form:{values:{ingredients:o}},push:c,remove:d})=>e.jsxs(Me,{children:[e.jsxs(We,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Be,{children:[e.jsx("button",{type:"button",onClick:()=>d(),children:e.jsx(me,{size:16})}),e.jsx("span",{children:o.length?o.length:"0"}),e.jsx("button",{type:"button",onClick:()=>c(s),children:e.jsx(N,{size:16})})]})]}),e.jsx("div",{children:o.length>0&&o.map((x,n)=>e.jsx(e.Fragment,{children:e.jsxs(qe,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(Ke,{items:t,title:l,ingredient:x,index:n}),e.jsxs(Ne,{children:[e.jsx(Ve,{name:`ingredients.${n}.measure`,placeholder:"1 cl"}),e.jsx(q,{name:`ingredients.${n}.measure`,children:u=>e.jsx(Ue,{children:u})})]}),e.jsx(Ge,{type:"button",onClick:()=>d(n),children:e.jsx(fe,{size:18})})]},n)}))}),typeof i=="string"?e.jsx(G,{children:i}):null]})})},rt=({error:t,touched:l})=>{const[s]=j("recipePreparation");return e.jsxs(tt,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Ze,{name:"recipePreparation",placeholder:"Enter the recipe",...s}),e.jsx(et,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),l&&t?e.jsx(G,{children:t}):null]})},it=T().shape({title:b().trim().required("Please enter a drink title"),recipe:b().trim().required("Please enter information about the recipe"),category:b().required("Please select a category"),glass:b().required("Please select a glass"),ingredients:Q().of(T().shape({title:b().required("Please select a title"),measure:b().required("Please enter a measure")})).required().min(1,"Select more than 1 item"),file:Y().required("Please add the drink recipe image"),recipePreparation:b().trim().required("Please enter about a recipe")}),nt={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},lt=()=>{const t=(o,c)=>{o.id=J(),ne(o),c.resetForm()},l=ge(),s=xe(),i=ue();return e.jsxs(pe,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(X,{initialValues:nt,validationSchema:it,onSubmit:t,children:({setFieldValue:o,touched:c,errors:d})=>e.jsxs(H,{children:[e.jsx(Re,{categoriesList:l.drinkCategories,glassesList:s.drinkGlasses,setValue:o,errors:d,touched:c}),e.jsx(ot,{items:i.drinkIngredients,title:"Ingridients"}),e.jsx(rt,{error:d.recipePreparation,touched:c.recipePreparation}),e.jsx(he,{type:"submit",children:"Add"})]})})]})},at=()=>{const[t,l]=r.useState(null),[s,i]=r.useState(!1),[o,c]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const n=await le("",d);l(n.data)}catch(n){c(n.message)}finally{i(!1),d.abort()}})()},[]),{drinksPopular:t,isLoading:s,error:o}},st=a.div`
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
`,ct=a(K)`
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
`,dt=()=>{const{drinksPopular:t,isLoading:l,error:s}=at(),i=t||[],o=3;return e.jsxs(st,{children:[e.jsx("h4",{children:"Popular drinks"}),s&&e.jsx("div",{children:"error"}),l?e.jsx(se,{}):e.jsx("ul",{children:i.map(({drinkThumb:c,drink:d,description:x,_id:n},u)=>{if(u<=o)return e.jsx("li",{children:e.jsxs(ct,{to:`/drinks/${n}`,children:[e.jsx("img",{src:c,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:d}),e.jsx("p",{children:x})]})]})},u)})})]})},pt=a.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,P=a.a`
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
`,ht=()=>e.jsxs(pt,{children:[e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-youtube`})})})})]}),xt=a.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,gt=()=>e.jsxs("div",{children:[e.jsx(xt,{children:"Follow us"}),e.jsx(ht,{})]}),vt=()=>{const t=Z(),l=ee();return r.useEffect(()=>{l(te(t.pathname))},[l]),e.jsxs(ce,{children:[e.jsx(lt,{}),e.jsxs(de,{children:[e.jsx(gt,{}),e.jsx(dt,{})]})]})};export{vt as default};

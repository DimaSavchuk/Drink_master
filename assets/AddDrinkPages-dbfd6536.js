import{s as l,r as o,G as I,o as j,j as e,p,e as z,F,E as q,q as _,t as T,v,w as Q,x as Y,y as X,z as H,n as J,N as K,I as E,u as Z,a as ee,b as te}from"./index-b64f3ff2.js";import{b as oe,c as re,e as ie,o as ne,h as le}from"./axiosConfig-b0f65bc2.js";import{A as ae}from"./SelectOpenArrow.styled-e807d71e.js";import{L as se}from"./LittleLoading-5476ecbb.js";const ce=l.div`
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
`,de=l.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,pe=l.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,he=l.button`
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
`,xe=()=>{const[t,a]=o.useState(null),[s,n]=o.useState(!1),[r,i]=o.useState(null);return o.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const c=await oe("",d);a(c)}catch(c){i(c.message)}finally{n(!1),d.abort()}})()},[]),{drinkGlasses:t,isLoading:s,error:r}},ue=()=>{const[t,a]=o.useState(null),[s,n]=o.useState(!1),[r,i]=o.useState(null);return o.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const c=await re("",d);a(c)}catch(c){i(c.message)}finally{n(!1),d.abort()}})()},[]),{drinkCategories:t,isLoading:s,error:r}},ge=()=>{const[t,a]=o.useState(null),[s,n]=o.useState(!1),[r,i]=o.useState(null);return o.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const c=await ie("",d);a(c)}catch(c){i(c.message)}finally{n(!1),d.abort()}})()},[]),{drinkIngredients:t,isLoading:s,error:r}};function fe(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function me(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function N(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function be(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const ve=l.div`
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
`,we=l.div`
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
`,ke=l.div`
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
`,je=l.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,ye=l.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,Se=l.div`
  position: absolute;
  bottom: 24px;

  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;
`,ze=({setValue:t,fileInputRef:a})=>{const[s,n]=o.useState(""),[r,i]=j("file"),d=x=>{const c=x.currentTarget.files[0]??null,h=c?URL.createObjectURL(c):null;h&&(n(h),t("file",c))};return useEffect(()=>{if(field.value===null){n("");return}},[field]),e.jsxs(ve,{children:[e.jsx("input",{ref:a,type:"file",name:"file",id:"add-file",onChange:d,accept:"image/*"}),e.jsx(ke,{children:e.jsxs("label",{htmlFor:"add-file",children:[s&&a.current.value&&e.jsx(we,{children:e.jsx("img",{id:"uploaded-file",src:s})}),e.jsxs(je,{children:[e.jsx(ye,{children:s?e.jsx(be,{size:16}):e.jsx(N,{size:16})}),s?"Update file":"Add image"]})]})}),i.touched&&i.error?e.jsx(Se,{children:i.error}):null]})},Ie=p.button`
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
`,B=({items:t,title:a,touched:s,error:n})=>{const[r,i]=o.useState(!1),[d,x]=o.useState(""),c=o.useRef(),h=o.useRef(),b=o.useRef(),C=a.toLowerCase(),w=g=>t.filter(m=>m.toLowerCase().includes(g.toLowerCase())),[,f,{setValue:k}]=j({name:C}),L=()=>{i(g=>!g)},y=g=>{L(),k(g),x("")};return o.useEffect(()=>{h&&(x(""),r&&h.current&&h.current.focus())},[r]),o.useEffect(()=>{const g=m=>{c.current&&c.current.contains(m.target)&&i(!0),b.current&&!b.current.contains(m.target)&&i(!1)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}}),e.jsxs(Ee,{children:[e.jsxs(Ie,{type:"button",ref:c,menuOpen:r,children:[e.jsx(Ce,{children:a}),t&&e.jsxs(Fe,{selected:f.value,children:[e.jsx("span",{children:f.value?f.value:""}),e.jsx(V,{isOpen:r})]})]}),r&&t&&e.jsx(e.Fragment,{children:e.jsxs(Le,{ref:b,children:[t.length>20&&e.jsx($e,{ref:h,type:"text",name:`${a}Filter`,placeholder:"Search...",onChange:g=>x(g.target.value)}),w(d).map((g,m)=>e.jsx(Pe,{onClick:()=>y(g),children:g},m))]})}),s&&n?e.jsx($,{children:n}):null]})},Re=({categoriesList:t,glassesList:a,setValue:s,touched:n,errors:r,fileInputRef:i})=>e.jsxs(Te,{children:[e.jsx(ze,{setValue:s,fileInputRef:i}),e.jsxs(Ae,{children:[e.jsxs(D,{children:[e.jsx(A,{htmlFor:"title",children:"Enter item title"}),e.jsx(R,{name:"title",placeholder:"Enter item title"}),n.title&&r.title?e.jsx($,{children:r.title}):null]}),e.jsxs(D,{children:[e.jsx(A,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(R,{name:"recipe",placeholder:"Enter about recipe"}),n.recipe&&r.recipe?e.jsx($,{children:r.recipe}):null]}),e.jsx(B,{items:t,title:"Category",touched:n.category,error:r.category}),e.jsx(B,{items:a,title:"Glass",touched:n.glass,error:r.glass}),e.jsxs(De,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(M,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(M,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),Me=l.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,We=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Be=l.div`
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
`,qe=l.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  /* margin-bottom: 31px; */
`,Ne=l.div`
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
`,Ve=l(F)`
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
`,Ge=l.button`
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
`;l.div`
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
`;l(F)`
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
`;const Oe=l.div`
  position: absolute;
  bottom: -18px;
  left: 18px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
`,Ue=l.div`
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
`,Ke=({items:t,title:a,ingredient:s,index:n})=>{const[r,i]=o.useState(!1),[d,x]=o.useState({id:"",title:""}),[c,h]=o.useState(""),[b,C]=o.useState(!1),w=o.useRef(),f=o.useRef(),k=o.useRef(),L=a.toLowerCase(),[,y,g]=j(`ingredients.${n}.title`),m=u=>t.filter(S=>S.title.toLowerCase().includes(u.toLowerCase())),O=()=>{i(u=>!u)},U=u=>{x(u),O(),h(""),C(!0),s.title=u.title,s.ingredientId=u._id,g.setError("")};return o.useEffect(()=>{f&&(h(""),r&&f.current&&f.current.focus())},[r]),o.useEffect(()=>{const u=S=>{w.current&&w.current.contains(S.target)&&i(!0),k.current&&!k.current.contains(S.target)&&i(!1)};return window.addEventListener("click",u),()=>{window.removeEventListener("click",u)}},[]),e.jsxs(Xe,{children:[e.jsx(_e,{type:"button",ref:w,menuOpen:r,children:t&&e.jsxs(Qe,{selected:b,children:[e.jsx("span",{children:s.title?s.title:"Select"}),e.jsx(V,{isOpen:r})]})}),r&&t&&e.jsx(e.Fragment,{children:e.jsxs(Ye,{ref:k,children:[t.length>20&&e.jsx(Je,{ref:f,type:"text",name:`${L}Filter`,placeholder:"Search...",onChange:u=>h(u.target.value)}),m(c).map(u=>e.jsx(He,{onClick:()=>U(u),children:u.title},u._id))]})}),y.error&&y.touched&&e.jsx(q,{name:`ingredients.${n}.title`,children:u=>e.jsx(Oe,{children:u})})]})},Ze=l.textarea`
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
`,et=l.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,tt=l.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,G=l.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,ot=({items:t,title:a})=>{const s={title:"",measure:""},[,{touched:n,error:r}]=j("ingredients");return e.jsx(_,{name:"ingredients",render:({form:{values:{ingredients:i}},push:d,remove:x})=>e.jsxs(Me,{children:[e.jsxs(We,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Be,{children:[e.jsx("button",{type:"button",onClick:()=>x(),children:e.jsx(me,{size:16})}),e.jsx("span",{children:i.length?i.length:"0"}),e.jsx("button",{type:"button",onClick:()=>d(s),children:e.jsx(N,{size:16})})]})]}),e.jsx("div",{children:i.length>0&&i.map((c,h)=>e.jsxs(qe,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(Ke,{items:t,title:a,ingredient:c,index:h}),e.jsxs(Ne,{children:[e.jsx(Ve,{name:`ingredients.${h}.measure`,placeholder:"1 cl"}),e.jsx(q,{name:`ingredients.${h}.measure`,children:b=>e.jsx(Ue,{children:b})})]}),e.jsx(Ge,{type:"button",onClick:()=>x(h),children:e.jsx(fe,{size:18})})]},h))}),n&&typeof r=="string"?e.jsx(G,{children:r}):null]})})},rt=({error:t,touched:a})=>{const[s]=j("recipePreparation");return e.jsxs(tt,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Ze,{name:"recipePreparation",placeholder:"Enter the recipe",...s}),e.jsx(et,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),a&&t?e.jsx(G,{children:t}):null]})},it=T().shape({title:v().trim().required("Please enter a drink title"),recipe:v().trim().required("Please enter information about the recipe"),category:v().required("Please select a category"),glass:v().required("Please select a glass"),ingredients:Q().of(T().shape({title:v().required("Please select a title"),measure:v().required("Please enter a measure")})).required().min(1,"Select more than 1 item"),file:Y().required("Please add the drink recipe image"),recipePreparation:v().trim().required("Please enter about a recipe")}),nt={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},lt=()=>{const t=o.useRef(),a=(i,d)=>{i.id=J(),ne(i),d.resetForm(),t.current.value=null},s=ue(),n=xe(),r=ge();return e.jsxs(pe,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(X,{initialValues:nt,validationSchema:it,onSubmit:a,children:({setFieldValue:i,touched:d,errors:x})=>e.jsxs(H,{children:[e.jsx(Re,{categoriesList:s.drinkCategories,glassesList:n.drinkGlasses,setValue:i,errors:x,touched:d,fileInputRef:t}),e.jsx(ot,{items:r.drinkIngredients,title:"Ingridients"}),e.jsx(rt,{error:x.recipePreparation,touched:d.recipePreparation}),e.jsx(he,{type:"submit",children:"Add"})]})})]})},at=()=>{const[t,a]=o.useState(null),[s,n]=o.useState(!1),[r,i]=o.useState(null);return o.useEffect(()=>{const d=new AbortController;(async()=>{try{n(!0);const c=await le("",d);a(c.data)}catch(c){i(c.message)}finally{n(!1),d.abort()}})()},[]),{drinksPopular:t,isLoading:s,error:r}},st=l.div`
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
`,ct=l(K)`
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
`,dt=()=>{const{drinksPopular:t,isLoading:a,error:s}=at(),n=t||[],r=3;return e.jsxs(st,{children:[e.jsx("h4",{children:"Popular drinks"}),s&&e.jsx("div",{children:"error"}),a?e.jsx(se,{}):e.jsx("ul",{children:n.map(({drinkThumb:i,drink:d,description:x,_id:c},h)=>{if(h<=r)return e.jsx("li",{children:e.jsxs(ct,{to:`/drinks/${c}`,children:[e.jsx("img",{src:i,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:d}),e.jsx("p",{children:x})]})]})},h)})})]})},pt=l.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,P=l.a`
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
`,ht=()=>e.jsxs(pt,{children:[e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(P,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(E,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-youtube`})})})})]}),xt=l.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,ut=()=>e.jsxs("div",{children:[e.jsx(xt,{children:"Follow us"}),e.jsx(ht,{})]}),vt=()=>{const t=Z(),a=ee();return o.useEffect(()=>{a(te(t.pathname))},[a]),e.jsxs(ce,{children:[e.jsx(lt,{}),e.jsxs(de,{children:[e.jsx(ut,{}),e.jsx(dt,{})]})]})};export{vt as default};

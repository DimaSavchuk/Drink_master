import{s as c,r,G as F,t as j,j as e,v as p,e as z,F as I,E as N,w as Q,x as R,y as v,z as Y,A as H,a as O,B as X,D as J,n as K,N as Z,I as L,u as ee,d as te,b as oe,m as re}from"./index-8dc57b94.js";import{b as ie,c as ne,e as ae,o as se,h as le}from"./axiosConfig-2764ca63.js";import{A as ce}from"./SelectOpenArrow.styled-c05abb67.js";import{L as de}from"./LittleLoading-29bd3615.js";import{a as pe,M as he}from"./Motivation-c75eb0cd.js";import"./LittleLoading.styled-051429da.js";const xe="/Drink_master/assets/motivation-f3c9a525.png",ue=c.div`
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
`,ge=c.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,fe=c.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,me=c.button`
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
`,be=()=>{const[t,l]=r.useState(null),[n,i]=r.useState(!1),[o,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const s=await ie("",d);l(s)}catch(s){a(s.message)}finally{i(!1),d.abort()}})()},[]),{drinkGlasses:t,isLoading:n,error:o}},ve=()=>{const[t,l]=r.useState(null),[n,i]=r.useState(!1),[o,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const s=await ne("",d);l(s)}catch(s){a(s.message)}finally{i(!1),d.abort()}})()},[]),{drinkCategories:t,isLoading:n,error:o}},we=()=>{const[t,l]=r.useState(null),[n,i]=r.useState(!1),[o,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const s=await ae("",d);l(s)}catch(s){a(s.message)}finally{i(!1),d.abort()}})()},[]),{drinkIngredients:t,isLoading:n,error:o}};function ke(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function je(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function V(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function ye(t){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const Se=c.div`
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
`,ze=c.div`
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
`,Fe=c.div`
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
`,Ie=c.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,Ce=c.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,Ee=c.div`
  position: absolute;
  bottom: 24px;

  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: center;
`,Le=({setValue:t,fileInputRef:l})=>{const[n,i]=r.useState(""),[o,a]=j("file"),d=h=>{const s=h.currentTarget.files[0]??null,x=s?URL.createObjectURL(s):null;x&&(i(x),t("file",s))};return useEffect(()=>{if(field.value===null){i("");return}},[field]),e.jsxs(Se,{children:[e.jsx("input",{ref:l,type:"file",name:"file",id:"add-file",onChange:d,accept:"image/*"}),e.jsx(Fe,{children:e.jsxs("label",{htmlFor:"add-file",children:[n&&l.current.value&&e.jsx(ze,{children:e.jsx("img",{id:"uploaded-file",src:n})}),e.jsxs(Ie,{children:[e.jsx(Ce,{children:n?e.jsx(ye,{size:16}):e.jsx(V,{size:16})}),n?"Update file":"Add image"]})]})}),a.touched&&a.error?e.jsx(Ee,{children:a.error}):null]})},De=p.button`
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
`,Pe=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};

  span {
    display: block;
  }
`,Re=p.span`
  color: var(--see-more-link-color);
`,$e=p.div`
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
`,Me=p.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,Te=p.div`
  cursor: pointer;
`,Ae=p.input`
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
`,q=({isOpen:t})=>e.jsx(ce,{open:t,children:e.jsx("use",{href:`${z}#icon-chevron-down`})}),We=p.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Be=p.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,$=p.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,M=p.div`
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
`,T=p(I)`
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
`,A=p.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,W=p(I)`
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
`,Ne=p.div`
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
`,B=({items:t,title:l,touched:n,error:i})=>{const[o,a]=r.useState(!1),[d,h]=r.useState(""),s=r.useRef(),x=r.useRef(),b=r.useRef(),C=l.toLowerCase(),w=g=>t.filter(m=>m.toLowerCase().includes(g.toLowerCase())),[,f,{setValue:k}]=j({name:C}),E=()=>{a(g=>!g)},y=g=>{E(),k(g),h("")};return r.useEffect(()=>{x&&(h(""),o&&x.current&&x.current.focus())},[o]),r.useEffect(()=>{const g=m=>{s.current&&s.current.contains(m.target)&&a(!0),b.current&&!b.current.contains(m.target)&&a(!1)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}}),e.jsxs(Me,{children:[e.jsxs(De,{type:"button",ref:s,menuOpen:o,children:[e.jsx(Re,{children:l}),t&&e.jsxs(Pe,{selected:f.value,children:[e.jsx("span",{children:f.value?f.value:""}),e.jsx(q,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs($e,{ref:b,children:[t.length>20&&e.jsx(Ae,{ref:x,type:"text",name:`${l}Filter`,placeholder:"Search...",onChange:g=>h(g.target.value)}),w(d).map((g,m)=>e.jsx(Te,{onClick:()=>y(g),children:g},m))]})}),n&&i?e.jsx(P,{children:i}):null]})},Oe=({categoriesList:t,glassesList:l,setValue:n,touched:i,errors:o,fileInputRef:a})=>e.jsxs(We,{children:[e.jsx(Le,{setValue:n,fileInputRef:a}),e.jsxs(Be,{children:[e.jsxs(M,{children:[e.jsx($,{htmlFor:"title",children:"Enter item title"}),e.jsx(T,{name:"title",placeholder:"Enter item title"}),i.title&&o.title?e.jsx(P,{children:o.title}):null]}),e.jsxs(M,{children:[e.jsx($,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(T,{name:"recipe",placeholder:"Enter about recipe"}),i.recipe&&o.recipe?e.jsx(P,{children:o.recipe}):null]}),e.jsx(B,{items:t,title:"Category",touched:i.category,error:o.category}),e.jsx(B,{items:l,title:"Glass",touched:i.glass,error:o.glass}),e.jsxs(Ne,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(A,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(W,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(A,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),Ve=c.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,qe=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Ge=c.div`
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
`,_e=c.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  /* margin-bottom: 31px; */
`,Ue=c.div`
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
`,Qe=c(I)`
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
`,Ye=c.button`
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
`;const He=c.div`
  position: absolute;
  bottom: -18px;
  left: 18px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
`,Xe=c.div`
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
`,Je=p.button`
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
`,Ke=p.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t===!1?"var(--see-more-link-color)":"var(--text-color)"};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`,Ze=p.div`
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
`,et=p.div`
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
`,tt=p.div`
  cursor: pointer;
`,ot=p.input`
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
`,rt=({items:t,title:l,ingredient:n,index:i})=>{const[o,a]=r.useState(!1),[d,h]=r.useState({id:"",title:""}),[s,x]=r.useState(""),[b,C]=r.useState(!1),w=r.useRef(),f=r.useRef(),k=r.useRef(),E=l.toLowerCase(),[,y,g]=j(`ingredients.${i}.title`),m=u=>t.filter(S=>S.title.toLowerCase().includes(u.toLowerCase())),_=()=>{a(u=>!u)},U=u=>{h(u),_(),x(""),C(!0),n.title=u.title,n.ingredientId=u._id,g.setError("")};return r.useEffect(()=>{f&&(x(""),o&&f.current&&f.current.focus())},[o]),r.useEffect(()=>{const u=S=>{w.current&&w.current.contains(S.target)&&a(!0),k.current&&!k.current.contains(S.target)&&a(!1)};return window.addEventListener("click",u),()=>{window.removeEventListener("click",u)}},[]),e.jsxs(et,{children:[e.jsx(Je,{type:"button",ref:w,menuOpen:o,children:t&&e.jsxs(Ke,{selected:b,children:[e.jsx("span",{children:n.title?n.title:"Select"}),e.jsx(q,{isOpen:o})]})}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(Ze,{ref:k,children:[t.length>20&&e.jsx(ot,{ref:f,type:"text",name:`${E}Filter`,placeholder:"Search...",onChange:u=>x(u.target.value)}),m(s).map(u=>e.jsx(tt,{onClick:()=>U(u),children:u.title},u._id))]})}),y.error&&y.touched&&e.jsx(N,{name:`ingredients.${i}.title`,children:u=>e.jsx(He,{children:u})})]})},it=c.textarea`
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
`,nt=c.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,at=c.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,G=c.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,st=({items:t,title:l})=>{const n={title:"",measure:""},[,{touched:i,error:o}]=j("ingredients");return e.jsx(Q,{name:"ingredients",render:({form:{values:{ingredients:a}},push:d,remove:h})=>e.jsxs(Ve,{children:[e.jsxs(qe,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Ge,{children:[e.jsx("button",{type:"button",onClick:()=>h(),children:e.jsx(je,{size:16})}),e.jsx("span",{children:a.length?a.length:"0"}),e.jsx("button",{type:"button",onClick:()=>d(n),children:e.jsx(V,{size:16})})]})]}),e.jsx("div",{children:a.length>0&&a.map((s,x)=>e.jsxs(_e,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(rt,{items:t,title:l,ingredient:s,index:x}),e.jsxs(Ue,{children:[e.jsx(Qe,{name:`ingredients.${x}.measure`,placeholder:"1 cl"}),e.jsx(N,{name:`ingredients.${x}.measure`,children:b=>e.jsx(Xe,{children:b})})]}),e.jsx(Ye,{type:"button",onClick:()=>h(x),children:e.jsx(ke,{size:18})})]},x))}),i&&typeof o=="string"?e.jsx(G,{children:o}):null]})})},lt=({error:t,touched:l})=>{const[n]=j("recipePreparation");return e.jsxs(at,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(it,{name:"recipePreparation",placeholder:"Enter the recipe",...n}),e.jsx(nt,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),l&&t?e.jsx(G,{children:t}):null]})},ct=R().shape({title:v().trim().required("Please enter a drink title"),recipe:v().trim().required("Please enter information about the recipe"),category:v().required("Please select a category"),glass:v().required("Please select a glass"),ingredients:Y().of(R().shape({title:v().required("Please select a title"),measure:v().required("Please enter a measure")})).required().min(1,"Select more than 1 item"),file:H().required("Please add the drink recipe image"),recipePreparation:v().trim().required("Please enter about a recipe")}),dt={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},pt=()=>{const t=O(),l=r.useRef(),n=(d,h)=>{d.id=K(),se(d,t),h.resetForm(),l.current.value=null},i=ve(),o=be(),a=we();return e.jsxs(fe,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(X,{initialValues:dt,validationSchema:ct,onSubmit:n,children:({setFieldValue:d,touched:h,errors:s})=>e.jsxs(J,{children:[e.jsx(Oe,{categoriesList:i.drinkCategories,glassesList:o.drinkGlasses,setValue:d,errors:s,touched:h,fileInputRef:l}),e.jsx(st,{items:a.drinkIngredients,title:"Ingridients"}),e.jsx(lt,{error:s.recipePreparation,touched:h.recipePreparation}),e.jsx(me,{type:"submit",children:"Add"})]})})]})},ht=()=>{const[t,l]=r.useState(null),[n,i]=r.useState(!1),[o,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{i(!0);const s=await le("",d);l(s.data)}catch(s){a(s.message)}finally{i(!1),d.abort()}})()},[]),{drinksPopular:t,isLoading:n,error:o}},xt=c.div`
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
`,ut=c(Z)`
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
`,gt=()=>{const{drinksPopular:t,isLoading:l,error:n}=ht(),i=t||[],o=3;return e.jsxs(xt,{children:[e.jsx("h4",{children:"Popular drinks"}),n&&e.jsx("div",{children:"error"}),l?e.jsx(de,{}):e.jsx("ul",{children:i.map(({drinkThumb:a,drink:d,description:h,_id:s},x)=>{if(x<=o)return e.jsx("li",{children:e.jsxs(ut,{to:`/drinks/${s}`,children:[e.jsx("img",{src:a,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:d}),e.jsx("p",{children:h})]})]})},x)})})]})},ft=c.ul`
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
`,mt=()=>e.jsxs(ft,{children:[e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${z}#icon-youtube`})})})})]}),bt=c.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,vt=()=>e.jsxs("div",{children:[e.jsx(bt,{children:"Follow us"}),e.jsx(mt,{})]}),wt="/Drink_master/assets/motivation@2x-64f4a4e4.png",kt=[xe,wt],Ct=()=>{const t=ee(),l=O(),n=te(pe),[i,o]=r.useState(!1);r.useEffect(()=>{n&&o(!0)},[n]),r.useEffect(()=>{const d=localStorage.getItem("wasMotivationFirstDrinkShown");o(d!=="true")},[]),r.useEffect(()=>{l(oe(t.pathname))},[l]);const a=()=>{o(!1),localStorage.setItem("wasMotivationFirstDrinkShown","true")};return e.jsxs(ue,{children:[e.jsx(pt,{}),e.jsxs(ge,{children:[e.jsx(vt,{}),e.jsx(gt,{})]}),e.jsx(re,{in:i,timeout:500,classNames:"motivation",unmountOnExit:!0,mountOnEnter:!0,children:e.jsx(he,{isShown:i,onClose:a,image:kt})})]})};export{Ct as default};

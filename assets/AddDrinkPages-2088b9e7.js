import{s as c,G as I,r as i,j as e,o as p,e as S,F as j,p as M,q as N,t as G,v as w,w as q,x as O,y as U,z as Q,n as _,N as Y,I as A,u as X,a as H,b as J}from"./index-1deecc6a.js";import{A as K}from"./SelectOpenArrow.styled-1acbed9e.js";import{b as Z,c as ee,e as te,o as oe,h as re}from"./axiosConfig-33152748.js";import{L as ie}from"./LittleLoading-b1f54ee5.js";import"./LittleLoading.styled-6c29f536.js";const ne=c.div`
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
`,ae=c.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`;function le(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function se(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function V(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function ce(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const de=c.div`
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
    visibility: hidden;
    width: 0.01;
    height: 0.01;
    overflow: hidden;
  }
`,pe=c.div`
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
`,he=c.div`
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
`,xe=c.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,ge=c.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,ue=({setValue:t})=>{const[r,l]=i.useState(""),o=a=>{const n=a.currentTarget.files[0]??null,s=n?URL.createObjectURL(n):null;s&&(l(s),t("file",n))};return e.jsxs(de,{children:[e.jsx("input",{type:"file",name:"file",id:"add-file",onChange:o,accept:"image/*"}),e.jsx(he,{children:e.jsxs("label",{htmlFor:"add-file",children:[r&&e.jsx(pe,{children:e.jsx("img",{id:"uploaded-file",src:r})}),e.jsxs(xe,{children:[e.jsx(ge,{children:r?e.jsx(ce,{size:16}):e.jsx(V,{size:16})}),r?"Update file":"Add image"]})]})})]})},fe=p.button`
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
`,me=p.span`
  color: var(--see-more-link-color);
`,be=p.div`
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

  /* &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;

    margin-right: 4px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;

    margin-right: 4px;
  } */

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
`,ve=p.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,ke=p.div`
  cursor: pointer;
`,we=p.input`
  display: block;
  /* width: 200px; */
  padding: 4px;

  margin-bottom: 8px;

  /* position: absolute;
  top: -24px;
  right: 0; */

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-style: none;

  /* border-radius: 12px; */
  background-color: var(--button-hover-color);
  border-bottom: 1px solid #f3f3f311;

  /* background: transparent; */

  &:focus {
    color: var(--text-color);
    /* border-bottom: 1px solid #f3f3f3; */
    outline: transparent;
  }

  &::placeholder {
    color: var(--see-more-link-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`,B=({isOpen:t})=>e.jsx(K,{open:t,children:e.jsx("use",{href:`${S}#icon-chevron-down`})}),je=p.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,ye=p.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,E=p.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,R=p.div`
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
`,P=p(j)`
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
`,T=p.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,$=p(j)`
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
`,Se=p.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: var(--text-color);
  }
`,z=p.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: right;
`,W=({items:t,title:r,error:l})=>{const[o,a]=i.useState(!1),[n,s]=i.useState(""),[g,d]=i.useState(""),u=i.useRef(),f=i.useRef(),b=i.useRef(),v=r.toLowerCase(),k=x=>t.filter(m=>m.toLowerCase().includes(x.toLowerCase())),[,,{setValue:C}]=M({name:v}),L=()=>{a(x=>!x)},F=x=>{s(x),L(),C(x),d("")};return i.useEffect(()=>{f&&(d(""),o&&f.current&&f.current.focus())},[o]),i.useEffect(()=>{const x=m=>{u.current&&u.current.contains(m.target)&&a(!0),b.current&&!b.current.contains(m.target)&&a(!1)};return window.addEventListener("click",x),()=>{window.removeEventListener("click",x)}}),e.jsxs(ve,{children:[e.jsxs(fe,{type:"button",ref:u,children:[e.jsx(me,{children:r}),t&&e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{children:n||""}),e.jsx(B,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(be,{ref:b,children:[t.length>20&&e.jsx(we,{ref:f,type:"text",name:`${r}Filter`,placeholder:"Search...",onChange:x=>d(x.target.value)}),k(g).map((x,m)=>e.jsx(ke,{onClick:()=>F(x),children:x},m))]})}),l?e.jsx(z,{children:l}):null]})},ze=({categoriesList:t,glassesList:r,setValue:l,errors:o})=>e.jsxs(je,{children:[e.jsx(ue,{setValue:l}),e.jsxs(ye,{children:[e.jsxs(R,{children:[e.jsx(E,{htmlFor:"title",children:"Enter item title"}),e.jsx(P,{name:"title",placeholder:"Enter item title"}),o.title?e.jsx(z,{children:o.title}):null]}),e.jsxs(R,{children:[e.jsx(E,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(P,{name:"recipe",placeholder:"Enter about recipe"}),o.recipe?e.jsx(z,{children:o.recipe}):null]}),e.jsx(W,{items:t,title:"Category",error:o.category}),e.jsx(W,{items:r,title:"Glass",error:o.glass}),e.jsxs(Se,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx($,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(T,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx($,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(T,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),Ie=c(j)`
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
`,Ce=c.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,Le=c.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,Fe=c.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,Ae=({error:t,setValue:r})=>e.jsxs(Le,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Ie,{name:"recipePreparation",placeholder:"Enter the recipe",onChange:l=>r("recipePreparation",l.target.value),as:"textarea"}),e.jsx(Ce,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),t?e.jsx(Fe,{children:t}):null]}),De=c.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,Ee=c.button`
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
`,Re=()=>{const[t,r]=i.useState(null),[l,o]=i.useState(!1),[a,n]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const d=await Z("",s);r(d)}catch(d){n(d.message)}finally{o(!1),s.abort()}})()},[]),{drinkGlasses:t,isLoading:l,error:a}},Pe=()=>{const[t,r]=i.useState(null),[l,o]=i.useState(!1),[a,n]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const d=await ee("",s);r(d)}catch(d){n(d.message)}finally{o(!1),s.abort()}})()},[]),{drinkCategories:t,isLoading:l,error:a}},Te=()=>{const[t,r]=i.useState(null),[l,o]=i.useState(!1),[a,n]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const d=await te("",s);r(d)}catch(d){n(d.message)}finally{o(!1),s.abort()}})()},[]),{drinkIngredients:t,isLoading:l,error:a}},$e=p.button`
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
`;p.span`
  color: var(--see-more-link-color);
`;const We=p.div`
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

  /* &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;

    margin-right: 4px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;

    margin-right: 4px;
  } */

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
`,Ve=p.div`
  cursor: pointer;
`,Be=p.input`
  display: block;
  /* width: 200px; */
  padding: 4px;

  margin-bottom: 8px;

  /* position: absolute;
  top: -24px;
  right: 0; */

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-style: none;

  /* border-radius: 12px; */
  background-color: var(--button-hover-color);
  border-bottom: 1px solid #f3f3f311;

  /* background: transparent; */

  &:focus {
    color: var(--text-color);
    /* border-bottom: 1px solid #f3f3f3; */
    outline: transparent;
  }

  &::placeholder {
    color: var(--see-more-link-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`,Ne=t=>{const{items:r,title:l,error:o,ingredient:a}=t??{},[n,s]=i.useState(!1),[g,d]=i.useState({id:"",title:""}),[u,f]=i.useState(""),b=i.useRef(),v=i.useRef(),k=i.useRef(),C=l.toLowerCase(),L=h=>r.filter(y=>y.title.toLowerCase().includes(h.toLowerCase())),[,,{setValue:F}]=M({name:C}),x=()=>{s(h=>!h)},m=h=>{console.log("item =>",h),d(h),x(),F(h.title),f(""),a.title=h.title,a.ingredientId=h._id};return i.useEffect(()=>{v&&(f(""),n&&v.current&&v.current.focus())},[n]),i.useEffect(()=>{const h=y=>{b.current&&b.current.contains(y.target)&&s(!0),k.current&&!k.current.contains(y.target)&&s(!1)};return window.addEventListener("click",h),()=>{window.removeEventListener("click",h)}},[]),e.jsxs(Me,{children:[e.jsx($e,{type:"button",ref:b,children:r&&e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{children:g.title?g.title:""}),e.jsx(B,{isOpen:n})]})}),n&&r&&e.jsx(e.Fragment,{children:e.jsxs(We,{ref:k,children:[r.length>20&&e.jsx(Be,{ref:v,type:"text",name:`${l}Filter`,placeholder:"Search...",onChange:h=>f(h.target.value)}),L(u).map(h=>e.jsx(Ve,{onClick:()=>m(h),children:h.title},h.id))]})}),o?e.jsx(z,{children:o}):null]})},Ge=c.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,qe=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Oe=c.div`
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

  margin-bottom: 18px;

  input {
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
  }

  input {
    width: 100px;
  }

  button {
    display: block;
    padding: 0;
    border: none;
    background: none;
    color: var(--see-more-link-color);
  }

  button:hover,
  button:active {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    input {
      flex-basis: 20%;
      width: 100%;
    }

    button {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1440px) {
    input {
      flex-basis: 28%;
    }
  }
`;c.div`
  position: relative;
  /* border-radius: 12px; */
  /* border: none; */
  margin-right: 8px;

  &:focus {
    border: 1px solid var(--text-color);
    outline: none;
  }

  span {
    /* content: ''; */
    display: block;
    position: absolute;
    pointer-events: none;
    top: 16px;
    right: 24px;
    color: var(--text-color);
    /* clip-path: polygon(100% 0%, 0 0%, 50% 100%); */
  }

  select {
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
  }

  option {
    font-size: 14px;
    width: 200px;
    background-color: var(--button-hover-color);
    color: var(--see-more-link-color);
    border-style: none;
  }

  option:hover,
  option:selected {
    background-color: var(--button-hover-color);
    color: var(--see-more-link-color);
  }

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`;c(j)`
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
`;const Qe=({items:t,title:r})=>{const l={title:"",measure:""};return e.jsx(N,{name:"ingredients",render:({form:{values:{ingredients:o}},push:a,remove:n})=>e.jsxs(Ge,{children:[e.jsxs(qe,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Oe,{children:[e.jsx("button",{type:"button",onClick:()=>n(),children:e.jsx(se,{size:16})}),e.jsx("span",{children:o.length?o.length:"0"}),e.jsx("button",{type:"button",onClick:()=>a(l),children:e.jsx(V,{size:16})})]})]}),e.jsx("div",{children:o.length>0&&o.map((s,g)=>e.jsxs(Ue,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(Ne,{items:t,title:r,ingredient:s}),e.jsx(j,{name:`ingredients.${g}.measure`,placeholder:"1 cl"}),e.jsx("button",{type:"button",onClick:()=>n(g),children:e.jsx(le,{size:18})})]},g))})]})})};G().shape({title:w().trim().required("Please enter a drink title"),recipe:w().trim().required("Please enter information about the recipe"),category:w().required("Must have more than 1 item"),glass:w().required("Must have more than 1 item"),ingredients:q().length(1,"You must have more than 1 item").required(),file:O().test("file","Please select a valid image file",t=>t?t&&t.type.startsWith("image/"):!0),recipePreparation:w().trim().required("enter about a recipe")});const _e={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},Ye=()=>{const t=(a,n)=>{a.id=_(),oe(a),n.resetForm()},r=Pe(),l=Re(),o=Te();return e.jsxs(De,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(U,{initialValues:_e,onSubmit:t,children:({setFieldValue:a,errors:n})=>e.jsxs(Q,{children:[e.jsx(ze,{categoriesList:r.drinkCategories,glassesList:l.drinkGlasses,setValue:a,errors:n}),e.jsx(Qe,{items:o.drinkIngredients,title:"Ingridients"}),e.jsx(Ae,{setValue:a,error:n.recipePreparation}),e.jsx(Ee,{type:"submit",children:"Add"})]})})]})},Xe=()=>{const[t,r]=i.useState(null),[l,o]=i.useState(!1),[a,n]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const d=await re("",s);r(d.data)}catch(d){n(d.message)}finally{o(!1),s.abort()}})()},[]),{drinksPopular:t,isLoading:l,error:a}},He=c.div`
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
`,Je=c(Y)`
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
`,Ke=()=>{const{drinksPopular:t,isLoading:r,error:l}=Xe(),o=t||[],a=3;return e.jsxs(He,{children:[e.jsx("h4",{children:"Popular drinks"}),l&&e.jsx("div",{children:"error"}),r?e.jsx(ie,{}):e.jsx("ul",{children:o.map(({drinkThumb:n,drink:s,description:g,_id:d},u)=>{if(u<=a)return e.jsx("li",{children:e.jsxs(Je,{to:`/drinks/${d}`,children:[e.jsx("img",{src:n,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:s}),e.jsx("p",{children:g})]})]})},u)})})]})},Ze=c.ul`
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
    /* border: 1px solid rgba(221, 255, 0, 0.2); */
    background-color: var(--button-color);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--button-hover-color);
  }
`,et=()=>e.jsxs(Ze,{children:[e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(A,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(A,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(D,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(A,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-youtube`})})})})]}),tt=c.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,ot=()=>e.jsxs("div",{children:[e.jsx(tt,{children:"Follow us"}),e.jsx(et,{})]}),st=()=>{const t=X(),r=H();return i.useEffect(()=>{r(J(t.pathname))},[r]),e.jsxs(ne,{children:[e.jsx(Ye,{}),e.jsxs(ae,{children:[e.jsx(ot,{}),e.jsx(Ke,{})]})]})};export{st as default};

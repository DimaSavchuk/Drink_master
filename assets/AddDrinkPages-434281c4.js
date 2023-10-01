import{s as l,F as m,G as w,j as e,o as M,p as $,r as i,q as p,f as v,t as B,v as N,w as f,x as G,y as q,z as U,A as V,n as O,N as _,I as j,u as Q,b as Y,c as J}from"./index-d210b990.js";import{A as X}from"./SelectOpenArrow.styled-c127d7d7.js";import{b as H,c as K,e as Z,o as ee,h as te}from"./axiosConfig-12b05b10.js";const oe=l.div`
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
`,re=l.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,ie=l.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,ne=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,ae=l.div`
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
`,le=l.div`
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
`,se=l.div`
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
`;l(m)`
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
`;function ce(t){return w({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function de(t){return w({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function L(t){return w({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function pe(t){return w({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const he=({ingredientsList:t})=>{const r={title:"",measure:""};return e.jsx(M,{name:"ingredients",render:({form:{values:{ingredients:n}},push:o,remove:a})=>e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(ae,{children:[e.jsx("button",{type:"button",onClick:()=>a(),children:e.jsx(de,{size:16})}),e.jsx("span",{children:n.length?n.length:"0"}),e.jsx("button",{type:"button",onClick:()=>o(r),children:e.jsx(L,{size:16})})]})]}),e.jsx("div",{children:n.length>0&&n.map((d,s)=>e.jsxs(le,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsxs(se,{children:[e.jsx(m,{name:`ingredients.${s}.title`,as:"select",children:t&&t.map(x=>{const{title:c,_id:g}=x;return e.jsx("option",{value:JSON.stringify({title:c,_id:g}),children:x.title},x._id)})}),e.jsx("span",{children:e.jsx($,{size:18})})]}),e.jsx(m,{name:`ingredients.${s}.measure`,placeholder:"1 cl"}),e.jsx("button",{type:"button",onClick:()=>a(s),children:e.jsx(ce,{size:18})})]},s))})]})})},xe=l.div`
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
`,ge=l.div`
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
`,ue=l.div`
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
`,me=l.div`
  height: 90px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  z-index: 1;
`,fe=l.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,be=({setValue:t})=>{const[r,n]=i.useState(""),o=a=>{const d=a.currentTarget.files[0]??null,s=d?URL.createObjectURL(d):null;s&&(n(s),t("file",d))};return e.jsxs(xe,{children:[e.jsx("input",{type:"file",name:"file",id:"add-file",onChange:o,accept:"image/*"}),e.jsx(ue,{children:e.jsxs("label",{htmlFor:"add-file",children:[r&&e.jsx(ge,{children:e.jsx("img",{id:"uploaded-file",src:r})}),e.jsxs(me,{children:[e.jsx(fe,{children:r?e.jsx(pe,{size:16}):e.jsx(L,{size:16})}),r?"Update file":"Add image"]})]})})]})},ve=p.button`
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
`,we=p.span`
  color: var(--see-more-link-color);
`,ke=p.div`
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
`,je=p.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,ye=p.div`
  cursor: pointer;
`,ze=p.input`
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
`,Se=({isOpen:t})=>e.jsx(X,{open:t,children:e.jsx("use",{href:`${v}#icon-chevron-down`})}),Fe=p.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Ie=p.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,S=p.label`
  position: absolute;
  top: 0;
  left: 0;

  color: var(--text-color);
  opacity: 0.5;
`,F=p.div`
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
`,I=p(m)`
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
`,C=p(m)`
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
`,Ae=p.div`
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
`,D=({items:t,title:r,error:n})=>{const[o,a]=i.useState(!1),[d,s]=i.useState(""),[x,c]=i.useState(""),g=i.useRef(),b=i.useRef(),k=i.useRef(),E=r.toLowerCase(),P=h=>t.filter(u=>u.toLowerCase().includes(h.toLowerCase())),[,,{setValue:T}]=B({name:E}),R=()=>{a(h=>!h)},W=h=>{s(h),R(),T(h),c("")};return i.useEffect(()=>{b&&(c(""),o&&b.current&&b.current.focus())},[o]),i.useEffect(()=>{const h=u=>{g.current&&g.current.contains(u.target)&&a(!0),k.current&&!k.current.contains(u.target)&&a(!1)};return window.addEventListener("click",h),()=>{window.removeEventListener("click",h)}}),e.jsxs(je,{children:[e.jsxs(ve,{type:"button",ref:g,children:[e.jsx(we,{children:r}),t&&e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{children:d||""}),e.jsx(Se,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(ke,{ref:k,children:[t.length>20&&e.jsx(ze,{ref:b,type:"text",name:`${r}Filter`,placeholder:"Search...",onChange:h=>c(h.target.value)}),P(x).map((h,u)=>e.jsx(ye,{onClick:()=>W(h),children:h},u))]})}),n?e.jsx(z,{children:n}):null]})},Ce=({categoriesList:t,glassesList:r,setValue:n,errors:o})=>e.jsxs(Fe,{children:[e.jsx(be,{setValue:n}),e.jsxs(Ie,{children:[e.jsxs(F,{children:[e.jsx(S,{htmlFor:"title",children:"Enter item title"}),e.jsx(I,{name:"title",placeholder:"Enter item title"}),o.title?e.jsx(z,{children:o.title}):null]}),e.jsxs(F,{children:[e.jsx(S,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(I,{name:"recipe",placeholder:"Enter about recipe"}),o.recipe?e.jsx(z,{children:o.recipe}):null]}),e.jsx(D,{items:t,title:"Category",error:o.category}),e.jsx(D,{items:r,title:"Glass",error:o.glass}),e.jsxs(Ae,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(C,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx(A,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(C,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx(A,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),De=l(m)`
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
`,Le=l.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,Ee=l.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,Pe=l.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,Te=({error:t,setValue:r})=>e.jsxs(Ee,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(De,{name:"recipePreparation",placeholder:"Enter the recipe",onChange:n=>r("recipePreparation",n.target.value),as:"textarea"}),e.jsx(Le,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),t?e.jsx(Pe,{children:t}):null]}),Re=l.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,We=l.button`
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
`,Me=()=>{const[t,r]=i.useState(null),[n,o]=i.useState(!1),[a,d]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const c=await H("",s);r(c)}catch(c){d(c.message)}finally{o(!1),s.abort()}})()},[]),{drinkGlasses:t,isLoading:n,error:a}},$e=()=>{const[t,r]=i.useState(null),[n,o]=i.useState(!1),[a,d]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const c=await K("",s);r(c)}catch(c){d(c.message)}finally{o(!1),s.abort()}})()},[]),{drinkCategories:t,isLoading:n,error:a}},Be=()=>{const[t,r]=i.useState(null),[n,o]=i.useState(!1),[a,d]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const c=await Z("",s);r(c)}catch(c){d(c.message)}finally{o(!1),s.abort()}})()},[]),{drinkIngredients:t,isLoading:n,error:a}},Ne=N().shape({title:f().trim().required("Please enter a drink title"),recipe:f().trim().required("Please enter information about the recipe"),category:f().required("Must have more than 1 item"),glass:f().required("Must have more than 1 item"),ingredients:G().length(1,"You must have more than 1 item").required(),file:q().test("file","Please select a valid image file",t=>t?t&&t.type.startsWith("image/"):!0),recipePreparation:f().trim().required("enter about a recipe")}),Ge={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},qe=()=>{const t=(a,d)=>{a.id=O(),ee(a),d.resetForm()},r=$e(),n=Me(),o=Be();return e.jsxs(Re,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(U,{initialValues:Ge,validationSchema:Ne,onSubmit:t,children:({setFieldValue:a,errors:d})=>e.jsxs(V,{children:[e.jsx(Ce,{categoriesList:r.drinkCategories,glassesList:n.drinkGlasses,setValue:a,errors:d}),e.jsx(he,{ingredientsList:o.drinkIngredients}),e.jsx(Te,{setValue:a,error:d.recipePreparation}),e.jsx(We,{type:"submit",children:"Add"})]})})]})},Ue=()=>{const[t,r]=i.useState(null),[n,o]=i.useState(!1),[a,d]=i.useState(null);return i.useEffect(()=>{const s=new AbortController;(async()=>{try{o(!0);const c=await te("",s);r(c.data)}catch(c){d(c.message)}finally{o(!1),s.abort()}})()},[]),{drinksPopular:t,isLoading:n,error:a}},Ve=l.div`
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
`,Oe=l(_)`
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
`,_e=()=>e.jsx("div",{style:{color:"white",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx("svg",{id:"icon-drink",viewBox:"0 0 48 48",fill:"currentColor",width:"192",height:"192",children:e.jsx("path",{d:`M16 30v11c0 1.1-0.9 2-2 2l-5.5 0c-1.38 0-2.5 
        1.12-2.5 2.5s1.12 2.5 2.5 2.5h20c1.38 0 2.5-1.12
        2.5-2.5s-1.12-2.5-2.5-2.5h-5.5c-1.1 0-2-0.9-2-2v-11l8.090-8.189c1.96
        1.378 4.34 2.189 6.91 2.189 6.63 0 12-5.37 12-12s-5.37-12-12-12c-6.29
        0-11.45 4.84-11.96 11h-22.060c-1.090 0-1.98 0.9-1.98 2 0 0.561 0.23
        1.070 0.6 1.431l15.4 15.569zM32.7 18.181l3.72-3.771c0.359-0.36
        0.58-0.86 0.58-1.41 0-1.1-0.891-2-1.98-2h-5.95c0.491-3.39 3.4-6
        6.931-6 3.87 0 7 3.13 7 7s-3.13 7-7 7c-1.19-0-2.321-0.3-3.301-0.819z`})})}),Qe=()=>{const{drinksPopular:t,isLoading:r,error:n}=Ue(),o=t||[],a=3;return e.jsxs(Ve,{children:[e.jsx("h4",{children:"Popular drinks"}),n&&e.jsx("div",{children:"error"}),r?e.jsx(_e,{}):e.jsx("ul",{children:o.map(({drinkThumb:d,drink:s,description:x,_id:c},g)=>{if(g<=a)return e.jsx("li",{children:e.jsxs(Oe,{to:`/drinks/${c}`,children:[e.jsx("img",{src:d,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:s}),e.jsx("p",{children:x})]})]})},g)})})]})},Ye=l.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,y=l.a`
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
`,Je=()=>e.jsxs(Ye,{children:[e.jsx("li",{children:e.jsx(y,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(j,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${v}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(y,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(j,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${v}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(y,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(j,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${v}#icon-youtube`})})})})]}),Xe=l.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,He=()=>e.jsxs("div",{children:[e.jsx(Xe,{children:"Follow us"}),e.jsx(Je,{})]}),tt=()=>{const t=Q(),r=Y();return i.useEffect(()=>{r(J(t.pathname))},[r]),e.jsxs(oe,{children:[e.jsx(qe,{}),e.jsxs(re,{children:[e.jsx(He,{}),e.jsx(Qe,{})]})]})};export{tt as default};
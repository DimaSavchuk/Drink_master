import{s as l,r,G as I,j as e,o as h,e as S,F as j,p as B,q as V,t as N,v as k,w as G,x as O,y as q,z as U,n as _,N as Q,I as L,u as Y,a as X,b as H}from"./index-e0950cf9.js";import{b as J,c as K,e as Z,o as ee,h as te}from"./axiosConfig-977226f0.js";import{A as oe}from"./SelectOpenArrow.styled-7ca23518.js";import{L as re}from"./LittleLoading-f3f99a97.js";import"./LittleLoading.styled-a5d069d9.js";const ie=l.div`
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
`,ne=l.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`,ae=l.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`,le=l.button`
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
`,se=()=>{const[t,i]=r.useState(null),[s,o]=r.useState(!1),[n,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{o(!0);const p=await J("",d);i(p)}catch(p){a(p.message)}finally{o(!1),d.abort()}})()},[]),{drinkGlasses:t,isLoading:s,error:n}},ce=()=>{const[t,i]=r.useState(null),[s,o]=r.useState(!1),[n,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{o(!0);const p=await K("",d);i(p)}catch(p){a(p.message)}finally{o(!1),d.abort()}})()},[]),{drinkCategories:t,isLoading:s,error:n}},de=()=>{const[t,i]=r.useState(null),[s,o]=r.useState(!1),[n,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{o(!0);const p=await Z("",d);i(p)}catch(p){a(p.message)}finally{o(!1),d.abort()}})()},[]),{drinkIngredients:t,isLoading:s,error:n}};function pe(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(t)}function he(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"}}]})(t)}function M(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(t)}function xe(t){return I({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"}}]})(t)}const ge=l.div`
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
`,ue=l.div`
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
`,fe=l.div`
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
`,be=l.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #161f37;

  border-radius: 6px;
  background-color: #f3f3f3;
`,ve=({setValue:t})=>{const[i,s]=r.useState(""),o=n=>{const a=n.currentTarget.files[0]??null,d=a?URL.createObjectURL(a):null;d&&(s(d),t("file",a))};return e.jsxs(ge,{children:[e.jsx("input",{type:"file",name:"file",id:"add-file",onChange:o,accept:"image/*"}),e.jsx(fe,{children:e.jsxs("label",{htmlFor:"add-file",children:[i&&e.jsx(ue,{children:e.jsx("img",{id:"uploaded-file",src:i})}),e.jsxs(me,{children:[e.jsx(be,{children:i?e.jsx(xe,{size:16}):e.jsx(M,{size:16})}),i?"Update file":"Add image"]})]})})]})},we=h.button`
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
`,ke=h.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t?"var(--text-color)":"var(--see-more-link-color)"};

  span {
    display: block;
  }
`,je=h.span`
  color: var(--see-more-link-color);
`,ye=h.div`
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
`,Se=h.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`,ze=h.div`
  cursor: pointer;
`,Ie=h.input`
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
`,W=({isOpen:t})=>e.jsx(oe,{open:t,children:e.jsx("use",{href:`${S}#icon-chevron-down`})}),Ce=h.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`,Fe=h.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`,A=h.label`
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
`,P=h(j)`
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
`,$=h.label`
  margin-left: 4px;

  color: var(--see-more-link-color);

  &:first-of-type {
    margin-right: 14px;
  }
`,R=h(j)`
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
`,Le=h.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: var(--text-color);
  }
`,z=h.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: right;
`,T=({items:t,title:i,error:s})=>{const[o,n]=r.useState(!1),[a,d]=r.useState(""),[g,p]=r.useState(""),u=r.useRef(),f=r.useRef(),b=r.useRef(),v=i.toLowerCase(),m=x=>t.filter(c=>c.toLowerCase().includes(x.toLowerCase())),[,,{setValue:w}]=B({name:v}),C=()=>{n(x=>!x)},F=x=>{d(x),C(),w(x),p("")};return r.useEffect(()=>{f&&(p(""),o&&f.current&&f.current.focus())},[o]),r.useEffect(()=>{const x=c=>{u.current&&u.current.contains(c.target)&&n(!0),b.current&&!b.current.contains(c.target)&&n(!1)};return window.addEventListener("click",x),()=>{window.removeEventListener("click",x)}}),e.jsxs(Se,{children:[e.jsxs(we,{type:"button",ref:u,menuOpen:o,children:[e.jsx(je,{children:i}),t&&e.jsxs(ke,{selected:a,children:[e.jsx("span",{children:a||""}),e.jsx(W,{isOpen:o})]})]}),o&&t&&e.jsx(e.Fragment,{children:e.jsxs(ye,{ref:b,children:[t.length>20&&e.jsx(Ie,{ref:f,type:"text",name:`${i}Filter`,placeholder:"Search...",onChange:x=>p(x.target.value)}),m(g).map((x,c)=>e.jsx(ze,{onClick:()=>F(x),children:x},c))]})}),s?e.jsx(z,{children:s}):null]})},Ee=({categoriesList:t,glassesList:i,setValue:s,errors:o})=>e.jsxs(Ce,{children:[e.jsx(ve,{setValue:s}),e.jsxs(Fe,{children:[e.jsxs(D,{children:[e.jsx(A,{htmlFor:"title",children:"Enter item title"}),e.jsx(P,{name:"title",placeholder:"Enter item title"}),o.title?e.jsx(z,{children:o.title}):null]}),e.jsxs(D,{children:[e.jsx(A,{htmlFor:"recipe",children:"Enter about recipe"}),e.jsx(P,{name:"recipe",placeholder:"Enter about recipe"}),o.recipe?e.jsx(z,{children:o.recipe}):null]}),e.jsx(T,{items:t,title:"Category",error:o.category}),e.jsx(T,{items:i,title:"Glass",error:o.glass}),e.jsxs(Le,{role:"cocktailTypeSelect","aria-labelledby":"cocktailTypeSelect-group",children:[e.jsxs("div",{children:[e.jsx(R,{type:"radio",name:"alcoholicType",id:"radioAlco",value:"Alcoholic"}),e.jsx($,{htmlFor:"radioAlco",children:"Alcoholic"})]}),e.jsxs("div",{children:[e.jsx(R,{type:"radio",name:"alcoholicType",id:"radioNonAlco",value:"Non-alcoholic"}),e.jsx($,{htmlFor:"radioNonAlco",children:"Non-alcoholic"})]})]})]})]}),Ae=l.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`,De=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`,Pe=l.div`
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
`,$e=l.div`
  display: flex;
  align-items: center;

  margin-bottom: 18px;
`,Re=l(j)`
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
`,Te=l.button`
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
`;l(j)`
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
`;const Me=h.button`
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
`,We=h.div`
  display: flex;
  align-items: center;

  color: ${({selected:t})=>t===!1?"var(--see-more-link-color)":"var(--text-color)"};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`,Be=h.div`
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
`,Ve=h.div`
  margin-right: 8px;
  width: 100%;

  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`,Ne=h.div`
  cursor: pointer;
`,Ge=h.input`
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
`,Oe=({items:t,title:i,error:s,ingredient:o})=>{const[n,a]=r.useState(!1),[d,g]=r.useState({id:"",title:""}),[p,u]=r.useState(""),[f,b]=r.useState(!1),v=r.useRef(),m=r.useRef(),w=r.useRef();i.toLowerCase();const C=c=>t.filter(y=>y.title.toLowerCase().includes(c.toLowerCase())),F=()=>{a(c=>!c)},x=c=>{console.log("item =>",c),g(c),F(),u(""),b(!0),o.title=c.title,o.ingredientId=c._id};return r.useEffect(()=>{m&&(u(""),n&&m.current&&m.current.focus())},[n]),r.useEffect(()=>{const c=y=>{v.current&&v.current.contains(y.target)&&a(!0),w.current&&!w.current.contains(y.target)&&a(!1)};return window.addEventListener("click",c),()=>{window.removeEventListener("click",c)}},[]),e.jsxs(Ve,{children:[e.jsx(Me,{type:"button",ref:v,menuOpen:n,children:t&&e.jsxs(We,{selected:f,children:[e.jsx("span",{children:d.title?d.title:"Select"}),e.jsx(W,{isOpen:n})]})}),n&&t&&e.jsx(e.Fragment,{children:e.jsxs(Be,{ref:w,children:[t.length>20&&e.jsx(Ge,{ref:m,type:"text",name:`${i}Filter`,placeholder:"Search...",onChange:c=>u(c.target.value)}),C(p).map(c=>e.jsx(Ne,{onClick:()=>x(c),children:c.title},c._id))]})}),s?e.jsx(z,{children:s}):null]})},qe=({items:t,title:i})=>{const s={title:"",measure:""};return e.jsx(V,{name:"ingredients",render:({form:{values:{ingredients:o}},push:n,remove:a})=>e.jsxs(Ae,{children:[e.jsxs(De,{children:[e.jsx("h3",{children:"Ingredients"}),e.jsxs(Pe,{children:[e.jsx("button",{type:"button",onClick:()=>a(),children:e.jsx(he,{size:16})}),e.jsx("span",{children:o.length?o.length:"0"}),e.jsx("button",{type:"button",onClick:()=>n(s),children:e.jsx(M,{size:16})})]})]}),e.jsx("div",{children:o.length>0&&o.map((d,g)=>e.jsxs($e,{role:"ingredientsSelect","aria-labelledby":"ingridientsSelect-group",children:[e.jsx(Oe,{items:t,title:i,ingredient:d}),e.jsx(Re,{name:`ingredients.${g}.measure`,placeholder:"1 cl"}),e.jsx(Te,{type:"button",onClick:()=>a(g),children:e.jsx(pe,{size:18})})]},g))})]})})},Ue=l(j)`
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
`,_e=l.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: var(--see-more-link-color);

  transition: 200ms ease transform 100ms;
`,Qe=l.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`,Ye=l.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`,Xe=({error:t,setValue:i})=>e.jsxs(Qe,{children:[e.jsx("h3",{children:"Recipe Preparation"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Ue,{name:"recipePreparation",placeholder:"Enter the recipe",onChange:s=>i("recipePreparation",s.target.value),as:"textarea"}),e.jsx(_e,{htmlFor:"recipePreparation",children:"Enter the recipe"})]}),t?e.jsx(Ye,{children:t}):null]});N().shape({title:k().trim().required("Please enter a drink title"),recipe:k().trim().required("Please enter information about the recipe"),category:k().required("Must have more than 1 item"),glass:k().required("Must have more than 1 item"),ingredients:G().length(1,"You must have more than 1 item").required(),file:O().test("file","Please select a valid image file",t=>t?t&&t.type.startsWith("image/"):!0),recipePreparation:k().trim().required("enter about a recipe")});const He={title:"",recipe:"",category:"",glass:"",alcoholicType:"Non-alcoholic",ingredients:[],file:null,recipePreparation:""},Je=()=>{const t=(n,a)=>{n.id=_(),ee(n),a.resetForm()},i=ce(),s=se(),o=de();return e.jsxs(ae,{children:[e.jsx("h2",{children:"Add drink"}),e.jsx(q,{initialValues:He,onSubmit:t,children:({setFieldValue:n,errors:a})=>e.jsxs(U,{children:[e.jsx(Ee,{categoriesList:i.drinkCategories,glassesList:s.drinkGlasses,setValue:n,errors:a}),e.jsx(qe,{items:o.drinkIngredients,title:"Ingridients"}),e.jsx(Xe,{setValue:n,error:a.recipePreparation}),e.jsx(le,{type:"submit",children:"Add"})]})})]})},Ke=()=>{const[t,i]=r.useState(null),[s,o]=r.useState(!1),[n,a]=r.useState(null);return r.useEffect(()=>{const d=new AbortController;(async()=>{try{o(!0);const p=await te("",d);i(p.data)}catch(p){a(p.message)}finally{o(!1),d.abort()}})()},[]),{drinksPopular:t,isLoading:s,error:n}},Ze=l.div`
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
`,et=l(Q)`
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
`,tt=()=>{const{drinksPopular:t,isLoading:i,error:s}=Ke(),o=t||[],n=3;return e.jsxs(Ze,{children:[e.jsx("h4",{children:"Popular drinks"}),s&&e.jsx("div",{children:"error"}),i?e.jsx(re,{}):e.jsx("ul",{children:o.map(({drinkThumb:a,drink:d,description:g,_id:p},u)=>{if(u<=n)return e.jsx("li",{children:e.jsxs(et,{to:`/drinks/${p}`,children:[e.jsx("img",{src:a,width:90,height:90}),e.jsxs("div",{children:[e.jsx("h6",{children:d}),e.jsx("p",{children:g})]})]})},u)})})]})},ot=l.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`,E=l.a`
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
`,rt=()=>e.jsxs(ot,{children:[e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.facebook.com/goITclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-facebook`})})})}),e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.instagram.com/goitclub/",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-instagram`})})})}),e.jsx("li",{children:e.jsx(E,{target:"_blank",href:"https://www.youtube.com/c/GoIT",children:e.jsx(L,{size:"22px",size768:"28px",fill:"#f3f3f3",children:e.jsx("use",{href:`${S}#icon-youtube`})})})})]}),it=l.div`
  font-size: 24px;
  line-height: 1.33em;
  color: var(--text-color);

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`,nt=()=>e.jsxs("div",{children:[e.jsx(it,{children:"Follow us"}),e.jsx(rt,{})]}),pt=()=>{const t=Y(),i=X();return r.useEffect(()=>{i(H(t.pathname))},[i]),e.jsxs(ie,{children:[e.jsx(Je,{}),e.jsxs(ne,{children:[e.jsx(nt,{}),e.jsx(tt,{})]})]})};export{pt as default};

import{r as e,f as E,j as s,C as y,a as L,u as v,b as D,c as k}from"./index-c618a562.js";import{f as R,u as c,c as b,a as O,d as I,S as M,T,C as z,h as A}from"./countElements-5075e4ac.js";import{P as F}from"./Paginator-94ef7594.js";import{I as N}from"./InfoComponent-b0f5a2ef.js";import"./axiosConfig-245658d0.js";const V=()=>{const[t,n]=e.useState([]),[h,m]=e.useState(!1),[d,i]=E(),f=d.get("page")?Number(d.get("page"))-1:0,[o,l]=e.useState(f),[a,p]=e.useState(null),[P,x]=e.useState(3),[C,g]=e.useState(!1);e.useEffect(()=>{R(m,n)},[]);const w=o*a;e.useEffect(()=>{const{newLimit:r,newPageRangeDisplayed:j}=c();return p(r),x(j),window.addEventListener("resize",c),window.scrollTo({top:0,behavior:"smooth"}),()=>{window.removeEventListener("resize",c)}},[]),e.useEffect(()=>{t.length>a?g(!0):g(!1)},[t.length,a]);const{numberOfElementsOnPage:u}=b(t,o,a);e.useEffect(()=>{O(u,o,i,l)},[u,o,i]);const S=I(t,w,a,n);return s.jsx(M,{children:s.jsx(y,{children:s.jsxs("div",{children:[s.jsx(T,{children:"My drinks"}),h?s.jsx(L,{}):t.length>0?s.jsxs(s.Fragment,{children:[s.jsx(z,{children:S}),C&&s.jsx(F,{limit:a,currentPage:o,itemsLength:t.length,handlePageChange:r=>A(r,i,l),pageRangeDisplayed:P})]}):s.jsx(N,{children:"You haven't added any own cocktails yet"})]})})})},J=()=>{const t=v(),n=D();return e.useEffect(()=>{n(k(t.pathname))},[n]),s.jsx(V,{})};export{J as default};

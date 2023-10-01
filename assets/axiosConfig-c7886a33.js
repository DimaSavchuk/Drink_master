import{B as s}from"./index-9504d94d.js";const p=async()=>{try{return(await s.get("/drinks/favorite")).data.data}catch(e){console.error("Помилка при отриманні даних:",e)}},l=async e=>{try{return(await s.delete("/drinks/favorite/remove",{data:{recipeId:e}})).data.data}catch(r){console.error("Помилка при отриманні даних:",r)}},g=async e=>{try{return(await s.post("/drinks/favorite/add",{recipeId:e})).data.data}catch(r){console.error("Помилка при отриманні даних:",r)}},y=async(e,r)=>{const{data:o}=await s.get(`/drinks/${e}`,{signal:r.signal});return o},h=async()=>{try{return(await s.get("/drinks/own")).data.data}catch(e){console.error("Помилка при отриманні даних:",e)}},w=async e=>{try{return(await s.delete("/drinks/own/remove",{data:{recipeId:e}})).data.data}catch(r){console.error("Помилка при отриманні даних:",r)}},k=async()=>{try{return(await s.get("/filters/categories")).data.categories}catch(e){console.error("Помилка при отриманні даних про категорії: ",e)}},f=async()=>{try{return(await s.get("/filters/glasses")).data.glasses}catch(e){console.error("Помилка при отриманні даних про категорії: ",e)}},u=async()=>{try{return(await s.get("/filters/ingredients")).data}catch(e){console.error("Помилка при отриманні даних про категорії: ",e)}},m=async()=>{try{const e=await s.get("/drinks/popular");return console.log(e.data),e.data}catch(e){console.error("Помилка при отриманні даних: ",e)}},D=async()=>{try{return(await s.get("/drinks/homepage")).data.data}catch(e){console.error("Помилка при отриманні даних на головну сторінку: ",e)}},I=async e=>{const r=e.ingredients.map(({measure:n,title:c})=>{const a=JSON.parse(c);return{title:a.title,ingredientId:a._id,measure:n}}),o=JSON.stringify(r);let t=new FormData;t.append("cocktail",e.file),t.append("drink",e.title),t.append("category",e.category),t.append("alcoholic",e.alcoholicType),t.append("glass",e.glass),t.append("description",e.recipe),t.append("instructions",e.recipePreparation),t.append("ingredients",o),s.post("/drinks/own/add",t,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{console.log(n)}).catch(n=>{console.log(n)})};export{g as a,f as b,k as c,l as d,u as e,D as f,y as g,m as h,w as i,p as j,h as k,I as o};

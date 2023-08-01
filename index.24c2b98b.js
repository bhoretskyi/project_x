const o=document.querySelector(".book-kategories-js");(async function(){const o=await fetch("https://books-backend.p.goit.global/books/category-list");return await o.json()})().then((e=>{if(!e)throw new Error("error");return console.log(e),e.map((e=>o.insertAdjacentHTML("beforeend",`<h3>${e.list_name}</h3>`)))})).catch((o=>console.log(o)));
//# sourceMappingURL=index.24c2b98b.js.map

async function t(){const t=await fetch("https://books-backend.p.goit.global/books/top-books");return await t.json()}async function e(t){const e=await fetch(`https://books-backend.p.goit.global/books/${t}`);return await e.json()}async function o(t){const e=await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`);return await e.json()}const n=document.querySelector(".modal-content"),i=document.querySelector(".close"),a=document.querySelector(".book-category-title-container"),c=document.querySelector(".all-categories-js"),s=document.querySelector(".book-kategories-list-js"),r=document.querySelector(".books-by-category");function l(){r.innerHTML="",a.innerHTML='<h2>Best Sellers <span class="last-title-word">Books</span></h2>',t().then((t=>{t.map((t=>{r.insertAdjacentHTML("beforeend",`\n  <h2>${t.list_name}</h2>\n  `),t.books.map((e=>{if(e.list_name===t.list_name&&(r.insertAdjacentHTML("beforeend",`<div id="${e._id}" hidden>\n          <img src="${e.book_image}" alt="" loading="lazy" width="335">\n          <h4>${e.title}</h4>\n          <p>${e.author}</p>\n          <button type="button"> See more</button>\n      </div>`),t.books[0].title===e.title)){document.getElementById(e._id).hidden=!1}}))}))}))}i.addEventListener("click",(function(){document.getElementById("myModal").style.display="none"})),r.addEventListener("click",(t=>{t.target.parentElement.id&&e(t.target.parentElement.id).then((t=>{if(!t)throw new Error("err");"Not found"!==t.message&&(document.getElementById("myModal").style.display="block",n.innerHTML=` <img src="${t.book_image}" alt="" width='287' height='408'>\n      <h4>${t.title}</h4>\n      <p>${t.author}</p>\n      <p>${t.description}</p>\n      `)})).catch((t=>console.log(t)))})),l(),s.addEventListener("click",(function(t){const e=t.target.outerText;if(e.length<=33){let t=e.split(" "),o=t.slice(0,-1).join(" "),n=t.slice(-1);a.innerHTML=`<h2>${o}<span class="last-title-word"> ${n}</span></h2>`}o(e).then((t=>{r.innerHTML="",t.map((t=>{r.insertAdjacentHTML("beforeend",`<div id='${t._id}' class="section-book-card section-card">\n          <img class="section-book-card-img"  src="${t.book_image}" alt="" loading="lazy" width="335">\n          <h4 class="section-book-card-title">${t.title}</h4>\n          <p class="section-book-card-text">${t.author}</p>\n      </div>`)}))})).catch((t=>console.log(t)))})),c.addEventListener("click",(t=>{l()})),async function(){const t=await fetch("https://books-backend.p.goit.global/books/category-list");return await t.json()}().then((t=>{if(r.innerHTML="",!t)throw new Error("error");return t.map((t=>s.insertAdjacentHTML("beforeend",`<li class ="book-category">${t.list_name}</li>`)))})).catch((t=>console.log(t)));
//# sourceMappingURL=index.59fa09c9.js.map

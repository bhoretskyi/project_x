const t=document.querySelector(".shop-list-books-section"),e=document.querySelector(".amazon"),n=document.querySelector(".book-ios"),s=document.querySelector(".book-shop"),o=document.querySelector(".svg"),r=JSON.parse(localStorage.getItem("books"));r.map((r=>{(async function(t){const e=await fetch(`https://books-backend.p.goit.global/books/${t}`);return await e.json()})(r).then((r=>{if(!r)throw new Error("error");t.insertAdjacentHTML("beforeend",`<div class="shopping-list-card"><p hidden>${r._id}</p>\n    <button type="button" class="trash-btn"><img class="trash-js"  src="${o.src}" alt=""></button>\n\n        <img class="shopping-list-image"  src="${r.book_image}" alt=""> \n         \n      <h4 class="shopping-list-title">${r.title}</h4>\n      <p class="shopping-list-author">${r.author}</p>\n\n      <pclass="shopping-list-description">${r.description}</p>  \n      <a href="${r.buy_links[0].url}" target="_blank"><img src="${e.src}" alt=""></a> \n      <a href="${r.buy_links[1].url}" target="_blank"><img src="${n.src}" alt=""></a>\n      <a href="${r.buy_links[4].url}" target="_blank"><img src="${s.src}" alt=""></a>\n    \n\n      \n      \n    \n      </div>\n      \n`)})).catch((t=>console.log(t)))})),t.addEventListener("click",(t=>{if("trash-js"===t.target.className){const e=t.target.parentElement.previousElementSibling.textContent,n=r.filter((t=>t!==e));localStorage.setItem("books",JSON.stringify(n)),location.reload()}}));
//# sourceMappingURL=shopping_list.a9ca2463.js.map
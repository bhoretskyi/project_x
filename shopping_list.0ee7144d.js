const o=document.querySelector(".shop-list-books-section");JSON.parse(localStorage.getItem("books")).map((n=>{(async function(o){const n=await fetch(`https://books-backend.p.goit.global/books/${o}`);return await n.json()})(n).then((n=>{if(!n)throw new Error("error");console.log(n),o.insertAdjacentHTML("beforeend",`<div><p hidden>${n._id}</p>\n        <img  src="${n.book_image}" alt="">\n      <h4>${n.title}</h4>\n      <p>${n.author}</p>\n      <p>${n.description}</p> \n      \n    \n      </div>\n      \n`)})).catch((o=>console.log(o)))}));
//# sourceMappingURL=shopping_list.0ee7144d.js.map

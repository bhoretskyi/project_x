!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var o=e[t];delete e[t];var r={id:t,exports:{}};return n[t]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,n){e[t]=n},t.parcelRequired7c6=o);var r=o("4LYdF"),c=document.querySelector(".shop-list-books-section"),a=document.querySelector(".amazon"),s=document.querySelector(".book-ios"),i=document.querySelector(".book-shop"),l=document.querySelector(".svg"),u=JSON.parse(localStorage.getItem("books"));u.map((function(t){(0,r.getBookById)(t).then((function(t){if(!t)throw new Error("error");c.insertAdjacentHTML("beforeend",'<div class="shopping-list-card"><p hidden>'.concat(t._id,'</p>\n    <button type="button" class="trash-btn"><img class="trash-js"  src="').concat(l.src,'" alt=""></button>\n\n        <img class="shopping-list-image"  src="').concat(t.book_image,'" alt=""> \n         \n      <h4 class="shopping-list-title">').concat(t.title,'</h4>\n      <p class="shopping-list-author">').concat(t.author,'</p>\n\n      <pclass="shopping-list-description">').concat(t.description,'</p>  \n      <a href="').concat(t.buy_links[0].url,'" target="_blank"><img src="').concat(a.src,'" alt=""></a> \n      <a href="').concat(t.buy_links[1].url,'" target="_blank"><img src="').concat(s.src,'" alt=""></a>\n      <a href="').concat(t.buy_links[4].url,'" target="_blank"><img src="').concat(i.src,'" alt=""></a>\n    \n\n      \n      \n    \n      </div>\n      \n'))})).catch((function(t){return console.log(t)}))})),c.addEventListener("click",(function(t){if("trash-js"===t.target.className){var n=t.target.parentElement.previousElementSibling.textContent,e=u.filter((function(t){return t!==n}));localStorage.setItem("books",JSON.stringify(e)),location.reload()}}))}();
//# sourceMappingURL=shopping_list.642b8a3c.js.map
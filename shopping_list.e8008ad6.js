!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},o=n.parcelRequired7c6;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in e){var o=e[n];delete e[n];var s={id:n,exports:{}};return t[n]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,t){e[n]=t},n.parcelRequired7c6=o);var s=o("4LYdF"),i=document.querySelector(".shop-list-books-section"),c=document.querySelector(".amazon"),r=document.querySelector(".book-ios"),a=document.querySelector(".book-shop"),l=document.querySelector(".svg"),p=JSON.parse(localStorage.getItem("books"));p.map((function(n){(0,s.getBookById)(n).then((function(n){if(!n)throw new Error("error");var t="",e=n.description.split(" ");e.length>10&&(t=e.slice(0,10).join(" ")+"..."),i.insertAdjacentHTML("beforeend",'<div class="shopping-list-card">\n    \n          \n        <img class="shopping-list-image"  src="'.concat(n.book_image,'" alt="">   \n        <div class="shopping-list-info">\n        \n<div class="shopping-list-title-container">\n          \n      <h4 class="shopping-list-title">').concat(n.title,'</h4>\n      <h5 class="shopping-list-classlist">').concat(n.list_name,'</h5> \n\n      \n       \n      <p class="shopping-list-description" hidden>').concat(n.description,'</p>  \n      <p class="shopping-list-description-short">').concat(t,'</p>   \n      </div>\n      \n      <div class="shopping-list-book-links">\n      <p class="shopping-list-author">').concat(n.author,'</p>\n      <a href="').concat(n.buy_links[0].url,'" target="_blank"><img src="').concat(c.src,'" alt=""></a>   \n      <a href="').concat(n.buy_links[1].url,'" target="_blank"><img src="').concat(r.src,'" alt=""></a>  \n      <a href="').concat(n.buy_links[4].url,'" target="_blank"><img src="').concat(a.src,'" alt=""></a>\n      </div>\n      </div>\n        \n    \n\n      \n      \n      <button type="button" class="trash-btn"><img class="trash-js"  src="').concat(l.src,'" alt=""></button>\n      <p hidden>').concat(n._id,"</p> \n      </div>\n      \n"))})).catch((function(n){return console.log(n)}))})),i.addEventListener("click",(function(n){if("trash-js"===n.target.className){var t=n.target.parentElement.parentElement.lastElementChild.textContent,e=p.filter((function(n){return n!==t}));localStorage.setItem("books",JSON.stringify(e)),location.reload()}}))}();
//# sourceMappingURL=shopping_list.e8008ad6.js.map

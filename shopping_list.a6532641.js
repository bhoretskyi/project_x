function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8"),l=o("bTcpz"),r=o("Wn4jt");const c=document.querySelector(".shop-list-books-section"),a=document.querySelector(".amazon"),d=document.querySelector(".book-ios"),u=document.querySelector(".book-shop"),g=document.querySelector(".svg");document.querySelector(".home-btn").classList.remove("current");document.querySelector(".list-btn").classList.add("current");const p=JSON.parse(localStorage.getItem("books"));p.map((t=>{(0,r.getBookById)(t).then((e=>{if(!e)throw new Error("error");let t="";const n=e.description.split(" ");n.length>10&&(t=n.slice(0,10).join(" ")+"..."),c.insertAdjacentHTML("beforeend",`<div class="shopping-list-card">\n    \n          \n        <img class="shopping-list-image"  src="${e.book_image}" alt="">   \n        <div class="shopping-list-info">\n        \n<div class="shopping-list-title-container">\n          \n      <h4 class="shopping-list-title">${e.title}</h4>\n      <h5 class="shopping-list-classlist">${e.list_name}</h5> \n\n      \n       \n      <p class="shopping-list-description" hidden>${e.description}</p>  \n      <p class="shopping-list-description-short">${t}</p>   \n      </div>\n      \n      <div class="shopping-list-book-links">\n      <p class="shopping-list-author">${e.author}</p>\n      <a href="${e.buy_links[0].url}" target="_blank"><img src="${a.src}" alt=""></a>   \n      <a href="${e.buy_links[1].url}" target="_blank"><img src="${d.src}" alt=""></a>   \n      <a href="${e.buy_links[4].url}" target="_blank"><img src="${u.src}" alt=""></a>\n      </div>\n      </div>\n        \n    \n\n      \n      \n      <button type="button" class="trash-btn"><img class="trash-js"  src="${g.src}" alt=""></button>\n      <p hidden>${e._id}</p> \n      </div>\n      \n`)})).catch((t=>{e(i).Notify.failure("Oops... something went wrong. Please reload the page"),console.log(t)}))})),c.addEventListener("click",(e=>{if("trash-js"===e.target.className){const t=e.target.parentElement.parentElement.lastElementChild.textContent,n=p.filter((e=>e!==t));localStorage.setItem("books",JSON.stringify(n)),location.reload()}}));const h=document.querySelector(".checkbox"),m=document.querySelector(".icon-bookshelf"),b=(document.querySelector(".book-categories-list"),document.querySelector(".list-btn-svg")),f=document.querySelector(".header-container"),y=document.querySelector(".shop-list-books-section");h.addEventListener("change",(function(){console.log("Клик работает"),document.body.classList.toggle("dark-thema"),m.classList.toggle("svg-icon-header"),b.classList.toggle("svg-icon-header"),f.classList.toggle("header-fone");const e=y.getElementsByClassName("shopping-list-card");console.log(e);for(const t of e)t.classList.toggle("shopping-card");console.log(e)}));const v=document.querySelector(".js-burger"),k=document.querySelector(".js-close-menu");v.addEventListener("click",(()=>{(0,l.openBurgerModal)(),v.hidden=!0,k.classList.remove("is-hidden-btn")})),k.addEventListener("click",(()=>{(0,l.closeBurgerModal)(),k.classList.add("is-hidden-btn"),v.hidden=!1})),window.addEventListener("resize",(function(){window.innerWidth>=768&&((0,l.closeBurgerModal)(),k.classList.add("is-hidden-btn"),v.hidden=!1)}));
//# sourceMappingURL=shopping_list.a6532641.js.map

const e=document.querySelector(".home-btn"),t=document.querySelector(".list-btn"),o=(document.querySelector(".modal-home-btn"),document.querySelector(".modal-list-btn"),document.querySelector(".authorisation-btn")),n=document.querySelector(".user-btn"),l=document.querySelector(".wraper-user-select"),s=document.querySelector(".js-user-select"),i=(document.querySelector(".js-user-select-btn"),document.querySelector(".js-log-out-btn")),c=document.querySelector(".overlayLoginForm");t&&window.location.href===t.href&&(t.classList.add("current"),e.classList.remove("current")),n&&n.addEventListener("click",(function(){s.classList.toggle("active-user-select"),l.classList.toggle("is-hidden")})),i&&i.addEventListener("click",(function(){n.classList.add("is-hidden-btn"),o.classList.remove("is-hidden-btn"),l.classList.add("is-hidden")})),o&&o.addEventListener("click",(function(e){c.classList.remove("is-hidden")}));const a=document.querySelector(".modal-login-form-close-btn");a&&a.addEventListener("click",k);const d=document.querySelector(".authorisation-btn"),r=document.querySelector(".mobile-menu-authorisation-btn"),u=document.querySelector(".modal-login-form"),m=document.querySelector(".overlayLoginForm");function b(){u.style.display="block",m.style.display="block"}function k(){u.style.display="none",m.style.display="none"}function g(e,t){e&&e.addEventListener("click",t)}g(d,b),g(r,b),g(a,k),g(m,k),window.addEventListener("keydown",(function(e){"Escape"===e.key&&k()}));const h=document.querySelector(".settings"),y=document.querySelector(".close-modal-settings");h&&h.addEventListener("click",(function(){document.querySelector(".modal-settings").classList.remove("is-hidden-btn"),document.querySelector(".modal-settings").style.display="block"})),y&&y.addEventListener("click",(function(){document.querySelector(".modal-settings").classList.add("is-hidden-btn"),document.querySelector(".modal-settings").style.display="none"}));const p=document.querySelector(".js-photo-delate"),v=document.querySelector(".input-photo-save");null==v||v.addEventListener("click",(function(){let e=file1.files[0];e&&(image1.src=URL.createObjectURL(e),localStorage.setItem("myImage",image1.src));image1.src=localStorage.getItem("myImage")})),null==p||p.addEventListener("click",(function(e){image1.src=localStorage.removeItem("myImage")}));const L=document.querySelector(".signUp"),S=document.querySelector(".signIn"),$=document.querySelector(".modal-login-in"),f=document.querySelector(".modal-login-up");document.querySelector(".modal-login-form-input");L&&L.addEventListener("click",(function(){L.classList.add("underline"),S.classList.remove("underline"),$.classList.add("is-hidden"),f.classList.remove("is-hidden")})),S&&S.addEventListener("click",(function(){S.classList.add("underline"),L.classList.remove("underline"),$.classList.remove("is-hidden"),f.classList.add("is-hidden"),$.style.display="block"}));async function q(){const e=await fetch("https://books-backend.p.goit.global/books/top-books");return await e.json()}async function E(e){const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);return await t.json()}async function _(e){const t=await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`);return await t.json()}const w=document.querySelector(".amazon"),j=document.querySelector(".book-ios"),T=document.querySelector(".book-shop"),M=document.querySelector(".modal-content-parent"),H=document.querySelector(".close"),I=document.querySelector(".add-to-list-btn"),x=document.querySelector(".remove-from-list-btn"),z=document.querySelector(".book-category-title-container"),C=document.querySelector(".all-categories-js"),N=document.querySelector(".book-kategories-list-js"),A=document.querySelector(".books-by-category"),B=[];function O(){const e=JSON.parse(localStorage.getItem("books"));e&&B.push(...e),A.innerHTML="",z.innerHTML='<h2 class="title-book-all">Best Sellers <span class="last-title-word">Books</span></h2>',q().then((e=>e.map((e=>{const t=e.books;A.insertAdjacentHTML("beforeend",`\n            <h2 class="book-category-name">${e.list_name}</h2>\n  <div class="one-category-section">\n\n            <div id="${t[0]._id}" class ="add-book-js all-books-block item1">\n                       <img src="${t[0].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">\n                     <h4 class="all-books-block-title">${t[0].title}</h4>\n                      <p class="all-books-block-text">${t[0].author}</p>\n            \n                       <span hidden>${t[0].list_name}</span>\n            \n                  </div>\n                  <div id="${t[1]._id}" class ="add-book-js all-books-block item2">\n                       <img src="${t[1].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">\n                     <h4 class="all-books-block-title">${t[1].title}</h4>\n                      <p class="all-books-block-text">${t[1].author}</p>\n            \n                       <span hidden>${t[0].list_name}</span>\n            \n                  </div>\n                  <div id="${t[2]._id}" class ="add-book-js all-books-block item3">\n                       <img src="${t[2].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">\n                     <h4 class="all-books-block-title">${t[2].title}</h4>\n                      <p class="all-books-block-text">${t[2].author}</p>\n            \n                       <span hidden>${t[2].list_name}</span>\n            \n                  </div>\n                  <div id="${t[3]._id}" class ="add-book-js all-books-block item4">\n                       <img src="${t[3].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">\n                     <h4 class="all-books-block-title">${t[3].title}</h4>\n                      <p class="all-books-block-text">${t[3].author}</p>\n            \n                       <span hidden>${t[3].list_name}</span>\n            \n                  </div>\n                  <div id="${t[4]._id}" class ="add-book-js all-books-block item5">\n                       <img src="${t[4].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">\n                     <h4 class="all-books-block-title">${t[4].title}</h4>\n                      <p class="all-books-block-text">${t[4].author}</p>\n                       <span hidden>${t[4].list_name}</span>\n            \n                  </div>\n                  <button type="button" class="see-more-btn"> See more</button> \n\n                  </div>\n            `)}))))}H.addEventListener("click",(function(){document.getElementById("myModal").style.display="none"})),I.addEventListener("click",(e=>{const t=e.currentTarget.previousElementSibling.firstElementChild.lastElementChild.children[3].textContent;var o;I.hidden=!0,x.hidden=!1,B.push(t),o=B,localStorage.setItem("books",JSON.stringify(o))})),x.addEventListener("click",(e=>{const t=e.currentTarget.parentElement.children[1].firstElementChild.lastElementChild.children[3].textContent;I.hidden=!1,x.hidden=!0,function(e){const t=B.filter((t=>t!==e));B.splice(0,B.length,...t),localStorage.setItem("books",JSON.stringify(B))}(t)})),A.addEventListener("click",(e=>{const t=e.target.parentElement.id;if(B.includes(t)&&(I.hidden=!0,x.hidden=!1),B.includes(t)||(I.hidden=!1,x.hidden=!0),"button"!==e.target.type)e.target.parentElement.id&&E(e.target.parentElement.id).then((e=>{if(!e)throw new Error("err");"Not found"!==e.message&&(document.getElementById("myModal").style.display="block",M.innerHTML=`<div class="modal-content"><img class='modal-image' src="${e.book_image}" alt="">\n        <div>\n      <h4>${e.title}</h4>\n      <p>${e.author}</p>\n      <p>${e.description}</p>\n      <p hidden>${e._id}</p>\n      <a href="${e.buy_links[0].url}" target="_blank"><img src="${w.src}" alt=""></a>\n      <a href="${e.buy_links[1].url}" target="_blank"><img src="${j.src}" alt=""></a>\n      <a href="${e.buy_links[4].url}" target="_blank"><img src="${T.src}" alt=""></a>\n      \n\n      `)})).catch((e=>console.log(e)));else{const t=e.target.previousElementSibling.lastElementChild.textContent;_(t).then((e=>{z.innerHTML="";let o=t.split(" "),n=o.slice(0,-1).join(" "),l=o.slice(-1);z.innerHTML=`<h2 >${n}<span class="last-title-word"> ${l}</span></h2>`,A.innerHTML="",e.map((e=>{A.insertAdjacentHTML("beforeend",`<div id='${e._id}' class="section-book-card section-card">\n          <img class="section-book-card-img"  src="${e.book_image}" alt="" loading="lazy" width="335">     \n          <h4 class="section-book-card-title">${e.title}</h4>\n          <p class="section-book-card-text">${e.author}</p>    \n      </div>`)}))})).catch((e=>console.log(e)))}})),O(),N.addEventListener("click",(function(e){const t=e.target.outerText;if("li"!==e.target.localName)return;if(t.length<=33){let e=t.split(" "),o=e.slice(0,-1).join(" "),n=e.slice(-1);z.innerHTML=`<h2 class="title-book-all">${o}<span class="last-title-word"> ${n}</span></h2>`}_(t).then((e=>{A.innerHTML="",e.map((e=>{A.insertAdjacentHTML("beforeend",`<div id='${e._id}' class="section-book-card section-card">\n          <img class="section-book-card-img"  src="${e.book_image}" alt="" loading="lazy" width="335">\n          <h4 class="section-book-card-title">${e.title}</h4>\n          <p class="section-book-card-text">${e.author}</p>\n      </div>`)}))})).catch((e=>console.log(e)))})),C.addEventListener("click",(e=>{O()})),async function(){const e=await fetch("https://books-backend.p.goit.global/books/category-list");return await e.json()}().then((e=>{if(A.innerHTML="",!e)throw new Error("error");return e.map((e=>N.insertAdjacentHTML("beforeend",`<li class ="book-category">${e.list_name}</li>`)))})).catch((e=>console.log(e)));
//# sourceMappingURL=index.bbbccd8f.js.map
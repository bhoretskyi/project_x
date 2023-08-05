import { openModal } from './js/modal.js';
import { closeModal } from './js/modal.js';
import {
  getBestBook,
  getCategories,
  getBookByCategory,
} from './js/books_api.js';
import { getBookById } from './js/books_api.js';


const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.close');
const bookCategoryTitleContainer = document.querySelector(
  '.book-category-title-container'
);

const allCategories = document.querySelector('.all-categories-js');
const categorySectionList = document.querySelector('.book-kategories-list-js');
const sectionSelectedBooksByCategory =
  document.querySelector('.books-by-category');

closeModalBtn.addEventListener('click', closeModal);
sectionSelectedBooksByCategory.addEventListener('click', e => {
  if (e.target.type === 'button') {
    const buttonSelectedCategory =
      e.target.parentElement.lastElementChild.textContent;
    getBookByCategory(buttonSelectedCategory)
      .then(resp => {
        bookCategoryTitleContainer.innerHTML = '';
        let categoryWords = buttonSelectedCategory.split(' ');

        let firstWords = categoryWords.slice(0, -1).join(' ');
        let lastWord = categoryWords.slice(-1); 

        bookCategoryTitleContainer.innerHTML = `<h2>${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
        sectionSelectedBooksByCategory.innerHTML = '';
        resp.map(book => {
          sectionSelectedBooksByCategory.insertAdjacentHTML(
            'beforeend',

            `<div id='${book._id}' class="section-book-card section-card">
          <img class="section-book-card-img"  src="${book.book_image}" alt="" loading="lazy" width="335">     
          <h4 class="section-book-card-title">${book.title}</h4>
          <p class="section-book-card-text">${book.author}</p>
      </div>`
          );
        });
      })
      .catch(err => console.log(err));
    return;
  }

  if (!e.target.parentElement.id) {
    return;
  }

  getBookById(e.target.parentElement.id)
    .then(resp => {
      if (!resp) {
        throw new Error('err');
      }
      if (resp.message !== 'Not found') {
        openModal();
        modalContent.innerHTML = ` <img src="${resp.book_image}" alt="" width='287' height='408'>
      <h4>${resp.title}</h4>
      <p>${resp.author}</p>
      <p>${resp.description}</p>
      `;
      }
    })
    .catch(err => console.log(err));
});
startPage();
function startPage() {
  sectionSelectedBooksByCategory.innerHTML = '';
  bookCategoryTitleContainer.innerHTML =
    '<h2>Best Sellers <span class="last-title-word">Books</span></h2>';  
    getBestBook().then(resp =>
      resp.map(book => {
        const books = book.books;
        sectionSelectedBooksByCategory.insertAdjacentHTML(
          'beforeend',
          `
            <h2>${book.list_name}</h2>
  <div class="one-category-section">

            <div id="${books[0]._id}" class ="add-book-js">
                       <img src="${books[0].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[0].title}</h4>
                      <p>${books[0].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[1]._id}" class ="add-book-js">
                       <img src="${books[1].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[1].title}</h4>
                      <p>${books[1].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[2]._id}" class ="add-book-js">
                       <img src="${books[2].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[2].title}</h4>
                      <p>${books[2].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[2].list_name}</span>
            
                  </div>
                  <div id="${books[3]._id}" class ="add-book-js">
                       <img src="${books[3].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[3].title}</h4>
                      <p>${books[3].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[3].list_name}</span>
            
                  </div>
                  <div id="${books[4]._id}" class ="add-book-js">
                       <img src="${books[4].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[4].title}</h4>
                      <p>${books[4].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[4].list_name}</span>
            
                  </div>
                  </div>
            `
        );
      })
    );
//   getBestBook().then(resp => {
//     resp.map(book => {

//       sectionSelectedBooksByCategory.insertAdjacentHTML(
//         'beforeend',
//         `
//   <h2>${book.list_name}</h2><div class="one-category-js"></div>
//   `
//       );

//       book.books.map(thisBook => {
//         if (thisBook.list_name === book.list_name) {
//           sectionSelectedBooksByCategory.insertAdjacentHTML(
//             'beforeend',
//             `<div id="${thisBook._id}" class ="add-book-js">
//           <img src="${thisBook.book_image}" alt="" loading="lazy" width="335">
//           <h4>${thisBook.title}</h4>
//           <p>${thisBook.author}</p>

//           <button type="button"> See more</button>
//           <span hidden>${thisBook.list_name}</span>

//       </div>`
//           );

//           if (book.books[0].title === thisBook.title) {
//             const element = document.getElementById(thisBook._id);
//             element.hidden = false;
//           }
//         }
//       });
//     });
//   });
 }

categorySectionList.addEventListener('click', pushBooksByCategory);
allCategories.addEventListener('click', e => {
  startPage();
});

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;

  if (selectedCategory.length <= 33) {
    let categoryWords = selectedCategory.split(' ');

    let firstWords = categoryWords.slice(0, -1).join(' ');
    let lastWord = categoryWords.slice(-1);

    bookCategoryTitleContainer.innerHTML = `<h2>${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
  }

  getBookByCategory(selectedCategory)
    .then(resp => {
      sectionSelectedBooksByCategory.innerHTML = '';
      resp.map(book => {
        sectionSelectedBooksByCategory.insertAdjacentHTML(
          'beforeend',

          `<div id='${book._id}' class="section-book-card section-card">
          <img class="section-book-card-img"  src="${book.book_image}" alt="" loading="lazy" width="335">
          <h4 class="section-book-card-title">${book.title}</h4>
          <p class="section-book-card-text">${book.author}</p>
      </div>`
        );
      });
    })
    .catch(err => console.log(err));
}

getCategories()
  .then(resp => {
    sectionSelectedBooksByCategory.innerHTML = '';
    if (!resp) {
      throw new Error('error');
    }
    return resp.map(category =>
      categorySectionList.insertAdjacentHTML(
        'beforeend',
        `<li class ="book-category">${category.list_name}</li>`
      )
    );
  })
  .catch(err => console.log(err));



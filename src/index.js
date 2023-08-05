import { openModal } from './js/modal.js';
import { closeModal } from './js/modal.js';
import {
  getBestBook,
  getCategories,
  getBookByCategory,
} from './js/books_api.js';
import { getBookById } from './js/books_api.js';

const modalContent = document.querySelector('.modal-content-parent');
const closeModalBtn = document.querySelector('.close');
const addToListBtn = document.querySelector('.add-to-list-btn');
const removeFromListBtn = document.querySelector('.remove-from-list-btn');
const bookCategoryTitleContainer = document.querySelector(
  '.book-category-title-container'
);

const allCategories = document.querySelector('.all-categories-js');
const categorySectionList = document.querySelector('.book-kategories-list-js');
const sectionSelectedBooksByCategory =
  document.querySelector('.books-by-category');
const BOOKS = [];
// localStorage.clear()

closeModalBtn.addEventListener('click', closeModal);
sectionSelectedBooksByCategory.addEventListener('click', e => {
  const bookId = e.target.parentElement.id;
  if (BOOKS.includes(bookId)) {
    addToListBtn.hidden = true
    removeFromListBtn.hidden = false
  }
  if (!BOOKS.includes(bookId)) {
    addToListBtn.hidden = false
    removeFromListBtn.hidden = true
  }
  function pushBookIdToStorage(array) {
    localStorage.setItem('books', JSON.stringify(array));
  }
  function removeBookFromStorage(book) {
    const newBooks = BOOKS.filter( item => item !== book)
    BOOKS.splice(0, BOOKS.length, ... newBooks)
    localStorage.setItem('books', JSON.stringify(BOOKS));
    }
    addToListBtn.addEventListener('click', () => {
      addToListBtn.hidden = true
      removeFromListBtn.hidden = false 
      
      if (!BOOKS.includes(bookId)) {
        BOOKS.push(bookId);
        removeFromListBtn.hidden = false;
      }
      
      pushBookIdToStorage(BOOKS);
    }); 
    removeFromListBtn.addEventListener('click', ()=>{
      addToListBtn.hidden = false
      removeFromListBtn.hidden = true
removeBookFromStorage(bookId)
    })
  
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
        })
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
        modalContent.innerHTML = `<div class="modal-content"><img class='modal-image' src="${resp.book_image}" alt="">
        <div>
      <h4>${resp.title}</h4>
      <p>${resp.author}</p>
      <p>${resp.description}</p>
      </div></div>
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

            <div id="${books[0]._id}" class ="add-book-js item1">
                       <img src="${books[0].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[0].title}</h4>
                      <p>${books[0].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[1]._id}" class ="add-book-js item2">
                       <img src="${books[1].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[1].title}</h4>
                      <p>${books[1].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[2]._id}" class ="add-book-js item3">
                       <img src="${books[2].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[2].title}</h4>
                      <p>${books[2].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[2].list_name}</span>
            
                  </div>
                  <div id="${books[3]._id}" class ="add-book-js item4">
                       <img src="${books[3].book_image}" alt="" loading="lazy" width="335">
                     <h4>${books[3].title}</h4>
                      <p>${books[3].author}</p>
            
                     <button type="button"> See more</button>
                       <span hidden>${books[3].list_name}</span>
            
                  </div>
                  <div id="${books[4]._id}" class ="add-book-js item5">
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
}

categorySectionList.addEventListener('click', pushBooksByCategory);
allCategories.addEventListener('click', e => {
  startPage();
});

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;
  if (e.target.localName !== 'li') {
    return;
  }

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
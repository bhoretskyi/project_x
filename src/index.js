import './js/header.js';
import './js/modal-login-form.js';
import './js/account.js';
import './js/settings.js';
import './js/auth.js';
import { openModal } from './js/modal.js';
import { closeModal } from './js/modal.js';
import {
  getBestBook,
  getCategories,
  getBookByCategory,
} from './js/books_api.js';
import { getBookById } from './js/books_api.js';
const amazon = document.querySelector('.amazon');
const ios = document.querySelector('.book-ios');
const shop = document.querySelector('.book-shop');

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
addToListBtn.addEventListener('click', e => {
  const idForButton =
    e.currentTarget.previousElementSibling.firstElementChild.lastElementChild
      .children[3].textContent;

  addToListBtn.hidden = true;
  removeFromListBtn.hidden = false;
  BOOKS.push(idForButton);
  pushBookIdToStorage(BOOKS);
});
removeFromListBtn.addEventListener('click', e => {
  const idForRemoveButton =
    e.currentTarget.parentElement.children[1].firstElementChild.lastElementChild
      .children[3].textContent;
  addToListBtn.hidden = false;
  removeFromListBtn.hidden = true;
  removeBookFromStorage(idForRemoveButton);
});

function pushBookIdToStorage(array) {
  localStorage.setItem('books', JSON.stringify(array));
}
function removeBookFromStorage(book) {
  const newBooks = BOOKS.filter(item => item !== book);
  BOOKS.splice(0, BOOKS.length, ...newBooks);
  localStorage.setItem('books', JSON.stringify(BOOKS));
}

sectionSelectedBooksByCategory.addEventListener('click', e => {
  const bookId = e.target.parentElement.id;
  if (BOOKS.includes(bookId)) {
    addToListBtn.hidden = true;
    removeFromListBtn.hidden = false;
  }
  if (!BOOKS.includes(bookId)) {
    addToListBtn.hidden = false;
    removeFromListBtn.hidden = true;
  }

  if (e.target.type === 'button') {
    const buttonSelectedCategory =
      e.target.previousElementSibling.lastElementChild.textContent;
    getBookByCategory(buttonSelectedCategory)
      .then(resp => {
        bookCategoryTitleContainer.innerHTML = '';
        let categoryWords = buttonSelectedCategory.split(' ');

        let firstWords = categoryWords.slice(0, -1).join(' ');
        let lastWord = categoryWords.slice(-1);

        bookCategoryTitleContainer.innerHTML = `<h2 >${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
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
        modalContent.innerHTML = `<div class="modal-content"><img class='modal-image' src="${resp.book_image}" alt="">
        <div>
      <h4 class="modal-content-title">${resp.title}</h4>
      <p class="modal-content-author">${resp.author}</p>
      <p class="modal-content-description">${resp.description}</p>
      <p hidden>${resp._id}</p>
      <a href="${resp.buy_links[0].url}" target="_blank"><img src="${amazon.src}" alt=""></a>
      <a href="${resp.buy_links[1].url}" target="_blank"><img src="${ios.src}" alt=""></a>
      <a href="${resp.buy_links[4].url}" target="_blank"><img src="${shop.src}" alt=""></a>
      

      `;
      }
    })
    .catch(err => console.log(err));
});
startPage();
function startPage() {
  const savedBooksInStorage = JSON.parse(localStorage.getItem('books'));
  if (savedBooksInStorage) {
    BOOKS.push(...savedBooksInStorage);
  }
  sectionSelectedBooksByCategory.innerHTML = '';
  bookCategoryTitleContainer.innerHTML =
    '<h2 class="title-book-all">Best Sellers <span class="last-title-word">Books</span></h2>';
  getBestBook().then(resp =>
    resp.map(book => {
      const books = book.books;
      sectionSelectedBooksByCategory.insertAdjacentHTML(
        'beforeend',
        `
            <h2 class="book-category-name">${book.list_name}</h2>
  <div class="one-category-section">

            <div id="${books[0]._id}" class ="add-book-js all-books-block item1">
                       <img src="${books[0].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">
                     <h4 class="all-books-block-title">${books[0].title}</h4>
                      <p class="all-books-block-text">${books[0].author}</p>
            
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[1]._id}" class ="add-book-js all-books-block item2">
                       <img src="${books[1].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">
                     <h4 class="all-books-block-title">${books[1].title}</h4>
                      <p class="all-books-block-text">${books[1].author}</p>
            
                       <span hidden>${books[0].list_name}</span>
            
                  </div>
                  <div id="${books[2]._id}" class ="add-book-js all-books-block item3">
                       <img src="${books[2].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">
                     <h4 class="all-books-block-title">${books[2].title}</h4>
                      <p class="all-books-block-text">${books[2].author}</p>
            
                       <span hidden>${books[2].list_name}</span>
            
                  </div>
                  <div id="${books[3]._id}" class ="add-book-js all-books-block item4">
                       <img src="${books[3].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">
                     <h4 class="all-books-block-title">${books[3].title}</h4>
                      <p class="all-books-block-text">${books[3].author}</p>
            
                       <span hidden>${books[3].list_name}</span>
            
                  </div>
                  <div id="${books[4]._id}" class ="add-book-js all-books-block item5">
                       <img src="${books[4].book_image}" alt="" loading="lazy" width="335" class="all-books-block-img">
                     <h4 class="all-books-block-title">${books[4].title}</h4>
                      <p class="all-books-block-text">${books[4].author}</p>
                       <span hidden>${books[4].list_name}</span>
            
                  </div>
                  <button type="button" class="see-more-btn"> See more</button> 

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

    bookCategoryTitleContainer.innerHTML = `<h2 class="title-book-all">${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
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



  

  

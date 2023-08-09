import './js/header.js';
import './js/modal-login-form.js';
import './js/account.js';
import './js/settings.js';
import './js/auth.js';
import './js/scroll_up.js';
import Notiflix from 'notiflix';
import { Loading } from 'notiflix';

import { closeBurgerModal, openBurgerModal, openModal } from './js/modal.js';
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
// const allCategoriesListElements = document.querySelectorAll('.all-category')

const modalContent = document.querySelector('.modal-content-parent');
const closeModalBtn = document.querySelector('.close');
const addToListBtn = document.querySelector('.add-to-list-btn');
const removeFromListBtn = document.querySelector('.remove-from-list-btn');
const modalHiddenText = document.querySelector('.modal-hidden-text');
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
  console.log();
  const idForButton =
    e.currentTarget.previousElementSibling.firstElementChild.children[1]
      .children[3].textContent;
  addToListBtn.hidden = true;
  removeFromListBtn.hidden = false;
  modalHiddenText.hidden = false;
  BOOKS.push(idForButton);
  pushBookIdToStorage(BOOKS);
});
removeFromListBtn.addEventListener('click', e => {
  console.log();
  const idForRemoveButton =
    e.currentTarget.parentElement.children[1].firstElementChild.children[1]
      .children[3].textContent;
  addToListBtn.hidden = false;
  removeFromListBtn.hidden = true;
  modalHiddenText.hidden = true;

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
    modalHiddenText.hidden = false;
    addToListBtn.hidden = true;
    removeFromListBtn.hidden = false;
  }
  if (!BOOKS.includes(bookId)) {
    modalHiddenText.hidden = true;

    addToListBtn.hidden = false;
    removeFromListBtn.hidden = true;
  }

  if (e.target.type === 'button') {
    const buttonSelectedCategory =
      e.target.previousElementSibling.lastElementChild.textContent;
    getBookByCategory(buttonSelectedCategory)
      .then(resp => {
        const allElementsLinkFromFunction =
          e.target.parentElement.parentElement.parentElement.parentElement
            .children[3].firstElementChild.lastElementChild.children;
        [...allElementsLinkFromFunction].forEach(e => {
          if (e.innerHTML === resp[0].list_name) {
            e.classList.add('all-categories-hover');
            allCategories.classList.remove('all-categories-hover');
          }
        });
        Loading.remove();
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
      .catch(err => {
        Notiflix.Notify.failure(
          'Oops... something went wrong. Please reload the page'
        );
        console.log(err);
      });
    return;
  }

  if (!e.target.parentElement.id) {
    return;
  }

  getBookById(e.target.parentElement.id)
    .then(resp => {
      Loading.remove();
      if (!resp) {
        throw new Error('err');
      }
      if (resp.message !== 'Not found') {
        openModal();
        modalContent.innerHTML = `<div class="modal-content"><img class='modal-image' src="${resp.book_image}" alt="">
        <div class="modal-shop-text">
      <h4 class="modal-content-title">${resp.title}</h4>
      <p class="modal-content-author">${resp.author}</p> 
      <p class="modal-content-description">${resp.description}</p> 
      <p hidden>${resp._id}</p> 
      <div class="modal-shop-list">

      
      
      <a href="${resp.buy_links[0].url}" target="_blank"><img src="${amazon.src}" alt=""></a>
      <a href="${resp.buy_links[1].url}" target="_blank"><img src="${ios.src}" alt=""></a>
      <a href="${resp.buy_links[4].url}" target="_blank"><img src="${shop.src}" alt=""></a>
      </div>
      </div>
<div class>

      
      </div>
      
      
 
      `;
      }
    })
    .catch(err => {
      Notiflix.Notify.failure(
        'Oops... something went wrong. Please reload the page'
      );
      console.log(err);
    });
});
startPage();
function startPage() {
  allCategories.classList.add('all-categories-hover');
  [...allCategories.nextElementSibling.children].forEach(element =>
    element.classList.remove('all-categories-hover')
  );
  const savedBooksInStorage = JSON.parse(localStorage.getItem('books'));
  if (savedBooksInStorage) {
    BOOKS.push(...savedBooksInStorage);
  }
  sectionSelectedBooksByCategory.innerHTML = '';
  bookCategoryTitleContainer.innerHTML =
    '<h2 class="title-book-all">Best Sellers <span class="last-title-word">Books</span></h2>';
  getBestBook()
    .then(resp => {
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
      });
      Loading.remove();
    })
    .catch(err => {
      Notiflix.Notify.failure(
        'Oops... something went wrong. Please reload the page'
      );
      console.log(err);
    });
}

categorySectionList.addEventListener('click', pushBooksByCategory);
allCategories.addEventListener('click', e => {
  startPage();
});

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;

  if (e.target.textContent !== selectedCategory) {
    return;
  }

  if (e.target.localName !== 'li') {
    return;
  }
  [...e.target.parentElement.children].forEach(element =>
    element.classList.remove('all-categories-hover')
  );

  e.target.classList.add('all-categories-hover');

  if (selectedCategory.length <= 33) {
    let categoryWords = selectedCategory.split(' ');

    let firstWords = categoryWords.slice(0, -1).join(' ');
    let lastWord = categoryWords.slice(-1);

    bookCategoryTitleContainer.innerHTML = `<h2 class="title-book-all">${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
  }
  // console.log(bookCategoryTitleContainer.firstElementChild.children);
  // console.log(selectedCategory.split(' '));
  getBookByCategory(selectedCategory)
    .then(resp => {
      allCategories.classList.remove('all-categories-hover');
      Loading.remove();
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
    .catch(err => {
      Notiflix.Notify.failure(
        'Oops... something went wrong. Please reload the page'
      );
      console.log(err);
    });
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
  .catch(err => {
    Notiflix.Notify.failure(
      'Oops... something went wrong. Please reload the page'
    );
    console.log(err);
  });

//переключние темы. Не удалять!!!

const checkBox = document.querySelector('.checkbox');
// console.log(loginForm);

const svgIconHeader = document.querySelector('.icon-bookshelf');
const listItemQ = document.querySelector('.book-categories-list');
const svgIconShop = document.querySelector('.list-btn-svg');
const headerFone = document.querySelector('.header-container');
const allCat = document.querySelector('.all-categories');

checkBox.addEventListener('change', chengeTheme);

function chengeTheme() {
  console.log('Клик работает');
  document.body.classList.toggle('dark-thema');
  svgIconHeader.classList.toggle('svg-icon-header');
  svgIconShop.classList.toggle('svg-icon-header');
  listItemQ.classList.toggle('list-item-color-thema');
  headerFone.classList.toggle('header-fone');
  allCat.classList.toggle('list-item-color-thema');
}

const burgerBtn = document.querySelector('.js-burger');
const burgerCloseBtn = document.querySelector('.js-close-menu');

burgerBtn.addEventListener('click', () => {
  openBurgerModal();
  burgerBtn.hidden = true;
  burgerCloseBtn.classList.remove('is-hidden-btn');
});
burgerCloseBtn.addEventListener('click', () => {
  closeBurgerModal();
  burgerCloseBtn.classList.add('is-hidden-btn');
  burgerBtn.hidden = false;
});

function chekWindowSize() {
  if (window.innerWidth >= 768) {
    closeBurgerModal();
    burgerCloseBtn.classList.add('is-hidden-btn');
    burgerBtn.hidden = false;
  }
}
window.addEventListener('resize', chekWindowSize);

import { openModal } from './js/modal.js';
import { closeModal } from './js/modal.js';
import { getBookByCategory, getCategories } from './js/books_api.js';
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
  sectionSelectedBooksByCategory.innerHTML =''
  getBookByCategory().then(resp => {
    resp.map(book => {
      sectionSelectedBooksByCategory.insertAdjacentHTML(
        'beforeend',
        `
  <h2>${book.list_name}</h2>
  `
      );
      book.books.map(thisBook => {
        if (thisBook.list_name === book.list_name) {
          sectionSelectedBooksByCategory.insertAdjacentHTML(
            'beforeend',
            `<div id="${thisBook._id}" hidden>
          <img src="${thisBook.book_image}" alt="" loading="lazy" width="335">
          <h4>${thisBook.title}</h4>
          <p>${thisBook.author}</p>
          <button type="button"> See more</button>
      </div>`
          );
          if (book.books[0].title === thisBook.title) {
            const element = document.getElementById(thisBook._id);
            element.hidden = false;
          }
        }
      });
    });
  });
}

categorySectionList.addEventListener('click', pushBooksByCategory);
allCategories.addEventListener('click', e => {
  console.log(e);
  // sectionSelectedBooksByCategory.innerHTML = '';
  startPage();
});
// allCategories.addEventListener('click', () => {
//   getBookByCategory()
//     .then(resp => {
//       sectionSelectedBooksByCategory.innerHTML = '';

//       resp.map(book => {
//         sectionSelectedBooksByCategory.insertAdjacentHTML(
//           'beforeend',
//           `<h2>${book.list_name}</h2>`
//         );
//         book.books.map(thisBook => {
//           if (thisBook.list_name === book.list_name) {
//             sectionSelectedBooksByCategory.insertAdjacentHTML(
//               'beforeend',
//               `<div id="${thisBook._id}">
//           <img src="${thisBook.book_image}" alt="" loading="lazy" width="335">
//           <h4>${thisBook.title}</h4>
//           <p>${thisBook.author}</p>
//       </div>`
//             );
//           }
//         });
//       });
//     })
//     .catch(err => console.log(err));
// });

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;

  if (selectedCategory.length <= 33) {
    let categoryWords = selectedCategory.split(' ');
    console.log(categoryWords);
    let firstWords = categoryWords.slice(0, -1).join(' ');
    let lastWord = categoryWords.slice(-1);
    console.log(lastWord);

    // bookCategorytTitle.textContent = selectedCategory;
    bookCategoryTitleContainer.innerHTML = `<h2>${firstWords}<span class="last-title-word"> ${lastWord}</span></h2>`;
  }

  let booksArr = [];
  getBookByCategory()
    .then(resp => {
      sectionSelectedBooksByCategory.innerHTML = '';
      const filteredBooks = resp
        .filter(book => {
          return book.list_name === selectedCategory;
        })
        .map(book => book.books);
      booksArr.push(...filteredBooks);
      const filteredByCategoryBooks = booksArr[0];
      filteredByCategoryBooks.map(book => {
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

getBookByCategory()
  .then(resp => {
    if (!resp) {
      throw new Error('error');
    }
  })
  .catch(err => console.log(err));

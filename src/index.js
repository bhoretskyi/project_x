import { getCategories } from './js/books_api.js';
import { getBookByCategory } from './js/books_api.js';

const allCategories = document.querySelector('.all-categories-js');
const categorySection = document.querySelector('.book-kategories-js');
const categorySectionList = document.querySelector('.book-kategories-list-js');
const sectionSelectedBooksByCategory =
  document.querySelector('.books-by-category');
categorySectionList.addEventListener('click', pushBooksByCategory);
allCategories.addEventListener('click', () => {
  getBookByCategory().then(resp => {
    sectionSelectedBooksByCategory.innerHTML = '';

    resp.map(book => {
      sectionSelectedBooksByCategory.insertAdjacentHTML(
        'beforeend',
        `<div>
  <h2>${book.list_name}</h2>
</div>`
      );
      book.books.map(thisBook => {
        if (thisBook.list_name === book.list_name) {
          sectionSelectedBooksByCategory.insertAdjacentHTML(
            'beforeend',
            `<div>
          <img src="${thisBook.book_image}" alt="" width="335">
          <h4>${thisBook.title}</h4>
          <p>${thisBook.author}</p>
      </div>`
          );
        }
      });
    });
  });
});

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;
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
          `<div class="section-card">
        <img src="${book.book_image}" alt="" width="335">
        <h4 class="section-card-title">${book.title}</h4>
        <p class="section-card-text">${book.author}</p>
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

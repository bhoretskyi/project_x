import { getCategories } from './js/books_api.js';
import { getBookByCategory } from './js/books_api.js';

const categorySection = document.querySelector('.book-kategories-js');
const categorySectionList = document.querySelector('.book-kategories-list-js');
const sectionSelectedBooksByCategory =
  document.querySelector('.books-by-category');
categorySection.addEventListener('click', pushBooksByCategory);

function pushBooksByCategory(e) {
  const selectedCategory = e.target.outerText;
  let booksArr = [];
  getBookByCategory()
    .then(resp => {
      const filteredBooks = resp
        .filter(book => {
          return book.list_name === selectedCategory;
        })
        .map(book => book.books);
      booksArr.push(...filteredBooks);
      const filteredByCategoryBooks = booksArr[0];
      filteredByCategoryBooks.map(book => {
        console.log(book);
        sectionSelectedBooksByCategory.insertAdjacentHTML('beforeend',`<div>
        <img src="${book.book_image}" alt="">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
    </div>` );
      });
    })
    .catch(err => console.log(err));
}

getCategories()
  .then(resp => {
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

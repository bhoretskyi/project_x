import { getCategories } from './js/books_api.js';
import { getBookByCategory } from './js/books_api.js';

const categorySection = document.querySelector('.book-kategories-js');

const bookCategoryClass = categorySection.children;
console.log(bookCategoryClass);
getCategories()
  .then(resp => {
    if (!resp) {
      throw new Error('error');
    }
    console.log(resp);
    return resp.map(category =>
      categorySection.insertAdjacentHTML(
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
    console.log(resp);
  })
  .catch(err => console.log(err));

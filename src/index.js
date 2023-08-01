import { getCategories } from './js/books_api';

const categorySection = document.querySelector('.book-kategories-js');

getCategories()
  .then(resp => {
    if (!resp) {
      throw new Error('error');
    }
    console.log(resp);
    return resp.map(category =>
      categorySection.insertAdjacentHTML(
        'beforeend',
        `<h3>${category.list_name}</h3>`
      )
    );
  })
  .catch(err => console.log(err));

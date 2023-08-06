import { getBookById } from './books_api';
const shopListBookSection = document.querySelector('.shop-list-books-section');

const savedBooks = JSON.parse(localStorage.getItem('books'));
function paintBooksFromLocalstorage() {
  savedBooks.map(book => {
    getBookById(book)
      .then(resp => {
        if (!resp) {
          throw new Error('error');
        }
        console.log(resp);
        shopListBookSection.insertAdjacentHTML('beforeend', `<div class="shop-card"><p hidden>${resp._id}</p>
        <img class='modal-image' src="${resp.book_image}" alt="">
      <h4>${resp.title}</h4>
      <p>${resp.author}</p>
      <p>${resp.description}</p>
      <a href="${resp.amazon_product_url}"><img src="/src/img/Amazon.png" alt=""></a>
      <a href="${resp.book_uri}"><img src="/src/img/book-ios.png" alt=""></a>
      <a href="${resp.amazon_product_url}"><img src="/src/img/book-shop.png" alt=""></a>
      </div>
`
      
      )
      })
      .catch(err => console.log(err));
  });
}
paintBooksFromLocalstorage();

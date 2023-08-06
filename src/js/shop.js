import { getBookById } from './books_api';
const shopListBookSection = document.querySelector('.shop-list-books-section');
const amazon = document.querySelector('.amazon');
const ios = document.querySelector('.book-ios');
const shop = document.querySelector('.book-shop');

const savedBooks = JSON.parse(localStorage.getItem('books'));
function paintBooksFromLocalstorage() {
  savedBooks.map(book => {
    getBookById(book)
      .then(resp => {
        if (!resp) {
          throw new Error('error');
        }

        shopListBookSection.insertAdjacentHTML(
          'beforeend',
          `<div><p hidden>${resp._id}</p>
        <img  src="${resp.book_image}" alt="">
        
      <h4>${resp.title}</h4>
      <p>${resp.author}</p>
      <p>${resp.description}</p> 
      <a href="${resp.buy_links[0].url}" target="_blank"><img src="${amazon.src}" alt=""></a>
      <a href="${resp.buy_links[1].url}" target="_blank"><img src="${ios.src}" alt=""></a>
      <a href="${resp.buy_links[4].url}" target="_blank"><img src="${shop.src}" alt=""></a>
    

      
      
    
      </div>
      
`
        );
      })
      .catch(err => console.log(err));
  });
}
paintBooksFromLocalstorage();

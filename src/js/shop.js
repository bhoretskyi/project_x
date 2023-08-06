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
        shopListBookSection.insertAdjacentHTML('beforeend', `<div><p hidden>${resp._id}</p>
        <img  src="${resp.book_image}" alt="">
      <h4>${resp.title}</h4>
      <p>${resp.author}</p>
      <p>${resp.description}</p> 
      
    
      </div>
      
`
      
      )
      })
      .catch(err => console.log(err));
  });
}
paintBooksFromLocalstorage();


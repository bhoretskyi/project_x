import { getBookById } from './books_api';
const shopListBookSection = document.querySelector('.shop-list-books-section');
const amazon = document.querySelector('.amazon');
const ios = document.querySelector('.book-ios');
const shop = document.querySelector('.book-shop');
const trashSvg = document.querySelector('.svg');

const savedBooks = JSON.parse(localStorage.getItem('books'));
function paintBooksFromLocalstorage() {
  savedBooks.map(book => {
    getBookById(book)
      .then(resp => {
        if (!resp) {
          throw new Error('error');
        }
        let shortdescription = ''
        const words = resp.description.split(' ')
        if (words.length > 10) {
          shortdescription = words.slice(0, 10).join(' ') + '...';  
        }

        shopListBookSection.insertAdjacentHTML(
          'beforeend',
          `<div class="shopping-list-card">
    
          
        <img class="shopping-list-image"  src="${resp.book_image}" alt="">   
        <div class="shopping-list-info">
        
<div class="shopping-list-title-container">
          
      <h4 class="shopping-list-title">${resp.title}</h4>
      <h5 class="shopping-list-classlist">${resp.list_name}</h5> 

      
       
      <p class="shopping-list-description" hidden>${resp.description}</p>  
      <p class="shopping-list-description-short">${shortdescription}</p>   
      </div>
      
      <div class="shopping-list-book-links">
      <p class="shopping-list-author">${resp.author}</p>
      <a href="${resp.buy_links[0].url}" target="_blank"><img src="${amazon.src}" alt=""></a>   
      <a href="${resp.buy_links[1].url}" target="_blank"><img src="${ios.src}" alt=""></a>   
      <a href="${resp.buy_links[4].url}" target="_blank"><img src="${shop.src}" alt=""></a>
      </div>
      </div>
        
    

      
      
      <button type="button" class="trash-btn"><img class="trash-js"  src="${trashSvg.src}" alt=""></button>
      <p hidden>${resp._id}</p> 
      </div>
      
`
        );
        
        
      })
      .catch(err => console.log(err));
  });
}

paintBooksFromLocalstorage();

shopListBookSection.addEventListener('click', e => {
  if (e.target.className === 'trash-js') {


  
    const bookToRemoveId =
    e.target.parentElement.parentElement.lastElementChild.textContent
    const newSavedBooks = savedBooks.filter(item => item !== bookToRemoveId);   
    localStorage.setItem('books', JSON.stringify(newSavedBooks));
    location.reload();
  }
});

// const trashButton = document.querySelector('.trash-btn');

// trashButton.addEventListener('click', e => {
//     e.stopPropagation()
//   console.log(e.target);
// });

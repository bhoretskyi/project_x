import { Loading } from 'notiflix';
import { openBurgerModal, closeBurgerModal } from './modal';
import { getBookById } from './books_api';
const shopListBookSection = document.querySelector('.shop-list-books-section');
const amazon = document.querySelector('.amazon');
const ios = document.querySelector('.book-ios');
const shop = document.querySelector('.book-shop');
const trashSvg = document.querySelector('.svg');
const homeBtn = document.querySelector('.home-btn');
homeBtn.classList.remove('current');
const shoplistBtn = document.querySelector('.list-btn');
shoplistBtn.classList.add('current');

const savedBooks = JSON.parse(localStorage.getItem('books'));
function paintBooksFromLocalstorage() {
  savedBooks.map(book => {
    getBookById(book)
      .then(resp => {
        Loading.remove();
        if (!resp) {
          throw new Error('error');
        }
        let shortdescription = '';
        const words = resp.description.split(' ');
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
      <a href="${resp.buy_links[0].url}" target="_blank"></a>   
      <a href="${resp.buy_links[1].url}" target="_blank"></a>   
      <a href="${resp.buy_links[4].url}" target="_blank"></a>
      </div>
      </div>
        
    

      
      
      <button type="button" class="trash-btn"><img class="trash-js"  src="${trashSvg.src}" alt=""></button>
      <p hidden>${resp._id}</p> 
      </div>
      
`
        );
      })
      .catch(err => {
        Notiflix.Notify.failure(
          'Oops... something went wrong. Please reload the page'
        );
        console.log(err);
      });
  });
}

paintBooksFromLocalstorage();

shopListBookSection.addEventListener('click', e => {
  if (e.target.className === 'trash-js') {
    const bookToRemoveId =
      e.target.parentElement.parentElement.lastElementChild.textContent;
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

const checkBox = document.querySelector('.checkbox');
//console.log(loginForm);
const svgIconHeader = document.querySelector('.icon-bookshelf');
const listItemQ = document.querySelector('.book-categories-list');
const svgIconShop = document.querySelector('.list-btn-svg');
const headerFone = document.querySelector('.header-container');
const section = document.querySelector('.shop-list-books-section');
const shopTitleGen = document.querySelector('.shop-list-section-title');
//console.log(shoppingListtitle.textContent);

checkBox.addEventListener('change', chengeThemeShopp);

function chengeThemeShopp() {
  console.log('Клик работает');
  document.body.classList.toggle('dark-thema');
  svgIconHeader.classList.toggle('svg-icon-header');
  svgIconShop.classList.toggle('svg-icon-header');
  headerFone.classList.toggle('header-fone');
  shopTitleGen.classList.toggle('title-color');
  //shoppingListtitle.classList.toggle('shopping-card');
  const cardFone = section.getElementsByClassName('shopping-list-card');
  console.log(cardFone);
  for (const card of cardFone) {
    card.classList.toggle('shopping-card');
    const textTitle = card.getElementsByClassName('shopping-list-title');
    console.log(textTitle);
    for (const title of textTitle) {
      title.classList.toggle('title-color');
    }
  }
  console.log(cardFone);
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

$(function () {
  $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 6,
    autoplay: false,
  });
});

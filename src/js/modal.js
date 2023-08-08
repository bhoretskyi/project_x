const backdrop = document.querySelector('.backdrop');

export function openModal() {
  document.getElementById('myModal').style.display = 'block';
  document.body.classList.add('body-scroll-lock');
  backdrop.classList.add('modal-active');
  document.addEventListener('keydown', onEscapeKey);
  backdrop.addEventListener('click', closeModal);
} 
export function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.body.classList.remove('body-scroll-lock');
  backdrop.classList.remove('modal-active');
  backdrop.removeEventListener('click', closeModal);
}

function onEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}
 
export function openBurgerModal() {
  document.getElementById('burgerModal').style.display = 'block';        
   
  // document.body.classList.add('body-scroll-lock'); 
   
  // backdrop.classList.add('modal-active');
  document.addEventListener('keydown', onEscapeKey)
  // backdrop.addEventListener('click', closeModal)
}
export function closeBurgerModal() {
  document.getElementById('burgerModal').style.display = 'none';  
  document.body.classList.remove('body-scroll-lock'); 
  // backdrop.classList.remove('modal-active')
  // backdrop.removeEventListener('click', closeModal)
}


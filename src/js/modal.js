const backdrop = document.querySelector('.backdrop');

export function openModal() {
  document.getElementById('myModal').style.display = 'block';
  document.body.classList.add('body-scroll-lock');
  backdrop.classList.add('active');
}
export function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.body.classList.remove('body-scroll-lock');
  backdrop.classList.remove('active')
}
 
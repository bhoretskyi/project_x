export function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.classList.add('body-scroll-lock')
  }
  export function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.classList.remove('body-scroll-lock')

  }  
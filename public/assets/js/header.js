const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 0);
}, { passive: true });

document.querySelectorAll('.project-gallery').forEach(gallery => {
  const mainImg = gallery.querySelector('.gallery-main img');
  const thumbBtns = gallery.querySelectorAll('.thumb-btn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mainImg.src = btn.dataset.src;
      mainImg.alt = btn.querySelector('img').alt;
      thumbBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  // Set first thumb as active by default
  if (thumbBtns[0]) thumbBtns[0].classList.add('is-active');
});

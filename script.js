const starInputs = document.querySelectorAll('input.star');
const starForm = document.getElementById('starForm');

starInputs.forEach(star => {
  star.addEventListener('click', () => {
    let reviewForm = document.getElementById('reviewForm');

    reviewForm.style.height = 'auto';
    reviewForm.classList.add('transformY');
  })
})

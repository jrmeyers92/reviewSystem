//event listener to enable continue button 
const stars = document.querySelectorAll('#stars input');
stars.forEach(star => {
  star.addEventListener('click', () => {
    document.getElementById('starContinueButton').disabled = false;
  })
} )

const starFormContinueBtn = document.getElementById('starContinueButton');
starFormContinueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('reviewQuestions').classList.remove('hidden');
  starFormContinueBtn.classList.add('hidden');
})
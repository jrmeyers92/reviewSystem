// set review response message and show form to fill out.
if (document.getElementById('stars')) {
  let messages = {
    1: "Oh no! Please tell us how we can improve.",
    2: "Unsatisfactory. Please tell was how we can improve.",
    3: "Acceptable, but please let us know what we can do better.",
    4: "Good. Any ideas for improvements are appreciated.",
    5: "Awesome. We're thrilled you enjoyed the experience!"
  }
  const stars = document.querySelectorAll('#stars input');
  stars.forEach(star => {
    star.addEventListener('click', (e) => {
      let response = document.getElementById('reviewResponse');
      document.getElementById('slider').classList.remove('hidden');

      if (e.target.id == "rating-star-1") {
        response.innerHTML = messages[1];
      } else if (e.target.id == "rating-star-2") {
        response.innerHTML = messages[2];
      } else if (e.target.id == "rating-star-3") {
        response.innerHTML = messages[3];
      } else if (e.target.id == "rating-star-4") {
        response.innerHTML = messages[4];
      } else if (e.target.id == "rating-star-5") {
        response.innerHTML = messages[5];
      }
  })
} )




  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');
  const slideWrapper = document.getElementById('slideWrapper');
  const slideArray = Array.from(slideWrapper.children);
  const numOfSlides = slideArray.length;
  slideWrapper.style.width = `${numOfSlides * 100}%`;
  let transformPercentage = 100 / numOfSlides;
  let currentSlide = 0;

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSlide == 0) {
      currentSlide++
      prevButton.disabled = false;
    } else if (currentSlide < slideArray.length - 2 ) {
      currentSlide++;
    } else if (currentSlide < slideArray.length - 1) {
      currentSlide++;
      nextButton.disabled = true;
    }

    slideWrapper.style.transform = `translateX(-${currentSlide * transformPercentage}%)`;

  })

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSlide == 1) {
      currentSlide = currentSlide - 1;
      nextButton.disabled = false;
      prevButton.disabled = true;
    } else {
      currentSlide--;
      nextButton.disabled = false;
    }
    slideWrapper.style.transform = `translateX(-${currentSlide * transformPercentage}%)`;

  })
}








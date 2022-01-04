if (document.getElementById('stars')) {
  // set review response message and show form to fill out.
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

      switch (e.target.id) {
        case "rating-star-1": 
          response.innerHTML = messages[1];
          break; 
        case "rating-star-2": 
          response.innerHTML = messages[2];
          break; 
        case "rating-star-3": 
          response.innerHTML = messages[3];
          break; 
        case "rating-star-4": 
          response.innerHTML = messages[4];
          break; 
        case "rating-star-5": 
          response.innerHTML = messages[5];
          break; 
      }
  })
} )
// FORM VALIDATIO -- enables next button when form is filled out properly
let events = 'keyup select change'.split(' ');
events.forEach(event => {
  document.getElementById('reviewQuestions').addEventListener(event, () => {
    let inputs = document.querySelectorAll('#reviewQuestions input, #reviewQuestions textarea, #reviewQuestions select');
    let validity = true;
  
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        validity = false;
        document.getElementById('nextButton').disabled = true;
        break;
      }
    }
  
    if (validity === true) {
      document.getElementById('nextButton').disabled = false;
    }
  })
}) 

// slider form functionality 
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








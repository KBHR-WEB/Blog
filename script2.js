const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
const imageWidth = images[0].clientWidth;

function slide() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const offset = -currentIndex * imageWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

setInterval(slide, 3000); // Change image every 3 seconds

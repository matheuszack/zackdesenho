const carouselSlide = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'first-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

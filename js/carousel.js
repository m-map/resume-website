const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const butNav =  document.querySelector('.carousel__nav');
const butts = Array.from(butNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;





console.log(slideSize);
// when left clicked move slide left
//when click rigth move right
// when i click button go to button
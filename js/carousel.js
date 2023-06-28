const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const buttNav =  document.querySelector('.carousel__nav');
const butts = Array.from(buttNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateButts =(currentButt, targetButt) => {
    currentButt.classList.remove('current-slide');
    targetButt.classList.add('current-slide');
}

const updateArrows = (slides,prevButton,nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


// when left clicked move slide left
//when click rigth move right
prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentButt = buttNav.querySelector('.current-slide');
    const prevButt = currentButt.previousElementSibling
    moveToSlide(track,currentSlide,prevSlide)
    updateButts(currentButt, prevButt)
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    updateArrows(slides, prevButton, nextButton, prevIndex);
})

nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;
    const currentButt = buttNav.querySelector('.current-slide');
    const nextButt = currentButt.nextElementSibling
    moveToSlide(track,currentSlide,nextSlide)
    updateButts(currentButt, nextButt)
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    updateArrows(slides, prevButton, nextButton, nextIndex);
})
// when i click button go to button

buttNav.addEventListener('click', e => {
    const targetButt = e.target.closest('button');
    if (!targetButt) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentButt = buttNav.querySelector('.current-slide');
    const targetIndex = butts.findIndex(but => but === targetButt);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateButts(currentButt, targetButt)
    updateArrows(slides, prevButton, nextButton, targetIndex);
    
})
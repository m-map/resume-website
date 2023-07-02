const track2 = document.querySelector('.carousel__track-2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel__button--right-2');
const prevButton2 = document.querySelector('.carousel__button--left-2');
const buttNav2 =  document.querySelector('.carousel__nav-2');
const butts2 = Array.from(buttNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide,index) => {
    slide.style.left = slideWidth2 * index + 'px';
}
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2,currentSlide,targetSlide) => {
    track2.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide-2');
    targetSlide.classList.add('current-slide-2');
}

const updateButts2 =(currentButt, targetButt) => {
    currentButt.classList.remove('current-slide-2');
    targetButt.classList.add('current-slide-2');
}

const updateArrows2 = (slides2,prevButton2,nextButton2, targetIndex) => {
    if (targetIndex === 0) {
        prevButton2.classList.add('is-hidden-2');
        nextButton2.classList.remove('is-hidden-2');
    } else if (targetIndex === slides2.length -1) {
        nextButton2.classList.add('is-hidden-2');
        prevButton2.classList.remove('is-hidden-2');
    } else {
        prevButton2.classList.remove('is-hidden-2');
        nextButton2.classList.remove('is-hidden-2');
    }
}


// when left clicked move slide left
//when click rigth move right
prevButton2.addEventListener('click', e=>{
    const currentSlide = track2.querySelector('.current-slide-2');
    const prevSlide = currentSlide.previousElementSibling;
    const currentButt = buttNav2.querySelector('.current-slide-2');
    const prevButt = currentButt.previousElementSibling
    moveToSlide2(track2,currentSlide,prevSlide)
    updateButts2(currentButt, prevButt)
    const prevIndex = slides2.findIndex(slide => slide === prevSlide);
    updateArrows2(slides2, prevButton2, nextButton2, prevIndex);
})

nextButton2.addEventListener('click', e=>{
    const currentSlide = track2.querySelector('.current-slide-2')
    const nextSlide = currentSlide.nextElementSibling;
    const currentButt = buttNav2.querySelector('.current-slide-2');
    const nextButt = currentButt.nextElementSibling
    moveToSlide2(track2,currentSlide,nextSlide)
    updateButts2(currentButt, nextButt)
    const nextIndex = slides2.findIndex(slide => slide === nextSlide);
    updateArrows2(slides2, prevButton2, nextButton2, nextIndex);
})
// when i click button go to button

buttNav2.addEventListener('click', e => {
    const targetButt = e.target.closest('button');
    if (!targetButt) return;

    const currentSlide = track2.querySelector('.current-slide-2');
    const currentButt = buttNav2.querySelector('.current-slide-2');
    const targetIndex = butts2.findIndex(but => but === targetButt);
    const targetSlide = slides2[targetIndex];
    moveToSlide2(track2, currentSlide, targetSlide);
    updateButts2(currentButt, targetButt)
    updateArrows2(slides2, prevButton2, nextButton2, targetIndex);
    
})
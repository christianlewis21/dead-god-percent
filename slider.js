const sliderInner = document.querySelector('.slider-inner');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide-vid');

const slideWidth = document.querySelector('.slide-vid').offsetWidth;

const firstSlide = slides[currentIndex].cloneNode(true);
const secondSlide = slides[currentIndex+1].cloneNode(true);
const thirdSlide = slides[currentIndex+2].cloneNode(true);
const fourthSlide = slides[currentIndex+3].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

sliderInner.appendChild(firstSlide);
sliderInner.appendChild(secondSlide);
sliderInner.appendChild(thirdSlide);
sliderInner.appendChild(fourthSlide);
sliderInner.insertBefore(lastSlide, slides[0]);

const totalSlides = slides.length + 2;

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } 
    else {
        currentIndex = 1;
        sliderInner.style.transition = 'none';
        sliderInner.style.transform = `translateX(0)`;
        setTimeout(() => {
            currentIndex++;
            sliderInner.style.transition = 'transform 0.5s ease-in-out';
            updateSliderPosition();
        }, 50);
    }
    updateSliderPosition();
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } 
    else {
        currentIndex = totalSlides - 2;
        sliderInner.style.transition = 'none';
        sliderInner.style.transform = `translateX(-${(totalSlides - 2) * slideWidth}px)`;
        setTimeout(() => {
            currentIndex--;
            sliderInner.style.transition = 'transform 0.5s ease-in-out';
            updateSliderPosition();
        }, 50);
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

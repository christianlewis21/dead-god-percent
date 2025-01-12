document.addEventListener("DOMContentLoaded", function() {
    function initializeSlider(sliderContainerClass, sliderInnerClass, leftArrowClass, rightArrowClass, slideClass) {
        const sliderContainer = document.querySelector(sliderContainerClass);
        const sliderInner = sliderContainer.querySelector(sliderInnerClass);
        const leftArrow = sliderContainer.querySelector(leftArrowClass);
        const rightArrow = sliderContainer.querySelector(rightArrowClass);

        let currentIndex = 0;
        const slides = sliderContainer.querySelectorAll(slideClass);

        const slideWidth = slides[0].offsetWidth;

        addSlides();

        const totalSlides = slides.length + 2;

        rightArrow.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
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
            } else {
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

        function addSlides() {
            for (let i = 0; i < slides.length; i++) {
                let slide = slides[i].cloneNode(true);
                sliderInner.appendChild(slide);
            }
        }
    }

    initializeSlider('.slider-container', '.slider-inner', '.left-arrow', '.right-arrow', '.slide-vid');
    initializeSlider('.slider-container-2', '.slider-inner-2', '.left-arrow-2', '.right-arrow-2', '.slide-vid-2');
});
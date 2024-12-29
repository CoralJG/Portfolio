let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

setInterval(() => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    currentIndex = (currentIndex + 1) % totalSlides;
}, 3000);
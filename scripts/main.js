let currentSlide = 0;
const images = [
    '/img/license1.jpg',
    '/img/license2.jpg',
    '/img/license3.jpg',
    '/img/license4.jpg'
];

// Открытие модального окна
function openModal(index) {
    currentSlide = index;
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImage.src = images[currentSlide];
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Переключение слайдов
function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    const modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentSlide];
}

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY; // Высота прокрутки страницы
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Общая высота страницы
    const scrollPercentage = (scrollTop / totalHeight); // Процент прокрутки страницы

    // Меняем цвет фона в зависимости от процента прокрутки
    const backgroundColor = `rgb(${255 - Math.min(scrollPercentage * 255, 255)}, ${255 - Math.min(scrollPercentage * 255, 255)}, ${255})`;
    document.body.style.backgroundColor = backgroundColor;
});

window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide();
}, 3000);  // смена слайда каждые 3 секунды

const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();  // Проверить сразу, если элементы уже на экране

const quotes = [
    '"Жизнь — это то, что происходит, пока вы строите планы."',
    '"Будь собой, все остальные роли уже заняты."',
    '"Мечты сбываются, если за ними идти."',
];

function changeQuote() {
    const quoteElement = document.getElementById('quote-text');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

setInterval(changeQuote, 5000);

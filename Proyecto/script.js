const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn');
const imageCard = document.getElementById('imageCard');

redBtn.addEventListener('click', function() {
    imageCard.style.backgroundImage = "url('red-benz.webp')";
});

grayBtn.addEventListener('click', function() {
    imageCard.style.backgroundImage = "url('gray-benz.webp')";
});
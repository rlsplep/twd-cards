const characters = ["Клементина", "Ли", "Кенни"]
const images = [
    "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fc/%D0%9A%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_The_walking_dead_the_final_season.jpg/330px-%D0%9A%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_The_walking_dead_the_final_season.jpg",
    "https://upload.wikimedia.org/wikipedia/ru/0/0e/%D0%9B%D0%B8_%D0%AD%D0%B2%D0%B5%D1%80%D0%B5%D1%82%D1%82.jpg",
    "https://i.pinimg.com/736x/9b/93/4b/9b934b82a46ddaf53da34c0f5e594930.jpg"
];

let currentIndex = 0;

const nameElement = document.getElementById("char-name");
const imgElement = document.getElementById('char-img');
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= characters.length) {
        currentIndex = 0;
    }

    nameElement.textContent = characters[currentIndex];
    imgElement.src = images[currentIndex]

});

prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = characters.length - 1;
    }

    nameElement.textContent = characters[currentIndex];
    imgElement.src = images[currentIndex]

});   









    
const characters = ["Клементина", "Ли", "Кенни"]
let currentIndex = 0;

const nameElement = document.getElementById("char-name");
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= characters.length) {
        currentIndex = 0;
    }

    nameElement.textContent = characters[currentIndex];

});

prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = characters.length - 1;
    }

    nameElement.textContent = characters[currentIndex];

});   









    
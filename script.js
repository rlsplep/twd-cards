const characters = ["Клементина", "Ли", "Кенни"]
const images = [
    "https://i.pinimg.com/736x/b2/2e/7a/b22e7a0b6783fbb35c9c71405ec3d076.jpg",
    "https://i.pinimg.com/736x/6a/e5/12/6ae512dc4110f9d066fbf9892d92bb17.jpg",
    "https://i.pinimg.com/1200x/4d/41/de/4d41dee2b905ca2d9222e89a9a3320a2.jpg"
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



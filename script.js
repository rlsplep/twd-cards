const nameElement = document.getElementById("char-name");

const nextBtn = document.querySelector(".right-arrow");

nextBtn.addEventListener("click", function () {
    
    if (nameElement.textContent === "Клементина") {
        nameElement.textContent = "Ли";
    } else {
        nameElement.textContent = "Клементина";
    }
    console.log("Имя изменено!");
    
});    

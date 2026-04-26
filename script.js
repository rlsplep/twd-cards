const characters = [
    {
        name: "Клементина",
        image: "https://i.pinimg.com/736x/b2/2e/7a/b22e7a0b6783fbb35c9c71405ec3d076.jpg",
        desc: "Клементина - закаленная выжившая, прошедшая путь от беззащитного ребенка до мудрого лидера. Став наставницей для малыша Эй-Джея, она воплотила в себе уроки своего опекуна Ли, превратившись в символ стойкости и человечности. В финале своего пути Клем находит долгожданный дом в школе Эрика, где ценой огромных потерь наконец обретает покой и защищает будущее тех, кто ей дорог.",
        text: "Является протагонистом серии сезонов",
        bg: "images/celmentine-bg.jpg"
    },
    {
        name: "Ли",
        image: "https://i.pinimg.com/736x/22/66/84/226684de5f8af5b6bb617fa0ac12828c.jpg",
        desc: "Ли Эверетт — человек с непростым прошлым, ставший для мира зомби-апокалипсиса не просто защитником, а настоящим моральным компасом. Из осужденного преступника, получившего шанс на искупление, он превратился в самоотверженного наставника, чьей главной миссией стало спасение Клементины. Его путь — это история о том, как человечность и отцовская любовь могут возобладать даже в условиях полного краха цивилизации. Ли погиб, так и не увидев будущего, но его наследие и уроки выживания стали фундаментом, на котором Клем построила свою жизнь, пронеся его имя сквозь годы.",
        text: "Является протагонистом первого сезона",
        bg: "images/lee-bg.jpg"
    },
    {
        name: "Кенни",
        image: "https://i.pinimg.com/1200x/4d/41/de/4d41dee2b905ca2d9222e89a9a3320a2.jpg",
        desc: "Кенни — это воплощение яростной преданности и несокрушимой воли, человек, для которого семья всегда была единственным смыслом жизни. Его путь полон трагедий и невыносимых потерь, которые превратили его в изломанного, но глубоко любящего защитника. Несмотря на свой взрывной характер и внутреннюю тьму, он до самого конца оставался тем, кто готов пожертвовать всем ради безопасности тех, кого он считал своими. Кенни стал для Клементины связью с прошлым и суровым напоминанием о том, что в этом жестоком мире выживают лишь те, кто готов сражаться за своих до последнего вздоха.",
        text: "Является одним из главных персонажей первого и второго сезона",
        bg: "images/kenny-bg.jpg"
    }];

let currentIndex = 0;

const textElement = document.getElementById("text-about");
const descElement = document.getElementById("char-des");
const nameElement = document.getElementById("char-name");
const imgElement = document.getElementById('char-img');
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= characters.length) {
        currentIndex = 0;
    }

    nameElement.textContent = characters[currentIndex].name;
    imgElement.src = characters[currentIndex].image;
    descElement.textContent = characters[currentIndex].desc;
    textElement.textContent = characters[currentIndex].text;
    document.body.style.backgroundImage = `url('${characters[currentIndex].bg}')`;


});

prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = characters.length - 1;
    }

    nameElement.textContent = characters[currentIndex].name;
    imgElement.src = characters[currentIndex].image;
    descElement.textContent = characters[currentIndex].desc;
    textElement.textContent = characters[currentIndex].text;
    document.body.style.backgroundImage = `url('${characters[currentIndex].bg}')`;

});   


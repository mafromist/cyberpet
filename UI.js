let dogCont = document.querySelector("#dogContainer");
let catCont = document.querySelector("#catContainer");
let rabbitCont = document.querySelector("#rabbitContainer");

let dogImg = document.querySelector("#dogPic");
let catImg = document.querySelector("#catPic");
let rabbitImg = document.querySelector("#rabbitPic");
let allImgs = document.querySelector(".pic");

let animalInfo = document.querySelector("#animalInfo");
let animalName = document.querySelector("#animalName");
let animalType = document.querySelector("#animalType");
let gameTitle = document.querySelector(".gameTitle");


const petName = new Pet(prompt("What is your CyberPet's Name?"));
animalName.textContent = `${petName.name}`;

dogImg.addEventListener('click', event => {
    animalType.textContent = "Dog";
    animalInfo.style.display = "flex";
    catCont.style.display = "none";
    rabbitCont.style.display = "none"; 
    gameTitle.style.display = "none";
    startLevels();
    systemDecrease();  
    
});

catImg.addEventListener('click', event => {
    animalType.textContent = "Cat";
    dogCont.style.display = "none";
    animalInfo.style.display = "flex";   
    rabbitCont.style.display = "none";
    gameTitle.style.display = "none";
    startLevels();
    systemDecrease(); 
});

rabbitImg.addEventListener('click', event => {
    animalType.textContent = "Rabbit";
    dogCont.style.display = "none";
    catCont.style.display = "none";
    animalInfo.style.display = "flex";
    gameTitle.style.display = "none";
    startLevels();
    systemDecrease();
});

let happinessLevel = document.querySelector("#happinessLevel");
let hungerLevel = document.querySelector("#hungerLevel");
let thirstLevel = document.querySelector("#thirstLevel");

let playBtn = document.querySelector("#playBtn");
let feedBtn = document.querySelector("#feedBtn");
let gWaterBtn = document.querySelector("#gWaterBtn");


playBtn.addEventListener('click', event => {
    if(petName.happiness <= 0) {
        alert("I AM SO BOOORED!!");
        happinessLevel.value = `${petName.happiness += 20}`;
    } else if (petName.happiness >= 100) {
        alert("I am joyful!!");
        systemDecrease();
    } else {
        happinessLevel.value = `${petName.happiness += 10}`;
    }
});

feedBtn.addEventListener('click', event => {
    if(petName.hunger <= 0) {
        alert(`Starvinngg..poor ${petName.name}!`);
        hungerLevel.value = `${petName.hunger += 20}`;
    } else if (petName.hunger >= 100) {
        alert("Stop feeding me, I am full!");
        systemDecrease();
    } else {
        hungerLevel.value = `${petName.hunger += 10}`;
    }
});

gWaterBtn.addEventListener('click', event => {
    if(petName.thirst <= 0) {
        alert("WAATEEERRR!!!!");
        thirstLevel.value = `${petName.thirst += 20}`;
    } else if (petName.thirst >= 100) {
        alert("Stop giving water, I am bloated!");
        systemDecrease(); 
    } else {
        thirstLevel.value = `${petName.thirst += 10}`;
    }
});

let backBtn = document.querySelector("#backBtn");

backBtn.addEventListener('click',() =>{
    window.location.reload();
})

const startLevels = () => {
    happinessLevel.value = `${petName.happiness}`;
    hungerLevel.value = `${petName.hunger}`;
    thirstLevel.value = `${petName.thirst}`;  
}

const systemDecrease = () => {
    setInterval( () => {
        happinessLevel.value = `${petName.happiness -= 5}`;
        hungerLevel.value = `${petName.hunger -= 5}`;
        thirstLevel.value = `${petName.thirst -= 5}`;
    }, 2000);
}

/*  trying to change the color of progress bar depends on the levels

let progressBars = document.querySelector(".progressBars[value]::-webkit-progress-value");

progressBars.style.backgroundColor = "#289";

const checkLevels = () => {
    if(petName.happiness >= 50) {
        progressBars.style.backgroundColor = "white";
    } else {
        progressBars.style.backgroundColor = "green";
    }
} */


//PSEUDO CODE

/*
/On click to the picture of the animals, the properties should appear; (these can be in different JS file)
    - animal name
    - animal happiness level
    - animal hunger level
    - animal thirst level
    - playBtn (these can be in different JS file)
    - feedBtn (these can be in different JS file)
    - giveWaterBtn (these can be in different JS file)
    - backBtn (these can be in different JS file) - done
 */ 
// define elements

// names - it needs just closed due to quick testing

/*
/On click to buttons: (these can be in different JS file)
    - playBtn => it will decrease the level of animal happinessLevel for 10pts
    - feedBtn => it will decrease the level of animal hungerLevel for 10pts
    - giveWaterBtn => it will decrease the level of animal thirstLevel for 10pts
    
    /Levels change style; 
        if any level less than 50 addClass : levelBad
        if any level equal or more than 50 addClass : levelGood

/Until click to backBtn, Every 3 seconds;
    - animal happiness level will increase 1pts
    - animal hunger level will increase 1pts
    - animal thirst level will increase 1pts

*/

/* Reset the pet

// - backBtn => takes to homepage

/* Tried to reduce the repeat on the code but it only efffect dog levels 
the others' levels actually change as petName.level but textContent show 100 in the beginning

    allImgs.addEventListener('click', event => {
    startLevels();
    systemIncrease(); 
}) */



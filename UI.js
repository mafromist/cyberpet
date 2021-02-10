const petName = new Pet(prompt("What is your Pet Name?"));

let animalName = document.querySelector("#animalName");

animalName.textContent = `${petName.name}`;

//define image for selection

let dogCont = document.querySelector("#dogContainer");
let catCont = document.querySelector("#catContainer");
let rabbitCont = document.querySelector("#rabbitContainer");

let dogImg = document.querySelector("#dogPic");
let catImg = document.querySelector("#catPic");
let rabbitImg = document.querySelector("#rabbitPic");

let animalInfo = document.querySelector("#animalInfo");

dogImg.addEventListener('click', event => {
    animalInfo.style.display = "block";
    catCont.style.display = "none";
    rabbitCont.style.display = "none";
    startLevels();
    systemIncrease();    
});

catImg.addEventListener('click', event => {
    dogCont.style.display = "none";
    animalInfo.style.display = "block";   
    rabbitCont.style.display = "none";
    startLevels();
    systemIncrease();    

});

rabbitImg.addEventListener('click', event => {
    dogCont.style.display = "none";
    catCont.style.display = "none";
    animalInfo.style.display = "block";
    startLevels();
    systemIncrease();    
});

//Btns and levels 

let borednessLevel = document.querySelector(".borednessLevel");
let hungerLevel = document.querySelector(".hungerLevel");
let thirstLevel = document.querySelector(".thirstLevel");

//it does not effect the animal info's except the first one

let playBtn = document.querySelector("#playBtn");
let feedBtn = document.querySelector("#feedBtn");
let gWaterBtn = document.querySelector("#gWaterBtn");

const startLevels = () => {
    borednessLevel.textContent = `${petName.boredness}`;
    hungerLevel.textContent = `${petName.hunger}`;
    thirstLevel.textContent = `${petName.thirst}`;  
}

const systemIncrease = () => {
    setInterval( () => {
        borednessLevel.textContent = `${petName.boredness += 5}`;
        console.log("hello");
        hungerLevel.textContent = `${petName.hunger += 5}`;
        thirstLevel.textContent = `${petName.thirst += 5}`;
    }, 3000);
}

/*
/On click to the picture of the animals, the properties should appear; (these can be in different JS file)
    - animal name
    - animal boredness level
    - animal hunger level
    - animal thirst level
    - playBtn (these can be in different JS file)
    - feedBtn (these can be in different JS file)
    - giveWaterBtn (these can be in different JS file)
    - backBtn (these can be in different JS file)
 */ 
// define elements

// names - it needs just closed due to quick testing




/*
/On click to buttons: (these can be in different JS file)
    - playBtn => it will decrease the level of animal borednessLevel for 10pts
    - feedBtn => it will decrease the level of animal hungerLevel for 10pts
    - giveWaterBtn => it will decrease the level of animal thirstLevel for 10pts
    
    /Levels change style; 
        if any level less than 50 addClass : levelBad
        if any level equal or more than 50 addClass : levelGood

/Until click to backBtn, Every 3 seconds;
    - animal boredness level will increase 1pts
    - animal hunger level will increase 1pts
    - animal thirst level will increase 1pts

*/

/* Reset the pet

// - backBtn => takes to homepage

*/



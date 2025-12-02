// Les 1: Introductie

//Dit zijn de eerste variabelen die jullie hebben aangemaakt

// console.log("Main loaded");
// const name = "de Lange";
// console.log(name);
// let score = 10;
// console.log("Je score is " + score);
// score = score + 10;
// console.log(score);


// Les 2: Debugging

// let age = 28;
// console.log(age);
// age = age + 1;
// console.log(age);
// const price = 26.99;
// console.log(price);
// price = 10.00;

// Les 3: Interactie

// alert('hello world');

// const username = prompt("Wat is je gebruikersnaam");

// if (username === 'gijsdl') {
//     alert('correct');
// } else {
//     alert('incorrect');
// }

// Les 4: Functies deel 1

// function sayHello(){
//     alert("hello");
// }

// sayHello();
// sayHello();

// Les 4: Functies deel 2

// function calculateNewPrice(money) {
//     let newPrice = 0;
//     if (money >= 100) {
//         newPrice = money * 1.21;
//     } else if (money >= 50) {
//         newPrice = money * 1.06;
//     } else if (money >= 10) {
//         newPrice = money * 1.02;
//     } else {
//         newPrice = money;
//     }
//     return newPrice;
// }

// const money1 = 100;

// alert(calculateNewPrice(money1));
// alert(calculateNewPrice(50));

// Les 6: DOM

// const h1Element = document.querySelector('h1');
// const textElement = document.querySelector('#text');
// const divElement = document.querySelector('#container');
// const buttonsContainer = document.querySelector('.buttons-container');



// h1Element.textContent = "Een nieuwe titel";

// divElement.innerHTML = "<p>Dit is een tweede p</p><p>Dit is de 3e</p>";
// buttonsContainer.innerHTML = "<button>text</button>";

// function changeTextElement(isTrue) {
//     if (isTrue) {
//         textElement.textContent = "Dit is een nieuwe tekst.";
//     }
// }

// changeTextElement(true);

// Les 8: Eventes

// const clickP = document.querySelector('#total-click');
// const clickBtn = document.querySelector('#click');
// let click = 0;

// clickBtn.addEventListener('click', updateClick);

// function updateClick(){
//     click = click + 1;
//     clickP.textContent = click;
//     console.log(click);
// }


//Les 9: DOM-style

// const button = document.querySelector('#click');

// button.addEventListener('click', changeColor);

// function changeColor() {
//     // button.style = "background-color: red";
//     if(button.classList.contains('color')){
//         button.classList.remove('color');
//     }
//     // if (button.classList.contains('red')) {
//     //     button.classList.add('color');
//     // }
//     console.log(button.classList);
//     button.classList.add('red');
//     console.log(button.classList);

// }

//les 10: while-loops

// let index = 1;

// while(index <= 10){
//     console.log(index + " * 10 = " + index * 10);
//     // index = index + 1;
//     index++;
// }

// let a = 5;
// let b = 3;
// let c = 5;

// // OR

// if(a === b || a=== c){
//     console.log('klopt');
// }

// // AND

// if (a=== b && a === c){
//     console.log('klopt');

// }

// // Gemiddelde bereken met while loop

// let number = null;
// let total = 0;
// let repeated = 0;

// while (number !== 0){
//     number = parseInt(prompt("Geef een nieuwe waarde. Vul het getal 0 in als je klaar bent"));
//     // total = total + number;
//     total += number;
//     repeated++;
//     console.log(repeated);
//     console.log(total);
// }

// const avg = total / repeated;
// console.log(avg);

//les 11

// const carsElement = document.querySelector('.cars');
// const cars = ['mithubithi', 'toyota', 'lancia', 'bmw'];

// // console.log(cars);

// // console.log(cars[2]);

// function showCars() {
//     carsElement.innerHTML = '';
//     let i = 0;

//     console.log(cars.length);

//     while (i < cars.length) {
//         const car = cars[i];
//         console.log(car);
//         // carsElement.innerHTML += 'Auto ' + (i + 1) + ' = ' + car;
//         carsElement.innerHTML += `Auto ${i + 1} = ${car}, `;
//         i++;
//     }
// }

// showCars();

// cars.push('audi');

// showCars();

// cars.pop();

// showCars();

//les 12

// const carsElement = document.querySelector('.cars');
// const cars = ['mithubithi', 'toyota', 'lancia', 'bmw'];

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     carsElement.innerHTML += `Auto ${i + 1} = ${car}, `;
// }

// const numberElements = document.querySelectorAll('.number');
// console.log(numberElements);
// for (let i = 0; i < numberElements.length; i++) {
//     const numberElement = numberElements[i];
//     numberElement.style = 'background-color: red;'
// }
// // numberElements[0].classList.add('red');

// const randomNumber = Math.floor(Math.random() * 10);
// // console.log(randomNumber);
// let guessedNumber = 0;
// while (randomNumber !== guessedNumber) {
//     guessedNumber = parseInt(prompt("vul een getal in"));
//     if (guessedNumber === randomNumber) {
//         alert("goed geraden!");
//     }
// }

// const randomDiv = document.querySelector('.random-div');
// const addStyleBtn = document.querySelector('.add-style-btn');
// const removeStyleBtn = document.querySelector('.remove-style-btn');
// const toggleStyleBtn = document.querySelector('.toggle-style-btn');

// addStyleBtn.addEventListener('click', addStyle);
// removeStyleBtn.addEventListener('click', removeStyle);
// toggleStyleBtn.addEventListener('click', toggleStyle);

// function addStyle(){
//     randomDiv.classList.add('div-style');
// }

// function removeStyle(){
//     randomDiv.classList.remove('div-style');
// }

// function toggleStyle(){
//     randomDiv.classList.toggle('div-style');
// }

// function showTable(table) {
//     console.log(`tafel van ${table}`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(calculateTable(i, table));
//     }
// }

// function calculateTable(i, table) {
//     return `${i} * ${table} = ${i * table}`;
// }

// showTable(1);
// showTable(2);


function addNumbers(total) {
    let sum = 0;
    for (let i = 1; i <= total; i++) {
        if (i < 10) {
            let temp = 5;
            sum += temp;
        } else {
            sum += i;
        }
    }
    return sum;
}

console.log(addNumbers(10));
console.log(addNumbers(20));


// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

let board = [
    'X', 'X', 'O', // rij 1
    'O', 'X', '',  // rij 2
    '', 'O', ''   // rij 3
];

console.log(board[5]);

if(board[5] === ''){
    console.log('is leeg');
} else {
    console.log(board[5]);
    
}

board[5] = 'X'

console.log(board);

// P02 les 4
// Schrijf de stappen om te controleren 
// of een speler 3-op-een-rij heeft

/*

nieuw

begin een functie check() met 3 parameters a, b en c
kijken of a, b of c niet leeg is
controleer of a, b en c gelijk zijn
als ze dezelfde waarde hebben zeg dat je gewonnen hebt
Laat zien wie er gewonnen met de waarde die in a staat
einde functie

we roepen de functie check aan met waarde 0, 1 en 2
we roepen de functie check aan met waarde 3, 4 en 5
we roepen de functie check aan met waarde 6, 7 en 8
we roepen de functie check aan met waarde 0, 3 en 6


*/


/*
oud
controleer of positie 3, 4 en 5 dezelde waarde hebben
als ze dezelfde waarde hebben zeg dat je gewonnen hebt
controleer of positie 6, 7 en 8 dezelde waarde hebben
als ze dezelfde waarde hebben zeg dat je gewonnen hebt
controleer of positie 0, 3 en 6 dezelde waarde hebben
als ze dezelfde waarde hebben zeg dat je gewonnen hebt
*/
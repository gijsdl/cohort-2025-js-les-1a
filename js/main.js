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

let index = 1;

while(index <= 10){
    console.log(index + " * 10 = " + index * 10);
    // index = index + 1;
    index++;
}

let a = 5;
let b = 3;
let c = 5;

// OR

if(a === b || a=== c){
    console.log('klopt');
}

// AND

if (a=== b && a === c){
    console.log('klopt');
    
}

// Gemiddelde bereken met while loop

let number = null;
let total = 0;
let repeated = 0;

while (number !== 0){
    number = parseInt(prompt("Geef een nieuwe waarde. Vul het getal 0 in als je klaar bent"));
    // total = total + number;
    total += number;
    repeated++;
    console.log(repeated);
    console.log(total);
}

const avg = total / repeated;
console.log(avg);

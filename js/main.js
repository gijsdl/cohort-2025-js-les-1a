// //Dit zijn de eerste variabelen die jullie hebben aangemaakt

// console.log("Main loaded");
// const name = "de Lange";
// console.log(name);
// let score = 10;
// console.log("Je score is " + score);
// score = score + 10;
// console.log(score);



// let age = 28;
// console.log(age);
// age = age + 1;
// console.log(age);
// const price = 26.99;
// console.log(price);
// price = 10.00;

// alert('hello world');

// const username = prompt("Wat is je gebruikersnaam");

// if (username === 'gijsdl') {
//     alert('correct');
// } else {
//     alert('incorrect');
// }


// function sayHello(){
//     alert("hello");
// }

// sayHello();
// sayHello();

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

const clickP = document.querySelector('#total-click');
const clickBtn = document.querySelector('#click');
let click = 0;

clickBtn.addEventListener('click', updateClick);

function updateClick(){
    click = click + 1;
    clickP.textContent = click;
    console.log(click);
}
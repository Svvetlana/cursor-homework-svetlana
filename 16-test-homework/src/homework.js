//1
const applePrice = 15.678;
const bananaPrice = 123.965;
const pearPrice = 90.2345;


const maxPrice = Math.max(applePrice, bananaPrice, pearPrice);

//2
let firstNumber = null;
let secondNumber = null;
do {
  firstNumber = +prompt(`Введите первое целое число`);  
} while ((isNaN(firstNumber) || !(firstNumber % 1 === 0) || !firstNumber));

do {
secondNumber = +prompt(`Введите второе целое число`);
} while ((isNaN(secondNumber) || !(secondNumber % 1 === 0) || !secondNumber));

const isEven = confirm(`Будем ли пропускать четные числа?`);
let suma = 0;
const minNumber = Math.min(firstNumber, secondNumber);
const maxNumber = Math.max(firstNumber, secondNumber);

for (let i = minNumber; i <= maxNumber; i ++ ) {
  if (!isEven || i %2 !== 0) {
  suma += i;
  }
}

//3
function getRandomPassword(len = 8) {

    let password = "";
  
    for (let i = 1; i <= len; i++) {
      password += (Math.trunc(Math.random() * 10)).toString();
    }
  
    return `Ваш пароль длиной ${len} цифр: ${password}.`;
  }

  export {
    maxPrice,
    suma,
    getRandomPassword,
    };
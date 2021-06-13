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

document.write(`Сумма всех чисел равна: ${suma}`);
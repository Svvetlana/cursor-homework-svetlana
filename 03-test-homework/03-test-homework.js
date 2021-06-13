//1.
function getMaxDigit() {
  let number = null;
  do {
    number = +prompt(`Введите целое число, чтобы узнать наибольшую цифру.`);
  } while ((isNaN(number) || !Number.isInteger(number) || !number));

  const stringFromNumber = number.toString();
  const split = stringFromNumber.split('');
  const arrNumber = split.map(Number);
  const maxNumber = Math.max(...arrNumber);
  return `В числе ${number} наибольшая цифра ${maxNumber}.`;
}

//2.
function getPowDigit() {
  let firstNumber = null;
  let secondNumber = null;
  firstNumber = +prompt(`Введите число для возведения в степень.`);
  secondNumber = +prompt(`Введите степень числа.`);

  let result = 1;
  if (secondNumber >= 0) {
    for (let i = 0; i < secondNumber; i++) {
      result *= firstNumber;
    }
    return `Число ${firstNumber} в степени ${secondNumber} равно ${result}.`

  } else if (secondNumber < 0) {
    for (let i = 1; i <= -secondNumber; i++) {
      result /= firstNumber;
    }
  }
  return `Число ${firstNumber} в степени ${secondNumber} равно ${result}.`;
}

//3.
function formatName() {
  const name = prompt(`Введите имя.`);
  const changeName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Измененное имя ${changeName}.`
}

//4.
function salaryWithTax() {
  const salary = prompt(`Введите сумму Вашей зарплаты.`);
  const salaryWithTax = salary - ((salary * 19.5) / 100);
  return `Ваша зарплата ${salary}
  при учете налога 19.5% составит ${salaryWithTax} грн.`
}

//5.
function getRandomNumber() {
  let firstNumber = +prompt(`Введите первое число.`);
  let secondNumber = +prompt(`Введите второе число.`);
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);
  const randomNumber =
    Math.round(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return `Случайное число в диапазоне от ${minNumber} до ${maxNumber} 
  составит ${randomNumber}.`;
}

//6.
function countLetter() {
  let word = prompt(`Введите слово, 
  в котором хотите подсчитать количество букв.`);
  const letter = prompt(`Введите букву для подсчета.`);
  word = word.toLowerCase();
  let amount = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      amount += 1;
    }
  }
  return `Буква ${letter} в слове ${word} повторяется ${amount} раз.`;
}

//7.
function convertCurrency() {
  const money = +prompt(`Какую сумму хотите поменять?`);
  const currency = prompt(`Какую валюту принесли?`, `UAH, USD`);
  const currencyUpper = currency.toUpperCase();
  if (currencyUpper === `UAH`) {
    return +(money * 0.037).toFixed(2) + ` USD`;
  } else if (currencyUpper === `USD` || `$`) {
    return +(money * 27.04).toFixed(2) + ` UAH`;
  }
  return convertCurrency();
}

//8.
function getRandomPassword() {
  let len = +prompt(`Какова длина пароля?`);
  if (len == "" || isNaN(len)) {
    len = 8;
  }
  let password = "";
  for (let i = 1; i <= len; i++) {
    password += (Math.trunc(Math.random() * 10)).toString();
  }
  return `Ваш пароль длиной ${len} цифр: ${password}.`;
}

//9.
function deleteLetters() {
  const sentence = prompt(`Введите предложение.`);
  const letter = prompt(`Введите букву для исключения.`);
  let newSentence = sentence.split(`${letter}`).join('');
  return `Предложение "${sentence}" без буквы ${letter}: ${newSentence}.`;
}

//10.
function isPalyndrom() {
  const palyndrom = prompt(`Введите палиндром.`);
  const newPalyndrom = palyndrom.toLowerCase();
  const reversePalyndrom =
    newPalyndrom.toLowerCase().split('').reverse().join('');
  if (newPalyndrom == reversePalyndrom) {
    return true;
  }
  return false;
}

//11.
function deleteDuplicateLetter() {
  let sentence = prompt(`Введите предложение.`);
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.indexOf(sentence[i]) == sentence.lastIndexOf(sentence[i])) {
      newSentence += sentence[i];
    }
  }
  return `Предложение "${sentence}" без повторяющихся букв: ${newSentence}.`;
}

document.getElementById("nmbr").innerHTML = `${getMaxDigit()}`;
document.getElementById("pow").innerHTML = `${getPowDigit()}`;
document.getElementById("name").innerHTML = `${formatName()}`;
document.getElementById("tax").innerHTML = `${salaryWithTax()}`;
document.getElementById("number").innerHTML = `${getRandomNumber()}`;
document.getElementById("letter").innerHTML = `${countLetter()}`;
document.getElementById("currency").innerHTML = `${convertCurrency()}`;
document.getElementById("password").innerHTML = `${getRandomPassword()}`;
document.getElementById("sentence").innerHTML = `${deleteLetters()}`;
document.getElementById("palyndrom").innerHTML = `${isPalyndrom()}`;
document.getElementById("duplicate").innerHTML = `${deleteDuplicateLetter()}`;
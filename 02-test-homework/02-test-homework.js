let N = prompt(`Введите первое целое число`);

while (isNaN(N) || !(N % 1 === 0) || !N) {
  N = prompt(`Это неверное число! Попробуйте ещё раз.`);
}

let M = prompt(`Введите второе целое число`);

while (isNaN(M) || !(M % 1 === 0) || !M) {
  M = prompt(`Это неверное число! Попробуйте ещё раз.`);
}

const even = confirm(`Будем ли пропускать четные числа?`);
let suma = 0;
let minNumber = Math.min(N, M);
let maxNumber = Math.max(N, M);

for (minNumber; minNumber <= maxNumber; minNumber ++ ) {
  if (even && minNumber %2 === 0) {
    continue;
  }
  suma += minNumber;
}
document.write(`Сумма всех чисел равна: ${suma}`);
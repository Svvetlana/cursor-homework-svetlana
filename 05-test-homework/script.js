//1.
const getRandomArray = (length, min, max) => {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray.push(Math.round(Math.random() * (max - min + 1) + min));
    }

    return randomArray;
}

console.log(`Массив случайных чисел: ${getRandomArray(15, 1, 100)}`);

//3.
const getAverage = (...numbers) => {
    const filtered = numbers.filter(number => Number.isInteger(number));
    const sum = filtered.reduce((sum, number) => {
        return sum + number;
    }, 0);

    return sum / filtered.length;
}

console.log(`Среднеарифметическое число: 
  ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

//4.
const getMedian = (...numbers) => {
    const filtered = numbers.filter(number => Number.isInteger(number))
        .sort((a, b) => a - b);
    const middleIndex = Math.trunc(filtered.length / 2);

    if (filtered.length % 2 === 0) {
        return (filtered[middleIndex] + filtered[middleIndex - 1]) / 2;
    }

    return filtered[middleIndex];

}
console.log(`Медиана , нецелые числа игнорируются: ${getMedian(1, 2, 3, 4)}`);

//5.
const filterEvenNumbers = (...numbers) => {
    return numbers.filter(number => number % 2 !== 0);
}

console.log(`Массив нечетных чисел: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);

//6.
const countPositiveNumbers = (...numbers) => {
    return numbers.filter(number => number > 0).length;
}

console.log(
    `Количество положительных чисел: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`
);

//7.
const getDividedByFive = (...numbers) => {
    return numbers.filter(number => number % 5 === 0);
}

console.log(`Числа, делящиеся на 5: 
  ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

//8.
const replaceBadWords = (string, ...add) => {
    const badWords = ['shit', 'fuck', ...add];
    const arrWords = string.split(' ');
    const changeWords = [].concat(arrWords);

    arrWords.forEach((word, index) => {
        for (let i = 0; i < badWords.length; i++) {
            if ((word.toString()).includes(badWords[i])) {
                changeWords[index] = (word.toString()).replace(badWords[i], '****');
            }
        }
    })

    return changeWords.join(' ');
}

console.log(
    `Плохие слова заменены на *: ${replaceBadWords("Are you fucking kidding?")}`
);

//9.
const divideByThree = (word) => {
    wordSmall = word.toLowerCase().replaceAll(' ', '');
    let divideWord = [];

    for (let i = 0; i < wordSmall.length; i += 3) {
        divideWord.push(wordSmall.slice(i, i + 3));
    }

    return divideWord;
}

console.log(`Слово разбито по 3 буквы: ${divideByThree('Live')}`);

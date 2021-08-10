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

for (let i = minNumber; i <= maxNumber; i++) {
    if (!isEven || i % 2 !== 0) {
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

//4
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритм і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {

    return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    ];
}

const pairs = getPairs(students);

//5
const getRandomArray = (length, min, max) => {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray.push(Math.round(Math.random() * (max - min + 1) + min));
    }

    return randomArray;
}

//6
//7
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getMyTaxes(salary) {
    
    return +(this.tax * salary).toFixed(2);
};



//8
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }

    get getInfo() {
        return `Cтудент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
}

const student = new Student(
    `Вищої школи Психотерапії м.Одеса`,
    `1`,
    `Остап Бендер`,
    [5, 4, 4, 5]
);

//9
function getRandomColor() {
    const color = [];

    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};

//11
async function getRandomChinese(length) {
    let result = '';

    for (let i = 0; i < length; i++) {
        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                const sign = String.fromCharCode(+Date.now().toString().slice(-5));
                resolve(sign);
            }, length * 50);
        });
        result += await myPromise;
    }
    
    return result;
};

//14
function* createIdGenerator() {
    let i = 1;

    while (true) {
        yield i++;
        }
    }

const idGenerator = createIdGenerator();


export {
    maxPrice,
    suma,
    getRandomPassword,
    pairs,
    getRandomArray,
    getMyTaxes, ukraine,
    Student, student,
    getRandomColor,
    getRandomChinese,
    idGenerator
};
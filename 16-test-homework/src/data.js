//1
const maxPrice = Math.max(applePrice, bananaPrice, pearPrice);

//3
function getMaxDigit() {

    let number = null;

    do {
        number = +prompt(`Введите целое число, чтобы узнать наибольшую цифру.`);
    } while ((isNaN(number) || !Number.isInteger(number) || !number));

    const stringFromNumber = number.toString().split('');
    const arrNumber = stringFromNumber.map(Number);
    const maxNumber = Math.max(...arrNumber);

    return `В числе ${number} наибольшая цифра ${maxNumber}.`;
}

//4
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
const getSubjects = student => {
    let studentSubjects = Object.keys(student.subjects);

    studentSubjects = studentSubjects.map(subject =>
        subject[0].toUpperCase() + subject.substring(1).replaceAll("_", " ")
    );

    return studentSubjects;
}

//7
function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
}
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
};

//9
function getRandomColor() {
    const color = [];

    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

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
}

//13
async function getAboutFilmCharacterInfo(url) {
    request(url)
        .then(data => {
            return data.characters;
        })
        .then(character => {
            characterInfo.innerHTML = '';
            planetInfo.innerHTML = '';
            return character.map(e => getCharacterInfo(e));
        });
}

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
    getMaxDigit,
    getPairs,
    getRandomArray,
    getSubjects,
    getMyTaxes,
    Student,
    getRandomColor,
    getRandomChinese,
    getAboutFilmCharacterInfo,
    createIdGenerator
};

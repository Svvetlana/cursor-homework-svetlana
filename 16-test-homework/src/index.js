import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import {
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
} from './homework.js'

console.log(`HW-1: maxPrice: `, maxPrice);
console.log(`HW-2: suma: `, suma);
console.log(`HW-3: ${getRandomPassword(8)}`);
console.log('HW-4: ', pairs);
console.log(`HW-5: Массив случайных чисел: ${getRandomArray(15, 1, 100)}`);
console.log(
  `HW-7: getMyTaxes.call(ukraine, 1500):`,getMyTaxes.call(ukraine, 1500)
);
console.log(`HW-8: student.getInfo: `, student.getInfo);
console.log(`HW-9: getRandomColor: `, getRandomColor());
console.log(`HW-11: getRandomChinese: `, getRandomChinese(4));
console.log(`HW-14: createIdGenerator: `, idGenerator.next().value);
console.log(`HW-14: createIdGenerator: `, idGenerator.next().value);
console.log(`HW-14: createIdGenerator: `, idGenerator.next().value);

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
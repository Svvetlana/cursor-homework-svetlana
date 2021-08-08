import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import {
    maxPrice,
    suma,
    getRandomPassword,
    pairs,
    getRandomArray,
    Student, student    
} from './homework.js'

console.log(`maxPrice: `, maxPrice);
console.log(`suma: `, suma);
console.log(`HW-3: ${getRandomPassword(8)}`);
console.log('HW-4: ', pairs);
console.log(`HW-5: Массив случайных чисел: ${getRandomArray(15, 1, 100)}`);
console.log(`HW-8: student.getInfo: `, student.getInfo);

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
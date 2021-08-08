import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import {
    maxPrice,
    suma,
    getRandomPassword    
} from './homework.js'

console.log(`maxPrice`, maxPrice);
console.log(`suma`, suma);
console.log(`HW-3: ${getRandomPassword(8)}`);


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
import _ from 'lodash';
import './style.css';
import Icon from './img.jpg';
import {
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
} from './data'

  console.log(`HW-1: ${maxPrice}`);
  console.log(`HW-3: ${getMaxDigit(12345689)}`);
  console.log(`HW-4: ${getPairs(pairs)}`);
  console.log(`HW-5: ${getRandomArray(3,5,9)}`);
  console.log(`HW-6: ${getSubjects}`);
  console.log(`HW-7: ${getMyTaxes(Ukraine, 100)}`);
  console.log(`HW-8: ${Ostap.getInfo()}`);
  console.log(`HW-9: ${getRandomColor()}`);
  console.log(`HW-11: ${getRandomChinese(4)}`);
  
function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Homework', 'webpack'], ' ');
    element.classList.add('homework');

    // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
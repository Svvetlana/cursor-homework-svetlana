//Base
const apple = 15.678;
const banana = 123.965;
const pear = 90.2345;

//Максимальное число
const priceMax = (Math.max(apple,banana,pear));
console.log(priceMax);
//Минимальное число
const priceMin = (Math.min(apple,banana,pear));
console.log(priceMin);
//Сумма
const suma = apple + banana + pear;
console.log(suma);
//Цена товаров без копеек(округление в меньшую сторону) и их сумма
const sumaFloor = Math.floor(apple) + Math.floor(banana) + Math.floor(pear);
console.log(sumaFloor);
//Сумма, округленная до сотен
const sumaRoundHundreds = (Math.round(sumaFloor/100))*100;
console.log(sumaRoundHundreds);
//Булево значение
const even = sumaFloor %2 == 0;
console.log(even);
//Сдача от 500 грн без округления цен
const money = 500;
const change = (money - suma).toFixed(2);
console.log(change);
//Средняя цена, округленная до второго знака после запятой
const sumaMiddle = (suma/3).toFixed(2);
console.log(sumaMiddle);
//Скидка, сумма к оплате(2 знака после запятой)
const discount = Math.random();
const sumaDiscount = (discount*100).toFixed(0);
console.log(sumaDiscount+`%`);
const price = (suma - suma*sumaDiscount/100).toFixed(2);
console.log(price);
//Чистая прибыль(себестоимость в 2 раза  ниже цены)
const profit = suma/2 - sumaDiscount;
console.log(profit);

//Advansed
document.write(`1.Максимальная цена: ${priceMax} грн.<br>
2.Минимальная цена: ${priceMin} грн.<br>
3.Сумма всех товаров: ${suma} грн.<br>
4.Сумма всех товаров с ценой без копеек: ${sumaFloor} грн.<br>
5.Сумма всех товаров, округленная до сотен: ${sumaRoundHundreds} грн.<br>
6.Сумма всех товаров с ценой без копеек четное число?: ${even}<br>
7.Сдача с 500 грн. без округления цен с двумя знаками после запятой: ${change} грн.<br>
8.Средняя цена всех товаров с двумя знаками после запятой: ${sumaMiddle} грн.<br>
9.Случайная скидка: ${sumaDiscount} %<br>
10.Стоимость всех товаров со скидкой: ${price} грн.<br>
11.Чистая прибыль при себестоимости товаров в 2 раза ниже цены: ${profit} грн.`)
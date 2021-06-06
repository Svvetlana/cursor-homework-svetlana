//Base
const applePrice = 15.678;
const bananaPrice = 123.965;
const pearPrice = 90.2345;


const maxPrice = Math.max(applePrice, bananaPrice, pearPrice);
console.log(`maxPrice`, maxPrice);

const minPrice = Math.min(applePrice, bananaPrice, pearPrice);
console.log(`minPrice`,  minPrice);

const productsPrice = applePrice + bananaPrice + pearPrice;
console.log(`producstPrice`, productsPrice);

const productsPriceFloor = (
    Math.floor(applePrice) + Math.floor(bananaPrice) + Math.floor(pearPrice)
);
console.log(`productsPriceFloor`, productsPriceFloor);

const productsPriceRoundHundreds = (Math.round(productsPriceFloor / 100)) * 100;
console.log(`productsPriceRoundHundreds`,  productsPriceRoundHundreds);

const even = Math.floor(productsPrice) %2 === 0;
console.log(`even`, even);

const money = 500;
const change = (money - productsPrice).toFixed(2);
console.log(`change`, change);

const productsPriceMiddle = (productsPrice / 3).toFixed(2);
console.log(`productsPriceMiddle`, productsPriceMiddle);


const discount = (Math.random() * 100).toFixed(0);
console.log(`discount`, discount, `%`);
const priceWithDiscount = (
    (productsPrice - productsPrice * discount / 100).toFixed(2)
);
console.log(`priceWithDiscount`, priceWithDiscount);

const profit = productsPrice / 2 - productsPrice * discount / 100;
console.log(`profit`, profit);

//Advansed
document.write(`1.Максимальная цена: ${maxPrice} грн.<br>
2.Минимальная цена: ${minPrice} грн.<br>
3.Сумма всех товаров: ${productsPrice} грн.<br>
4.Сумма всех товаров с ценой без копеек: ${productsPriceFloor} грн.<br>
5.Сумма всех товаров, округленная до сотен: ${productsPriceRoundHundreds} грн.<br>
6.Сумма всех товаров с ценой без копеек четное число?: ${even}<br>
7.Сдача с 500 грн. без округления цен с двумя знаками после запятой: ${change} грн.<br>
8.Средняя цена всех товаров с двумя знаками после запятой: ${productsPriceMiddle} грн.<br>
9.Случайная скидка: ${discount} %<br>
10.Стоимость всех товаров со скидкой: ${priceWithDiscount} грн.<br>
11.Чистая прибыль при себестоимости товаров в 2 раза ниже цены: ${profit} грн.`)
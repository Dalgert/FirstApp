"use strict";

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

// Поиск значения в строке

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));


// Вырезание из строки

const logg = 'Hello World';

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
// тоже самое

console.log(logg.slice(-5, -1));
//  считает символы справа налево


console.log(logg.substring(6, 11));
//  Тоже самое но не поддерживает отрицательные значения, приравнивает их 0. Но можно первый аргумент указать больше второго.


console.log(logg.substr(6, 5));
//  Вырезает начиная с первого аргумента(порядковый номер символа, на длину второго аргумента)


const num = 12.2;
console.log(Math.round(num));
//  Округления до целого


const test = '12.2px';
console.log(parseInt(test));
//  перевод в другую систему исчисления, в целое число
console.log(parseFloat(test));
//  перевод в другую систему исчисления, в десятичном варианте
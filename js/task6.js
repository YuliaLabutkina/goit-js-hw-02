"use strict";

let input;
const numbers = [];
let total = 0;

do {
   input = prompt('Введите число!');

   if (input !== null) {

    if (Number.isNaN(+input)) {
        alert('Было введено не число! Введите число пожалуйста!');
        continue;
    };

    numbers.push(input);
   };

} while (input !== null);

if (numbers.length) {
    for (const number of numbers) {
        total += +number;
    };
}

alert(`Общая сумма чисел равна ${total}.`);
"use strict";

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число!');

    if (!! input && !Number.isNaN(+input)) {
        numbers.push(input);

    } else if (Number.isNaN(+input)) {
        alert('Было введено не число! Введите число пожалуйста!');
        
    }

} while (input !== null);

for (const number of numbers) {
    total += +number;
};

alert(`Общая сумма чисел равна ${total}.`);
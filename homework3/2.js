"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// function salary(gross) {
//     if (Number.isNaN(gross) || gross <= 0) {
//         return console.log("Значение задано неверно");
//     }
//     let finalGross = 0;
//     finalGross = gross - gross * 0.13;
//     console.log(`Размер заработной платы за вычетом налогов равен ${(Math.trunc(finalGross*100))/100}`);
// }

// const gross = +prompt("Введите число");
// salary(gross);
"use strict";

// 1) Дан массив
// const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
//     найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// const arr = [1, 5, 7, 9]
// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement.Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// function createCounter() {
//     let countValue = 0;
//     return {
//         increment() {
//             countValue++;
//         },
//         decrement() {
//             countValue--;
//         },
//         getValue() {
//             return countValue;
//         },
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue());
// counter.decrement();
// console.log(counter.getValue());


// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }
    const childrenList = rootElement.children;
    for (const child of childrenList) {
        const currentElement = findElementByClass(child, className);
        if (currentElement) {
            return currentElement;
        }
    }
    return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
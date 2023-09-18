"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link"
// и вывести этот элемент в консоль.
console.log("Задание 1");

const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
console.log("Задание 2");

const cardLink = document.querySelectorAll(`.card-link`);
cardLink.forEach((element) => {
    element.textContent = "ссылка";
    console.log(element);
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body"
// и вывести полученную коллекцию в консоль.
console.log("Задание3");

const cardLinkElements = document
    .querySelector(".card-body")
    .querySelectorAll(".card-link");
console.log(cardLinkElements);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.
console.log("Задание 4");

const firstDataElements = document.querySelectorAll("*");
firstDataElements.forEach((element) => {
    if (element.getAttribute("data-number") == "50") {
        console.log(element);
    }
});

// 5. Выведите содержимое тега title в консоль.
console.log("Задание 5");

console.log(document.querySelector("title").innerHTML);

// 6. Получите элемент с классом "card-title"
// и выведите его родительский узел в консоль.
console.log("Задание 6");

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);

// 7. Создайте тег < p > , запишите внутри него текст "Привет"
// и добавьте созданный тег в начало элемента, который имеет класс "card".
console.log("Задание 7");

const p = document.createElement('p');
p.textContent = "Привет";
const card = document.querySelector(".card")
card.prepend(p)

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();
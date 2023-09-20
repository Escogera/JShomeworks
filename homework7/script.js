"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item"
// добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
console.log("Задание 1");

const allElem = document.querySelectorAll(".dropdown-item");
allElem.forEach((element) => {
    element.classList.add("super-dropdown");
    console.log(element);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
console.log("Задание 2");

const btn = document.querySelector(".btn");

btn.classList.contains("btn-secondary") ?
    btn.classList.remove("btn-secondary") :
    btn.classList.add("btn-secondary");
console.log(btn);

// 3. Необходимо удалить класс "dropdown-menu"
// у элемента, у которого присутствует класс "menu".
console.log("Задание 3");

const menuElement = document.querySelector(".menu");
menuElement.classList.remove("dropdown-menu");
console.log(menuElement);

// 4. Используя метод insertAdjacentHTML добавьте после div 'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const div = document.querySelector(".dropdown");
div.insertAdjacentHTML("afterend", `<a href="#"> link </a>`);

// 5. У элемента с id "dropdownMenuButton"
// замените id на "superDropdown".
console.log("Задание 5");

const dropdownMenuButton = document.getElementById("dropdownMenuButton");
dropdownMenuButton.id = "superDropdown";
console.log(dropdownMenuButton);

// 6. Добавьте атрибут data - dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
// равный "dropdownMenuButton"
// используя dataset.
console.log("Задание 6");

const allFile = document.querySelectorAll("*");
allFile.forEach(element => {
    if (element.getAttribute("aria-labelledby") === "dropdownMenuButton") {
        element.dataset.dd = "3";
        console.log(element);
    }
});

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
console.log("Задание 7");

const typeElement = document.querySelector(".dropdown-toggle");
typeElement.removeAttribute("type");
console.log(typeElement);
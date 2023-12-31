"use strict";
// 1. При изменении значения в input с id = "from", значение содержащееся в нем должно моментально отображаться в span.То есть при печати в input 'е тег span также должен меняться.

const input = document.querySelector('#from');
const span = document.querySelector('span');
input.addEventListener("input", function() {
    span.textContent = input.value;
})

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
//     -добавить два класса: animate_animated и animate_fadeInLeftBig -
//     поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector('.messageBtn');
const messageElem = document.querySelector('.message');
btn.addEventListener("click", function() {
    messageElem.classList.add("animate_animated", "animate_fadeInLeftBig")
    messageElem.style.visibility = "visible";
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.Если какое - либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля(необходимо поставить класс error незаполненным полям).Как только пользователь начинает заполнять какое - либо поле, необходимо, при вводе в данное поле, произвести проверку:
//     -Если поле пустое, необходимо данное поле подсветить(поставить класс error данному полю). -
//     Если поле было чем - либо заполнено, подсветку(класс error) необходимо убрать.

const formElement = document.querySelector('form');
const inputFormElement = formElement.querySelectorAll('input, select');

formElement.addEventListener('submit', (event) => {
    inputFormElement.forEach(element => {
        if (element.value === '') {
            element.classList.add('error');
            element.style.borderColor = "red";
            event.preventDefault();
        }
    });
});

formElement.addEventListener('input', (ev) => {
    if (!ev.target.classList.contains('form-control')) {
        return;
    }
    if (!ev.target.value || ev.target.value === '') {
        ev.target.classList.add('error');
    } else {
        ev.target.classList.remove('error');
    }
});
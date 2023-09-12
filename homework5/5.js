"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];
const enRu = en.concat(ru);
console.log(enRu);
const week = {}
for (let i = 0; i < enRu.length / 2; i++) {
    const key = enRu[i];
    week[enRu[i]] = enRu[i + enRu.length / 2];
}
console.log(week);
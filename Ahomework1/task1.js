'use strict';

// Задание 1• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// •Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.Каждый альбом имеет следующую структуру:

//     {
//         title: "Название альбома",
//         artist: "Исполнитель",
//         year: "Год выпуска"
//     }

// •
// Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.•Используйте цикл
// for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)

const music = [{
        title: "Kill 'Em All",
        artist: "Metallica",
        year: 1983,
    },
    {
        title: "Ride the Lightning",
        artist: "Metallica",
        year: 1984,
    },
    {
        title: "Master of Puppets",
        artist: "Metallica",
        year: 1986,
    },
    {
        title: "...And Justice for All",
        artist: "Metallica",
        year: 1988,
    },
];

const musicCollection = {
    music: [...music],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.music.length) {
                    return { value: this.music[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}
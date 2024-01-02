"use strict";

// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство# books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов;
// в противном случае выбрасывайте ошибку.

class book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class library {
  #books = [];
  constructor(books) {
    const uniqueBooks = new Set(books.map((book) => book.title));
    if (books.length !== uniqueBooks.size) {
      throw new Error("Список книг содержит дубликаты");
    }
    this.#books = books;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title, author, year) {
    if (this.hasBook(title)) {
      throw new Error("Книга с таким названием уже существует в списке");
    }
    this.#books.push(new book(title, author, year));
  }
  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error("Книги с таким названием нет в списке");
    }
    this.#books = this.#books.filter((book) => book.title !== title);
  }
  hasBook(title) {
    return this.#books.some((book) => book.title === title);
  }
  getBookByTitle(title) {
    return this.#books.find((book) => book.title === title);
  }
}

const arrayBooks = [
  new book("Голодные игры", "Сьюзен Коллинз", 2008),
  new book("И вспыхнет пламя", "Сьюзен Коллинз", 2009),
  new book("Сойка-пересмешница", "Сьюзен Коллинз", 2010),
  new book("Баллада о змеях и певчих птицах", "Сьюзен Коллинз", 2020),
];

const library1 = new library(arrayBooks);
library1.removeBook("И вспыхнет пламя");
library1.addBook("И вспыхнет пламя", "Сьюзен Коллинз", 2009);
console.log("hasBook: " + library1.hasBook("И вспыхнет пламя"));

library1.allBooks.forEach((book) =>
  console.log(
    "Книга: " + book.title + " Автор: " + book.author + " Год: " + book.year
  )
);

/*Задание 2
Сделать библиотеку, которая ведет учет книг. Должно быть как минимум две функции-конструктора: Book и Library.
    Library имеет два метода: put(book, quantity) и get( book, quantity). Каждой книге в библиотеке соответствует
счетчик, показывающий количество хранящихся книг, при добавлении книги - счетчик увеличивается, при извлечении -
уменьшается на число quantity.
    Библиотека хранит ограниченное число книг. */
class Book {
    constructor (name) {
        this._name = name;
        this._quantity = 0;
    }

    addB() {
        this._quantity +=1;
    }

    takeB() {
        this._quantity -=1;
    }

    get Quantity() {
        return this._quantity;
    }

}
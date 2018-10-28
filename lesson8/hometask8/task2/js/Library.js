/*Задание 2
Сделать библиотеку, которая ведет учет книг. Должно быть как минимум две функции-конструктора: Book и Library.
    Library имеет два метода: put(book, quantity) и get( book, quantity). Каждой книге в библиотеке соответствует
счетчик, показывающий количество хранящихся книг, при добавлении книги - счетчик увеличивается, при извлечении -
уменьшается на число quantity.
    Библиотека хранит ограниченное число книг. */
class Library {
    constructor (libsize) {
        this._libsize = libsize;
        this._cursize = 0;
    }

    putBook(book, q) {
        if (this._cursize + q <= this._libsize) {
        for (let i=0; i<q; i++) {
            book.addB();
            }
            this._cursize +=q;
        }
        else
            alert("Библиотека заполнена");
    }

    getBook(book, q) {
        for (let i=0; i<q; i++) {
            book.takeB();
        }
        this._cursize -=q;
    }

    get libsize() {
        return this._cursize;
    }

}
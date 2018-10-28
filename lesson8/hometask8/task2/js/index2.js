let library = new Library(20);

let book1 = new Book("Harry Potter");
let book2 = new Book("Witcher");
let book3 = new Book("JavaScript");

library.putBook(book1, 5);
library.putBook(book2, 10);
console.log("Сейчас в библиотеке", library.libsize, "книг");

console.log(book2.Quantity);

library.putBook(book3, 6);

library.getBook(book2, 3);

library.putBook(book3, 6);
console.log("Сейчас в библиотеке", library.libsize, "книг");
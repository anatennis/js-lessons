/*
Задача 1
Напишите функцию (), которая в зависимости от переданных
в нее целочисленных аргументов "количество дней", будет выводить
слово "день" в нужно форме ("если передали - 1, то 1 день",
    "если передали - 3, то 3 дня" и т.д).
*/
console.log("Задание 1");
function Days(count) {
    if (count>10 & count<20) {
        console.log(count, "дней")
    }
    else
    if (count%10 == 1) {
        console.log(count, "день")
    }
    else
    if (count%10 == 2 || count%10 == 3 || count%10 == 4) {
        console.log(count, "дня")
    }
    else {
        console.log(count, "дней")
    }
}

Days(prompt("Введите число:"));

/*Задача 2 (не обязательная)
Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
    и обрабатывает каждый элемент массива переданной функцией (fn), возвращая новый массив.
    Функция не должна изменять переданный ей массив.
    Если аргументы не заданы – выводить сообщение об ошибке*/
console.log("Задание 2");
function double(a) {
    return a*2;
}

function map(fn, array) {
    if (arguments.length) {
        let arr = [];
        for (i=0; i<array.length; i++) {
            arr[i] = fn(array[i]);
        }
        return arr;
    }
    else {console.log("Ошибка - аргументы не заданы")}
}

let a1 = [1,2,3,4,5,6,6,7,8,9];

console.log("Результат работы ф-и:",map(double, a1));
console.log("Исходный массив не изменился - ", a1);


/*Задача 3
Написать функцию клонирующую (создающую копию) массива.*/
console.log("Задание 3");
function cloneArr(array) {
    if (arguments.length) {
        let arr = [];
        for (i=0; i<array.length; i++) {
            arr[i] = array[i];
        }
        return arr;
    }
    else {console.log("Ошибка - аргументы не заданы")}
}

console.log("Исходный массив", a1);
let a2 = cloneArr(a1);
console.log("Копия массива", a2);
a2[0] = 156;
console.log("После изменения 1-го эл-та массива-копии исходный массив не меняется:", a1);
console.log("После изменения 1-го эл-та массива-копии копия массива", a2);


/*Задача 4
Написать функцию подсчета суммы от n до m (рекурсия)*/
console.log("Задание 4");
let sum = 0;
function sumFromNtoM(n, m) {
    if (n==m) {
        return m;
    }
    return n+sumFromNtoM(n+1, m);
}

console.log(sumFromNtoM(-5, 5));
console.log(sumFromNtoM(0, 5));

/*Задача 5
Написать функцию, которая возвращает новую функцию,
    которая увеличивает/уменьшает переданное число на указанный при карировании шаг (замыкание)*/
console.log("Задание 5");
let letFunc = function retNewFunc(a) {
    let step = -10;
    return function() {
        return a+step;
    }
}
let decreaseF = letFunc(2);
console.log(decreaseF());

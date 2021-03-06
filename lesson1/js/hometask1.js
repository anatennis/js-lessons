/*Задача 1:
Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
    Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль. */

var a = 12;
var b = 5;
var c = 7;

console.log("Площадь прямоугольного параллелепипеда равна", 2*(a*b+a*c+b*c));
console.log(a>b ? "Ширина а больше" : "Высота b больше");

/*Задача 2:
На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято? */
a = 15;
b = 25;

console.log("Осталось незанято", (10*100)%(a*b), "м2");

/*Задача 4:
Переопределить значения переменных X и Y так, чтобы значение X оказалось меньшим, а Y — большим.*/
let x = parseFloat(prompt("Введите X"));
let y = parseFloat(prompt("Введите Y"));
let z = x;
x = (x<y ? x : y);
y = (z<y ? y : z);

console.log("X =", x, "Y =", y);


/*Задание 5:
   Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.*/
let m = parseFloat(prompt("Введите первое число"));
let n = parseFloat(prompt("Введите второе число"));

console.log("Ближайшим к 10 числом является", Math.abs(m-10)>Math.abs(n-10) ? n : m);

/*Задание 6:
Задать размер ипотечного кредита , процентную ставку , кол-во лет . Найти переплату по кредиту, значение переплаты вывести в консоль.*/
let crSize = parseFloat(prompt("Введите размер ипотечного кредита"));
let crProc = parseFloat(prompt("Введите процентную ставку"));
let crDur = parseFloat(prompt("Введите кол-во лет"));

console.log("Переплата по кредиту равна", (crSize*crProc*crDur));

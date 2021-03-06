/*
Задача 1*
Есть три вершины X, Y, Z.
    Их координаты (x1, x2), (y1, y2), (z1, z2) заданы как целые числа.
    Нужно определить - является ли треугольник с заданными координатами прямоугольным.
*/
console.log("Task 1");
let x1 = -3;
let y1 = -2;
let x2 = 0;
let y2 = -1;
let x3 = -2;
let y3 = 5;
let s1 = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
let s2 = (x3-x1)*(x3-x1) + (y3-y1)*(y3-y1);
let s3 = (x3-x2)*(x3-x2) + (y3-y2)*(y3-y2);
if ((s1+s2 == s3) || (s1+s3 == s2) || (s3+s2 == s1)) {
    console.log("Треугольник является прямоугольным")
}
else {
    console.log("Треугольник не является прямоугольным")
}


/*Задача 2*
Вывести в консоль название соответствующего времени года (зима, весна и тд), в зависимости от текущего месяца.
    Месяц можно получить с помощью метода объекта даты:
    let monthNum = new Date().getMonth();
Получим номер месяца от 0 до 11 (где, 0 - это январь, 1 - февраль и тд)*/
console.log("Task 2");
let monthNum = new Date().getMonth();
if (monthNum==11 || monthNum<=1) {
    console.log('Winter is now')
}
else
    if (monthNum<5 && monthNum>1) {
        console.log('Spring is now')
    }
    else
    if (monthNum<8 && monthNum>4) {
        console.log('Summer is now')
    }
    else
    if (monthNum<11 && monthNum>8) {
        console.log('Autumn is now')
    }

/*Задача 3
Вывести используя таблицу умножения чисел до 10.*/
console.log("Task 3");
for (i=1; i<=10; i++) {
    for (f=1; f<=10; f++) {
    console.log(i, "*", f, "=", i*f);
    }
}

/*Задача 4
Создать массив из чисел.
    Выполнить сортировку массива по возрастанию методом пузырька.
    Запрещено использовать стандартные методы. */
console.log("Task 4");
let a = [];

//a = [1, 2, 3, 5, 4, 9, 15, 22, 6, 7];

for (i=0, f=10; i<10; i++, f--) {
    a[i] = f;
}

console.log("Иcходный массив:", a);

for (i=0; i<10; i++) {
    for (j=9; j>=i; j--) {
        if (a[i]>a[j]){
            z=a[j];
            a[j]=a[i];
            a[i]=z;
        }

    }
}
console.log("Итоговый массив:", a);

/*Задача 5
Создать таблицу соответствия между весом в фунтах и весом в килограммах для значений от 1 до 10.*/
let lb = 2.2046;
for (i=1; i<=10; i++) {
    console.log( i,"kg =", i*lb,"lb");
}

/*Задача 6*
Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот. */
console.log("Task 6");
let plates = 8;
let wash = 9.0;
let x = 1;

while (!plates & !wash) {
    plates--;
    wash-=0.5;
    console.log("После",x++, "тарелки осталось",wash, "моющего средства");
}

if (plates==0) {
    console.log("Oсталось",wash, "моющего средства");
}
else {
    console.log("Oсталось",plates, "невымытых тарелок");
}

/*
Задача 7
Создайте программу, выводящую на экран все четырехзначные числа последовательности 1000 1003 1006 1009 1012 1015.*/
console.log("Task 7");
for (i=1000; i<10000; i+=3) {
    console.log(i);
}

/*Задача 8*
Создайте программу, выводящую на экран все неотрицательные элементы последовательности 90 85 80 75 70 65 60.*/
console.log("Task 8");
x=90;
while (x) {
    console.log(x);
    x-=5;
}

/*Задача 9*
Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128. */
console.log("Task 9");
x = 1;

for (i=0; i<20; i++) {
    console.log(x*2);
    x*=2;
}

/*Задача 10
В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
    Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов с номерами от 000001 до 999999.
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна сумме последних трёх цифр,
    как, например, в билетах с номерами 003102 или 567576.
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и теперь раздумывает, как много сувениров потребуется.
    С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.*/
console.log("Task 10");
let count=0;

for (i=1001; i<=999999; i++) {
    if ((i%10+Math.floor(i/10)%10+Math.floor(i/100)%10) ==(Math.floor(i/1000)%10+Math.floor(i/10000)%10+Math.floor(i/100000)%10)) {
        count++;
    }
}
console.log("В рулоне", count, "счастливых билетов");
//console.log(count%10, Math.floor(count/10)%10, Math.floor(count/100)%10,Math.floor(count/1000)%10,Math.floor(count/10000)%10,Math.floor(count/100000)%10);

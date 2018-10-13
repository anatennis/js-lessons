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
    if (monthNum<5 & monthNum>1) {
        console.log('Spring is now')
    }
    else
    if (monthNum<8 & monthNum>5) {
        console.log('Summer is now')
    }
    else
    if (monthNum<11 & monthNum>8) {
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

/*Задача 6*
Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот. */
console.log("Task 6");
let plates = 8;
let wash = 9.0;
let x = 1;

while (plates!=0 & wash!=0) {
    plates--;
    wash-=0.5;
    console.log("После",x++, "тарелки осталось",wash, "моющего средства");
}

if (plates==0) {
    console.log("Oсталось",wash, "моющего средства");
}
else {
    console.log("Oсталось",plates, "тарелок");
}

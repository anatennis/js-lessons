/* Задание 1
1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
    name, population, mayor
двумя разными способами (первый объект одним способом, второй другим)
1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)
1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)
1.4. Создать объект president c методом changeCountryMayor(),
    благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента) */
//1.1
let sity1 = {}
sity1.name = "City1";
sity1.population = 7800;
sity1.mayor = "Ivanov";

let sity2 = {
    name: "City2",
    population: 5100,
    mayor: "Petrov"
}

//1.2
sity1.takepopulation = function (part) {
    this.population+=part;
    sity2.population-=part;
    console.log(part, "people moved to", this.name)
}

console.log("Population of the 1st city =", sity1.population);
console.log("Population of the 2d city =", sity2.population);

sity1.takepopulation(3000);

console.log("Population of the 1st city =", sity1.population);
console.log("Population of the 2d city =", sity2.population);

//1.3
function showMayor(city) {
    if (city.hasOwnProperty("mayor")) {
        console.log(city.name, "'s mayor is", city.mayor);
    }
    else {
        console.log("There's no mayor in this city")
    }
}

showMayor(sity2);

//1.4
let president = {
    changeCountryMayor: function (city) {
        if (city.hasOwnProperty("mayor")) {
            city.mayor = "Sidorov";
            console.log("Now", city.name, "'s mayor is",city.mayor);
        }
        else {console.log("There's no mayor in this city")}
    }
}

president.changeCountryMayor(sity2);

/*Задание 2
Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку */
function findSubs(str, substr) {
    let n = str.indexOf(substr);
    let count = 0;
    while (n!=-1) {
        count++;
        n=str.indexOf(substr,n+substr.length);
    }
    return count;
}
console.log(findSubs("7542345672635643787592367849235789467643323", "23"), "substrings were found");

/*Задание 3
Написать функцию - конвертер строки.
    Возможности:
перевод всех символов в верхний регистр,
    перевод всех символов в нижний регистр, */

function strUpOrLow(dir, str) {
    if (!dir.localeCompare("Up")) {
        return str.toUpperCase();
        console.log(str);
    }
    else {return str.toLowerCase();}
}

let str = "строка";
console.log(str);
str = strUpOrLow("Up", str);
console.log(str);
str = strUpOrLow("Low", str);
console.log(str);

/*Задание 4
В переменной $date лежит дата в формате '30-11-2017'. Преобразуйте эту дату в формат '2017.11.30'. */

/*
Задание 5
Допустим, пользователь вводит названия городов через пробел.
    Вы их присваиваете переменной.
    Переставьте названия так, чтобы они были упорядочены по алфавиту.*/
function sortABC () {
    let str5 = prompt("Введите города через пробел");
    //let str5 = "Санкт-Петербург Новосибирск Екатеринбург Нижний Новгород Самара Омск Казань Челябинск Ростов-на-Дону Уфа Волгоград Пермь Красноярск";
    let arr = str5.split(" ");
    arr.sort();
    str5 = '';
    for (i=0;i<arr.length; i++) {
        str5 = str5 + " " +arr[i];
    }
    return str5;
}

console.log(sortABC());

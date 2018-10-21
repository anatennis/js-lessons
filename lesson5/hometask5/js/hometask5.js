/*Задача 1
Написать программу, которая будет генерировать игровое поле размером N x N .
    Где N - количество ячеек,
    каждая ячейка - отдельный div (размеры div на Ваше усмотрение).
Значение N  получаем от пользователя.
    Например, поле 4 x 4
*/
function genField() {
    let n = prompt("Введите размерность поля");
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
        let div1 = document.createElement("div");
        if (j!=(n-1)) {div1.classList.add("table");}
        else {div1.classList.add("tableM");}
        document.body.appendChild(div1);
        }
    }
}


genField();

/*
Задача 2
Написать программу, которая выводит текущее время в html и обновляет значения каждую секунду.
    Время в формате чч:мм:cc.
    Оформление на Ваше усмотрение.
*/

function changeTime() {
    let curTime = new Date();
    let htmlTime = document.getElementById('time');
    let h = curTime.getHours();
    if (h < 10) h = "0" + h;
    let m = curTime.getMinutes();
    if (m < 10) m = "0" + m;
    let s = curTime.getSeconds();
    if (s < 10) s = "0" + s;
    htmlTime.innerHTML = h + ":" + m + ":" + s;
    setTimeout("changeTime()",1000);
}

changeTime();

/*Задача 3
От сервера пришел массив с объектами (данные о пользователях).
Каждый объект обладает следующими свойствами: id, name, email, phone, position.

    Необходимо написать программу, которая будет генерировать таблицу для вывода информации о пользователях в html
Для генерации такого массива пользуйтесь функцией createUserArr.*/

let users = createUserArr();//  данные для вывода в таблицу
function createUserArr() {
    let arr = [];
    for (let i = 0; i < 100; i++){
        arr.push(
            {
                id: i,
                name: "Какое-то имя",
                email: "Email",
                phone: "+79991112233",
                position: "Должность"
            }
        )
    }
    return arr;
}

//console.log(users);

function createTable (usersData) {
    let tab = document.getElementById ('uTable');
    tab.classList.add('tab');
    for (i = 0; i < usersData.length; i++)
    {
        let trow =  tab.insertRow (-1);
        for (key in usersData[i]) {
            let cell = trow.insertCell (-1);
            cell.innerHTML = usersData[i][key];
        }
    }
}

createTable(users);

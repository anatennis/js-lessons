/*Задача 1
Написать программу, которая будет генерировать игровое поле размером N x N .
    Где N - количество ячеек,
    каждая ячейка - отдельный div (размеры div на Ваше усмотрение).
Значение N  получаем от пользователя.
    Например, поле 4 x 4
*/


function genField(n) {

    let field = document.getElementById('field');
    for (i=0; i<n*n; i++) {
        let cell = document.createElement("div");
        cell.style.height = field.offsetWidth/n + "px";
        cell.style.width = field.offsetHeight/n + "px";
        cell.classList.add("border");
        cell.classList.add("cells");
        field.appendChild(cell);
    }
}

let n = prompt("Введите размерность поля");
genField(n);

function generatePrize(field, prizeCount) {
    for (i=0; i<prizeCount; i) {
        field.children[Math.round(getRandom(0, field.children.length))].setAttribute("data-ptize", ":)");
    }
}

function getRandom(min, max) {
    return Math.random()*(max - min) + min;
}
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

        trow =  tab.insertRow ();

        for (key in usersData[i]) {
            let cell = trow.insertCell ();
            cell.innerHTML = usersData[i][key];
        }
    }

}

createTable(users);



/*Lesson6 - Задача 3
Написать программу, которая будет осуществлять сортировку строк таблицы
из задачи 3 (предыдущего дз) по значениям столбца
по нажатию на название этого столбца.*/
let usersTab = document.getElementById ('uTable');
console.log(usersTab);
usersTab.addEventListener("click", sortTab);

function sortTab(event) {
    if (event.tagName == "th")
    {
        return;
    }

    console.log(event.target.cellIndex, event.target.getAttribute('data-type'));
    sortt(event.target.cellIndex, event.target.getAttribute('data-type'));

}



function sortt(colNum, type) {
    var tbody = usersTab.getElementsByTagName('tbody')[0];
console.log(tbody);
    // Составить массив из TR
    var rowsArray = [].slice.call(tbody.rows);

    // определить функцию сравнения, в зависимости от типа
    var compare;

    switch (type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
            };
            break;
    }

    // сортировать
    rowsArray.sort(compare);

    // Убрать tbody из большого DOM документа для лучшей производительности
    usersTab.removeChild(tbody);

    // добавить результат в нужном порядке в TBODY
    // они автоматически будут убраны со старых мест и вставлены в правильном порядке
    for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
    }

    usersTab.appendChild(tbody);

}
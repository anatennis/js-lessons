/*Задача 1
Дана радиокнопка и контейнер (div) с какой либо информацией.
    Когда кнопка выбрана (checked) открывать div,
    в противном случае, скрывать блок.*/

'use strict';

/**/
let showb = document.getElementById('showb');
showb.addEventListener('click', showDiv);

function showDiv(event) {
    let showdiv = document.getElementById('surp');
    showdiv.style.display = "block";
}

/*
Задача 2
Реализовать возможность добавления комментариев
к статье.
    Текст комментария пользователь вводит в <textarea>,
    добавление происходит по нажатию на кнопку Комментировать. */
let txtar = document.getElementById('comment');
let sendCom = document.getElementById('sendCom');
sendCom.addEventListener('click', sendC);

function sendC(event) {
    if (sendCom.value[0]=='S') {
        sendCom.value = "Write new comment";
        txtar.style.display = 'none';
        document.getElementById('realCom').innerHTML =  document.getElementById('comment').value;
        document.getElementById('realCom').classList.add('realComSt');
    }
    else {
        txtar.style.display = 'block';
        txtar.value = ''
        sendCom.value = "Send";
    }
}
'use strict';
/*
console.log(window);

let a = 1;
a = 67;
//var b = 2;

const CONST_NAME = "const";

if (true) {
    let a =1;
    var b =2;
}

console.log(a);*/

console.log("Функции");

function printHello() {
    console.log("Hello");
}

printHello();

function sum (a, b) {
    return a+b;
}

console.log(sum(5, -2));


//Arguments
function showArguments() {
    for (let i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showArguments();
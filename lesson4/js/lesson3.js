let obj = {};

//let login ='qwe';

/*
let имяОбъекта = {
    свойство1: значение,
    свойство2: значение,
    свойство3: значение,
    login: 'qwe'
}
*/


let tovar = {
    id: 1,
    cost: 450,
    quantity: 1000,
    name: "skatert",
    img: 'img',

}

console.log('tovar', tovar);


tovar.name = 'other';
console.log('tovar name', tovar.name);

console.log(tovar.hasOwnProperty("456355555"));

let art = 'art';
tovar[art] = '2353453';
console.log(tovar[art]);

for (let propName in tovar) {
    console.log(propName, tovar[propName]);

}

//cost=>tovar[cost]=>459;

console.log(Object.keys(tovar));
console.log(Object.getOwnPropertyNames(tovar));

let userArr = ['qwqe', '12443234', 23, "Petrov"]
let [login, pwd, ...age] = userArr; //let [login, pwd] - просто набор переменных

console.log("login", login);
console.log("pwd", pwd);
console.log("age", age);

let {id, cost, quantity, name} = tovar;

function showTovar({id, cost, quantity, name}) {
    console.log('id', id);
    console.log('cost', cost);
    console.log('quantity', quantity);
    console.log('name', name);
}

showTovar(tovar);

tovar = {
    id: 1,
    cost: 450,
    quantity: 1000,
    name: "skatert",
    img: 'img',
    getQuntity: function () {
        console.log(1000);
    }
}

tovar.getQuntity();
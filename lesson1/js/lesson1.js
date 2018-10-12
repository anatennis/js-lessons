//создание переменных, имя может быть из букв, цифр, $, _
var varName;
let varName2;

let login, age, name, email;
const VarName = 1;

login = 'asdf';
// let num = 12;

//переопределение переменной
login = "qwer";

//отладка
console.log("Message", login);

//типы данных в JS
//1. число
var num = 1;
var num2 = 8.88;

//2. строка - string
let str = "sdaa";
let str2 = 'sdcs';

//3.логический тип - boolean
let boo = true;
boo = false;

//4.Значение неизвестно
let unknownVal = null;

//4.Значение не присвоено
let undefVal;

let var1 = null,
    var2 = null,
    var3 = null;

//Arrays
let arr = [ "elem", 34, var2 ];

//Objects
let obj = { type: 'object'};

console.log(typeof obj);

var somevar = 'sdlk';
let isNanRes = isNaN(somevar);
//true - если значение Nan или не может быть преобразовано в число



console.log(isNanRes);
/*prompt("Message")*/

//let answer = prompt("Question");

//преобразование строки в число
parseInt();
parseFloat();

//answer = parseInt(answer);
//answer=+answer;
//console.log(answer, typeof answer);

console.log(+true);

/*К false преобразуются
0
""
" "
null
undefined*/

//арифметические операторы
// + - * / %
console.log(+'23' + 2);
console.log('refd' + 2);
console.log('2' + '2');
console.log(2/0);
console.log(5%4);
console.log('4'*4);
console.log(0.1+0.4);

//операторы присвоения
//= += -= *= /= %=
var c = 23;
var a = 2;

c+=a;
console.log(c);

//alert("jhgkygj");


//< > <= >= != == === !==
console.log(3=='3');
console.log(3==='3');

a=2;
b=3;


//DOM
console.log(document);
console.log(document.documentElement);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.children);

//поиск в DOM
let menu = document.getElementsById('menu');
console.log('menu', menu);

//let menuName = document.getElementsByName('elemName');

let menuTag = document.getElementsByTagName('nav');
console.log('menuTag', menuTag);

let menuClass = document.getElementsByClassName('ul-class');
console.log('menuClass', menuClass);

let menuQuery = document.querySelector('ul>li');
let menuQueryAll = document.querySelectorAll('input[type=text]');

//СОздание элементов
let ul = document.createElement('ul');

//Работа с атрибутами
ul.hasAttribute('id');
ul.setAttribute('id');
ul.getAttribute('id');

//style
ul.style.background = 'blue';

//работа с классами CSS

ul.classList.add('class-name');

//add elem
li.appendChild(text);
ul.appendChild(li);

let forulDiv = document.getElementsByClassId(menu);
forulDiv.appendChild(ul);

let arr = ['elem1', 'elem2', 'elem3']
let ul2 = document.createElement('ul');

for (i=0; i<arr.length; i++) {
    let le = document.createElement('li');
    let text = document.createTextNode(arr[i]);
    li.appendChild(text);
    ul2
}

document.body.innerHTML = "<p>innerHTML</p>";
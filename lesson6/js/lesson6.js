/*
let elem = document.getElementsById("div");

elem.onclick = function () {
    //smth
}
*/

let element = document.getElementById('click');
element.addEventListener('click', clickHandler);

function clickHandler(event) {
    console.log("click по элементу", this);
    console.log(event);
}

let container = document.getElementById('container');
container.addEventListener('click', showElemInfo);

function showElemInfo(event) {
    //console.log(event.target);
    let elem = event.target;
    let index = elem.dataset.index;
    if (index) {
        elem.appendChild(document.createTextNode("" + index));
    }
}
'use strict';
let form = document.forms.ht6;
console.log(form);

let persData = form.elements.persData;

/*let radioGroup = form.elements.some_name;
console.log(radioGroup);*/

form.elements.nName.addEventListener('blur', addAlert);
function addAlert(event) {
    if (!form.elements.nName.value.length) {
        document.getElementById('alertP').style.display = "block";
        form.elements.nName.setAttribute('focus', 'focus');
    }
    else {
        document.getElementById('alertP').style.display = "none";
    }
}

form.addEventListener('submit', sendData);
function sendData(event) {
    event.preventDefault();
    console.log("send data");
    if (form.elements.persData.checked) {
        form.display = 'none';
        console.log('dfcdcd');
    }
    else {
        form.elements.persData.setAttribute('focus');
    }
}
/*login.value = "Input value";
let loginVal = login.value;
console.log(loginVal);


let formData = new FormData(form);
console.log(formData.get('text'));

formData.append('newElem', 'value');

form.addEventListener('submit', sendData);

function sendData(event) {
    event.preventDefault();
    console.log("send data");
    let login = form.elements.login;
    console.log(login.value);
}*/

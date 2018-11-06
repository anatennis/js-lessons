'use strict';
let form = document.forms.lesson6;
console.log(form);

let login = form.elements.login;

let radioGroup = form.elements.some_name;
console.log(radioGroup);

login.value = "Input value";
let loginVal = login.value;
console.log(loginVal);

/*let oneCheckBox = form.elements.oneCheckbox;
oneCheckBox.checked = true;
console.log(oneCheckBox);*/

let select = document.getElementById('select');
let options = select.options;
console.log(options);
for (let i=0; i<options.length; i++) {
    console.log(options[i]);
    if (options.selected) {
        console.log(options[i], "selected");
    }
}

let formData = new FormData(form);
console.log(formData.get('login'));
formData.append('newElem', 'value');

form.addEventListener('submit', sendData);

function sendData(event) {
    event.preventDefault();
    console.log("send data");
    let login = form.elements.login;
    console.log(login.value);
}
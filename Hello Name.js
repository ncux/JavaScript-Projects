
// alternative method: using "onclick" attribute

// <button id="buttonId" onclick="insertName();">Go!</button>

function insertName() {
    var input = document.querySelector('#inputId');
    var p = document.querySelector('#pId');
    p.innerHTML += input.value;
}





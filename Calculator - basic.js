
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var times = document.querySelector('#times');
var divide = document.querySelector('#divide');
var result = document.querySelector('#result');

plus.addEventListener('click', addition);
minus.addEventListener('click', substraction);
times.addEventListener('click', multiplication);
divide.addEventListener('click', division);

function addition() {
    result.innerHTML += num1.value + num2.value;
    return result;
}

function substraction() {
    result.innerHTML += num1.value - num2.value;
    return result;
}

function multiplication() {
    result.innerHTML += num1.value * num2.value;
    return result;
}

function division() {
    result.innerHTML += num1.value / num2.value;
    return result;
}
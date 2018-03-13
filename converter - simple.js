
var distance = document.querySelector('#distance');
var mass = document.querySelector('#mass');

document.querySelector('#miTokm').addEventListener('click', miTokm);
function miTokm() {
    var metricDistance = distance.value * 1.6;
    document.querySelector('#kilometers').innerHTML = metricDistance + '' + 'km';
}


document.querySelector('#lbTokg').addEventListener('click', lbTokg);
function lbTokg() {
    var metricMass = mass.value / 2.2;
    document.querySelector('#kilograms').innerHTML = metricMass + '' + 'kg';
}

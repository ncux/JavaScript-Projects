var distance = document.querySelector('#distance');
var mass = document.querySelector('#mass');

distance.addEventListener('keydown', milesTokilometers);
mass.addEventListener('keydown', poundsToKilograms);

function milesTokilometers(e) {
    if (e.keyCode === 13) {

        var metricDistance = distance.value * 1.6;
        document.querySelector('#kilometers').innerHTML = metricDistance + '' + 'km';
    }
}

function poundsToKilograms(e) {
    if (e.keyCode === 13) {

        var metricMass = mass.value / 2.2;
        document.querySelector('#kilograms').innerHTML = metricMass + '' + 'kg';
    }
}
'use strict';

function getRandomInt(num) {
    return Math.floor(Math.random() * (num - 1) + 1);
};

let cantidad = 50;
let apuesta;

while (cantidad > 0 && cantidad < 200) {
    apuesta = parseInt(prompt(`Introduzca la cantidad que quiere apostar(Cantidad Actual: ${cantidad}):`));
    while (apuesta > cantidad) {
        apuesta = parseInt(prompt(`Introduzca una cantidad que pueda apostar:(Cantidad Actual: ${cantidad})`));
    }
    let numApostado = parseInt(prompt("Apueste un número del 1 al 6:"));

    if (numApostado == getRandomInt(6)) {
        cantidad = cantidad + apuesta * 2;
        alert(`Has ganado ${apuesta*2}€`);
    } else {
        cantidad = cantidad - apuesta;
        alert(`Has perdido ${apuesta}€`);
    }
};
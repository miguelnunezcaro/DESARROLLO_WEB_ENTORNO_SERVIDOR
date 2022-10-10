'use strict';

let botonPrincipal = document.querySelector("#bEjemplo");
let arrayPredefinido = [63, 45, 58, 56];

botonPrincipal.addEventListener('click', function () {
    var i = document.querySelector("#i");
    i.value = arrayPredefinido;
});

let botonReinicio = document.querySelector("#bReinicio");

botonReinicio.addEventListener('click', function () {
    var i = document.querySelector("#i");
    i.value = '';
    let p = document.querySelector("#p");
    p.innerHTML = "";
});

let botonCalcular = document.querySelector("#bCalculo");

botonCalcular.addEventListener('click', function () {
    var i = document.querySelector("#i");
    const arrayEscrito = i.value.split(",");

    let numMayor = Math.max(...arrayEscrito);
    let numMin = Math.min(...arrayEscrito);
    let p = document.querySelector("#p");
    var sum = 0;

    for (let i = 0; i < arrayEscrito.length; i++) {
        sum += parseInt(arrayEscrito[i]);
    }
    
    let media = sum / arrayEscrito.length;
    p.innerHTML = `
        La suma es: ${sum} <br>
        La media es: ${media} <br>
        El mayor es: ${numMayor} <br> 
        El menor es: ${numMin} <br>`
});
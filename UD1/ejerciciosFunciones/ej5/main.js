'use strict';

let nota1 = parseInt(prompt("Introduce la primera nota:"));
let nota2 = parseInt(prompt("Introduce la segunda nota"));
let nota3 = parseInt(prompt("Introduce la tercera nota"));

let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;
/*
if (promedio < 5) {
    alert("Repetidor");
} else if (promedio > 5 && promedio < 7) {
    alert("Superado");
} else if (promedio > 7) {
    alert("Promocionado");
};
*/

let mensaje = (promedio < 5) ? "Repetidor" :
    (promedio > 5 && promedio < 7) ? "Superado" : "Promocionado";

alert(mensaje);
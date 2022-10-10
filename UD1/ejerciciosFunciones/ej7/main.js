'use strict';

let num1 = parseInt(prompt("Introduzca un valor entero:"));
/*
if (num1 > 0) {
    alert("El número introducido es positivo");
} else if (num1 < 0) {
    alert("El número introducido es negativo");
} else {
    alert("El número es igual a 0");
}
*/
let mensaje = (num1 > 0) ? "El  número introducido es positivo" :
    (num1 < 0) ? "El número introducido es negativo" :
    "El número es igual a 0";

alert(mensaje);
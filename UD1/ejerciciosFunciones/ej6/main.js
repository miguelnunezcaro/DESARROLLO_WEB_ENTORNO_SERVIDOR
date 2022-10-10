'use strict';

let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce un número:"));
let num3 = parseInt(prompt("Introduce un número:"));
/*
if (num1>num2 && num1>num3) {
    alert("El primer número introducido es el mayor");
}else if (num2>num1 && num2>num3) {
    alert("El segundo número introducido es el mayor");
}else if (num3>num2 && num3>num1) {
    alert("El tercer número introducido es el mayor");
}else {
    alert("Hay dos o más números iguales")
}
*/

let mensaje = (num1 > num2 && num1 > num3) ? "El primer número introducido es el mayor" :
    (num2 > num1 && num2 > num3) ? "El segundo número introducido es el mayor" :
    (num3 > num2 && num3 > num1) ? "El tercer número introducido es el mayor" :
    "Hay dos o más números iguales";

alert(mensaje);
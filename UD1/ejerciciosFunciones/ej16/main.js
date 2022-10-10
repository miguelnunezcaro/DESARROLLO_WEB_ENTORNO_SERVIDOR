'use strict';

let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce un número:"));
let num3 = parseInt(prompt("Introduce un número:"));

let cuenta = (num1 + num2) * num3;
/*
if (num1 == num2 && num1 == num3) {
    alert(`La suma es: ${cuenta}`);
}else {
    alert("Solo hay dos números iguales o ninguno es igual");
};
*/

let mensaje = (num1 == num2 && num1 == num3) ? `La suma es: ${cuenta}` :
    "Solo hay dos números iguales o ninguno es igual";

alert(mensaje);
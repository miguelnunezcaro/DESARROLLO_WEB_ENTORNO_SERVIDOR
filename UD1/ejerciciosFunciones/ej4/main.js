'use strict';

let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce un número:"));

let suma = num1 + num2;
let diferencia = num1 - num2;
let producto = num1 * num2;
let division = num1 / num2;
/*
if (num1 > num2) {
    document.write("La suma es: " + suma + "<br>");
    document.write("La diferencia es: " + diferencia);
} else if (num1 < num2) {
    document.write("El producto es: " + producto + "<br>");
    document.write("La division es: " + division);
} else if (num1 == num2) {
    alert("¡Los números son iguales!")
} else {
    alert("Los datos introducidos son incorrectos");
};
*/

let mensaje = (num1 > num2) ? "La suma es " + suma + " y la diferencia " + diferencia :
    (num1 < num2) ? "El producto es " + producto + " y la división " + division :
    (num1 == num2) ? "¡Los números son iguales!" : "Los datos introducidos son incorrectos";

document.write(mensaje);
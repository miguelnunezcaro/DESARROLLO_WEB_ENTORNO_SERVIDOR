'use strict';

let num = parseInt(prompt("Introduzca un número entero de uno, dos o tres dígitos:"));
/*
if (num > 0 && num < 10) {
    alert("El número introducido es de un dígito");
}else if (num >= 10 && num < 100) {
    alert("El número introducido es de dos dígitos");
}else if (num >= 100 && num < 1000) {
    alert("El número introducido es de tres dígitos");
}else {
    alert("El número introducido no es correcto");
};
*/

let mensaje = (num > 0 && num < 10) ? "El número introducido es de un dígito" :
    (num >= 10 && num < 100) ? "El número introducido es de dos dígitos" :
    (num >= 100 && num < 1000) ? "El número introducido es de tres dígitos" :
    "El número introducido no es correcto";

alert(mensaje);
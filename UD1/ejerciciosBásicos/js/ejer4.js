'use strict';

var num1 = parseFloat(prompt("Inserte un número:"));
var num2 = parseFloat(prompt("Inserte un número:"));
var num3 = parseFloat(prompt("Inserte un número:"));
var num4 = parseFloat(prompt("Inserte un número:"));

var suma = num1 + num2 + num3 + num4;
var producto = num1 * num2 * num3 * num4;
var resta = num1 - num2;
var division = num3 / num4;


document.write("La suma de todos es " + suma);
document.write("<br>");
document.write("El producto de todos es " + producto);
document.write("<br>");
document.write("La resta del primero y el segundo es " + resta)
document.write("<br>");
document.write("La división de los dos últimos es: " + division)
document.write("<br>");
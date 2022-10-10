'use strict';

let name = prompt("¿Cuál es tu nombre?");
let age = parseInt(prompt("¿Qué edad tienes?"));
const numDays = age * 365;
/*
if (age >= 18) {
    alert("Hola "+name+", es mayor de edad y ha vivido "+ numDays +" días");
}else if (age < 18 && age > 0) {
    alert("Hola "+name+", es menor de edad y ha vivido "+ numDays +" días");
};
*/

let mensaje = (age >= 18) ? "Hola " + name + ", es mayor de edad y ha vivido " + numDays + " días" :
    "Hola " + name + ", es menor de edad y ha vivido " + numDays + " días";

alert(mensaje);
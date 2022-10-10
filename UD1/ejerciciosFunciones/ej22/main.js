'use strict'

let altura = parseInt(prompt("Introduzca su altura en cm:"));
let edad = parseInt(prompt("Introduzca su edad:"));
let sexo = prompt("Introduzca su sexo:");

/*
if (sexo == "Femenino") {
    let pesoIdeal = 50 + ((altura - 150) / 4) * 0.9 + (edad - 20) / 4;
    alert(`Su peso ideal es ${pesoIdeal} kg`);
} else if (sexo == "Masculino") {
    let pesoIdeal = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
    alert(`Su peso ideal es ${pesoIdeal} kg`);
} else {
    alert("Introduzca los datos correctamente");
};
*/

let pesoIdeal;
let mensaje = (sexo == "Femenino") ?
    `Su peso ideal es ${pesoIdeal = 50 + ((altura - 150) / 4) * 0.9 + (edad - 20) / 4} kg` :
    (sexo == "Masculino") ?
    `Su peso ideal es ${pesoIdeal = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4} kg` :
    "Introduzca los datos correctamente";

alert(mensaje);
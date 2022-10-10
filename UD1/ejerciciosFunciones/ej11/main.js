'use strict';

let day = parseInt(prompt("Introduce un día:"));
let month = prompt("Introduce un mes:");
let year = parseInt(prompt("Introduce un año:"));
/*
if ((day >= 25 && day <= 31 && month == "Diciembre") || (day >= 1 && day <= 6 && month == "Enero")) {
    alert("Es Navidad");
} else {
    alert("No es navidad");
};
*/
let mensaje = ((day >= 25 && day <= 31 && month == "Diciembre") ||
    (day >= 1 && day <= 6 && month == "Enero")) ? "Es Navidad" : "No es navidad";
'use strict';

let marca = prompt("¿Cuál es la marca de coche que quiere?");
let modelo = prompt(`¿Cuál es el modelo de ${marca} que quiere?`);
/*
if (marca == "Renault") {
    alert(`El coche elegido (Renault ${modelo}) tiene un descuento del 15%`);
}else if (marca == "Ford" && modelo == "Fiesta") {
    alert("El coche elegido (Ford Fiesta) tiene un descuento del 7%");
}else if (marca == "Ford" && modelo == "Focus") {
    alert("El coche elegido (Ford Focus) tiene un descuento del 10%");
}else {
    alert(`El coche elegido (${marca} ${modelo}) tiene un descuento del 5%`)
};
*/
let mensaje = (marca == "Renault") ? `El coche elegido (Renault ${modelo}) tiene un descuento del 15%` :
    (marca == "Ford" && modelo == "Fiesta") ? "El coche elegido (Ford Fiesta) tiene un descuento del 7%" :
    (marca == "Ford" && modelo == "Focus") ? "El coche elegido (Ford Focus) tiene un descuento del 10%" :
    `El coche elegido (${marca} ${modelo}) tiene un descuento del 5%`;

alert(mensaje);
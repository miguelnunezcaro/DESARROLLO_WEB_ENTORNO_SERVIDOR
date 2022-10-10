'use strict';

let baseImponible = parseInt(prompt("¿Qué precio tiene el producto"));
let peso = parseInt(prompt("Introduzca el peso del producto"));
let iva = prompt("Seleccione el tipo de IVA:");

let ivaNormal = baseImponible * 0.21;
let ivaReducido = baseImponible * 0.1;
let precioTotal;
/*
if (iva == "Normal") {
    precioTotal = baseImponible + ivaNormal
} else if (iva == "Reducido") {
    precioTotal = baseImponible + ivaReducido
};
*/
let mensaje1 = (iva == "Normal") ? precioTotal = baseImponible + ivaNormal :
    (iva == "Reducido") ? precioTotal = baseImponible + ivaReducido :
    "Datos incorrectos";
/*
if (peso < 1) {
    precioTotal = precioTotal + 3;
} else if (peso < 3) {
    precioTotal = precioTotal + 5;
}else {
    precioTotal = precioTotal + 10;
}
*/
let mensaje2 = (peso < 1) ? precioTotal = precioTotal + 3 :
    (peso < 3) ? precioTotal = precioTotal + 5 :
    precioTotal = precioTotal + 10;


alert(`Su producto tiene un precio total de ${precioTotal}€`);
'use strict';

let year = parseInt(prompt("Introduce un año:"));
let mes = prompt("Introduce un mes:");

function esBisiesto(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
};

const mesesBisiestos = {
    Enero: 31,
    Febrero: 29,
    Marzo: 31,
    Abril: 30,
    Mayo: 31,
    Junio: 30,
    Julio: 31,
    Agosto: 31,
    Septiembre: 30,
    Octubre: 31,
    Noviembre: 30,
    Diciembre: 31
};

const mesesNormales = {
    Enero: 31,
    Febrero: 28,
    Marzo: 31,
    Abril: 30,
    Mayo: 31,
    Junio: 30,
    Julio: 31,
    Agosto: 31,
    Septiembre: 30,
    Octubre: 31,
    Noviembre: 30,
    Diciembre: 31
};

/*
if (esBisiesto(year) == true) {
    let dias = mesesBisiestos[mes];
    alert(`Has elegido el año ${year} (año bisiesto), así que el mes de ${mes} tiene ${dias} días`);
}else {
    let dias = mesesNormales[mes];
    alert(`Has elegido el año ${year}, así que el mes de ${mes} tiene ${dias} días`);
};
*/

let dias;
let mensaje = (esBisiesto(year) == true) ?
    `Has elegido el año ${year} (año bisiesto), así que el mes de ${mes} tiene ${dias=mesesBisiestos[mes]} días` :
    `Has elegido el año ${year}, así que el mes de ${mes} tiene ${dias=mesesNormales[mes]} días`;

alert(mensaje);
'use strict';

let dia = prompt("Escribe un dia de la semana:");

const semana = {
    Lunes: "Martes",
    Martes: "Miercoles",
    Miercoles: "Jueves",
    Jueves: "Viernes",
    Viernes: "Sabado",
    Sabado: "Domingo",
    Domingo: "Lunes"
};

let diaElegido = semana[dia];
alert(diaElegido);
'use strict';

const element = document.querySelector("#b");
/*
function ej1() {
    var i1 = parseInt(document.querySelector("#i1").value);
    var i2 = parseInt(document.querySelector("#i2").value);

    if (i1 > i2) {
        alert("El primer número es mayor que el segundo");
    }else if(i1 == i2) {
        alert("Los números son iguales");
    }else{
        alert("El segundo número es mayor que el primero");
    }
};
*/

function ej1() {
    var i1 = parseInt(document.querySelector("#i1").value);
    var i2 = parseInt(document.querySelector("#i2").value);

    let mensaje = (i1 > i2) ? "El primer número es mayor que el segundo" : (i1 < i2) ?
        "El segundo número es mayor que el primero" : "Los números son iguales";
    alert(mensaje);
};
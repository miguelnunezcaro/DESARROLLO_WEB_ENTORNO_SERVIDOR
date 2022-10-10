'use strict';
/*
function mostrarOpcion() {
    var opcion1 = document.getElementById("eleccion1");
    var opcion2 = document.getElementById("eleccion2");
    var opcion3 = document.getElementById("eleccion3");
    
    if (opcion1.checked) {
        alert("Opción 1");
    }else if (opcion2.checked) {
        alert("Opción 2");
    }else {
        alert("Opción 3");
    }
};
*/

function mostrarOpcion() {
    var opcion1 = document.getElementById("eleccion1");
    var opcion2 = document.getElementById("eleccion2");
    var opcion3 = document.getElementById("eleccion3");

    let mensaje = (opcion1.checked == true) ? "Opcion 1" :
        (opcion2.checked == true) ? "Opcion 2" : "Opcion 3";
    alert(mensaje);
};
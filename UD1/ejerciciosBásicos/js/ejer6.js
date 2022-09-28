'use strict';

function insertarTexto(evt) {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let opcion = nombre + "<br>";
    let p = document.querySelector("#p");
    p.innerHTML = opcion;
};


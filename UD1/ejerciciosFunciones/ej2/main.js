'use strict';

const enviar = document.getElementById("enviar");
enviar.addEventListener('click', ponerLista);

function ponerLista() {
    let nombre = document.getElementById("nombre").value;
    document.getElementById("lista").innerHTML += "<li> " + nombre + " </li>";
};
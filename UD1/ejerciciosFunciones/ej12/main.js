'use strict';

let boton = document.querySelector("#b");

boton.addEventListener('click', function () {
    let num = document.querySelector("#i");
    let resto = num.value % 2;
    /*
    if (resto == 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
    */
    let mensaje = (resto == 0) ? "El número es par" :
        "El número es impar";
    alert(mensaje);
});
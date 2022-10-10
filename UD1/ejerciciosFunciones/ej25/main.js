'use strict';

let boton = document.querySelector("#b");

boton.addEventListener('click', function () {
    let texto = document.querySelector("#i");
    let mensaje = texto.value;
    const array = mensaje.split(' ');
    let numPalabras = mensaje.split(' ').length;
    let contenido = document.querySelector("#contenido");
    contenido.innerHTML = `Número de palabras: ${numPalabras} <br>
    Primera palabra: ${array[0]} <br>
    Última palabra: ${mensaje.split(' ').pop()}`
    console.log(array);
/*
    console.log(`Número de palabras: ${numPalabras}`);
    console.log(`Primera palabra: ${array[0]}`);
    console.log(`Última palabra: ${mensaje.split(' ').pop()}`);
*/
});
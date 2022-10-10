'use strict';

let dia = parseInt(prompt("Introduzca su día de nacimiento:"));
let mes = prompt("Introduce tu mes de nacimiento");

let mensaje = ((dia >= 21 && mes == "Marzo") || (dia <= 20 && mes == "Abril")) ? "Aries" :
    ((dia >= 24 && mes == "Septiembre") || (dia <= 23 && mes == "Octubre")) ? "Libra" :
    ((dia >= 21 && mes == "Abril") || (dia <= 21 && mes == "Mayo")) ? "Tauro" :
    ((dia >= 24 && mes == "Octubre") || (dia <= 22 && mes == "Noviembre")) ? "Escorpio" :
    ((dia >= 22 && mes == "Mayo") || (dia <= 21 && mes == "Junio")) ? "Géminis" :
    ((dia >= 23 && mes == "Noviembre") || (dia <= 21 && mes == "Diciembre")) ? "Sagitario" :
    ((dia >= 21 && mes == "Junio") || (dia <= 23 && mes == "Julio")) ? "Cáncer" :
    ((dia >= 22 && mes == "Diciembre") || (dia <= 20 && mes == "Enero")) ? "Capricornio" :
    ((dia >= 24 && mes == "Julio") || (dia <= 23 && mes == "Agosto")) ? "Leo" :
    ((dia >= 21 && mes == "Enero") || (dia <= 19 && mes == "Febrero")) ? "Acuario" :
    ((dia >= 24 && mes == "Agosto") || (dia <= 23 && mes == "Septiembre")) ? "Virgo" :
    "Piscis";

alert(mensaje);
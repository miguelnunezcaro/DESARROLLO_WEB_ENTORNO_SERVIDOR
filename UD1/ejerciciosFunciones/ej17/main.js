'use strict';

let nombreAspirante = prompt("Introduce el nombre del aspirante al empleo:");
let preguntas = parseInt(prompt("Introduce la cantidad de preguntas:"));
let preguntasCorrectas = parseInt(prompt("Introduce la cantidad de preguntas correctas:"));
let porcentaje = (preguntasCorrectas * 100) / preguntas;

/*
if (porcentaje >= 90) {
    alert("Nivel Superior");
} else if (porcentaje >= 75) {
    alert("Nivel Medio");
} else if (porcentaje >= 50) {
    alert("Nivel Bajo");
} else if (porcentaje < 50) {
    alert("Fuera de nivel");
} else {
    alert("Introduce los datos correctamente.")
}
*/

let mensaje = (porcentaje >= 90) ? "Nivel Superior" :
    (porcentaje >= 75) ? "Nivel Medio" :
    (porcentaje >= 50) ? "Nivel Bajo" :
    (porcentaje < 50) ? "Fuera de nivel" :
    "Introduce los datos correctamente";

document.write(`El aspirante se llama ${nombreAspirante}, se le han realizado ${preguntas} preguntas y ha respondido correctamente a ${preguntasCorrectas}, por tanto ha obtenido una calificación de: ${mensaje}`);
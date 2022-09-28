'use strict';

var precio = parseFloat(prompt("Inserte el precio del artículo:"));
var cantidad = parseInt(prompt("Ingrese la cantidad:"));
var dineroTotal = precio * cantidad;

document.write("El precio del artículo es " + precio + " y el número de unidades que lleva es " 
+ cantidad + " por tanto, el precio es " + dineroTotal);
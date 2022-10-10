'use strict';

var arrayNum = [];
const listaNum = (num) => {
    while (num >= 1) {
        arrayNum.push(num);
        num--;
    }
    document.write(arrayNum);
};

let num = parseInt(prompt("Introduce un número:"));
listaNum(num);
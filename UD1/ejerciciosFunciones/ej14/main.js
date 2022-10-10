'use strict';

let numNoPrimos = 0;

const esPrimo = num => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};

for (let i = 1; i < 201; i++) {
    if (!esPrimo(i)) {
        numNoPrimos++;
    }
    let resto = i % 5
    if (resto == 0) {
        console.log(i);
    }
};

console.log(`El número de no primos es: ${numNoPrimos}`);
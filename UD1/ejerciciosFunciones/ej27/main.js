'use strict';

let i = document.querySelector("#i");

let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let contadorD = 0;
let contadorE = 0;
let contadorF = 0;
let contadorG = 0;
let contadorH = 0;
let contadorI = 0;
let contadorJ = 0;
let contadorK = 0;
let contadorL = 0;
let contadorM = 0;
let contadorN = 0;
let contadorÑ = 0;
let contadorO = 0;
let contadorP = 0;
let contadorQ = 0;
let contadorR = 0;
let contadorS = 0;
let contadorT = 0;
let contadorU = 0;
let contadorV = 0;
let contadorW = 0;
let contadorX = 0;
let contadorY = 0;
let contadorZ = 0;
let numEspacios = 0;

i.addEventListener('keypress', function (event) {
    let tecla = String.fromCharCode(event.keyCode);

    if ((tecla == "a" || tecla == "A")) {
        contadorA++;
    } else if ((tecla == "b" || tecla == "B")) {
        contadorB++;
    } else if ((tecla == "c" || tecla == "C")) {
        contadorC++;
    } else if ((tecla == "d") || tecla == "D") {
        contadorD++;
    } else if ((tecla == "e") || tecla == "E") {
        contadorE++;
    } else if ((tecla == "f" || tecla == "F")) {
        contadorF++;
    } else if ((tecla == "g" || tecla == "G")) {
        contadorG++;
    } else if ((tecla == "h" || tecla == "H")) {
        contadorH++;
    } else if ((tecla == "i" || tecla == "I")) {
        contadorI++;
    } else if ((tecla == "j" || tecla == "J")) {
        contadorJ++;
    } else if ((tecla == "k" || tecla == "K")) {
        contadorK++;
    } else if ((tecla == "l" || tecla == "L")) {
        contadorL++;
    } else if ((tecla == "m" || tecla == "M")) {
        contadorM++;
    } else if ((tecla == "n" || tecla == "N")) {
        contadorN++;
    } else if ((tecla == "ñ" || tecla == "Ñ")) {
        contadorÑ++;
    } else if ((tecla == "o" || tecla == "O")) {
        contadorO++;
    } else if ((tecla == "p" || tecla == "P")) {
        contadorP++;
    } else if ((tecla == "q" || tecla == "Q")) {
        contadorQ++;
    } else if ((tecla == "r" || tecla == "R")) {
        contadorR++;
    } else if ((tecla == "s" || tecla == "S")) {
        contadorS++;
    } else if ((tecla == "t" || tecla == "T")) {
        contadorT++;
    } else if ((tecla == "u" || tecla == "U")) {
        contadorU++;
    } else if ((tecla == "v" || tecla == "V")) {
        contadorV++;
    } else if ((tecla == "w" || tecla == "W")) {
        contadorW++;
    } else if ((tecla == "y" || tecla == "Y")) {
        contadorY++;
    } else if ((tecla == "x" || tecla == "X")) {
        contadorX++;
    } else if ((tecla == "z" || tecla == "Z")) {
        contadorZ++;
    } else if ((tecla == " ")) {
        numEspacios++;
    }

    let p = document.querySelector("#p");
    p.innerHTML = `Contador de a: ${contadorA} <br>
        Contador de b: ${contadorB} <br>
        Contador de c: ${contadorC} <br>
        Contador de d: ${contadorD} <br>
        Contador de e: ${contadorE} <br>
        Contador de f: ${contadorF} <br>
        Contador de g: ${contadorG} <br>
        Contador de h: ${contadorH} <br>
        Contador de i: ${contadorI} <br>
        Contador de j: ${contadorJ} <br>
        Contador de k: ${contadorK} <br>
        Contador de l: ${contadorL} <br>
        Contador de m: ${contadorM} <br>
        Contador de n: ${contadorN} <br>
        Contador de ñ: ${contadorÑ} <br>
        Contador de o: ${contadorO} <br>
        Contador de p: ${contadorP} <br>
        Contador de q: ${contadorQ} <br>
        Contador de r: ${contadorR} <br>
        Contador de s: ${contadorS} <br>
        Contador de t: ${contadorT} <br>
        Contador de u: ${contadorU} <br>
        Contador de v: ${contadorV} <br>
        Contador de w: ${contadorW} <br>
        Contador de x: ${contadorX} <br>
        Contador de y: ${contadorY} <br>
        Contador de z: ${contadorZ} <br>
        Contador de espacios: ${numEspacios} <br>`

    let contadores = [contadorA, contadorB, contadorC, contadorD, contadorE, contadorF,
        contadorG, contadorH, contadorI, contadorJ, contadorK, contadorL,
        contadorM, contadorN, contadorÑ, contadorO, contadorP, contadorQ,
        contadorR, contadorS, contadorT, contadorU, contadorV, contadorW,
        contadorX, contadorY, contadorZ
    ];

    console.log(contadores);
});
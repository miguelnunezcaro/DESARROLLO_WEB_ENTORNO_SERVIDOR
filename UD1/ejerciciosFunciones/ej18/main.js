'use strict';

let years = parseInt(prompt("¿Cuántos años de antigüedad tiene el empleado?"));
let salary = parseInt(prompt("¿Qué salario tiene el empleado?"));

/*
if (salary < 1000 && years >= 10) {
    salary = salary + (salary*0.2)
}else if (salary < 1000 && years < 10) {
    salary = salary + (salary*0.05)
}else{
    salary = salary;
};

alert(`El empleado tiene una antigüedad de ${years} años y cobra ${salary}€`);
*/

let mensaje = (salary < 1000 && years >= 10) ? salary = salary + (salary * 0.2) :
    (salary < 1000 && years < 10) ? salary = salary + (salary * 0.05) :
    salary = salary;

alert(`El empleado tiene una antigüedad de ${years} años y cobra ${mensaje}€`);
'use strict';

//  Ejercicio 1
/*Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

let numero = parseInt(prompt("Ingrese un número:"));

console.log(`Tabla de multiplicar del número ${numero}`);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}



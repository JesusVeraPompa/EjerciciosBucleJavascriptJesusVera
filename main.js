"use strict";

/*-----------------------------------  Ejercicio 1  --------------------------------*/
/*Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

let numero = parseInt(prompt("Ingrese un número:"));

console.log(`Tabla de multiplicar del número ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

/*-----------------------------------  Ejercicio 2  --------------------------------*/
/*Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

let suma = 0;

do {
    let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

    if (numero === 0) {
        break;
    }

    suma += numero;
} while (true);

console.log(`La suma de todos los números ingresados es: ${suma}`);

/*-----------------------------------  Ejercicio 3  --------------------------------*/

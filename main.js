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
/*Realizar un programa de juego de adivinar el numero, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

do {
    let numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));

    if (numeroUsuario < numeroSecreto) {
        console.log("El número ingresado es menor al número secreto.");
    } else if (numeroUsuario > numeroSecreto) {
        console.log("El número ingresado es mayor al número secreto.");
    } else {
        console.log("Felicitaciones! Has adivinado el número secreto en", intentos, "intentos.");
        break;
    }

    intentos++;
} while (true);



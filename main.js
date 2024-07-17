"use strict";

/*-----------------------------------  Ejercicio 1  --------------------------------*/
/*Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

let numeroEjercicio1 = parseInt(prompt("Ingrese un número:"));

console.log(`Tabla de multiplicar del número ${numeroEjercicio1}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroEjercicio1} x ${i} = ${numeroEjercicio1 * i}`);
}

/*-----------------------------------  Ejercicio 2  --------------------------------*/
/*Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

let suma = 0;

do {
    let numeroEjercicio2 = parseInt(prompt("Ingrese un número (0 para terminar):"));

    if (numeroEjercicio2 === 0) {
        break;
    }

    suma += numeroEjercicio2;
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

/*-----------------------------------  Ejercicio 4  --------------------------------*/
/*Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/

let numeroEjercicio4 = parseInt(prompt("Ingrese un número:"));

function esPrimo(numeroParam) {
    for (var i = 2; i < numeroParam; i++) {
      if (numeroParam % i === 0) {
        return false;
      }
    }
    return numeroParam !== 1;
  }

  if (esPrimo(numeroEjercicio4)) {
    console.log(`${numeroEjercicio4} es un número primo.`);
  } else {
    console.log(`${numeroEjercicio4} no es un número primo.`);
  }

  /* Ojo este Ejercicio no lo entendi, pero busque informacion en
  https://medium.com/@holasoymalva/como-saber-si-un-n%C3%BAmero-es-primo-o-no-en-javascript-2edb798526d4
  y lo logre entender y pues tome parte de la informacion*/

  
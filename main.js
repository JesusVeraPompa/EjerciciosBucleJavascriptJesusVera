"use strict";

//  Damos una Bienvenida
alert("Hola Bienvenidos, Esta Aplicación Contiene 16 Ejercicios");

//  Mostramos en pantalla todos los ejercicios
document.write(
    "<br><br><strong>Ejercicio 1</strong><br>Realizar un programa que permita el ingreso de un numero<br> y muestre su tabla de multiplicar (Los primeros 10 multiplos)."
);

document.write(
    "<br><strong>Ejercicio 2</strong><br>Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. <br>El ingreso de datos terminara cuando el usuario ingrese un valor 0."
);

document.write(
    "<br><strong>Ejercicio 3</strong><br>Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado."
);

document.write(
    "<br><strong>Ejercicio 4</strong><br>Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 5. No es primo. Con tener mas de 2 divisores el numero ya no es primo."
);

document.write("<br><strong>Ejercicio 5</strong><br>Realizar un programa que permita dado un numero, mostrar todos sus divisores.");

document.write(
    "<br><strong>Ejercicio 6</strong><br>Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array."
);

document.write(
    "<br><strong>Ejercicio 7</strong><br>Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos."
);

document.write(
    "<br><strong>Ejercicio 8</strong><br>Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array."
);

document.write(
    "<br><strong>Ejercicio 9</strong><br>Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares."
);

document.write("<br><strong>Ejercicio 10</strong><br>Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.");

document.write("<br><strong>Ejercicio 11</strong><br>");

document.write("<br><strong>Ejercicio 12</strong><br>");

document.write("<br><strong>Ejercicio 13</strong><br>");

document.write("<br><strong>Ejercicio 14</strong><br>");

document.write("<br><strong>Ejercicio 15</strong><br>");

document.write("<br><strong>Ejercicio 16</strong><br>");

//  Pedimos leer todos los ejercicios
alert("A continuación, lee todos los Ejercicios y luego ingresa el numero del Ejercicio a Observar");

//  Esperamos 1 segundos para que el usuario lea los ejercicios y pueda ingresar el numero del Ejercicio a Observar
setTimeout(function () {
    let NumeroEjercicio = prompt("Ingresa el numero del Ejercicios que deseas Observar");
    switch (NumeroEjercicio) {
        /*-----------------------------------  Ejercicio 1  --------------------------------*/
        /*Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

        case "1":
            alert("Bienvenidos al Ejercicio 1");
            alert("Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).");

            let numeroEjercicio1 = parseInt(prompt("Ingrese un número:"));

            console.log(`Tabla de multiplicar del número ${numeroEjercicio1}`);

            for (let i = 1; i <= 10; i++) {
                console.log(`${numeroEjercicio1} x ${i} = ${numeroEjercicio1 * i}`);
            }

            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 2  --------------------------------*/
        /*Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

        case "2":
            alert("Bienvenidos al Ejercicio 2");
            alert(
                "Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0."
            );

            let suma = 0;

            do {
                let numeroEjercicio2 = parseInt(prompt("Ingrese un número (0 para terminar):"));

                if (numeroEjercicio2 === 0) {
                    break;
                }

                suma += numeroEjercicio2;
            } while (true);

            console.log(`La suma de todos los números ingresados es: ${suma}`);

            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 3  --------------------------------*/
        /*Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/

        case "3":
            alert("Bienvenidos al Ejercicio 3");
            alert(
                "Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado."
            );
            alert("Ver el Resultado por Consola F12.");

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

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 4  --------------------------------*/
        /*Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/

        case "4":
            alert("Bienvenidos al Ejercicio 4");
            alert(
                "Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 5. No es primo. Con tener mas de 2 divisores el numero ya no es primo."
            );

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

            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;
        /* Ojo este Ejercicio no lo entendi, pero busque informacion en
https://medium.com/@holasoymalva/como-saber-si-un-n%C3%BAmero-es-primo-o-no-en-javascript-2edb798526d4
y lo logre entender y pues tome parte de la informacion*/

        /*-----------------------------------  Ejercicio 5  --------------------------------*/
        /*Realizar un programa que permita dado un numero, mostrar todos sus divisores.*/

        case "5":
            alert("Bienvenidos al Ejercicio 5");
            alert("Realizar un programa que permita dado un numero, mostrar todos sus divisores.");

            let numeroEjercicio5 = parseInt(prompt("Ingrese un número:"));
            let divisores = [];
            for (let i = 1; i <= numeroEjercicio5; i++) {
                if (numeroEjercicio5 % i === 0) {
                    divisores.push(i);
                }
            }
            console.log(`Los divisores de ${numeroEjercicio5} son: ${divisores.join(", ")}`);

            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 6  --------------------------------*/
        /*Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/

        case "6":
            alert("Bienvenidos al Ejercicio 6");
            alert(
                "Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array."
            );

            let arrayEjercicio6 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

            for (let i = 0; i < arrayEjercicio6.length; i++) {
                console.log(`Elemento ${i + 1}: ${arrayEjercicio6[i]}`);
                alert("Mostrando el Resultado por Consola F12.");
            }

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 7  --------------------------------*/
        /*Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/

        case "7":
            alert("Bienvenidos al Ejercicio 7");
            alert("Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.");

            let arrayEjercicio7 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

            for (let i = 0; i < arrayEjercicio7.length; i++) {
                console.log(`Doble de elemento ${i + 1}: ${arrayEjercicio7[i] * 2}`);
                alert("Mostrando el Resultado por Consola F12.");
            }

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 8  --------------------------------*/
        /*Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.*/

        case "8":
            alert("Bienvenidos al Ejercicio 8");
            alert(
                "Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array."
            );

            let arrayEjercicio8 = [
                { nombre: "Juan", apellido: "Perez", edad: 25, profesion: "Developer" },
                { nombre: "Ana", apellido: "Garcia", edad: 30, profesion: "Diseñadora" },
                { nombre: "Pedro", apellido: "Jimenez", edad: 35, profesion: "Gerente" },
                { nombre: "Maria", apellido: "Lopez", edad: 28, profesion: "Recepcionista" },
                { nombre: "Luis", apellido: "Martinez", edad: 32, profesion: "Comunicador" },
            ];

            for (let i = 0; i < arrayEjercicio8.length; i++) {
                console.log(
                    `Hola! Mi nombre es ${arrayEjercicio8[i].nombre} ${arrayEjercicio8[i].apellido}, tengo ${arrayEjercicio8[i].edad} años y soy ${arrayEjercicio8[i].profesion}.`
                );
                alert("Mostrando el Resultado por Consola F12.");
            }

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 9  --------------------------------*/
        /*Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/

        case "9":
            alert("Bienvenidos al Ejercicio 9");
            alert("Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.");

            let arrayEjercicio9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            for (let i = 0; i < arrayEjercicio9.length; i++) {
                if (arrayEjercicio9[i] % 2 !== 0) {
                    console.log(arrayEjercicio9[i]);
                    alert("Mostrando el Resultado por Consola F12.");
                }
            }

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        /*-----------------------------------  Ejercicio 10  --------------------------------*/
        /*Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/

        case "10":
            alert("Bienvenidos al Ejercicio 10");
            alert("Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.");

            let sumaPares = 0;
            let sumaImpares = 0;

            while (true) {
                let numero = parseInt(prompt("Ingrese un numero (0 para terminar):"));

                if (numero === 0) {
                    break;
                }

                if (numero % 2 === 0) {
                    sumaPares += numero;
                } else {
                    sumaImpares += numero;
                }
            
            }

            alert("Mostrando el Resultado por Consola F12.");

            console.log(`La suma de los numeros pares es: ${sumaPares}`);
            console.log(`La suma de los numeros impares es: ${sumaImpares}`);

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "11":
            alert("Bienvenidos al Ejercicio 11");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "12":
            alert("Bienvenidos al Ejercicio 12");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "13":
            alert("Bienvenidos al Ejercicio 13");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "14":
            alert("Bienvenidos al Ejercicio 14");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "15":
            alert("Bienvenidos al Ejercicio 15");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "16":
            alert("Bienvenidos al Ejercicio 16");
            alert("");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        default:
            alert("Debes ingresar un numero del 1 al 16 para ver el Ejercicio, vuelve a cargar la pagina con F5");
            break;
    }
}, 1000);

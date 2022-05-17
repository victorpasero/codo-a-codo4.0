function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function calcular(num1, num2, operacion) {
    return operacion(num1, num2);
}

let suma = calcular(6, 2, sumar);
console.log(suma);

let resta = calcular(8, 3, restar);
console.log(resta);

// function calcular(num1, num2, operacion) {
//     if (operacion == '+') {
//         return sumar(num1 + num2);
//     } else if (operacion == '-') {
//         return restar(num1 - num2);
//     } else {
//         return 'Operacion no registrada';
//     }
// }

// console.log( calcular(7, 3, '+') );
// console.log( calcular(7, 3, '-') );

// ---

// function textoEnConsole() {
//     console.log('Hola desde el callback')
// }

// function mensaje(done) {
//     // ...
//     done()
// }

// mensaje(textoEnConsole)

// ---

// setTimeout(function() {
//     console.log('Pasaron 3 segundos');
// }, 3000);

// ---

// const mensaje = function() {
//     console.log('Pasaron 3 segundos');
// }

// setTimeout(mensaje, 3000);

// mesaje();

// ---

// function saludar(nombre) {
//     return 'Hola ' + nombre;
//     console.log('Despues del return');
// }

// let mensaje = saludar('Juan');

// console.log(mensaje);
// alert(mensaje);

// ---

// function mensaje(texto, opcion = 'console') {
//     if (opcion == 'console') {
//         console.log(texto);
//     } else if (opcion == 'alert') {
//         alert(texto)
//     } else if (opcion == 'documento') {
//         document.write(texto);
//     }
// }

// mensaje('Hola JS');

// ---

// function sumar(num1, num2) {
//     console.log(num1, num2);
//     if (typeof num1 == 'number' && parseInt(num2)) {
//         let resultado = num1 + num2;
//         console.log('La suma es: ' + resultado);
//     }
// }

// sumar(2, 3);
// sumar(6, 7);
// sumar(4);
// sumar('a', 'b');
// sumar();

// ---

// let nombre = 'Maria';

// function saludar(nombre) {
//     // let nombre = 'Juan';
//     console.log('Hola ' + nombre);
// }

// saludar('Juan');
// saludar('Maria');

// console.log(nombre);

// ---

// let num = 1;

// if (true) {
//     let num = 2;
//     console.log(num);
// }

// console.log(num);

// ---

// function saludar() {
//     console.log('Hola');
// }

// saludar();
// saludar();
// saludar();
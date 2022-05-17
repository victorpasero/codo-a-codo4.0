let num1 = prompt("Ingrese un número:");
let num2 = prompt("Ingrese otro número:");
num1 = Number(num1);
num2 = Number(num2);
let suma = num1 + num2;

alert("La suma de sus dos números es de: " + suma);

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    console.log(num2 + " es mayor que " + num1);
} else {
    console.log("Ambos números son iguales");
}

const valorCorrecto = 1983;
let num3 = '';
do {
    num3 = prompt("Adivine en que año nací:");
    if (num3 != valorCorrecto) {
        alert("Pruebe otra vez.")
    }
} while (num3 != valorCorrecto);

alert("El año " + num3 + " es correcto!")

let i = '';
for (let i = 1; i <= 20; i++) {
    let resto = (i % 3);
    if (resto == 0) {
    console.log(i)
    }
}

let j = ''
for (let j = 1; j <=20; j++) {
    console.log(j);
    if (confirm("Desea ver el siguiente número?") == false) {
        break;
    }
}
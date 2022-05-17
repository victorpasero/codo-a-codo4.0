const funcion1 = () => {
    let numero = 1;

    const funcion2 = () => {
        console.log('Numero: ' + numero);
    }

    return funcion2;
}

const clousure = funcion1();

clousure();

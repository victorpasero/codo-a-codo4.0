// const auto = new Object();

const audi = {
    velocidad: 0,
    marca: 'Audi',
    modelo: 'TT',
    color: 'Azul',
    year: 2022,
    automatico: true,
    acelerar: function(velocidad) {
        this.velocidad = velocidad;
    }, 
    detalle() {
        console.log('Marca: ' + this.marca);
    }
};

const ford = {
    velocidad: 0,
    marca: 'Ford',
    modelo: 'TT',
    color: 'Azul',
    year: 2021,
    acelerar(velocidad) {
        this.velocidad = velocidad;
    }
};

// audi.acelerar(60);

// audi.year = 2021;
// audi.cambios = 5;

// for (propiedad in audi) {
//     // console.log(propiedad, audi[propiedad]);
//     // console.log(propiedad + ': ' + audi[propiedad]);
//     if (propiedad == 'marca') {
//         console.log(audi[propiedad]);
//     }

//     // 100.00 - 10000 : $ 100.00
// }

// console.log('Marca: ' + audi.marca + ', Color: ' + audi['color']);
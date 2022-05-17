class Auto {
    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
        this.ruedas = 4;
        this.velocidad = 0;
    }

    acelerar(velocidad) {
        this.velocidad = velocidad;
    }
}

const audi = new Auto('Audi', 'Rojo');
audi.acelerar(60);

const ford = new Auto('Ford', 'Gris');
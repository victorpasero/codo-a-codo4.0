const auto = {
    marca: 'Ford',
    modelo: 2010,
    puertas: 5,
    detalle() {
        console.log('La marca del auto es ' + this.marca + ', es modelo ' + this.modelo + ' y tiene ' + this.puertas + ' puertas.')
    }
}

const usuarios = [
    victor = {
        ID: 1,
        email: 'victorpasero@gmail.com',
        password: '12345'
    },
    lorena = {
        ID: 2,
        email: 'lorena@hotmail.com',
        password: '45678'
    },
    thiago = {
        ID: 3,
        email: 'thiago@yahoo.com',
        password: '13579'
    }
]

for (nombre of usuarios) {
    console.log('ID= ' + nombre.ID + ', email= ' + nombre.email);
}

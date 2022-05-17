const nombres = ['Juan', 'María', 'Pedro', 'Iván'];

const acentos = nombres.filter( function(nombre) {
    if (nombre.includes('í') || nombre.includes('á')) {
        return true;
    }

    return false;
} );

console.log(acentos);

document.write('<p class="red" style="color: red;">' + acentos[0] + '</p>');
document.write(acentos[1] + '<br>');

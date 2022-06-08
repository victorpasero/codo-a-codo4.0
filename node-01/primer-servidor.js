const http = require('http');

const servidor = http.createServer((request, response) => {
    // console.log(request.url, request.method);

    if (request.url.includes('/contacto')) {
        response.end('Contacto');
    } else {
        response.end('Hola Node.js');
    }
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`http://localhost:${puerto}`);
});

const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, html) => {
        // console.log(err);

        if (err) {
            res.writeHead(500);
            console.log(err.message);
            res.write('No se pudo leer el archivo.');
            res.write('Intente mas tarde.');
        } else {
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // res.write(html);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({email: 'x@x.com', name: 'Juan'}))
        }

        res.end();
    });
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`http://localhost:${puerto}`);
});

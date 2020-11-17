const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const salida = {
            nombre: 'MIA KHALIFA',
            edad: 27,
            cualidad_1: 'Chupa rico la verga',
            cualidad_2: 'Culea super rico',
            cualidad_3: 'Tetas deliciosas',
            url: req.url
        };

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');
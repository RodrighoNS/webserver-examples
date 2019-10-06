const http = require('http');

// Crear server
http.createServer((req, resp)=>{

    resp.writeHead(200,{'Content-Type':'application/json'})

    let out = {
        name: 'rnavarro',
        edad: 32,
        url: req.url
    }

    resp.write(JSON.stringify(out));

    // resp.write('Hello world ! ');
    resp.end();
})
.listen(8080);;

console.log('Listening in the 8080 port =)');
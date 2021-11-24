const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //header status code
    let name = 'maaike';
    res.write(`Finally, hello ${name}`); //body
    res.end();
}).listen(5000); //listen to port 8080

console.log('Listening on port 8080...');


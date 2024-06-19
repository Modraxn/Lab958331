let http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text2htnl'});
    res.end('Hello World!');
}).listen(9000);
var http = require('http');

http.createServer(function (req, res) {
        res.write('Self Bot Active')
        res.end();
}).listen(8080);
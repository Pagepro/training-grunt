var http = require('http');
http.createServer(function (req, res) {
    console.log(req);
    res.write('hello!');
    res.end();
}).listen(5000, "127.0.0.1");
var http = require('http');
var app = require('./backend/app');
var port = process.env.POR || 3000;

app.set('port', port);
var server = http.createServer(app);

server.listen(port);

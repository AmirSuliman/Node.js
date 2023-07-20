const http = require('http');
const routes = require('./routes_file_2');

const server = http.createServer(routes.handler);

server.listen(8000);
const fs = require('fs');

const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.write('<html><head><title>response from node.js</title></head><body><h1>You got this response from the node.js server</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit" value="send">Send</button></form></body></html>');
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    request.on('data', chunck => {
      body.push(chunck);
    });

    return request.on('end',() => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('./message.txt', message, (err) => {
        response.statusCode = 302
        response.setHeader('Location', '/');
        return response.end();
      });
    });
  }

  response.setHeader('Content-type','text/html');
  response.write('<h1>Hello from Node js.</h1>');
  response.end();
}

// module.exports = requestHandler;
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text.'
// }

// module.exports.handler = requestHandler;


exports.handler = requestHandler;
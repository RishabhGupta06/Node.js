const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Request hit the server!");
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

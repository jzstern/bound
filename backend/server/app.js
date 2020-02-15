const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// infura data
const infuraId = 'e6f6aa0719e64da1bc6d8be352171860'
const infuraSecret = '3950f955052d425abf9327d3d298a91c'
const infuraTestnetEndpoint = 'rinkeby.infura.io/v3/e6f6aa0719e64da1bc6d8be352171860'
//const infuraMainnetEndpoint = 'mainnet.infura.io/v3/e6f6aa0719e64da1bc6d8be352171860'
const githubAccessToken = 'b1fecd841b0240b90a41450f9b207ee9b66f0b1c'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
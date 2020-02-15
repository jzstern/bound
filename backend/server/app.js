const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const hostname = '127.0.0.1';
const port = 3001;

// infura data
const infuraId = 'e6f6aa0719e64da1bc6d8be352171860'
const infuraSecret = '3950f955052d425abf9327d3d298a91c'
const infuraTestnetEndpoint = 'rinkeby.infura.io/v3/e6f6aa0719e64da1bc6d8be352171860'
//const infuraMainnetEndpoint = 'mainnet.infura.io/v3/e6f6aa0719e64da1bc6d8be352171860'
const githubAccessToken = 'b1fecd841b0240b90a41450f9b207ee9b66f0b1c'
const ethLoggerAccessToken = '0d744933c6b0181de53a25009e59644c0e33f72d'

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send("Hello");
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
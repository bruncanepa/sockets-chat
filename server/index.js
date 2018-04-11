const express = require('express');

const socketPort = 3001;
const apiPort = 3002;

const createSocketServer = () => {
  const http = require('http').Server(express());
  const {onSocketConnection} = require('./src/utils/serverSocket');

  onSocketConnection(http);

  http.listen(socketPort, () => {
    console.log('listening on *:' + socketPort);
  });
};

const createAPIServer = () => {
  const methodOverride = require('method-override');
  const bodyParser = require('body-parser');
  const compression = require('compression');
  const services = require('./src/services');

  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(compression());
  app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  Object
    .keys(services)
    .forEach(route => {
      const router = express.Router();
      app.use(`/api/${route}`, services[route](router));
    });

  app.listen(apiPort, () => {
    console.log('listening on *:' + apiPort);
  });
};

createSocketServer();
createAPIServer();
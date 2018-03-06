const app = require('express')();
const http = require('http').Server(app);

const {onSocketConnection} = require('./src/utils/serverSocket');
const port = process.env.PORT || 3001;

onSocketConnection(http);

http.listen(port, () => {
  console.log('listening on *:' + port);
});
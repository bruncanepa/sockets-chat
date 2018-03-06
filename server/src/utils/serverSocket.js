const socketio = require('socket.io');

const listen = ({socket, event, callback}) => {
  socket.on(event, (message) => {
    callback(message);
  });
};

const socketEmit = ({socket, event, message}) => {
  socket.broadcast.emit(event, message);
};

const onSocketConnection = (app) => {
  const io = socketio(app);
  io.on('connection', (socket) => {
    listen({
      socket,
      event: events.SEND_CHAT_MESSAGE,
      callback: (message) => socketEmit({socket, event: events.RECEIVE_CHAT_MESSAGE, message})
    });
  });
};

const events = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECEIVE_CHAT_MESSAGE: 'RECEIVE_CHAT_MESSAGE'
};

module.exports = {
  onSocketConnection
};
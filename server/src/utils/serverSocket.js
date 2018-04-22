const socketio = require('socket.io');

const listen = ({socket, event, callback}) => {
  socket.on(event, (message, clientCallback) => {
    clientCallback && clientCallback(message);
    callback(message);
  });
};

const socketBroadcast = ({socket, event, message}) => {
  socket.broadcast.emit(event, message);
};

const onSocketConnection = (app) => {
  const io = socketio(app);
  io.on('connection', (socket) => {
    listen({
      socket,
      event: events.SEND_CHAT_MESSAGE,
      callback: (message) => socketBroadcast({socket, event: events.RECEIVE_CHAT_MESSAGE, message})
    });
  });
};

const events = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECEIVE_CHAT_MESSAGE: 'RECEIVE_CHAT_MESSAGE',
  CHAT_MESSAGE_DELIVERED: 'CHAT_MESSAGE_DELIVERED'
};

module.exports = {
  onSocketConnection
};
import io from 'socket.io-client';

import {SERVER_SOCKET_URL} from '../config';

const sockets = {};

export const connect = function (url = SERVER_SOCKET_URL) {
  const socket = io.connect(SERVER_SOCKET_URL);
  sockets[url] = socket;
};

export const listen = function ({event, callback, url = SERVER_SOCKET_URL}) {
  const socket = sockets[url];
  socket
    .on(event, function (data) {
      callback(data);
    });
};

export const emit = function ({event, data, url = SERVER_SOCKET_URL}) {
  const socket = sockets[url];  
  socket.emit(event, data);
};

export const events = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECEIVE_CHAT_MESSAGE: 'RECEIVE_CHAT_MESSAGE',
};

connect();
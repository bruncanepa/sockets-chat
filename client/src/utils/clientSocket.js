import io from 'socket.io-client';

import {SOCKET_SERVER_URL} from '../config';

const sockets = {};

export const connect = function (url = SOCKET_SERVER_URL) {
  const socket = io.connect(SOCKET_SERVER_URL);
  sockets[url] = socket;
};

export const listen = function ({event, callback, url = SOCKET_SERVER_URL}) {
  const socket = sockets[url];
  socket
    .on(event, function (data) {
      callback(data);
    });
};

export const emit = function ({event, data, url = SOCKET_SERVER_URL}) {
  const socket = sockets[url];  
  return new Promise(resolve => {
      socket.emit(event, data, function(response) {
        resolve(response);
      });
  });
};

export const events = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECEIVE_CHAT_MESSAGE: 'RECEIVE_CHAT_MESSAGE',
};

connect();
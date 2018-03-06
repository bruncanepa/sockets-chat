import {emit, listen, events} from '../utils/clientSocket';

export const sendMessage = function (message) {
  emit({event: events.SEND_CHAT_MESSAGE, data: message});
};

export const receiveMessage = function (callback) {
  listen({event: events.RECEIVE_CHAT_MESSAGE, callback});
};
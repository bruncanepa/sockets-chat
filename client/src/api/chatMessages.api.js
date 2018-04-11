import {emit, listen, events} from '../utils/clientSocket';
import {createChatMessage, receiveChatMessage} from '../state';

export const sendMessage = function (messageData) {
  const message = createChatMessage(messageData);
  emit({event: events.SEND_CHAT_MESSAGE, data: message});
};

export const receiveMessage = function (callback) {
  listen({
    event: events.RECEIVE_CHAT_MESSAGE,
    callback: (message) => {
      receiveChatMessage(message);
      callback(message);
    }
  });
};
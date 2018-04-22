import {emit, listen, events} from '../utils/clientSocket';
import {createChatMessage, receiveChatMessage, changeChatMessageState} from '../state';

export const sendMessage = async function (messageData) {
  const message = createChatMessage(messageData);
  await emit({event: events.SEND_CHAT_MESSAGE, data: message});
  changeChatMessageState({...message});
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
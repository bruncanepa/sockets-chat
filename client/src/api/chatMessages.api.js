import {emit, listen, events} from '../utils/clientSocket';
import {createChatMessage, receiveChatMessage, changeChatMessageState} from '../state';
import delay from '../utils/delay';

export const sendMessage = async function (messageData) {
  const message = createChatMessage(messageData);
  await delay();
  await emit({event: events.SEND_CHAT_MESSAGE, data: message});
  changeChatMessageState({...message});
};

export const receiveMessage = function (callback) {
  listen({
    event: events.RECEIVE_CHAT_MESSAGE,
    callback: async function (message) {
      await delay();
      receiveChatMessage(message);
      callback(message);
    }
  });
};
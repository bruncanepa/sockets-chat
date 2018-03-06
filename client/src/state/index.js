import uuid from '../utils/uuid';
import Chat from './Chat';

const chats = {};

const userId = uuid();

export const createChat = function () {
  const chat = new Chat();
  chats[chat.chatId] = chat;
  initChat(chat.chatId)
  return chat;
};

export const createChatMessage = function ({chatId, text}) {
  const chat = chats[chatId];
  return chat.createMessage({text, userId});
};

export const receiveChatMessage = function ({chatId, fromId, text}) {
  const chat = chats[chatId];
  return chat.createMessage({text, chatId, userId: fromId});
};

const initChat = function (chatId) {
  createChatMessage({chatId, text: 'message 1'});
  createChatMessage({chatId, text: 'message 2'});
};
import uuid from '../utils/uuid';
import Chat from './Chat';

const chats = {};

const userId = 'A'//uuid();

export const createChat = function () {
  const chat = new Chat({userAId: userId, userBId: 'B'});
  chats[chat.chatId] = chat;
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
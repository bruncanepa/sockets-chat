import uuid from '../utils/uuid';
import Chat from './Chat';

const chats = {};

const userA = {
  userId: 'A',
  name: 'User A'
};
const userB = {
  userId: 'B',
  name: 'User B'
};

export const createChat = function () {
  const chat = new Chat({userA, userB});
  chats[chat.chatId] = chat;
  initChat(chat.chatId)
  return chat;
};

export const createChatMessage = function ({chatId, text}) {
  const chat = chats[chatId];
  return chat.createMessage({text, userId: userA.userId, isMine: true});
};

export const receiveChatMessage = function ({chatId, fromId, text}) {
  const chat = chats[chatId];
  return chat.createMessage({text, userId: fromId, isMine: false});
};

export const changeChatMessageState = function ({chatId, messageId}) {
  const chat = chats[chatId];
  chat.changeMessageState({messageId});
};

const initChat = function (chatId) {
  const firstMessage = createChatMessage({chatId, text: 'message 1'});
  receiveChatMessage({chatId, text: 'message 2', fromId: 'B'});
  changeChatMessageState({chatId, messageId: firstMessage.messageId})
};
import Chat from './Chat';

const chats = {};

export const createChat = function () {
  const chat = new Chat();
  chats[chat.chatId] = chat;
  initChat(chat.chatId)
  return chat;
};

export const createChatMessage = function ({chatId, text}) {
  const chat = chats[chatId];
  return chat.createMessage({text});
};

const initChat = function (chatId) {
  createChatMessage({chatId, text: 'message 1'});
  createChatMessage({chatId, text: 'message 2'});
  createChatMessage({chatId, text: 'message 3'});
  createChatMessage({chatId, text: 'message 4'});
  createChatMessage({chatId, text: 'message 5'});
  createChatMessage({chatId, text: 'message 6'});
  setTimeout(function () {
    createChatMessage({chatId, text: 'message 7'});
  }, 2000)
};
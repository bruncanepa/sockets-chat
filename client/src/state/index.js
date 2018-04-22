import uuid from '../utils/uuid';
import Chat from './Chat';
import {events, publish} from '../utils/publishSubscribe';

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
  publish(events.CHAG_MESSAGE_SENT, messageId);
};

export const setChatUserName = function ({chatId, userName}) {
  const chat = chats[chatId];
  chat.setName(userName);
};

const initChat = function (chatId) {
  const firstMessage = createChatMessage({chatId, text: 'message 1'});
  receiveChatMessage({chatId, text: 'message 2', fromId: 'B'});
  changeChatMessageState({chatId, messageId: firstMessage.messageId})
  createChatMessage({
    chatId,
    text: 'aasd asdasda asdfasdfa sdfasdhkfasdhjf asdkjfhasdkfashkjdf asdkfjhasd faksdfa sd' +
        'kfahsdf askdjfh askdfha sdjfha skdfhas'
  });
  createChatMessage({chatId, text: 'message 1'});
  createChatMessage({chatId, text: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasfd'});
  createChatMessage({chatId, text: 'aasd asdda asdfa sdfasdhk asdk asdkfj faks sdkf ask askdfha sdjfha skdfhas'});
};
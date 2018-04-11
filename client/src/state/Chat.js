import ChatMessage from './ChatMessage';
import User from './User';
import uuid from '../utils/uuid';

function Chat({userA, userB}) {
  const self = this;
  self.chatId = '1'//uuid('chat');
  self.messages = {};
  self.messagesIds = []; // only messagesIds will be inmutable
  self.name = `${self.chatId}`;
  self.userA = new User(userA);
  self.userB = new User(userB);
};

Chat.prototype.createMessage = function ({text, userId, isMine}) {
  const {userA, userB} = this;

  const message = new ChatMessage({
    chatId: this.chatId,
    fromId: userId,
    toId: userId == userA.userId
      ? userB.userId
      : userA.userId,
    text,
    isMine
  });

  this.messages[message.messageId] = message;
  this.messagesIds = [...this.messagesIds, message.messageId];
  return message;
};

Chat.prototype.changeMessageState = function ({messageId}) {
  const message = this.messages[messageId];
  this.messages[messageId] = {...message, state: message.nextState()};
};

Chat.prototype.setName = function (name) {
  this.name = name;
};

export default Chat;
import ChatMessage from './ChatMessage';

let chatId = 0;

function Chat({userAId, userBId}) {
  const self = this;
  self.messageId = 0;
  self.chatId = ++chatId;
  self.messages = [];
  self.name = `User Number${chatId}`;
  self.userAId = userAId;
  self.userBId = userBId;
};

Chat.prototype.createMessage = function ({text, userId}) {
  const message = new ChatMessage({
    messageId: ++this.messageId,
    text,
    fromId: userId,
    toId: userId == this.userAId
      ? this.userAId
      : this.userBId,
    chatId: this.chatId
  });
  this.messages = [
    ...this.messages,
    message
  ];
  return message;
};

export default Chat;
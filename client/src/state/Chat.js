import ChatMessage from './ChatMessage';

let chatId = 0;

function Chat() {
  const self = this;
  self.messageId = 0;
  self.chatId = ++chatId;
  self.messages = [];
  self.name = `User Number${chatId}`;
};

Chat.prototype.createMessage = function ({text, userId}) {
  const message = new ChatMessage({
    messageId: ++this.messageId,
    text,
    fromId: userId,
    chatId: this.chatId
  });
  this.messages = [
    ...this.messages,
    message
  ];
  return message;
};

export default Chat;
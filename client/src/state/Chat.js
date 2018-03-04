import ChatMessage from './ChatMessage';

function Chat({chatId}) {
  this.messageId = 0;
  this.chatId = chatId;
  this.messages = [];
  this.name = `User Number${chatId}`;
};

Chat.prototype.createMessage = function ({text}) {
  const message = new ChatMessage({messageId: ++this.messageId, text});
  this.messages = [...this.messages, message];
};

export default Chat;
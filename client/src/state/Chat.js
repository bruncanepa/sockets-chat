import {sendMessage} from '../api/chatMessage.api';
import ChatMessage from './ChatMessage';

let chatId = 0;

function Chat() {
  const self = this;
  self.messageId = 0;
  self.chatId = ++chatId;
  self.messages = [];
  self.name = `User Number${chatId}`;
};

Chat.prototype.createMessage = function ({text}) {
  const message = new ChatMessage({messageId: ++this.messageId, text});
  this.messages = [...this.messages, message]; // change pointer
  sendMessage(message);
  return message;
};

export default Chat;
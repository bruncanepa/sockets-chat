import {events, publish} from '../utils/publishSubscribe';
import ChatMessage from './ChatMessage';

let chatId = 0;

function Chat() {
  this.messageId = 0;
  this.chatId = ++chatId;
  this.messages = [];
  this.name = `User Number${chatId}`;
};

Chat.prototype.createMessage = function ({text}) {
  const message = new ChatMessage({messageId: ++this.messageId, text});
  this.messages = [...this.messages, message];
  publish(events.CREATE_MESSAGE);
};

export default Chat;
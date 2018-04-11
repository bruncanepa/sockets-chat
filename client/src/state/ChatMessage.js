import {DELIVERED_STATE, PENDING_STATE, SENT_STATE} from './ChatMessageState';
import uuid from '../utils/uuid';

function ChatMessage({text, fromId, chatId, isMine, toId}) {
  const self = this;
  self.messageId = uuid('message');
  self.chatId = chatId;
  self.fromId = fromId;
  self.toId = toId;
  self.text = text;
  self.state = PENDING_STATE;
  self.createdAt = new Date().getTime();
  self.isMine = isMine;
};

ChatMessage.prototype.nextState = function () {
  let newState = this.state;
  switch (this.state) {
    case PENDING_STATE:
      newState = SENT_STATE;
      break;
    case SENT_STATE:
      newState = DELIVERED_STATE;
      break;
    default:
      break;
  }
  return newState;
};

export default ChatMessage;
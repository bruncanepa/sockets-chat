import {DELIVERED_STATE, PENDING_STATE, SENT_STATE} from './ChatMessageState';

function ChatMessage({messageId, text, fromId, toId, chatId}) {
  const self = this;
  self.messageId = messageId;
  self.text = text;
  self.createdAt = new Date().getMilliseconds();
  self.fromId = fromId;
  self.toId = toId;
  self.chatId = chatId;
  self.state = PENDING_STATE;
};

ChatMessage.prototype.nextState = function () {
  switch (this.state) {
    case PENDING_STATE:
      this.state = SENT_STATE;
    case SENT_STATE:
      this.state = DELIVERED_STATE;
  }
  return this.state;
};

export default ChatMessage;
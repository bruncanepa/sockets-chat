function ChatMessage({messageId, text}) {
  this.messageId = messageId;
  this.text = text;
  this.createdAt = new Date().getMilliseconds();
  this.fromId = 0;
  this.toId = 0;
};

export default ChatMessage;
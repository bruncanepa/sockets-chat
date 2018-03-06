function ChatMessage({messageId, text}) {
  const self = this;
  self.messageId = messageId;
  self.text = text;
  self.createdAt = new Date().getMilliseconds();
  self.fromId = 1;
  self.toId = 2;
};

export default ChatMessage;
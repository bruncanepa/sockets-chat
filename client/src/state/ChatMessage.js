function ChatMessage({messageId, text, fromId, chatId}) {
  const self = this;
  self.messageId = messageId;
  self.text = text;
  self.createdAt = new Date().getMilliseconds();
  self.fromId = fromId;
  self.chatId = chatId;
};

export default ChatMessage;
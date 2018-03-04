import Chat from './Chat';

export const chat = new Chat({chatId: 1});

chat.createMessage({text: 'message 1'});
chat.createMessage({text: 'message 2'});
chat.createMessage({text: 'message 3'});
chat.createMessage({text: 'message 4'});
chat.createMessage({text: 'message 5'});
chat.createMessage({text: 'message 6'});

setTimeout(function () {
  chat.createMessage({text: 'message 7'});
}, 2000)
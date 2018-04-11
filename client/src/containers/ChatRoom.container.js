import React from 'react';

import {receiveMessage, sendMessage} from '../api/chatMessages.api';
import {getChatUserName} from '../api/users.api';
import {createChat} from '../state';

const container = function (T) {
  return class ChatRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chat: createChat()
      };
    }

    async componentDidMount() {
      receiveMessage(this.onReceiveMessage);
      await getChatUserName(this.state.chat.chatId, this.forceUpdate);
      this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

    onReceiveMessage = (message) => {
      this.forceUpdate();
    }

    onSendMessage = (messageData) => {
      sendMessage(messageData);
      this.forceUpdate();
    }

    render() {
      return <T {...this.state} onSendMessage={this.onSendMessage}/>
    }
  }
};

export default container;
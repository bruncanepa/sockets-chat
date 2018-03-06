import React from 'react';

import {receiveMessage} from '../api/chatMessage.api';
import {createChat} from '../state';

const container = function (T) {
  return class ChatRoom extends React.Component {
    that = this;

    constructor(props) {
      super(props);
      this.state = {
        chat: createChat()
      };
    }

    componentDidMount() {
      receiveMessage(this.onReceiveMessage);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

    onReceiveMessage = (message) => {
      alert(JSON.stringify(message));
      this.forceUpdate();
    }

    onSendMessage = (message) => {
      this.forceUpdate();
    }

    render() {
      return <T {...this.state} onSendMessage={this.onSendMessage}/>
    }
  }
};

export default container;
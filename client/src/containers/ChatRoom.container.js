import React from 'react';

import {createChat} from '../state';
import {events, subscribe} from '../utils/publishSubscribe';

const container = function (T) {
  return class ChatRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chat: createChat()
      };
    }

    componentDidMount() {
      this.unsubscribe = subscribe(events.CREATE_MESSAGE, this.onCreateMessage);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    onCreateMessage = () => {
      this.forceUpdate();
    }

    render() {
      return <T {...this.state}/>
    }
  }
};

export default container;
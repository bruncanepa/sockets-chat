import React from 'react';

import {chat} from '../state';

const container = function (T) {
  return class ChatRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chat: chat
      };
    }

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    componentWillReceiveProps(nextProps) {
      console.log(JSON.stringify(nextProps))
    }

    render() {
      return (<T {...this.state}/>)
    }
  }
};

export default container;
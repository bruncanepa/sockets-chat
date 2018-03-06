import React from 'react';
import PropTypes from 'prop-types';

import {createChatMessage} from '../state';

const container = function (T) {
  return class MessageTextInput extends React.Component {
    static propTypes = {
      chatId: PropTypes.number.isRequired,
      onSendMessage: PropTypes.func.isRequired
    }

    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
    }

    shouldComponentUpdate(nextProps, nextState) {
      return this.state.text != nextState.text;
    }

    onPress = () => {
      const message = createChatMessage({chatId: this.props.chatId, text: this.state.text});
      this.props.onSendMessage(message);
      this.setState({text: ''});
    }

    onTextChange = (text) => {
      this.setState({text});
    }

    render() {
      return <T
        {...this.props}
        {...this.state}
        onPress={this.onPress}
        onTextChange={this.onTextChange}/>
    }
  }
};

export default container;
import React from 'react';
import PropTypes from 'prop-types';

import {createChatMessage} from '../state';

const container = function (T) {
  return class MessageTextInput extends React.PureComponent {
    static propTypes = {
      chatId: PropTypes.number.isRequired
    }

    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
    }

    onPress = () => {
      createChatMessage({chatId: this.props.chatId, text: this.state.text});
      this.setState({text: ''});
    }

    onTextChange = (text) => {
      text != this.state.text && this.setState({text});
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
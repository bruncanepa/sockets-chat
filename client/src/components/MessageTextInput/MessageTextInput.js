import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/MessageTextInput.container';
import {chatId as chatIdPropType} from '../../propTypes/chat.propType';
import sendButtonImage from '../../assets/send-message-button-white.png';

const ENTER_CHAR_CODE = 13;
const KEY_PRESS_EVENT = 'keypress';

class MessageTextInput extends React.Component {
  static propTypes = {
    chatId : chatIdPropType,
    onSend : PropTypes.func.isRequired,
    onTextChange : PropTypes.func.isRequired,
    text: PropTypes.string
  }

  componentDidMount() {
    window.addEventListener(KEY_PRESS_EVENT, (event) => {
      event.charCode == ENTER_CHAR_CODE && this.onSend(event);
    });
  }

  componentWillUnmount(){
    window.removeEventListener(KEY_PRESS_EVENT);
  }

  onSend = (event) => {
    event.preventDefault();
    const {text} = this.props;
    if (text && text.trim()) {
      this.props.onSend();
      this.input.value = '';
    }
    this.input.focus();
  }

  onTextChange = (event) => {
    this.props.onTextChange(event.target.value);
  }

  innerRef = (ref) => {
    this.input = ref;
  }

  render() {
    const {chatId, onSend, onTextChange} = this.props;
    return (
      <div style={styles.content}>
        <input style={styles.input} onChange={this.onTextChange} ref={this.innerRef}  />
        <button style={styles.button} onClick={this.onSend} onKeyPress={this.onKeyPress}>
          <img src={sendButtonImage} style={styles.image} />
        </button>
      </div>
    ); 
  }
}

export default container(MessageTextInput);
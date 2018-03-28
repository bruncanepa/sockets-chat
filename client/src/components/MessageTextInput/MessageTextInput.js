import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/MessageTextInput.container';
import {chatId as chatIdPropType} from '../../propTypes/chat.propType';

class MessageTextInput extends React.Component {
  static propTypes = {
    chatId : chatIdPropType,
    onPress : PropTypes.func.isRequired,
    onTextChange : PropTypes.func.isRequired,
    text: PropTypes.string
  }

  onPress = (event) => {
    event.preventDefault();
    const {text} = this.props;
    if (text && text.trim()) {
      this.props.onPress();
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
    const {chatId, onPress, onTextChange} = this.props;
    return (
      <div style={styles.content}>
        <input style={styles.input} onChange={this.onTextChange} ref={this.innerRef} />
        <button style={styles.button} onClick={this.onPress}>
          >
        </button>
      </div>
    ); 
  }
}

export default container(MessageTextInput);
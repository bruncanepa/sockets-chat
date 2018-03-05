import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import container from '../../containers/MessageTextInput.container';

class MessageTextInput extends React.Component {
  static propTypes = {
    chatId : PropTypes.number.isRequired,
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
      this.input.focus();
    }
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
      <div className="MessageTextInput-content">
        <input className="MessageTextInput-input" onChange={this.onTextChange} ref={this.innerRef} />
        <button className="MessageTextInput-button" onClick={this.onPress}>
          >
        </button>
      </div>
    ); 
  }
}

export default container(MessageTextInput);
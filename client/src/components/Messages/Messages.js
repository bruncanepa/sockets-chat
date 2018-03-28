import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/Messages.container';
import Message from '../Message';
import {chatMessagePropType} from '../../propTypes';

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes
      .shape(chatMessagePropType)
      .isRequired,
    messagesIds: PropTypes
      .arrayOf(PropTypes.string)
      .isRequired
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const {content} = this.refs;
    content.scrollTop = content.scrollHeight;
  }

  render() {
    const {messages, messagesIds} = this.props;
    return (
      <div style={styles.content} ref={'content'}>
        {messagesIds
          .map(function (messageId) {
            const message = messages[messageId];
            console.log(JSON.stringify(message))
            return <Message key={messageId} message={message}/>
          })}
      </div>
    )
  }
}

export default container(Messages);
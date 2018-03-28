import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/ChatRoom.container';
import Header from '../Header';
import Messages from '../Messages';
import MessageTextInput from '../MessageTextInput';
import {chatPropType} from '../../propTypes';

const ChatRoom = function ({chat, onSendMessage}) {
  return (
    <div styles={styles.content}>
      <Header name={chat.name}/>
      <Messages {...chat}/>
      <MessageTextInput chatId={chat.chatId} onSendMessage={onSendMessage}/>
    </div>
  )
};

ChatRoom.propTypes = {
  chat: PropTypes
    .shape(chatPropType)
    .isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default container(ChatRoom);
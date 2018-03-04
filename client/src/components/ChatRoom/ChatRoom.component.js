import React from 'react';
import Styled from 'styled-components';

import container from '../../containers/ChatRoom.container';
import Header from '../Header';
import Messages from '../Messages';
import MessageTextInput from '../MessageTextInput';

const ChatRoom = function ({chat}) {
  return (
    <Room>
      <Header chat={chat}/>
      <Messages messages={chat.messages}/>
      <MessageTextInput chatId={chat.chatId}/>
    </Room>
  )
};

const Room = Styled.div`
  width: 100%;
  heigth: 100%;
`

export default container(ChatRoom);
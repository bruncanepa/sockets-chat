import React from 'react';
import Styled from 'styled-components';

import container from '../../containers/Messages.container';
import Message from '../Message';

const Messages = function ({messages}) {
  return (
    <Content>
      {messages.map(function (message){
        return <Message key={message.messageId} {...message} />
      })}
    </Content>
  )
};

const Content = Styled.div`
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  
`

export default container(Messages);
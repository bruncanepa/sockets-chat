import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import container from '../../containers/Messages.container';
import Message from '../Message';
import {chatMessagePropType} from '../../propTypes';

const Messages = function ({messages}) {
  return (
    <div className="Messages-content">
      {messages.map(function (message){
        return <Message key={message.messageId} {...message} />
      })}
    </div>
  )
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(chatMessagePropType).isRequired)
};

export default container(Messages);
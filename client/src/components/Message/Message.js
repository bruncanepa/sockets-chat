import React from 'react';

import './styles.css';
import container from '../../containers/Message.container';
import {chatMessagePropType} from '../../propTypes';

const Message = function ({text, fromId}) {
  return (
    <div className="Message-content">
      <span className="Message-span">
        {`${fromId.split('-')[4]}: ${text}`}
      </span>
    </div>
  )
};

Message.propTypes = {
  ...chatMessagePropType
};

export default container(Message);
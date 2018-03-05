import React from 'react';

import './styles.css';
import container from '../../containers/Message.container';
import {chatMessagePropType} from '../../propTypes';

const Message = function ({text}) {
  return (
    <div className="Message-content">
      <span className="Message-span">
        {text}
      </span>
    </div>
  )
};

Message.propTypes = {
  ...chatMessagePropType
};

export default container(Message);
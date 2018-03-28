import React from 'react';

import styles from './styles';

import container from '../../containers/Message.container';
import {chatMessagePropType} from '../../propTypes';

const Message = function ({text, fromId}) {
  return (
    <div style={styles.content}>
      <span style={styles.span}>
        {`${fromId}: ${text}`}
      </span>
    </div>
  )
};

Message.propTypes = {
  ...chatMessagePropType
};

export default container(Message);
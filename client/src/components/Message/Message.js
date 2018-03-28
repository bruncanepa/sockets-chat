import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/Message.container';
import {chatMessagePropType} from '../../propTypes';

const Message = function ({message}) {
  const {text, fromId, isMine} = message;
  return (
    <div style={isMine
      ? styles.contentRight
      : styles.contentLeft}>
      <span style={styles.span}>
        {text}
      </span>
    </div>
  )
};

Message.propTypes = {
  message: PropTypes
    .shape(chatMessagePropType)
    .isRequired
};

export default container(Message);
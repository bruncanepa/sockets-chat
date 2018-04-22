import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/Message.container';
import {chatMessagePropType} from '../../propTypes';
import {fromatTimeFromMilliseconds} from '../../utils/date';
import singleTickImage from '../../assets/single_tick.png';
import doubleTickImage from '../../assets/double_tick.png';

const Message = function ({message, wasSent, wasDelivered}) {
  const {text, fromId, isMine, state, createdAt} = message;
  const date = fromatTimeFromMilliseconds(createdAt);
  return (
    <div style={isMine
      ? styles.contentRight
      : styles.contentLeft}>
      <div style={styles.text}>
        {text}
      </div>
      <div style={styles.state}>
        {date}
        {(wasSent || wasDelivered) && 
          <img src={wasSent ? singleTickImage : doubleTickImage} style={styles.image}/>}
      </div>
    </div>
  )
};

Message.propTypes = {
  message: PropTypes
    .shape(chatMessagePropType)
    .isRequired,
  wasSent: PropTypes.bool.isRequired,
  wasDelivered: PropTypes.bool.isRequired
};

export default container(Message);
import React from 'react';
import PropTypes from 'prop-types';

import {chatMessagePropType} from '../propTypes';
import {SENT_STATE, DELIVERED_STATE} from '../state/ChatMessageState';

const container = function (T) {
  return class Message extends React.Component {
    static propTypes = {
      message: PropTypes
        .shape(chatMessagePropType)
        .isRequired
    }

    shouldComponentUpdate(nextProps) {
      return this.props.message != nextProps.message;
    }

    messageWasSent() {
      return this.props.message.state == SENT_STATE;
    }

    messageWasDelivered() {
      return this.props.message.state == DELIVERED_STATE;
    }

    render() {
      return <T
        {...this.props}
        wasSent={this.messageWasSent()}
        wasDelivered={this.messageWasDelivered()}/>
    }
  }
};

export default container;
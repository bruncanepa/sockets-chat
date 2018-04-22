import React from 'react';
import PropTypes from 'prop-types';

import {chatMessagePropType} from '../propTypes';
import {subscribe, events} from '../utils/publishSubscribe';

const container = function (T) {
  return class Messages extends React.PureComponent {
    static propTypes = {
      messages: PropTypes
        .shape(chatMessagePropType)
        .isRequired,
      messagesIds: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
    }

    componentWillMount() {
      this.unsubscribe = subscribe(events.CHAG_MESSAGE_SENT, this.onMessageStateChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    onMessageStateChange = () => {
      this.forceUpdate();
    }

    render() {
      return <T {...this.props}/>
    }
  }
};

export default container;
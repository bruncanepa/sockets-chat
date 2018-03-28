import React from 'react';
import PropTypes from 'prop-types';

import {chatMessagePropType} from '../propTypes';

const container = function (T) {
  return class Message extends React.Component {
    static propTypes = {
      message: PropTypes
        .shape(chatMessagePropType)
        .isRequired
    }

    shouldComponentUpdate(nextProps) {
      return false;
    }

    render() {
      return <T {...this.props}/>
    }
  }
};

export default container;
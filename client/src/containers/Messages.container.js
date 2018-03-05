import React from 'react';
import PropTypes from 'prop-types';

import {chatMessagePropType} from '../propTypes';

const container = function (T) {
  return class Messages extends React.PureComponent {
    static propTypes = {
      messages: PropTypes.arrayOf(PropTypes.shape(chatMessagePropType).isRequired)
    }

    render () {
      return (
        <T {...this.props}/>
      )
    }
  }
};

export default container;
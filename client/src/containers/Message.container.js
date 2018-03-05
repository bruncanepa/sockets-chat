import React from 'react';

import {chatMessagePropType} from '../propTypes';

const container = function (T) {
  return class Message extends React.Component {
    static propTypes = {
      ...chatMessagePropType
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
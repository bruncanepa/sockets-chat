import React from 'react';

const container = function (T) {
  return class Message extends React.Component {

    render () {
      return (
        <T {...this.props}/>
      )
    }
  }
};

export default container;
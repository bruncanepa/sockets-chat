import React from 'react';

const container = function (T) {
  return class MessageTextInput extends React.Component {

    render () {
      return (
        <T {...this.props}/>
      )
    }
  }
};

export default container;
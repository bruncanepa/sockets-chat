import React from 'react';

const container = function (T) {
  return class Root extends React.Component {

    shouldComponentUpdate() {
      return false;
    }

    render() {
      return <T {...this.props}/>
    }
  }
};

export default container;
import React from 'react';
import PropTypes from 'prop-types';

const container = function (T) {
  return class Header extends React.PureComponent {
    static propTypes = {
      name: PropTypes.string.isRequired
    }

    render() {
      return <T {...this.props}/>
    }
  }
};

export default container;
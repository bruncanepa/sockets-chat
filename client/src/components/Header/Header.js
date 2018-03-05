import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import container from '../../containers/Header.container';

const Header = function ({name}) {
  return (
    <div className="Header-content">
      {name}
    </div>
  )
};

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default container(Header);
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import container from '../../containers/Header.container';

const Header = function ({name}) {
  return (
    <div style={styles.content}>
      {name}
    </div>
  )
};

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default container(Header);
import PropTypes from 'prop-types';

import messagePropType from './chatMessage.propType';

const chat = {
  chatId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape(messagePropType)),
  name: PropTypes.string.isRequired
};

export default chat;
import PropTypes from 'prop-types';

import messagePropType from './chatMessage.propType';
import userPropType from './user.propType';

export const chatId = PropTypes.string.isRequired;

const chat = {
  chatId,
  messages: PropTypes
    .shape(messagePropType)
    .isRequired,
  messagesIds: PropTypes
    .arrayOf(PropTypes.string)
    .isRequired,
  name: PropTypes.string.isRequired,
  userA: PropTypes
    .shape(userPropType)
    .isRequired,
  userB: PropTypes
    .shape(userPropType)
    .isRequired
};

export default chat;
import PropTypes from 'prop-types';

const message = {
  messageId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  fromId: PropTypes.number.isRequired,
  toId: PropTypes.number.isRequired
};

export default message;
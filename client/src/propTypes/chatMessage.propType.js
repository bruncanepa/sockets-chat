import PropTypes from 'prop-types';

const message = {
  messageId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  fromId: PropTypes.string.isRequired,
};

export default message;
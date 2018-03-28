import PropTypes from 'prop-types';

const message = {
  messageId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  fromId: PropTypes.string.isRequired,
  toId: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired
};

export default message;
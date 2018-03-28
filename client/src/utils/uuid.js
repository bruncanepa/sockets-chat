import uuid from 'uuid/v4';

export default function (prefix = '') {
  const id = uuid().split('-').join(''); // replace('-', '') does not work
  return `${prefix}-${id}`;
};
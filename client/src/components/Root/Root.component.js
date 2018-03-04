import React from 'react';

import container from '../../containers/Root.container';
import ChatRoom from '../ChatRoom';

const Root = function () {
  return <ChatRoom/>;
};

export default container(Root);
import React from 'react';
import Styled from 'styled-components';

import container from '../../containers/Message.container';

const Message = function ({text}) {
  return (
    <Content>
      {text}
    </Content>
  )
};

const Content = Styled.label `
  width: 100%;
  color: black;
  background-color: blue;
  height: 40px;
  flex: 1;
`

export default container(Message);
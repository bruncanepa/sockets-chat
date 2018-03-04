import React from 'react';
import Styled from 'styled-components';

import container from '../../containers/MessageTextInput.container';

const MessageTextInput = function ({chatId}) {
  return (
    <Content>
      <Input/>
      <Button>
        >
      </Button>
    </Content>
  )
};

const Content = Styled.div `
  display: flexbox;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 40px;
  color: black;
  position: fixed;
  bottom: 0;
`;

const Input = Styled.input `
  border: solid black 1px;
  flex: 3;
  heigth: 100%;
`;

const Button = Styled.button `
  flex: 1;
  background-color: green;
  heigth: 100%;  
`;

export default container(MessageTextInput);
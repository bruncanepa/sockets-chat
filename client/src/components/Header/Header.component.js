import React from 'react';
import Styled from 'styled-components';

import container from '../../containers/Header.container';

const Header = function ({chat}) {
  return (
    <Head>
      {chat.name}
    </Head>
  )
};

const Head = Styled.header `
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
`

export default container(Header);
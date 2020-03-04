import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import SquareList from './SquareList';

const Header = styled.header`
  width: 100vw;
  min-width: 300px;
`;

export default (() => (
  <Header>
    <Title />
    <SquareList />
  </Header>
)) as React.FC;

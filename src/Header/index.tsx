import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import GridSquare from './GridSquare';

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  min-width: 300px;
`;

export default (() => (
  <Header>
    <Title />
    <GridSquare />
  </Header>
)) as React.FC;

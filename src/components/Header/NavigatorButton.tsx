import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export default (() => (
  <Wrapper>
    <svg height="88" width="88" viewBox="0 0 100 100">
      <polygon points="25,50 75,50 50,70" style={{ fill: '#404040' }} />
      <polygon points="25,40 75,40 50,60" style={{ fill: '#606060' }} />
      <polygon points="25,30 75,30 50,50" style={{ fill: '#808080' }} />
    </svg>
  </Wrapper>
)) as React.FC;

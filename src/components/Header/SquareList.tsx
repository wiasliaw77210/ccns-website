import React from 'react';
import styled from 'styled-components';
import Button from './NavigatorButton';

const Container = styled.div`
  width: 100%;
  height: 88px;
  padding: 0 10% 0 10%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Square = styled.div<{ css: React.CSSProperties }>`
  width: ${props => props.css.width};
  height: ${props => props.css.height};
  min-width: ${props => props.css.width};
  min-height: ${props => props.css.height};
  background-color: ${props => props.css.backgroundColor};
  margin: ${props =>
    `${props.css.margin} ${props.css.margin} ${props.css.margin} 0`};
  @media (max-width: 1200px) {
    background-color: #000;
  }
`;

export default (() => {
  return (
    <Container>
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Square
        css={{
          width: '48px',
          height: '48px',
          margin: '20px',
          backgroundColor: '#707070',
        }}
      />
      <Button />
    </Container>
  );
}) as React.FC;

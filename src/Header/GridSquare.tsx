import React from 'react';
import styled from 'styled-components';

const BottomDiv = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 10% 0 10%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Segment = styled.div<{ rwd?: boolean }>`
  display: flex;
  flex-direction: row;
`;

const Square = styled.div<{ css: React.CSSProperties }>`
  width: ${props => props.css.width};
  height: ${props => props.css.height};
  min-width: ${props => props.css.width};
  min-height: ${props => props.css.height};
  background-color: ${props => props.css.backgroundColor};
  margin: ${props => `${props.css.margin} ${props.css.margin} 0 0`};
`;

export default (() => {
  return (
    <BottomDiv>
      <Segment>
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
      </Segment>
      <Segment rwd>
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
      </Segment>
    </BottomDiv>
  );
}) as React.FC;

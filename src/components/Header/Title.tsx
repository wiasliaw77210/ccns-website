import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 10% 0 10%;
  background-image: linear-gradient(to left, #e3e3e3, #303030);
  position: relative;
  min-height: 300px;
  ::before {
    content: '';
    display: block;
    padding-top: 54.6%;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: inherit;
  position: absolute;
  bottom: 22px;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleSquare = styled.div<{ css: React.CSSProperties }>`
  width: ${props => props.css.width};
  height: ${props => props.css.height};
  min-width: ${props => props.css.width};
  min-height: ${props => props.css.height};
  background-color: ${props => props.css.backgroundColor};
  margin: ${props => `0 ${props.css.margin} 0 0`};
  @media (max-width: 600px) {
    margin: ${props => props.css.margin};
  }
`;

const TitleFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Text = styled.p`
  color: #f8f5f5;
  padding: 8px 0 0 0px;
  @media (max-width: 600px) {
    padding: 8px 30px 0 30px;
    text-align: center;
  }
`;

export default (() => {
  return (
    <Container>
      <Wrapper>
        <TitleSquare
          css={{
            width: '128px',
            height: '128px',
            margin: '24px',
            backgroundColor: '#fff',
          }}
        />
        <TitleFlexBox>
          <Text>CCNS 成大電腦網路愛好社</Text>
          <Text>
            Software Engineers, Developers, Hackers, Adventurers ... @NCKU
          </Text>
        </TitleFlexBox>
      </Wrapper>
    </Container>
  );
}) as React.FC;

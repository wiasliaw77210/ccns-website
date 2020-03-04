import React from 'react';
import styled from 'styled-components';

const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 320px;
  height: 512px;
  border: 1px solid #d0d0d0;
  padding: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 64px 0 64px 0;
`;

const Title = styled.p`
  font-family: SegoeUI;
  font-size: 24px;
  text-align: left;
  color: #d0d0d0;
  margin: 16px 0 16px 0;
`;

const Description = styled.span`
  font-family: SegoeUI;
  font-size: 18px;
  text-align: left;
  color: #d0d0d0;
  line-height: 1.33;
`;

interface IProps {
  image?: string;
  title?: string;
  description?: string;
}

export default ((props: IProps) => (
  <EventWrapper>
    <Container>
      <div
        style={{ width: '256px', height: '192px', backgroundColor: '#fff' }}
      />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  </EventWrapper>
)) as React.FC<IProps>;

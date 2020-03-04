import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  background-color: #000;
  padding: 0 10% 32px 10%;
`;

const H1 = styled.h1`
  color: #d0d0d0;
  font-size: 36px;
  padding: 32px 0 16px 0;
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid #707070;
`;

interface IProps {
  header: string;
}

export default ((props: React.PropsWithChildren<IProps>) => (
  <Container>
    <H1>{props.header}</H1>
    <Hr />
    {props.children}
    <Hr />
  </Container>
)) as React.FC<React.PropsWithChildren<IProps>>;

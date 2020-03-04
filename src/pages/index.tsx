import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Section from '../components/Section';
import Member from '../components/Member';
import Event from '../components/Event';

const Wrapper = styled.div<{ css?: React.CSSProperties }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const GridWrapper = styled.div<{ min: string; max: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.max}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.min}) {
    grid-template-columns: 1fr;
  }
`;

const WrapperItem = styled.div`
  display: flex;
  justify-content: center;
  alignitems: center;
`;

const Paragraph = styled.p`
  color: #d0d0d0;
  font-family: SegoeUI;
  font-size: 24px;
  margin: 32px 0 32px 0;
  line-height: 1.33;
  text-indent: 2em;
`;

export default (() => (
  <React.Fragment>
    <Header />
    <Section header="Upcoming Events !!">
      <Wrapper>
        <div
          style={{
            width: '100%',
            maxWidth: '384px',
            height: '512px',
            border: 'solid 1px #707070',
            backgroundColor: '#a0a0a0',
            display: 'inline-block',
            margin: '64px 0 64px 0',
          }}
        />
        <div
          style={{
            width: '384px',
            height: '512px',
            border: 'solid 1px #707070',
            backgroundColor: '#a0a0a0',
            margin: '64px 0 64px 0',
          }}
        />
      </Wrapper>
    </Section>
    <Section header="Introduction">
      <Paragraph>{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur`}</Paragraph>
      <GridWrapper max="1300px" min="900px">
        <WrapperItem>
          <div
            style={{
              width: '320px',
              height: '192px',
              border: 'solid 1px #707070',
              backgroundColor: '#ffffff',
              margin: '32px 0 32px 0',
            }}
          />
        </WrapperItem>
        <WrapperItem>
          <div
            style={{
              width: '320px',
              height: '192px',
              border: 'solid 1px #707070',
              backgroundColor: '#ffffff',
              margin: '32px 0 32px 0',
            }}
          />
        </WrapperItem>
        <WrapperItem>
          <div
            style={{
              width: '320px',
              height: '192px',
              border: 'solid 1px #707070',
              backgroundColor: '#ffffff',
              margin: '32px 0 32px 0',
            }}
          />
        </WrapperItem>
      </GridWrapper>
    </Section>
    <Section header="Members">
      <GridWrapper max="1000px" min="600px">
        <Member name="TsundereChen" title="Chairman" />
        <Member name="TsundereChen" title="Chairman" />
        <Member name="TsundereChen" title="Chairman" />
        <Member name="TsundereChen" title="Chairman" />
        <Member name="TsundereChen" title="Chairman" />
        <Member name="TsundereChen" title="Chairman" />
      </GridWrapper>
    </Section>
    <Section header="Events">
      <GridWrapper max="1400px" min="900px">
        <Event
          title="定期聚"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
        />
        <Event
          title="定期聚"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
        />
        <Event
          title="定期聚"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
        />
        <Event
          title="定期聚"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
        />
      </GridWrapper>
    </Section>
  </React.Fragment>
)) as React.FC;

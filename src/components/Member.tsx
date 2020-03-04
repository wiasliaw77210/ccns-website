import React from 'react';
import styled from 'styled-components';

// Member
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0 48px 0;
`;

const FakeImage = styled.div`
  width: 128px;
  height: 128px;
  border: solid 1px #707070;
  background-color: #a0a0a0;
  border-radius: 50%;
  margin: 16px 0 16px 0;
`;

const Name = styled.span`
  font-family: SegoeUI;
  font-size: 24px;
  text-align: center;
  color: #f0f0f0;
  line-height: 1.33;
`;

const Title = styled.span`
  font-size: 24px;
  font-style: normal;
  line-height: 1.33;
  text-align: center;
  color: #a0a0a0;
`;

// Popup
const BackgroundMask = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.2;
`;

const PopuoContainer = styled.div`
  width: 400px;
  min-height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 2px #ffffff;
  background-color: #000;
  padding: 48px 32px 56px 32px;
  z-index: 1000;
`;

const PopupGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 128px 1fr;
`;

const PopupMember = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 35px 0;
`;

const PopupCircle = styled.div`
  border-radius: 50%;
  background-color: #707070;
  width: 32px;
  height: 32px;
  margin: 16px 10px 32px 10px;
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid #707070;
`;

const P = styled.p`
  color: #a0a0a0;
  font-size: 24px;
  line-height: 1.33;
  padding: 32px 0;
`;

interface IProps {
  image?: string;
  name?: string;
  title?: string;
  description?: string;
}

export default ((props: IProps) => {
  const [popup, setPopup] = React.useState<boolean>(false);
  const handleOnClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.preventDefault();
    setPopup(!popup);
  };
  return (
    <Wrapper onClick={handleOnClick}>
      <FakeImage />
      <Name>{props.name}</Name>
      <Title>{props.title}</Title>
      {popup ? (
        <React.Fragment>
          <BackgroundMask />
          <PopuoContainer>
            <PopupGridWrapper>
              <FakeImage />
              <PopupMember>
                <Name>{props.name}</Name>
                <Title>{props.title}</Title>
              </PopupMember>
            </PopupGridWrapper>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PopupCircle />
              <PopupCircle />
              <PopupCircle />
              <PopupCircle />
            </div>
            <Hr />
            <P>
              {`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero`}
            </P>
            <Hr />
          </PopuoContainer>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Wrapper>
  );
}) as React.FC<IProps>;

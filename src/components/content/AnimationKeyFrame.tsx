import React from 'react';
import { Container as ContainerCore } from '@mui/material';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  0% {
    transform:rotate(0deg);
  }

  50% {
    transform:rotate(180deg);
  }

  100% {
    transform:rotate(360deg);
  }
`;

const ball = keyframes`
0% {
  bottom:20px;
}
95% {
  width: 100px;
}
to {
  bottom:600px;
  width:115px;
  height:90px;
}
`;

const Container = styled(ContainerCore)`
  display: grid;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 260px);
`;

const CircleContainer = styled.div`
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform-origin: center;
  animation: ${rotate} 2s ease forwards infinite;
`;

const Circle = styled.div`
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;

  &:nth-child(1) {
    left: -100px;
  }

  &:nth-child(2) {
    left: 100px;
    top: -40px;
  }
`;

type BallProps = {
  left?: number;
  right?: number;
};

const Ball = styled.div<BallProps>`
  position: fixed;
  left: ${(props) => (props.left ? props.left : '')}px;
  right: ${(props) => (props.right ? props.right : '')}px;
  bottom: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  animation: ${ball} 1s ease-in Infinite Alternate;
`;

const AnimationKeyFrame: React.FunctionComponent = () => {
  return (
    <Container>
      <CircleContainer>
        <Circle />
        <Circle />
      </CircleContainer>
      <Ball left={20} />
      <Ball right={20} />
    </Container>
  );
};

export default AnimationKeyFrame;

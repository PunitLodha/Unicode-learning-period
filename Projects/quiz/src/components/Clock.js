import React from 'react';
import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

const Container = styled.div`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-color: #3da9fc;
  position: relative;
  border: 0.5rem solid #ef4565;
  &:after {
    content: '';
    border-radius: 50%;
    background-color: #094067;
    position: absolute;
    top: calc(50% - 0.48rem);
    left: calc(50% - 0.48rem);
    z-index: 2;
    width: 1rem;
    height: 1rem;
  }
`;

const HorizontalBar = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: #094067;
`;

const VerticalBar = styled(HorizontalBar)`
  width: 0.5rem;
  height: 1rem;
`;

const Left = styled(HorizontalBar)`
  left: 0;
  top: calc(50% - 0.25rem);
`;

const Right = styled(HorizontalBar)`
  right: 0;
  top: calc(50% - 0.25rem);
`;

const Top = styled(VerticalBar)`
  top: 0;
  left: calc(50% - 0.25rem);
`;

const Bottom = styled(VerticalBar)`
  bottom: 0;
  left: calc(50% - 0.25rem);
`;

const Hand = styled.div`
  position: absolute;
  height: 1.5rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  background-color: #094067;
  top: calc(50% - 1.5rem);
  left: calc(50% - 0.25rem);
  transform-origin: 50% 100%;
  animation: ${Rotate} 4s infinite steps(4);
  animation-play-state: ${props => (props.paused ? 'paused' : 'running')};
`;

const Clock = ({ paused }) => {
  return (
    <Container>
      <Top />
      <Right />
      <Bottom />
      <Left />
      <Hand paused={paused} />
    </Container>
  );
};

export default Clock;

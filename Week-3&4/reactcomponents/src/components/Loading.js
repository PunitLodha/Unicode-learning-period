import React from 'react';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px; }
  100% { margin-bottom: 0; }
`;

const DotConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8px;
  height: 35px;
  width: 90px;
  border-radius: 60px;
  background-color: #fff;
  box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: black;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const Loading = () => {
  return (
    <DotConatiner>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </DotConatiner>
  );
};

export default Loading;

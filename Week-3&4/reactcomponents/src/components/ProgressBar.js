import React from 'react';
import styled, { keyframes } from 'styled-components';

const expandWidth = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const ProgressBarConatiner = styled.div`
  height: 8px;
  width: 220px;
  position: relative;
  background: #d5f2ea;
  border-radius: 4px;
`;
const ProgressBarSpan = styled.span`
  display: block;
  height: 100%;
  width: 0%;
  position: relative;
  border-radius: 4px;
  background: #00c48c;
  animation: ${expandWidth} 5s linear infinite;
`;

const ProgressBar = () => {
  return (
    <ProgressBarConatiner>
      <ProgressBarSpan />
    </ProgressBarConatiner>
  );
};

export default ProgressBar;

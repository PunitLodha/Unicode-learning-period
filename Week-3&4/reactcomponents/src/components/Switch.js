import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  height: 40px;
  width: 70px;
  box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
  background-color: #f7f7f7;
`;

const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 30px;

  &::before {
    position: absolute;
    content: '';
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 4px;
    background: #ecebed;
    transition: 0.5s;
    border-radius: 50%;
  }

  ${SwitchInput}:checked + &::before {
    transform: translateX(30px);

    background: linear-gradient(225deg, #bd7ae3 0%, #8461c9 100%);
  }
`;

const Switch = () => {
  return (
    <SwitchLabel>
      <SwitchInput />
      <SwitchSpan />
    </SwitchLabel>
  );
};

export default Switch;

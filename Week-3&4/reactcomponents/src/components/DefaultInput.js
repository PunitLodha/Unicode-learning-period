import styled from 'styled-components';

const DefaultInput = styled.input.attrs({ placeholder: 'Placeholder' })`
  height: 35px;
  width: 240px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #000;
  padding: 10px 15px;
  margin: 25px;
  border: 0px;
  border-radius: 10px;

  &:focus {
    border: 1px solid #ecebed;
    box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
    outline: none;
  }
`;

export default DefaultInput;

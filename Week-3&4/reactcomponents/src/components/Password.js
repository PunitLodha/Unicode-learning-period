import styled from 'styled-components';
import eye from '../Eye.svg';

const Password = styled.input.attrs({ placeholder: 'Password', type: 'password' })`
  height: 35px;
  width: 240px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #000;
  padding: 10px 15px;
  margin: 25px;
  border: 0px;
  border-radius: 10px;
  background-image: url(${eye});
  background-repeat: no-repeat;
  background-position: 90% center;

  &:focus {
    border: 1px solid #ecebed;
    box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
    outline: none;
  }
`;

export default Password;

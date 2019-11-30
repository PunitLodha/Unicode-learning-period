import styled from 'styled-components';

const Textarea = styled.textarea.attrs({ placeholder: 'Textarea' })`
  height: 35px;
  width: 240px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #000;
  background-color: #f7f7f7;
  padding: 15px;
  margin: 25px;
  border: 2px solid #ecebed;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

export default Textarea;

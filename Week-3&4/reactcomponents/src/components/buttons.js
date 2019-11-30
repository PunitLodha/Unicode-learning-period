import styled from 'styled-components';

const Button = styled.button`
  height: ${props => (props.small ? '40px' : '48px')};
  width: ${props => (props.small ? '180px' : '343px')};
  background: ${props => (props.ghost ? 'white' : '#6979F8')};
  border-radius: 6px;
  border: 2px solid #6979f8;
  margin: 25px;
  padding: 5px 20px;
  font-family: 'Roboto';
  font-size: ${props => (props.small ? '13px' : '16px')};
  color: ${props => (props.ghost ? '#6979F8' : 'white')};
`;

export default Button;

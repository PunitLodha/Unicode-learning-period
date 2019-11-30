import styled from 'styled-components';
import Search from '../Search.svg';
import SerachDark from '../SearchDark.svg';
import Close from '../Close.svg';

const SearchBar = styled.input.attrs({ placeholder: 'Search', type: 'search' })`
  height: 55px; /*Since browser automatically applies box-sizing: border-box to search-bars */
  width: 240px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #000;
  padding: 10px 20px 10px 45px;
  margin: 25px;
  border: 0px;
  border-radius: 10px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 8% center;

  &:focus {
    border: 1px solid #ecebed;
    box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
    outline: none;
    background-image: url(${SerachDark}), url(${Close});
    background-repeat: no-repeat;
    background-position: 8% center, 95% center;
  }
`;

export default SearchBar;

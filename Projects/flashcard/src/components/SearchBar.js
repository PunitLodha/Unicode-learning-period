import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '../SearchDark.svg';

const StyledTextField = styled(TextField)`
  margin: 1rem;
  width: 30rem;
`;

const SearchBar = ({ handleChange }) => {
  return (
    <StyledTextField
      type="search"
      label="Search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src={SearchIcon} alt="searchIcon" />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
    />
  );
};

export default SearchBar;

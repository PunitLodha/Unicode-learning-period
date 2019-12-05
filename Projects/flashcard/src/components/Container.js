import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper, Typography, Button } from '@material-ui/core';
import SearchBar from './SearchBar';
import ChipContainer from './ChipConatiner';
import ResultCard from './ResultCard';
import FiltersContextProvider from './FiltersContext';

const StyledPaper = styled(Paper)`
  max-width: 1000px;
  padding: 1.5rem;
  margin: 2rem auto;
  background-color: #ffebcd;
  text-align: center;
`;

const Form = styled.form`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 0.75rem;
  }
`;

const Container = () => {
  let temp;
  const [word, setWord] = useState('');

  const handlechange = e => {
    temp = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setWord(temp);
  };

  return (
    <StyledPaper>
      <Typography variant="h2" color="textPrimary">
        Flash Cards
      </Typography>
      <FiltersContextProvider>
        <Form onSubmit={handleSubmit}>
          <SearchBar handleChange={handlechange} value={word} />
          <Typography variant="h4" color="textSecondary">
            Filter Results
          </Typography>

          <ChipContainer />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
        <Typography gutterBottom variant="h4" color="textSecondary">
          Results
        </Typography>

        <ResultCard word={word} />
      </FiltersContextProvider>
    </StyledPaper>
  );
};

export default Container;

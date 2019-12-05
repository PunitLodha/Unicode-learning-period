import React, { useContext } from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import { FiltersContext } from './FiltersContext';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 25rem;
  & > * {
    margin: 0.25rem;
  }
`;

const ChipContainer = () => {
  const filters = ['Definition', 'Synonyms', 'Antonyms', 'Rhyme', 'Frequency'];
  const { FilterToggle } = useContext(FiltersContext);

  return (
    <StyledDiv>
      {filters.map(filter => (
        <Chip
          label={filter}
          color="primary"
          onClick={FilterToggle}
          variant="outlined"
          key={filter}
        />
      ))}
    </StyledDiv>
  );
};

export default ChipContainer;

import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';
import Result from './Result';
import { getSynonyms, getAntonyms, getRhyme, getDefandFreq } from '../api/datamuseAPI';
import { FiltersContext } from './FiltersContext';

const StyledCard = styled(Card)`
  margin: 0 auto;
  width: 50rem;
`;

const ResultCard = ({ word }) => {
  const { selected } = useContext(FiltersContext);
  const [items, setItems] = useState({
    Definition: [],
    Synonyms: [],
    Antonyms: [],
    Frequency: [],
    Rhyme: [],
  });

  const setSynonyms = useCallback(() => {
    let Synonym = [];
    getSynonyms(word).then(({ data }) => {
      data.forEach(element => {
        Synonym = [...Synonym, element.word];
      });

      setItems(prevState => ({
        ...prevState,
        Synonyms: Synonym,
      }));
    });
  }, [word]);

  const setAntonyms = useCallback(() => {
    let Antonym = [];
    getAntonyms(word).then(({ data }) => {
      data.forEach(element => {
        Antonym = [...Antonym, element.word];
      });

      setItems(prevState => ({
        ...prevState,
        Antonyms: Antonym,
      }));
    });
  }, [word]);

  const setRhyme = useCallback(() => {
    let Rhyme = [];
    getRhyme(word).then(({ data }) => {
      data.forEach(element => {
        Rhyme = [...Rhyme, element.word];
      });

      setItems(prevState => ({
        ...prevState,
        Rhyme,
      }));
    });
  }, [word]);

  const setDefandFreq = useCallback(() => {
    let Def = [];
    let Freq = [];
    getDefandFreq(word).then(({ data }) => {
      if (data[0].defs) {
        data[0].defs.forEach(element => {
          Def = [...Def, element.slice(1)];
        });
        Freq = [...Freq, data[0].tags[1]];

        setItems(prevState => ({
          ...prevState,
          Definition: Def,
          Frequency: Freq,
        }));
      }
    });
  }, [word]);

  useEffect(() => {
    if (word !== '') {
      setSynonyms();
      setAntonyms();
      setRhyme();
      setDefandFreq();
    }
  }, [word, setDefandFreq, setRhyme, setSynonyms, setAntonyms]);

  if (word !== '') {
    return (
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h4" color="textPrimary">
            {word}
          </Typography>
          {selected.map(item => (
            <Result items={items} selection={item} key={item} />
          ))}
        </CardContent>
      </StyledCard>
    );
  }
  return null;
};

export default ResultCard;

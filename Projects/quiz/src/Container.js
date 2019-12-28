import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getRandomQuestions from './api/triviaAPI';

const StyledConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 6rem auto;
  max-width: 1280px;
  grid-template-areas: 'question question question question';
  text-align: center;
`;

const StyledQuestion = styled.div`
  margin: 20px;
  grid-area: question;
  border-radius: 20px;
  border: 2px solid gainsboro;
  font-size: 30px;
`;

const StyledAnswer = styled.button`
  grid-column: span 2;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid goldenrod;
  font-size: 24px;
  color: black;
  background-color: white;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${props => (props.answer === props.correctAnswer ? 'white' : 'darkgray')};
    background-color: ${props => (props.answer === props.correctAnswer ? 'green' : 'lightgray')};
    border: 2px solid gray;
    &:hover {
      transform: none;
    }
  }
`;

const Next = styled.button`
  width: 150px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

let timerID;

const Container = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [points, setPoints] = useState(0);

  const countdown = () => {
    setSeconds(prevSeconds => prevSeconds - 1);
  };

  useEffect(() => {
    if (seconds <= 0) {
      setAnswered(true);
      return;
    }
    timerID = setInterval(countdown, 1000);
    return () => clearInterval(timerID);
  }, [seconds]);

  useEffect(() => {
    getRandomQuestions().then(({ data }) => {
      let tempQuestions = [];
      const tempAnswers = [];
      let tempCorrectAnswers = [];
      data.results.forEach(result => {
        tempQuestions = [...tempQuestions, result.question];
        tempCorrectAnswers = [...tempCorrectAnswers, result.correct_answer];
        const ansList = [...result.incorrect_answers, result.correct_answer];

        /* Shuffling the answers */
        for (let loop = 0; loop < 2; loop += 1) {
          for (let i = 3; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * i);
            const temp = ansList[i];
            ansList[i] = ansList[j];
            ansList[j] = temp;
          }
        }
        /* End of shuffling */
        tempAnswers.push(ansList);
      });
      setQuestions(tempQuestions);
      setAnswers(tempAnswers);
      setCorrectAnswers(tempCorrectAnswers);
    });
  }, []);

  const handleClick = (event, answer) => {
    if (!answered) {
      if (answer !== correctAnswers[counter]) {
        console.log(answer, correctAnswers[counter]);
        event.target.style.backgroundColor = 'red';
        setPoints(prevPoints => prevPoints - 1);
      } else {
        setPoints(prevPoints => prevPoints + 4);
      }
      event.target.style.color = 'white';
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (counter < 10) {
      setAnswered(false);
      setCounter(prevState => prevState + 1);
      setSeconds(10);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {counter < 10 ? (
        <>
          <p>{seconds}</p>
          <StyledConatiner>
            <StyledQuestion>
              <p>{questions[counter] ? decodeURIComponent(questions[counter]) : ''}</p>
            </StyledQuestion>
            {answers[counter]
              ? answers[counter].map(answer => (
                  <StyledAnswer
                    onClick={e => {
                      handleClick(e, answer);
                    }}
                    key={answer}
                    disabled={answered}
                    answer={answer}
                    correctAnswer={correctAnswers[counter]}
                  >
                    {decodeURIComponent(answer)}
                  </StyledAnswer>
                ))
              : null}
          </StyledConatiner>
          <Next isVisible={answered} onClick={handleNext}>
            Next
          </Next>
        </>
      ) : (
        <h1>{points}</h1>
      )}
    </div>
  );
};

export default Container;

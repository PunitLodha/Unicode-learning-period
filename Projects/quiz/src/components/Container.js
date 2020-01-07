import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import getQuestions from '../api/triviaAPI';
import Clock from './Clock';
import Results from './Results';

const StyledConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 6rem auto 3rem auto;
  max-width: 128rem;
  grid-template-areas: 'question question';
  text-align: center;
`;

const StyledQuestion = styled.h3`
  margin: 2rem;
  grid-area: question;
  font-size: 3rem;
  color: #094067;
`;

const StyledAnswer = styled.button`
  @media (max-width: 600px) {
    grid-column: span 2;
  }

  margin: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 2.4rem;
  color: #094067;
  background-color: #fffffe;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${props => (props.answer === props.correctAnswer ? 'white' : 'darkgray')};
    background-color: ${props => (props.answer === props.correctAnswer ? 'green' : 'lightgray')};
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;

const Next = styled.button`
  padding: 1rem 4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #3da9fc;
  color: #fffffe;
  font-size: 3rem;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fffffe;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const Heading = styled.h1`
  flex-grow: 1;
  font-size: 3rem;
  color: #094067;
  text-transform: capitalize;
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  & h3 {
    font-size: 2rem;
    color: #094067;
    margin-left: 0.5rem;
  }
`;

const PointsContainer = styled.h3`
  font-size: 2rem;
  color: #094067;
  text-align: left;
  margin: 1rem;
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

  const { category } = useParams();

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
    getQuestions(category).then(({ data }) => {
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
  }, [category]);

  const handleClick = (event, answer) => {
    if (!answered) {
      if (answer !== correctAnswers[counter]) {
        event.target.style.backgroundColor = 'red';
        setPoints(prevPoints => prevPoints - 1);
      } else {
        setPoints(prevPoints => prevPoints + 4);
      }
      event.target.style.color = 'white';
      setAnswered(true);
      setSeconds(0);
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
    <div>
      {counter < 10 ? (
        <>
          <Header>
            <PointsContainer>Points: {points}</PointsContainer>
            <Heading>{category.replace('_', ' ')} Quiz</Heading>
            <ClockContainer>
              <Clock paused={answered} />
              <h3>
                {seconds < 10 ? '0' : ''}
                {`${seconds} seconds left`}
              </h3>
            </ClockContainer>
          </Header>
          <StyledConatiner>
            <StyledQuestion>
              <p>
                {questions[counter]
                  ? `${counter + 1}: ${decodeURIComponent(questions[counter])}`
                  : ''}
              </p>
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
        <Results points={points} />
      )}
    </div>
  );
};

export default Container;

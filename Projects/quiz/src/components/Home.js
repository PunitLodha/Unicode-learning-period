import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Header = styled.h1`
  font-size: 6rem;
  color: #094067;
  margin-bottom: 4rem;
`;

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  & li:last-child {
    grid-column: span 2;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SlideRight = keyframes`
  from {
    transform: translateX(-20rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideLeft = keyframes`
  from {
    transform: translateX(20rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideUp = keyframes`
  from {
    transform: translateY(10rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Card = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #fffffe;
  color: #094067;
  font-size: 3rem;
  text-align: center;
  border-radius: 5px;
  transition: all 0.2s;
  animation: ${props => props.animation}
    ${props => (props.delay ? `${props.delay + 0.5}s` : '0.5s')} ease-in;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.random
      ? `max-width: 60rem;
         margin: 1rem auto;`
      : ''}
`;

const DescriptionHeader = styled.h3`
  font-size: 3rem;
  color: #5f6c7b;
  margin: 1rem 0;
`;

const Description = styled.p`
  padding: 1rem;
  font-size: 2rem;
  color: #5f6c7b;
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 70rem;
`;

const ListHeader = styled.h3`
  font-size: 4rem;
  color: #094067;
  margin: 0;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <div>
      <Header>Quiz App</Header>
      <DescriptionHeader>How to Play</DescriptionHeader>
      <Description>
        Select a category from the given options. Make a guess. If your guess is right then you get
        +4 points, if your guess is wrong then you lose a point.
      </Description>
      <ListHeader>Categories</ListHeader>
      <StyledList>
        <li>
          <StyledLink to="/history">
            <Card animation={SlideRight}>History</Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/general_knowledge">
            <Card animation={SlideLeft}>GK</Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/computer">
            <Card animation={SlideRight} delay={0.2}>
              Computer
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/maths">
            <Card animation={SlideLeft} delay={0.2}>
              Maths
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mythology">
            <Card animation={SlideRight} delay={0.4}>
              Mythology
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/sports">
            <Card animation={SlideLeft} delay={0.4}>
              Sports
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/video_games">
            <Card animation={SlideRight} delay={0.6}>
              Video Games
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/geography">
            <Card animation={SlideLeft} delay={0.6}>
              Geography
            </Card>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/random">
            <Card random animation={SlideUp} delay={0.8}>
              Random
            </Card>
          </StyledLink>
        </li>
      </StyledList>
    </div>
  );
};

export default Home;

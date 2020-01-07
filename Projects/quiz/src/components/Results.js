import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTable = styled.table`
  margin: 2rem auto;
  background-color: #fffffe;
  border-collapse: collapse;
  border: 1px solid #5f6c7b;
  & th {
    background-color: #094067;
    color: #fffffe;
    border: 1px solid #5f6c7b;
    font-size: 2rem;
    padding: 1rem;
  }
  & td {
    color: #5f6c7b;
    border: 1px solid #5f6c7b;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

const Home = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #3da9fc;
  color: #fffffe;
  font-size: 2rem;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  }
`;

const Heading = styled.h1`
  color: #094067;
  margin-top: 3rem;
  font-size: 3rem;
`;

const SubHeading = styled.h3`
  color: #5f6c7b;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const BlueSubHeading = styled(SubHeading)`
  color: #094067;
`;

const Results = ({ points }) => {
  const [resultsList, setResultsList] = useState([]);

  const sortHelper = (a, b) => {
    if (a.points > b.points) return -1;
    if (a.points < b.points) return 1;

    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date1 - date2;
  };

  useEffect(() => {
    const pastResults = JSON.parse(localStorage.getItem('results'));
    const currentDate = new Date().toLocaleString().replace(/,.*/, '');
    const currentResult = { date: currentDate, points };
    const results = pastResults ? [...pastResults, currentResult] : [currentResult];
    console.log(results);
    results.sort(sortHelper);
    setResultsList(results);
    localStorage.setItem('results', JSON.stringify(results));
  }, [points]);

  return (
    <div>
      <Heading>Results</Heading>
      <SubHeading>{`Congrats you scored ${points} points!`}</SubHeading>
      <BlueSubHeading>Leaderboard</BlueSubHeading>
      <StyledTable>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Date</th>
            <th>Points</th>
          </tr>
        </tbody>
        <tbody>
          {resultsList.map(result => (
            <tr key={result}>
              <td>{resultsList.indexOf(result) + 1}</td>
              <td>{result.date}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Link to="/">
        <Home>Home</Home>
      </Link>
    </div>
  );
};

export default Results;

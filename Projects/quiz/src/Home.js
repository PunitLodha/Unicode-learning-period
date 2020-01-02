import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link to="/random">Random</Link>
      <Link to="/history">History</Link>
      <Link to="/generalKnowledge">General Knowledge</Link>
      <Link to="/computer">Computers</Link>
      <Link to="/maths">Mathematics</Link>
      <Link to="/mythology">Mythology</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/videoGames">Video Games</Link>
      <Link to="/geography">Geography</Link>
    </div>
  );
};

export default Home;

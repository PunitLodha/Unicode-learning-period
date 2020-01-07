import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Container from './components/Container';
import Home from './components/Home';

const Box = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <Box>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:category" component={Container} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;

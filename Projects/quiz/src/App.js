import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './Container';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category" component={Container} />
      </Switch>
    </Router>
  );
}

export default App;

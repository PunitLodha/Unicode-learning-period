import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Container from './components/Container';

function App() {
  return (
    <StylesProvider injectFirst>
      <Container />
    </StylesProvider>
  );
}

export default App;

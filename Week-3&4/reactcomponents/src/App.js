import React from 'react';
import ButtonConatiner from './containers/ButtonContainer';
import InputContainer from './containers/InputConatainer';
import OtherComponentsContainer from './containers/OtherComponentsConatiner';

function App() {
  return (
    <div className="container">
      <h1>React Components</h1>
      <h3>Buttons</h3>
      <ButtonConatiner />
      <h3>Input forms</h3>
      <InputContainer />
      <h3>Other Components</h3>
      <OtherComponentsContainer />
    </div>
  );
}

export default App;

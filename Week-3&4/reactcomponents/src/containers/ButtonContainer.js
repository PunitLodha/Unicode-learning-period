import React from 'react';
import Button from '../components/buttons';

const ButtonConatiner = () => {
  return (
    <div className="flex">
      <Button>Default</Button>
      <Button ghost>Ghost</Button>
      <Button small>Small Default</Button>
      <Button small ghost>
        Small Ghost
      </Button>
    </div>
  );
};

export default ButtonConatiner;

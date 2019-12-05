import React from 'react';
import { Typography } from '@material-ui/core';

const Result = ({ items, selection }) => {
  const max = 11;
  return (
    <>
      <Typography gutterBottom align="left" variant="h5" color="textSecondary">
        {selection}
      </Typography>
      {items[selection].slice(0, max).map(item => (
        <Typography
          style={{ margin: '0 1rem' }}
          gutterBottom
          align="left"
          variant="body1"
          color="textPrimary"
          key={item}
        >
          {`•\t`}
          {item}
        </Typography>
      ))}
    </>
  );
};

export default Result;

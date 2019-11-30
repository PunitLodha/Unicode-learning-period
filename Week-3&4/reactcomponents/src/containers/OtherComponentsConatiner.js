import React from 'react';
import Switch from '../components/Switch';
import ProgressBar from '../components/ProgressBar';
import Loading from '../components/Loading';

const OtherComponentsContainer = () => {
  return (
    <div className="flex">
      <Switch />
      <ProgressBar />
      <Loading />
    </div>
  );
};

export default OtherComponentsContainer;

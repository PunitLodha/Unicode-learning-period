import React from 'react';
import DefaultInput from '../components/DefaultInput';
import Password from '../components/Password';
import Textarea from '../components/Textarea';
import SearchBar from '../components/SearchBar';

const InputContainer = () => {
  return (
    <div className="flex">
      <DefaultInput />
      <Password />
      <Textarea />
      <SearchBar />
    </div>
  );
};

export default InputContainer;

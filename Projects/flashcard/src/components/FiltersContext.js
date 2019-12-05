import React, { createContext, useState } from 'react';

export const FiltersContext = createContext();

const FiltersContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const FilterToggle = e => {
    if (!selected.includes(e.target.innerText)) {
      if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.backgroundColor = '#c3c3c3';
      } else {
        e.target.style.backgroundColor = '#c3c3c3';
      }
      setSelected([...selected, e.target.innerText]);
    } else {
      if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.backgroundColor = '#ffebcd';
      } else {
        e.target.style.backgroundColor = '#ffebcd';
      }
      const newSelected = selected.filter(item => item !== e.target.innerText);
      setSelected(newSelected);
    }
  };

  return (
    <FiltersContext.Provider value={{ selected, FilterToggle }}>{children}</FiltersContext.Provider>
  );
};

export default FiltersContextProvider;

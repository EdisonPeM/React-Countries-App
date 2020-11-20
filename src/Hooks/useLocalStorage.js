import { useState } from 'react';

export default function useLocalStorage(initialState, key = 'data') {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(key);
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return initialState;
  });

  const saveInStorage = newData => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveInStorage];
}

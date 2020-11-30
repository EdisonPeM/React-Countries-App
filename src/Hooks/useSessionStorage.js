import { useState } from 'react';

export default function useSessionStorage(initialState, key = 'data') {
  const [data, setData] = useState(() => {
    const savedData = JSON.parse(sessionStorage.getItem(key));
    if (savedData !== null) {
      return savedData;
    }
    return initialState;
  });

  const saveInStorage = newData => {
    sessionStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveInStorage];
}

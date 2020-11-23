import { useState } from 'react';

export default function useToggle(initialState) {
  const [state, setState] = useState(!!initialState);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
}

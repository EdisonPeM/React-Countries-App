import { useState } from 'react';

export default function useInputControl(initialState) {
  const [state, setState] = useState(initialState);

  const onChange = e => {
    setState(e.target.value);
  };

  return [state, onChange];
}

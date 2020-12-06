import { useState, useEffect } from 'react';

export default function useClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    });
    return () => clearInterval(intervalID);
  }, []);

  return [date];
}

import React, { useState, useEffect } from 'react';
import mmt from 'moment-timezone';

function Clock({ timezone = 'Ect/GMT+5' }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <span>{mmt(date).tz(timezone).format('h:mm:ss a, [(]MMM Do YYYY[)]')}</span>
  );
}

export default Clock;

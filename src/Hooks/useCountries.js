import { useState, useEffect } from 'react';

import HTTP from 'Utils/HTTPClient';

export default function useCountries(endPoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    HTTP.get(endPoint).then(setData).catch(console.error);
  }, [endPoint]);

  return data;
}

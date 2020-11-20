import { useState, useEffect } from 'react';

import Client from 'Utils/HTTPClient';

const countriesClient = new Client('https://restcountries.eu/rest/v2/');

export default function useCountries(endPoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    countriesClient
      .get(endPoint)
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [endPoint]);

  return [data, loading, error];
}

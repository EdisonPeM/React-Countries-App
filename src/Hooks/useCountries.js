import { useState, useEffect } from 'react';

import Client from 'Utils/HTTPClient';

const countriesClient = new Client('https://restcountries.eu/rest/v2/');

export default function useCountries(endPoint) {
  const [response, setResponse] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    if (endPoint) {
      countriesClient
        .get(endPoint)
        .then(data =>
          setResponse({
            data,
            loading: false,
            error: null,
          })
        )
        .catch(error =>
          setResponse({
            data: [],
            error,
            loading: false,
          })
        );
    }
  }, [endPoint]);

  return response;
}

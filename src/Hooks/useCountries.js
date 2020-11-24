import { useState, useEffect } from 'react';

import Client from 'Utils/HTTPClient';

const URL_BASE = 'https://restcountries.eu/rest/v2/';

export default function useCountries(endPoint) {
  const [response, setResponse] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    setResponse({
      data: [],
      error: null,
      loading: true,
    });

    const countriesClient = new Client(URL_BASE);
    if (endPoint) {
      countriesClient
        .get(endPoint)
        .then(data =>
          setResponse({
            data,
            error: null,
            loading: false,
          })
        )
        .catch(error => {
          if (!countriesClient.hasAborted()) {
            setResponse({
              data: [],
              error,
              loading: false,
            });
          }
        });
    }

    return () => countriesClient.abort();
  }, [endPoint]);

  return response;
}

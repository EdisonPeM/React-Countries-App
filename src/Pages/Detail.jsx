import React, { useEffect, lazy, Suspense } from 'react';
import useCountries from 'Hooks/useCountries';

// import { navigate } from '@reach/router';

import ReturnLink from 'Components/ReturnLink';

import PlaceHolder from 'Components/Placeholders/Detail';
// import Error from 'Components/Errors/Detail';
// import CountryDetail from 'Components/CountryDetail';

import loadable from '@loadable/component';

const CountryDetail = loadable(() => import('Components/CountryDetail'));
const NetworkConnectionError = loadable(() => import('Components/Errors/Home'));
const Error = lazy(() => import('Components/Errors/Detail'));

function Detail({ code }) {
  const { data: info, loading, error } = useCountries(`alpha/${code}`);

  // Use Effect to go to top when code change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  return (
    <>
      <ReturnLink />
      {loading ? (
        <PlaceHolder />
      ) : error ? (
        error.message && error.message === 'Failed to fetch' ? (
          <NetworkConnectionError />
        ) : (
          <Suspense fallback={<PlaceHolder />}>
            <Error />
          </Suspense>
        )
      ) : (
        <CountryDetail {...info} />
      )}
    </>
  );
}

export default Detail;

import React, { useEffect, lazy, Suspense } from 'react';
import useCountries from 'Hooks/useCountries';

import DetailLinks from 'Components/DetailLinks';
import PlaceHolder from 'Components/Placeholders/Detail';

import loadable from '@loadable/component';
import useToggle from 'Hooks/useToggle';

const CountryDetail = loadable(() => import('Components/CountryDetail'));
const NetworkConnectionError = loadable(() => import('Components/Errors/Home'));
const Error = lazy(() => import('Components/Errors/Detail'));

function Detail({ code }) {
  const { data: info, loading, error } = useCountries(`alpha/${code}`);
  const [showMap, toggleShowMap] = useToggle(false);

  // Use Effect to go to top when code change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  return (
    <>
      <DetailLinks {...{ showMap, toggleShowMap }} />
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
        <CountryDetail {...info} showMap={showMap} />
      )}
    </>
  );
}

export default Detail;

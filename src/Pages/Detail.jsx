import React, { useLayoutEffect } from 'react';
import useCountries from 'Hooks/useCountries';

import CountryDetail from 'Components/CountryDetail';
import ReturnLink from 'Components/ReturnLink';

import PlaceHolder from 'Components/Placeholders/Detail';
import Error from 'Components/Errors/Detail';

function Detail({ code }) {
  const { data: info, loading, error } = useCountries(`alpha/${code}`);

  // Use Effect to go to top when code change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  return (
    <>
      <ReturnLink />
      {loading ? (
        <PlaceHolder />
      ) : error ? (
        <Error />
      ) : (
        <CountryDetail {...info} />
      )}
    </>
  );
}

export default Detail;

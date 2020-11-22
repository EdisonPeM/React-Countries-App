import React, { useLayoutEffect } from 'react';
import useCountries from 'Hooks/useCountries';

import CountryDetail from 'Components/CountryDetail';
import ReturnLink from 'Components/ReturnLink';

function Detail({ code }) {
  const [info, loading, error] = useCountries(`alpha/${code}`);

  // Use Effect to go to top when code change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  return (
    <>
      <ReturnLink />
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>Country does not exist</p>
      ) : (
        <CountryDetail {...info} />
      )}
    </>
  );
}

export default Detail;

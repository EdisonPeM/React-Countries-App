import React from 'react';
import { Link } from '@reach/router';

import useCountries from 'Hooks/useCountries';
import CountryDetail from 'Components/CountryDetail';

function Detail({ code }) {
  const [info, loading, error] = useCountries(`alpha/${code}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Country does not exist</div>;
  return (
    <div>
      <Link to="/">Volver</Link>
      <CountryDetail {...info} />
    </div>
  );
}

export default Detail;

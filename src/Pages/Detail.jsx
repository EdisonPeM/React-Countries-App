import React from 'react';
import { Link } from '@reach/router';

import useCountries from 'Hooks/useCountries';

function Detail({ code }) {
  const [info, loading, error] = useCountries(`alpha/${code}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Country does not exist</div>;
  return (
    <div>
      <Link to="/">Volver</Link>
      <h1>{info.name}</h1>
      <img
        src={info.flag}
        alt={`Flag of ${info.name}`}
        title={`Flag of ${info.name}`}
      />
      <ul>
        <li>
          <b>Native Name:</b> {info.nativeName}
        </li>
        <li>
          <b>Population:</b> {info.population}
        </li>
        <li>
          <b>Region:</b> {info.region}
        </li>
        <li>
          <b>Sub Region:</b> {info.subregion}
        </li>
        <li>
          <b>Capital:</b> {info.capital}
        </li>
        <li>
          <b>Top Level Domain:</b> {info.topLevelDomain.join(', ')}
        </li>
        <li>
          <b>Top Level Domain:</b> {info.currencies.map(m => m.name).join(', ')}
        </li>
        <li>
          <b>Languages:</b> {info.languages.map(l => l.name).join(', ')}
        </li>
      </ul>
      <div>
        <b>Border Countries: {info.borders.join(', ')}</b>
      </div>
    </div>
  );
}

export default Detail;

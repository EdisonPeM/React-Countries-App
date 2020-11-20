import React from 'react';
import { Link } from '@reach/router';

import useCountries from 'Hooks/useCountries';

function Detail({ name }) {
  const [[info], loading, error] = useCountries(`name/${name}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Country does not exist</div>;
  return (
    info !== undefined && (
      <div>
        <Link to="/">Volver</Link>
        <h1>{name}</h1>
        <img
          src={info.flag}
          alt={`Flag of ${name}`}
          title={`Flag of ${name}`}
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
            <b>Top Level Domain:</b>{' '}
            {info.currencies.map(m => m.name).join(', ')}
          </li>
          <li>
            <b>Languages:</b> {info.languages.map(l => l.name).join(', ')}
          </li>
        </ul>
        <div>
          <b>Border Countries: {info.borders.join(', ')}</b>
        </div>
      </div>
    )
  );
}

export default Detail;

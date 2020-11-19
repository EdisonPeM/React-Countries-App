import React from 'react';
import { useParams } from 'react-router-dom';

import useCountries from 'Hooks/useCountries';

function Detail() {
  const { name } = useParams();
  const [info] = useCountries(`name/${name}?fullText=true`);

  return (
    info !== undefined && (
      <div>
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
      </div>
    )
  );
}

export default Detail;

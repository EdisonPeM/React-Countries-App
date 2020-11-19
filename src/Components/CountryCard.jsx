import React from 'react';

function Card({ name, population, region, capital, flag }) {
  return (
    <div>
      <img src={flag} alt={`Flag of ${name}`} title={`Flag of ${name}`} />
      <h1>{name}</h1>
      <ul>
        <li>Population: {population}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </div>
  );
}

export default Card;

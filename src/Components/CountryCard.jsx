import React from 'react';
import styled from 'styled-components';

import ElementMixin from 'UI/ElementMixin';

const Wrapper = styled.div`
  ${ElementMixin}
  padding: 10px;
  width: 200px;
`;

function Card({ name, population, region, capital, flag }) {
  return (
    <Wrapper>
      <img
        loading="lazy"
        src={flag}
        alt={`Flag of ${name}`}
        title={`Flag of ${name}`}
      />
      <h1>{name}</h1>
      <ul>
        <li>Population: {population}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </Wrapper>
  );
}

export default Card;

import React from 'react';
import styled from 'styled-components';

import Element from 'UI/Element';

const Wrapper = styled(Element)`
  border-radius: 10px;
  overflow: hidden;
`;

const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

function Card({ name, population, region, capital, flag }) {
  return (
    <Wrapper>
      <Flag
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

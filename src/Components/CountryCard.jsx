import React from 'react';

import { Wrapper, Card } from './CountryCard.styles';

function CountryCard({ name, population, region, capital, flag }) {
  return (
    <Wrapper to={'/' + name}>
      <Card>
        <Card.Flag
          loading="lazy"
          src={flag}
          alt={`Flag of ${name}`}
          title={`Flag of ${name}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.List>
            <Card.Item>
              <b>Population:</b> {population}
            </Card.Item>
            <Card.Item>
              <b>Region:</b> {region}
            </Card.Item>
            <Card.Item>
              <b>Capital:</b> {capital}
            </Card.Item>
          </Card.List>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}

export default CountryCard;

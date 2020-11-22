import React, { memo } from 'react';

import { Wrapper, Card } from './CountryCard.styles';
import { numberFormat } from 'Utils/Formater';

function CountryCard({
  alpha3Code: code,
  name,
  population,
  region,
  capital,
  flag,
}) {
  return (
    <Wrapper to={'/' + code}>
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
              <b>Population:</b> {numberFormat(+population)}
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

export default memo(CountryCard);

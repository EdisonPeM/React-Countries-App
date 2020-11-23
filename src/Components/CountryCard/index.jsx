import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Card } from './styles';
import { numberFormat } from 'Utils/Formater';

function CountryCard({ alpha3Code, name, population, region, capital, flag }) {
  return (
    <Wrapper to={'/' + alpha3Code}>
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

CountryCard.propTypes = {
  alpha3Code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default memo(CountryCard);

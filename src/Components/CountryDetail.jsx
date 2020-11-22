import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

import { numberFormat as nF } from 'Utils/Formater';
import LinkCard from './LinkCard';
import useCountries from 'Hooks/useCountries';

const Country = styled.article`
  padding: 30px 15px;
  @media (${generalStyles.breakpoint}) {
    padding: 0;
  }

  display: block;
  @media (${generalStyles.breakpoint}) {
    display: flex;
  }
`;

Country.Flag = styled.img`
  // object-fit: cover;

  height: auto;
  @media (${generalStyles.breakpoint}) {
    max-width: 600px;
    height: 400px;
  }
`;

Country.Info = styled.div`
  font-size: 14px;
  @media (${generalStyles.breakpoint}) {
    font-size: 16px;
  }
`;

function CountryDetail(props) {
  const [borders, loading, error] = useCountries(
    props.borders.length > 0 ? `alpha?codes=${props.borders.join(';')}` : ''
  );

  return (
    <Country>
      <Country.Flag
        src={props.flag}
        alt={`Flag of ${props.name}`}
        title={`Flag of ${props.name}`}
      />
      <Country.Info>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <b>Native Name:</b> {props.nativeName}
          </li>
          <li>
            <b>Population:</b> {nF(props.population)}
          </li>
          <li>
            <b>Region:</b> {props.region}
          </li>
          <li>
            <b>Sub Region:</b> {props.subregion}
          </li>
          <li>
            <b>Capital:</b> {props.capital}
          </li>
          <li>
            <b>Top Level Domain:</b> {props.topLevelDomain.join(', ')}
          </li>
          <li>
            <b>Currencies:</b> {props.currencies.map(m => m.name).join(', ')}
          </li>
          <li>
            <b>Languages:</b> {props.languages.map(l => l.name).join(', ')}
          </li>
        </ul>
        {props.borders.length > 0 && !loading && !error && (
          <ul>
            <b>Border Countries: </b>
            {borders.map(b => (
              <li key={b.alpha3Code} style={{ marginBottom: '10px' }}>
                <small>
                  <LinkCard to={'/' + b.alpha3Code}>{b.name}</LinkCard>
                </small>
              </li>
            ))}
          </ul>
        )}
      </Country.Info>
    </Country>
  );
}

CountryDetail.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  borders: PropTypes.array.isRequired,
};

export default CountryDetail;

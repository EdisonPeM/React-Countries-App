import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

import { numberFormat as nF } from 'Utils/Formater';

const CountryFlag = styled.img`
  object-fit: cover;

  height: auto;
  @media (${generalStyles.breakpoint}) {
    max-width: 560px;
    height: 400px;
  }
`;

function CountryDetail(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <CountryFlag
        src={props.flag}
        alt={`Flag of ${props.name}`}
        title={`Flag of ${props.name}`}
      />
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
      <div>
        <b>Border Countries: {props.borders.join(', ')}</b>
      </div>
    </section>
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

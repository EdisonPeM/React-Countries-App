import React from 'react';
import PropTypes from 'prop-types';

import { numberFormat as nF } from 'Utils/Formater';
import LinkCard from './LinkCard';
import useCountries from 'Hooks/useCountries';
import { Country, Borders } from './CountryDetail.styles';

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
      <Country.Body>
        <Country.Title>{props.name}</Country.Title>
        <Country.Info>
          <Country.List>
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
          </Country.List>
          <Country.List>
            <li>
              <b>Top Level Domain:</b> {props.topLevelDomain.join(', ')}
            </li>
            <li>
              <b>Currencies:</b> {props.currencies.map(m => m.name).join(', ')}
            </li>
            <li>
              <b>Languages:</b> {props.languages.map(l => l.name).join(', ')}
            </li>
          </Country.List>
        </Country.Info>
        <Borders>
          {props.borders.length > 0 ? (
            !loading &&
            !error && (
              <>
                <Borders.Title>Border Countries: </Borders.Title>
                <Borders.List>
                  {borders.map(b => (
                    <li key={b.alpha3Code}>
                      <LinkCard to={'/' + b.alpha3Code} small="true">
                        {b.name}
                      </LinkCard>
                    </li>
                  ))}
                </Borders.List>
              </>
            )
          ) : (
            <Borders.Title>Has No Border Countries</Borders.Title>
          )}
        </Borders>
      </Country.Body>
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

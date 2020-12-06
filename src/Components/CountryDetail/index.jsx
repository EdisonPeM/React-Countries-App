import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { numberFormat as nF } from 'Utils/Formater';
import LinkCard from '../LinkCard';
import useCountries from 'Hooks/useCountries';
import { Country, Borders } from './styles';

import CountryMap from 'Components/CountryMap';
import useGeoData from 'Hooks/useGeoData';

import Clock from 'Components/Clock';

function CountryDetail(props) {
  const geoData = useGeoData(props.alpha3Code);
  const { data: borders, loading, error } = useCountries(
    props.borders.length > 0 ? `alpha?codes=${props.borders.join(';')}` : ''
  );

  const timezones = useMemo(
    () =>
      props.timezones
        .map(t => t.substr(3, 3))
        .map(diff => diff.replace('0', ''))
        .map(tz =>
          tz.includes('+') ? tz.replace('+', '-') : tz.replace('-', '+')
        )
        .map(nDiff => `Etc/GMT${nDiff}`),
    [props]
  );

  const zoom = useMemo(() => {
    const { area } = props;
    if (area > 10000000) return 2;
    if (area > 1000000) return 3;
    if (area > 100000) return 4;
    if (area > 50000) return 5;
    if (area > 5000) return 6;
    if (area > 500) return 7;
    if (area > 50) return 8;
    return 9;
  }, [props]);

  return (
    <>
      <Helmet>
        <title>React Countries App | {props.name}</title>
      </Helmet>
      <Country>
        {props.showMap ? (
          <Country.Map>
            <CountryMap
              center={props.latlng}
              geoData={geoData}
              zoom={zoom}
              PopupInfo={() => (
                <p>
                  <strong>Country: </strong>
                  <span>{props.name}</span>
                  <br />
                  <strong>Capital: </strong>
                  <span>{props.capital}</span>
                  <br />
                  <strong>Area: </strong>
                  <em>{nF(props.area)} m2</em>
                  <br />
                  <strong>Population: </strong>
                  <em>{nF(props.population)}</em>
                </p>
              )}
            />
          </Country.Map>
        ) : (
          <Country.Flag
            src={props.flag}
            alt={`Flag of ${props.name}`}
            title={`Flag of ${props.name}`}
          />
        )}
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
                <b>Currencies:</b>{' '}
                {props.currencies.map(m => m.name).join(', ')}
              </li>
              <li>
                <b>Languages:</b> {props.languages.map(l => l.name).join(', ')}
              </li>
              <li>
                <b>Timezones:</b>
                <ul type="square">
                  {timezones.map((d, i) => (
                    <li key={i}>
                      <Clock timezone={d} />
                    </li>
                  ))}
                </ul>
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
    </>
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

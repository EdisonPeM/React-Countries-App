import React, { useState, useEffect } from 'react';

import useCountries from 'Hooks/useCountries';
import useInputControl from 'Hooks/useInputControl';

import Filters from 'Components/Filters';
import CardList from 'Components/CardList';
import Country from 'Components/CountryCard';

import LazyLoad, { forceCheck } from 'react-lazyload';

import PlaceHolder from 'Components/Placeholders/Home';
import CardPlaceholder from 'Components/Placeholders/Card';

import Error from 'Components/Errors/home';

import { normalizeText as n } from 'Utils/Formater';

function Home() {
  const { data: countries, loading, error } = useCountries(
    'all?fields=alpha3Code;name;capital;population;region;flag'
  );
  const [nameF, setNameF] = useInputControl('');
  const [regionF, setRegionF] = useState([]);

  const nameFilter = c => n(c.name).includes(n(nameF));
  const regionFilter = c => regionF.length === 0 || regionF.includes(c.region);

  useEffect(forceCheck);

  if (error) return <Error />;
  return (
    <>
      <Filters
        nameInput={{
          value: nameF,
          onChange: setNameF,
        }}
        regionInput={{
          value: regionF,
          setValue: setRegionF,
        }}
      />
      {loading ? (
        <PlaceHolder />
      ) : (
        <CardList>
          {countries
            .filter(nameFilter)
            .filter(regionFilter)
            .map(c => (
              <LazyLoad
                height={350}
                key={c.alpha3Code}
                placeholder={<CardPlaceholder />}
              >
                <Country {...c} />
              </LazyLoad>
            ))}
        </CardList>
      )}
    </>
  );
}

export default Home;

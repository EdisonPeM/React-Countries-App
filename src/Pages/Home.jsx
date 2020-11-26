import React, { useState, lazy, Suspense } from 'react';

import useCountries from 'Hooks/useCountries';
import useInputControl from 'Hooks/useInputControl';

import Filters from 'Components/Filters';

import PlaceHolder from 'Components/Placeholders/Home';

// import Error from 'Components/Errors/home';
// import Country from 'Components/CountryCard';
// import CardList from 'Components/CardList';

import { normalizeText as n } from 'Utils/Formater';

import loadable from '@loadable/component';
const Country = loadable(() => import('Components/CountryCard'));
const CardList = loadable(() => import('Components/CardList'));
const Error = lazy(() => import('Components/Errors/home'));

function Home() {
  const { data: countries, loading, error } = useCountries(
    'all?fields=alpha3Code;name;capital;population;region;flag'
  );
  const [nameF, setNameF] = useInputControl('');
  const [regionF, setRegionF] = useState([]);

  const nameFilter = c => n(c.name).includes(n(nameF));
  const regionFilter = c => regionF.length === 0 || regionF.includes(c.region);

  if (error)
    return (
      <Suspense>
        <Error />;
      </Suspense>
    );

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
        <CardList rowHeight={335}>
          {countries
            .filter(nameFilter)
            .filter(regionFilter)
            .map(c => (
              <Country key={c.alpha3Code} {...c} />
            ))}
        </CardList>
      )}
    </>
  );
}

export default Home;

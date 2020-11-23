import React, { useState } from 'react';

import useCountries from 'Hooks/useCountries';
import useInputControl from 'Hooks/useInputControl';

import Filters from 'Components/Filters';
import CardList from 'Components/CardList';
import Country from 'Components/CountryCard';

import { normalizeText as n } from 'Utils/Formater';

function Home() {
  const [countries, loading, error] = useCountries(
    'all?fields=alpha3Code;name;capital;population;region;flag'
  );
  const [nameF, setNameF] = useInputControl('');
  const [regionF, setRegionF] = useState([]);

  const nameFilter = c => n(c.name).includes(n(nameF));
  const regionFilter = c => regionF.length === 0 || regionF.includes(c.region);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error With Connection</div>;
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

      <CardList>
        {countries
          .filter(nameFilter)
          .filter(regionFilter)
          .map(c => (
            <Country key={c.alpha3Code} {...c} />
          ))}
      </CardList>
    </>
  );
}

export default Home;

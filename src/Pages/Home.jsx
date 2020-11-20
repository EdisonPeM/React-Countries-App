import React from 'react';

import useCountries from 'Hooks/useCountries';
import useInputControl from 'Hooks/useInputControl';

import Country from 'Components/CountryCard';
import Filters from 'Components/Filters';

import { normalizeText as n } from 'Utils/Formater';
import { Link } from 'react-router-dom';

function Home() {
  const [countries, loading, error] = useCountries(
    'all?fields=name;capital;population;region;flag'
  );
  const [nameF, setNameF] = useInputControl('');
  const [regionF, setRegionF] = useInputControl('All');

  const nameFilter = c => n(c.name).includes(n(nameF));
  const regionFilter = c => regionF === 'All' || c.region === regionF;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error With Connection</div>;
  return (
    <div>
      <Filters
        nameInput={{
          value: nameF,
          onChange: setNameF,
        }}
        regionInput={{
          value: regionF,
          onChange: setRegionF,
        }}
      />

      <div>
        {countries
          .filter(nameFilter)
          .filter(regionFilter)
          .map(c => (
            <Link key={c.name} to={c.name}>
              <Country {...c} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;

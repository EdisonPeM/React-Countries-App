import React, { lazy, Suspense, useMemo, useEffect, useContext } from 'react';

import useCountries from 'Hooks/useCountries';
import useInputControl from 'Hooks/useInputControl';
import useSessionStorage from 'Hooks/useSessionStorage';

import Filters from 'Components/Filters';

import PlaceHolder from 'Components/Placeholders/Home';

// import Error from 'Components/Errors/home';
// import Country from 'Components/CountryCard';
// import CardList from 'Components/CardList';

import { normalizeText as n } from 'Utils/Formater';

import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { FavsContext } from 'favsContext';

const Country = loadable(() => import('Components/CountryCard'));
const CardList = loadable(() => import('Components/CardList'));
const Error = lazy(() => import('Components/Errors/Home'));

function Home() {
  const { favs } = useContext(FavsContext);
  const { data: countries, loading, error } = useCountries(
    'all?fields=alpha3Code;name;capital;population;region;flag'
  );
  const [regionsF, setRegionsF] = useSessionStorage([], 'filters');
  const [nameF, setNameF] = useInputControl('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetName = () => setNameF({ target: { value: '' } });

  // Calculate Filters
  // useMemo se utiliza para "recordar" **valores** calculados
  // Se debe usar cuando el calculo es costoso
  const countriesPerRegion = useMemo(() => {
    if (regionsF.length === 0) return countries;
    return countries.filter(c => regionsF.includes(c.region));
  }, [countries, regionsF]);

  const filteredCountries = useMemo(() => {
    if (nameF === '') return countriesPerRegion;
    return countriesPerRegion.filter(
      c => n(c.name).includes(n(nameF)) || n(c.capital).includes(n(nameF))
    );
  }, [countriesPerRegion, nameF]);

  // Ordered Favs Countries First
  const filteredFavsCountries = useMemo(() => {
    const orderedCountries = [...filteredCountries];
    orderedCountries.sort(c => (favs.includes(c.alpha3Code) ? -1 : 1));
    return orderedCountries;
  }, [favs, filteredCountries]);

  // Render Section
  if (error)
    return (
      <Suspense fallback={<div>Error With Connection</div>}>
        <Error />
      </Suspense>
    );

  return (
    <>
      <Helmet>
        <title>React Countries App</title>
      </Helmet>
      <Filters
        onReset={resetName}
        nameInput={{
          value: nameF,
          onChange: setNameF,
        }}
        regionInput={{
          value: regionsF,
          setValue: setRegionsF,
        }}
      />

      {loading ? (
        <PlaceHolder />
      ) : (
        <CardList rowHeight={335}>
          {filteredFavsCountries.map(c => (
            <Country key={c.alpha3Code} {...c} />
          ))}
        </CardList>
      )}
    </>
  );
}

export default Home;

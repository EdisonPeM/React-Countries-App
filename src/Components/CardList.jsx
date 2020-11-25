import styled from 'styled-components';

import VirtualScroll from 'virtual-scroll-component';
import Country from 'Components/CountryCard';

import LazyLoad, { forceCheck } from 'react-lazyload';

import CardPlaceholder from 'Components/Placeholders/Card';
import { useEffect, useState } from 'react';

const List = styled(VirtualScroll)`
  display: grid !important;
  grid-template-columns: repeat(auto-fit, 265px);
  justify-content: space-around;
  gap: 70px;
`;

const DATA_LENGTH = 12;

function CardList({ items = [] }) {
  const [dataLimit, setDataLimit] = useState(DATA_LENGTH);
  const handleLastRow = () => {
    setDataLimit(dataLimit + DATA_LENGTH);
  };

  useEffect(forceCheck);

  return (
    <List onLastRow={handleLastRow} rowHeight={350}>
      {items.slice(0, dataLimit).map(c => (
        <LazyLoad
          height={230}
          key={c.alpha3Code}
          placeholder={<CardPlaceholder />}
        >
          <Country {...c} />
        </LazyLoad>
      ))}
    </List>
  );
}

export default CardList;

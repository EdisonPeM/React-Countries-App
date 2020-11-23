import React from 'react';

import FilterSelect from '../FilterSelect';

import { Wrapper, InputGroup, SearchIcon, Input } from './styles';

function Filters({ nameInput, regionInput }) {
  return (
    <Wrapper>
      <InputGroup>
        <Input
          title="Search for a country"
          placeholder="Search for a country..."
          {...nameInput}
        />
        <SearchIcon />
      </InputGroup>
      <InputGroup>
        <FilterSelect
          {...regionInput}
          options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
        />
      </InputGroup>
    </Wrapper>
  );
}

export default Filters;

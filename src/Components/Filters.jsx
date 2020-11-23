import React from 'react';

import { Wrapper, InputGroup, SearchIcon, Input } from './Filters.styles';

import FilterSelect from './FilterSelect';

function Filters({ nameInput, regionInput }) {
  return (
    <Wrapper>
      <InputGroup>
        <Input placeholder="Search for a country..." {...nameInput} />
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

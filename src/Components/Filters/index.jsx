import React from 'react';

import FilterSelect from '../FilterSelect';

import { Wrapper, InputGroup, SearchIcon, ResetIcon, Input } from './styles';

function Filters({ onReset, nameInput, regionInput }) {
  return (
    <Wrapper>
      <InputGroup>
        <Input
          title="Search for a country"
          placeholder="Search for a country..."
          {...nameInput}
        />
        <SearchIcon />
        {nameInput.value !== '' && <ResetIcon onClick={onReset} />}
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

import React from 'react';

import {
  Wrapper,
  InputGroup,
  SearchIcon,
  Select,
  Input,
} from './Filters.styles';

function Filters({ nameInput, regionInput }) {
  return (
    <Wrapper>
      <InputGroup>
        <Input placeholder="Search for a country..." {...nameInput} />
        <SearchIcon />
      </InputGroup>
      <InputGroup>
        <Select {...regionInput}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </InputGroup>
    </Wrapper>
  );
}

export default Filters;

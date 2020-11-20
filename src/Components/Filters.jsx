import React from 'react';
import styled from 'styled-components';

import { ElementMixin } from 'UI/Element';

const Input = styled.input`
  ${ElementMixin}
  color: ${({ theme }) => theme.inputText};
`;

function Filters({ nameInput, regionInput }) {
  return (
    <div>
      <Input {...nameInput} />
      <select {...regionInput}>
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;

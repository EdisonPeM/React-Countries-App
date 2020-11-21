import React from 'react';
import styled from 'styled-components';

import Element, { ElementMixin } from 'Styles/StyledElement';
import { generalStyles } from 'Styles/GlobalStyles';

const Wrapper = styled.div`
  padding: 48px 0;
  display: flex;
  flex-wrap: wrap;

  @media (${generalStyles.breakpoint}) {
    justify-content: space-between;
  }
`;

const Input = styled.input`
  ${ElementMixin}
  font: inherit;
  color: ${({ theme }) => theme.inputText};

  width: 100%;
  height: 54px;
  padding-left: 75px;
  border: none;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  position: relative;

  min-width: 100%;
  @media (${generalStyles.breakpoint}) {
    min-width: 37%;
  }
`;

const Select = styled(Element)`
  font: inherit;
  color: ${({ theme }) => theme.inputText};
  border: none;
  border-radius: 8px;
  height: 54px;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  margin-top: 50px;
  @media (${generalStyles.breakpoint}) {
    margin-top: 0;
  }
`;

function Filters({ nameInput, regionInput }) {
  return (
    <Wrapper>
      <InputGroup>
        <Input placeholder="Search for a country..." {...nameInput} />
      </InputGroup>
      <Select as="select">
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Wrapper>
  );
}

export default Filters;

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import MdSearch from 'react-ionicons/lib/MdSearch';
import Element, { ElementMixin } from 'Styles/StyledElement';
import { generalStyles } from 'Styles/GlobalStyles';

const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;

  @media (${generalStyles.breakpoint}) {
    justify-content: space-between;
    padding: 48px 0;
  }
`;

const Input = styled.input`
  ${ElementMixin}
  font: inherit;
  color: ${({ theme }) => theme.inputText};

  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }

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
  margin-top: 40px;
  @media (${generalStyles.breakpoint}) {
    margin-top: 0;
  }
`;

const SearchIcon = styled(MdSearch)`
  position: absolute;
  top: 50%;
  left: calc(75px / 2);
  transform: translate(-50%, -50%);
`;

function Filters({ nameInput, regionInput }) {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <InputGroup>
        <Input placeholder="Search for a country..." {...nameInput} />
        <SearchIcon color={theme.inputText} />
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

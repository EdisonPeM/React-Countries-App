import styled, { css } from 'styled-components';

import MdSearch from 'react-ionicons/lib/MdSearch';
import { ElementMixin } from 'Styles/StyledElement';
import { generalStyles } from 'Styles/GlobalStyles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  position: relative;

  flex-basis: 100%;
  padding: 20px 0;
  @media (${generalStyles.breakpoint}) {
    flex-basis: 50%;
    padding: 50px 0;
  }
`;

const InputMixin = css`
  ${ElementMixin}

  color: ${({ theme }) => theme.inputText};
  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }

  display: block;
  height: 50px;

  border: none;
  border-radius: 5px;
`;

const inputPadding = '75px';
export const Input = styled.input`
  ${InputMixin}

  width: 100%;
  padding: 0 15px;
  padding-left: ${inputPadding};
  @media (${generalStyles.breakpoint}) {
    max-width: 480px;
  }
`;

export const SearchIcon = styled(MdSearch)`
  // The fill property is for filling in the color of a SVG.
  fill: ${({ theme }) => theme.inputText};
  color: ${({ theme }) => theme.inputText};
  position: absolute;
  top: 50%;
  left: calc(${inputPadding} / 2);
  transform: translate(-50%, -50%);
`;

export const Select = styled.select`
  ${InputMixin}
  padding: 0 25px 0 20px;

  min-width: 200px;
  width: 50%;
  @media (${generalStyles.breakpoint}) {
    margin-left: auto;
    width: 200px;
  }
`;

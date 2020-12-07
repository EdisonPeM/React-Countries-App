import styled, { css } from 'styled-components';

import MdSearch from 'react-ionicons/lib/MdSearch';
import IosCloseCircle from 'react-ionicons/lib/IosCloseCircle';

import { IconMixin, ElementMixin } from 'Styles/Mixins';
import { generalStyles } from 'Styles/GlobalStyles';
import { breakpoints } from 'Styles/GlobalStyles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 10px;
  @media (${generalStyles.breakpoint}) {
    margin: 0;
  }
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

  color: ${({ theme }) => theme.color};
  &::placeholder {
    color: ${({ theme }) => theme.color};
  }

  display: block;
  height: 50px;
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
  ${IconMixin}
  position: absolute;
  top: 50%;
  left: calc(${inputPadding} / 2);
  transform: translate(-50%, -50%);
`;

export const ResetIcon = styled(IosCloseCircle)`
  // The fill property is for filling in the color of a SVG.
  ${IconMixin}
  position: absolute;
  top: 50%;
  left: calc(100% - ${inputPadding} / 2);
  transform: translate(-50%, -50%);

  @media (${breakpoints.laptop}) {
    left: calc(480px - ${inputPadding} / 2);
  }

  cursor: pointer;
`;

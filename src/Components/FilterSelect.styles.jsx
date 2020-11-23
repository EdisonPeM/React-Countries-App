import styled, { css } from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';
import { ElementMixin } from 'Styles/StyledElement';

import IosArrowDown from 'react-ionicons/lib/IosArrowDown';

export const Select = styled.div`
  ${ElementMixin}
  height: 50px;
  width: 50%;
  min-width: 200px;
  @media (${generalStyles.breakpoint}) {
    margin-left: auto;
    width: 200px;
  }

  font-size: 0.85em;
  cursor: pointer;
  position: relative;
`;

Select.Placeholder = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Select.Options = styled.div`
  ${ElementMixin}
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  padding: 15px 20px 15px 20px;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
`;

export const Option = styled.div`
  padding: 5px;

  position: relative;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;
    `}
`;

export const ChevronIcon = styled(IosArrowDown)`
  color: ${({ theme }) => theme.color};
  fill: ${({ theme }) => theme.color};
`;

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
  box-shadow: 0 -2px 10px -3px ${({ theme }) => theme.shadowColor};

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

  // CHANGE AFTER DEPLOY
  // opacity: 0.5;
  :hover {
    opacity: 1;
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;

      ::after {
        content: '';

        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);

        border-radius: 50%;
        border: solid;
      }
    `}
`;

export const ChevronIcon = styled(IosArrowDown)`
  color: ${({ theme }) => theme.color};
  fill: ${({ theme }) => theme.color};
`;

import styled, { css } from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';
import Link from 'Components/LinkCard';

import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import { breakpoints } from 'Styles/GlobalStyles';
import { IconMixin } from 'Styles/Mixins';

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinksMixin = css`
  margin: 40px 15px;
  font-size: 14px;
  @media (${generalStyles.breakpoint}) {
    font-size: 16px;

    height: 40px;
    width: 130px;
  }

  @media (${breakpoints.laptopL}) {
    margin: 80px 0;
  }
`;

export const LinkCard = styled(Link)`
  position: relative;
  text-align: left;
  padding-left: 30px;

  ${LinksMixin}
`;

export const ButtonCard = styled(Link).attrs(props => ({
  as: 'button',
}))`
  font-family: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;

  ${LinksMixin}
`;

export const BackIcon = styled(IosArrowRoundBack)`
  ${IconMixin}

  width: 30px;
  height: 30px;

  position: absolute;
  left: 20px;
`;

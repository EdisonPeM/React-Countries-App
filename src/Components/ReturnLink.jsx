import React from 'react';
import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';
import Link from 'Components/LinkCard';

import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import { breakpoints } from 'Styles/GlobalStyles';
import { IconMixin } from 'Styles/Mixins';

const LinkCard = styled(Link)`
  position: relative;
  text-align: left;
  padding-left: 30px;

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

const BackIcon = styled(IosArrowRoundBack)`
  ${IconMixin}

  width: 30px;
  height: 30px;

  position: absolute;
  left: 20px;
`;

function ReturnLink() {
  return (
    <LinkCard to="/">
      <BackIcon />
      <span>Back</span>
    </LinkCard>
  );
}

export default ReturnLink;

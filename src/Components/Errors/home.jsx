import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Mapa from './MapaMundi';
import { ElementMixin } from 'Styles/Mixins';
import { generalStyles } from 'Styles/GlobalStyles';
import themes from 'Styles/Themes';

import MdWarning from 'react-ionicons/lib/MdWarning';

const Wrapper = styled.div`
  padding: 30px 0;

  & > div {
    ${ElementMixin}
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 400px;
    @media (${generalStyles.breakpoint}) {
      height: 60vmin;
    }

    & > svg {
      position: absolute;
      width: 100%;

      left: 0;
      @media (${generalStyles.breakpoint}) {
        left: initial;
        width: auto;
      }
    }
  }
`;

const Title = styled.h2`
  position: relative;
  padding: 0 1em;
  text-align: center;
  text-shadow: 0 0 10px ${({ theme }) => theme.shadowColor};

  @media (${generalStyles.breakpoint}) {
    font-size: 2.5em;
  }

  & > * {
    vertical-align: middle;
    margin: 5px;
  }
`;

function HomeError() {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <div>
        <Mapa fill={theme === themes.light ? theme.shadowColor : theme.bg} />
        <Title>
          <MdWarning color={theme.color} />
          <span>Error With Connection</span>
        </Title>
      </div>
    </Wrapper>
  );
}

export default HomeError;

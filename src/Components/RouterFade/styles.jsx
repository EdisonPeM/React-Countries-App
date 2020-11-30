import styled from 'styled-components';
import { Router as ReachRouter } from '@reach/router';
import { generalStyles } from 'Styles/GlobalStyles';

export const className = 'page';
export const duration = 300;

export const Router = styled(ReachRouter)`
  &.${className}-enter {
    opacity: 0;
  }

  &.${className}-enter.${className}-enter-active {
    position: absolute;
    z-index: 100;
    width: calc(100% - 2 * ${generalStyles.mobile.paddingVieport});
    @media (${generalStyles.breakpoint}) {
      width: calc(100% - 2 * ${generalStyles.desktop.paddingVieport});
    }
    opacity: 1;
    transition: opacity ${duration}ms;
  }

  &.${className}-exit {
    opacity: 1;
  }

  &.${className}-exit-active {
    opacity: 0;
    transition: opacity ${duration}ms;
  }
`;

/**
 * &.${className}-enter {
    transform: translateX(calc(-100% - ${generalStyles.mobile.paddingVieport}));
    @media (${generalStyles.breakpoint}) {
      transform: translateX(
        calc(-100% - ${generalStyles.desktop.paddingVieport})
      );
    }
  }

  &.${className}-enter.${className}-enter-active {
    position: absolute;
    z-index: 100;
    width: calc(100% - 2 * ${generalStyles.mobile.paddingVieport});
    @media (${generalStyles.breakpoint}) {
      width: calc(100% - 2 * ${generalStyles.desktop.paddingVieport});
    }

    transform: translateX(0);
    transition: transform ${duration}ms;
  }

  &.${className}-exit {
    transform: translateX(0);
  }

  &.${className}-exit-active {
    opacity: 0.4;

    transform: translateX(calc(-100% - ${generalStyles.mobile.paddingVieport}));
    @media (${generalStyles.breakpoint}) {
      transform: translateX(
        calc(-100% - ${generalStyles.desktop.paddingVieport})
      );
    }
    transition: transform ${duration}ms;
  }
 */

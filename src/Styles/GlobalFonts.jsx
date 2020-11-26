import { css } from 'styled-components';

import NunitoSansLightTTF from './Fonts/Nunito/NunitoSans-Light.ttf';
import NunitoSansLightWoff from './Fonts/Nunito/NunitoSans-Light.woff2';

import NunitoSansSemiBoldTTF from './Fonts/Nunito/NunitoSans-SemiBold.ttf';
import NunitoSansSemiBoldWoff from './Fonts/Nunito/NunitoSans-SemiBold.woff2';

import NunitoSansExtraBoldTTF from './Fonts/Nunito/NunitoSans-ExtraBold.ttf';
import NunitoSansExtraBoldWoff from './Fonts/Nunito/NunitoSans-ExtraBold.woff2';

const GlobalFonts = css`
  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 300;
    font-style: normal;
    src: local('Nunito Sans'), url(${NunitoSansLightWoff}) format('woff2'),
      url(${NunitoSansLightTTF}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-style: normal;
    src: local('Nunito Sans'), url(${NunitoSansSemiBoldWoff}) format('woff2'),
      url(${NunitoSansSemiBoldTTF}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-style: normal;
    src: local('Nunito Sans'), url(${NunitoSansExtraBoldWoff}) format('woff2'),
      url(${NunitoSansExtraBoldTTF}) format('truetype');
    font-display: swap;
  } ;
`;

// @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

export default GlobalFonts;

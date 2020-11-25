import React from 'react';

import { Country } from 'Components/CountryDetail/styles';
import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

import Loader from './index';

const ImgLoader = styled(Loader)`
  height: 300px;
  @media (${generalStyles.breakpoint}) {
    max-height: 400px;
  }
`;

function Detail() {
  return (
    <Country>
      <Country.Flag as="div">
        <ImgLoader>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ImgLoader>
      </Country.Flag>
      <Country.Body>
        <Country.Title>Loading...</Country.Title>
        <Country.Info>
          <Country.List>
            <li>
              <Loader>
                <circle cx="10" cy="20" r="8" />
                <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="50" r="8" />
                <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="80" r="8" />
                <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="110" r="8" />
                <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
              </Loader>
            </li>
          </Country.List>
          <Country.List>
            <li>
              <Loader>
                <circle cx="10" cy="20" r="8" />
                <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="50" r="8" />
                <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="80" r="8" />
                <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="110" r="8" />
                <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
              </Loader>
            </li>
          </Country.List>
        </Country.Info>
      </Country.Body>
    </Country>
  );
}

export default Detail;

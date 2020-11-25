import React from 'react';

import { Country } from 'Components/CountryDetail/styles';
import styled from 'styled-components';
import ImgError from './Image';
import { ElementMixin } from 'Styles/Mixins';

const ImgErrorWrapper = styled.div`
  ${ElementMixin}

  svg {
    display: block;
    opacity: 0.4;
  }
`;

const SVG = styled.svg`
  display: block;
  opacity: 0.4;
`;

function Detail() {
  return (
    <Country>
      <Country.Flag as="div">
        <ImgErrorWrapper>
          <ImgError />
        </ImgErrorWrapper>
      </Country.Flag>
      <Country.Body>
        <Country.Title>Country does not exist</Country.Title>
        <Country.Info>
          <Country.List>
            <li>
              <SVG fillOpacity="0.3">
                <circle cx="10" cy="20" r="8" />
                <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="50" r="8" />
                <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="80" r="8" />
                <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="110" r="8" />
                <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
              </SVG>
            </li>
          </Country.List>
          <Country.List>
            <li>
              <SVG fillOpacity="0.3">
                <circle cx="10" cy="20" r="8" />
                <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="50" r="8" />
                <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="80" r="8" />
                <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                <circle cx="10" cy="110" r="8" />
                <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
              </SVG>
            </li>
          </Country.List>
        </Country.Info>
      </Country.Body>
    </Country>
  );
}

export default Detail;

import React from 'react';
import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

const Foot = styled.footer`
  height: 80px;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: 10px;
  @media (${generalStyles.breakpoint}) {
    font-size: initial; // 16px
  }
`;

function Footer() {
  return (
    <Foot>
      <p>
        <span>Challenge by </span>
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor.
        </a>
        <span> Coded by </span>
        <a
          href="https://github.com/EdisonPeM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edison Peñuela.
        </a>
      </p>
    </Foot>
  );
}

export default Footer;
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

  font-size: 12px;
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
        <br />
        <span>Icon from </span>
        <a
          href="https://pixabay.com/es/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153534"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenClipart-Vectors
        </a>
        <span> of </span>
        <a
          href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153534"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>
      </p>
    </Foot>
  );
}

export default Footer;

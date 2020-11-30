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
        <br />
        <small>
          <span>Imagen de </span>
          <a href="https://pixabay.com/es/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153534">
            OpenClipart-Vectors
          </a>
          <span> en </span>
          <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153534">
            Pixabay
          </a>
        </small>
      </p>
    </Foot>
  );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
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

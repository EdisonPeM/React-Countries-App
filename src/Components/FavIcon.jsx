import React, { useContext } from 'react';
import { FavsContext } from 'favsContext';

import IosHeart from 'react-ionicons/lib/IosHeart';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import styled, { ThemeContext } from 'styled-components';

const Heart = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

function FavIcon({ code = '', size = '24px' }) {
  const { isInFavs, toggleFav } = useContext(FavsContext);
  const theme = useContext(ThemeContext);

  const toggle = e => {
    e.preventDefault();
    toggleFav(code);
  };

  return (
    <Heart onClick={toggle}>
      {isInFavs(code) ? (
        <IosHeart fontSize={size} color={theme.color} />
      ) : (
        <IosHeartOutline fontSize={size} color={theme.color} />
      )}
    </Heart>
  );
}

export default FavIcon;

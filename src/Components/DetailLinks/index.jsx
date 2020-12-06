import React from 'react';

import { LinksWrapper, LinkCard, ButtonCard, BackIcon } from './styles';

function DetailLinks({ showMap, toggleShowMap }) {
  return (
    <LinksWrapper>
      <LinkCard to="/">
        <BackIcon />
        <span>Back</span>
      </LinkCard>
      <ButtonCard onClick={toggleShowMap}>
        {showMap ? 'Hide' : 'Show'} Map
      </ButtonCard>
    </LinksWrapper>
  );
}

export default DetailLinks;

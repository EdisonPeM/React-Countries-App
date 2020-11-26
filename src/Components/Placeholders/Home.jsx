import React from 'react';

// import Loader from './index';
import CardList from 'Components/CardList';
import CardPlaceholder from './Card';

function Detail() {
  return (
    <CardList rowHeight={335}>
      {Array.apply(null, { length: 12 }).map((a, i) => (
        <CardPlaceholder key={i} />
      ))}
    </CardList>
  );
}

export default Detail;

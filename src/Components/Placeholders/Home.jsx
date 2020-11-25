import React from 'react';

// import Loader from './index';
import CardList from 'Components/CardList';
import CardPlaceholder from './Card';

function Detail() {
  return (
    <CardList>
      {Array.apply(null, { length: 10 }).map((a, i) => (
        <CardPlaceholder key={i} />
      ))}
    </CardList>
  );
}

export default Detail;

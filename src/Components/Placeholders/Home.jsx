import React from 'react';

// import Loader from './index';
import CardList from 'Components/CardList';
import { Card } from 'Components/CountryCard/styles';

import Loader from './index';

function Detail() {
  return (
    <CardList>
      {Array.apply(null, { length: 10 }).map((a, i) => (
        <Card key={i}>
          <Card.Flag loading="lazy" as="div">
            <Loader>
              <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            </Loader>
          </Card.Flag>
          <Card.Body>
            <Card.Title>Loading...</Card.Title>
            <Card.List>
              <Loader>
                <rect x="0" y="15" rx="5" ry="5" width="220" height="10" />
                <rect x="0" y="45" rx="5" ry="5" width="220" height="10" />
                <rect x="0" y="75" rx="5" ry="5" width="220" height="10" />
              </Loader>
            </Card.List>
          </Card.Body>
        </Card>
      ))}
    </CardList>
  );
}

export default Detail;

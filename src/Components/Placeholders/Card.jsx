import React from 'react';

import { Card } from 'Components/CountryCard/styles';

import Loader from './index';

function CardPlaceholder() {
  return (
    <Card>
      <Card.Flag as="div">
        <Loader>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </Loader>
      </Card.Flag>
      <Card.Body>
        <Card.Title>Loading...</Card.Title>
        <Card.List>
          <Card.Item>
            <Loader>
              <rect x="0" y="15" rx="5" ry="5" width="220" height="10" />
              <rect x="0" y="45" rx="5" ry="5" width="220" height="10" />
              <rect x="0" y="75" rx="5" ry="5" width="220" height="10" />
            </Loader>
          </Card.Item>
        </Card.List>
      </Card.Body>
    </Card>
  );
}

export default CardPlaceholder;

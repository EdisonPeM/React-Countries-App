import styled from 'styled-components';
import VirtualScroll from 'virtual-scroll-component';

import { useState } from 'react';

const List = styled(VirtualScroll)`
  display: grid !important;
  grid-template-columns: repeat(auto-fit, 265px);
  justify-content: space-around;
  gap: 70px;
`;

const DATA_LENGTH = 6;

function CardList({ children, rowHeight = 'auto' }) {
  const [dataLimit, setDataLimit] = useState(DATA_LENGTH);
  const handleLastRow = () => {
    setDataLimit(dataLimit + DATA_LENGTH);
  };

  return (
    <List onLastRow={handleLastRow} rowHeight={rowHeight}>
      {children.slice(0, dataLimit)}
    </List>
  );
}

export default CardList;

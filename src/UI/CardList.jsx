import styled from 'styled-components';

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  padding: 10px;
`;

export default CardList;

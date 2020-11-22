import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

export const Country = styled.article`
  padding: 30px 15px;
  @media (${generalStyles.breakpoint}) {
    padding: 0;
  }

  display: grid;
  grid-template-columns: 320px;
  justify-content: center;
  gap: 50px;

  @media (${generalStyles.breakpoint}) {
    grid-template-columns: repeat(auto-fit, 600px);
    justify-content: space-between;
    // gap: 80px;
    // gap: 20px;
  }
`;

Country.Flag = styled.img`
  object-fit: cover;

  width: 100%;
  height: 230px;
  @media (${generalStyles.breakpoint}) {
    padding-right: 40px;
    height: 400px;
  }
`;

Country.Info = styled.div`
  font-size: 14px;
  @media (${generalStyles.breakpoint}) {
    font-size: 16px;
  }
`;

Country.Title = styled.h1`
  margin-top: 0;
  margin-bottom: 5px;
`;

Country.List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 25px 0;

  // Nested Items
  li {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Borders = styled.section``;

Borders.Title = styled.h2`
  font-size: 1.17em;
  font-weight: 800;
`;

Borders.List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;

  // Nested Items
  li {
    margin: 5px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

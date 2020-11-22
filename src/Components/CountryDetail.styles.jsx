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

Country.Body = styled.div`
  font-size: 14px;
  @media (${generalStyles.breakpoint}) {
    font-size: 16px;
  }
`;

Country.Title = styled.h1`
  @media (${generalStyles.breakpoint}) {
    font-size: 2em;
    margin-top: 35px;
    margin-bottom: 35px;
  }
  margin-top: 0;
  margin-bottom: 5px;
`;

Country.Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (${generalStyles.breakpoint}) {
    flex-direction: row;
  }
`;

Country.List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 25px 0;
  @media (${generalStyles.breakpoint}) {
    padding: 0;
  }

  // Nested Items
  li {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Borders = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  @media (${generalStyles.breakpoint}) {
    flex-direction: row;
  }
`;

Borders.Title = styled.h2`
  margin: 0;
  font-size: 1.17em;
  font-weight: 800;
  min-width: max-content;
  margin-right: 1rem;
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
    margin-left: 0;
  }
`;

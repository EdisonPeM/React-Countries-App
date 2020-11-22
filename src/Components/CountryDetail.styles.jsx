import styled from 'styled-components';
import { generalStyles, breakpoints } from 'Styles/GlobalStyles';

export const Country = styled.article`
  padding: 30px 15px;
  @media (${generalStyles.breakpoint}) {
    padding: 0;
    padding-bottom: 50px;
  }

  display: grid;
  grid-template-columns: minmax(auto, 320px);
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (${breakpoints.mobileL}) {
    grid-template-columns: minmax(320px, 1fr);
  }

  @media (${generalStyles.breakpoint}) {
    grid-template-columns: 600px;
  }

  @media (${breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }

  @media (${breakpoints.laptopL}) {
    grid-template-columns: repeat(2, 600px);
  }
`;

Country.Flag = styled.img`
  object-fit: cover;

  width: 100%;
  height: auto;
  min-height: 230px;
  max-height: 300px;

  @media (${generalStyles.breakpoint}) {
    padding-right: 40px;
    max-height: 400px;
  }

  @media (${breakpoints.laptopL}) {
    height: 400px;
  }
`;

Country.Body = styled.div`
  font-size: 14px;
  @media (${breakpoints.mobileL}) {
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
  display: grid;
  justify-content: space-between;

  @media (${breakpoints.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  @media (${generalStyles.breakpoint}) {
  }

  @media (${breakpoints.laptop}) {
    grid-template-columns: 1fr;
  }

  @media (${breakpoints.laptopL}) {
    grid-template-columns: repeat(2, 1fr);
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

  @media (${breakpoints.laptop}) {
    flex-direction: column;
  }

  @media (${breakpoints.laptopL}) {
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

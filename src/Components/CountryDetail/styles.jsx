import styled, { css } from 'styled-components';
import { generalStyles, breakpoints } from 'Styles/GlobalStyles';
import themes from 'Styles/Themes';

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
    align-items: start;
  }

  &::after {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -10;
    ${({ theme }) =>
      theme === themes.light &&
      css`
        background-color: white;
      `}
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

Country.Map = styled.div`
  border-radius: 5px;
  overflow: hidden;

  height: 300px;
  @media (${generalStyles.breakpoint}) {
    height: 400px;
  }
`;

Country.FavIcon = styled.div`
  float: right;
  @media (${generalStyles.breakpoint}) {
    float: left;
    margin-right: 10px;
  }
`;

Country.Title = styled.h1`
  @media (${generalStyles.breakpoint}) {
    font-size: 2em;
    margin-bottom: 35px;
  }

  @media (${breakpoints.laptopL}) {
    margin-top: 35px;
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
    margin-bottom: 10px;

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
    padding-top: 60px;
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
  min-width: max-content;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 25px;
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

import styled from 'styled-components';

import { ElementMixin } from 'Styles/Mixins';
import { Link } from '@reach/router';

export const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const Card = styled.article`
  ${ElementMixin}
  overflow: hidden;
  font-size: 14px;
`;

Card.Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

Card.Flag.PlaceHolder = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.shadowColor};
`;

Card.Body = styled.div`
  padding: 5px 25px;
  height: 175px;
`;

Card.FavIcon = styled.div`
  float: right;
  margin: 10px 0;
`;

// The Card is an Article, therefore the title must be an h1
Card.Title = styled.h1`
  font-size: 1.25em;
  margin: 15px 0;
`;

Card.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

Card.Item = styled.li`
  margin-bottom: 5px;
`;

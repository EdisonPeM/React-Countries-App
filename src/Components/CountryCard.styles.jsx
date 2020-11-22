import styled from 'styled-components';

import Element from 'Styles/StyledElement';
import { Link } from '@reach/router';

export const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const Card = styled(Element)`
  border-radius: 5px;
  overflow: hidden;
  font-size: 14px;
`;

Card.Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

Card.Body = styled.div`
  padding: 5px 25px;
  min-height: 175px;
`;

Card.Title = styled.h2`
  font-size: 1.25em;
  font-weight: 800;
  margin: 15px 0;
`;

Card.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

Card.Item = styled.li`
  margin-bottom: 5px;
  & > b {
    font-weight: 600;
  }
`;

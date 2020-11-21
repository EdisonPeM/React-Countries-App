import styled from 'styled-components';

import Element from 'Styles/StyledElement';
import { Link } from '@reach/router';

export const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const Card = styled(Element)`
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
`;

Card.Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

Card.Title = styled.h3`
  margin: 25px 0;
`;

Card.Body = styled.div`
  padding: 0 25px;
  min-height: 175px;
`;

Card.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

Card.Item = styled.li`
  margin-bottom: 10px;
`;

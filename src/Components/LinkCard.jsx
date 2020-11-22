import styled from 'styled-components';
import { Link } from '@reach/router';
import { ElementMixin } from 'Styles/StyledElement';

const LinkCard = styled(Link)`
  ${ElementMixin}
  text-decoration: none;
  text-align: center;

  padding: 5px;
  min-width: 100px;
  height: 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export default LinkCard;

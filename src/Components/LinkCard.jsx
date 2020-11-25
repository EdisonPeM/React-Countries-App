import styled from 'styled-components';
import { Link } from '@reach/router';
import { ElementMixin } from 'Styles/Mixins';

const LinkCard = styled(Link)`
  ${ElementMixin}

  ${({ small }) => small && 'font-size: smaller;'}

  text-decoration: none;
  text-align: center;

  padding: 5px 10px;
  min-width: 100px;
  height: 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export default LinkCard;

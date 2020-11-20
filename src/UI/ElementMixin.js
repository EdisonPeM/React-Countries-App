import { css } from 'styled-components';

const ElementMixin = css`
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default ElementMixin;

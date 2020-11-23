import { css } from 'styled-components';

export const ElementMixin = css`
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};

  border: none;
  border-radius: 5px;
`;

export const IconMixin = css`
  color: ${({ theme }) => theme.color};
  fill: ${({ theme }) => theme.color};
`;

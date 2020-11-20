import styled, { css } from 'styled-components';

export const ElementMixin = css`
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Element = styled.div`
  ${ElementMixin}
`;
export default Element;

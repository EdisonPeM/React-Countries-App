import styled, { css } from 'styled-components';

export const ElementMixin = css`
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};

  border: none;
  border-radius: 5px;
`;

const Element = styled.div`
  ${ElementMixin}
`;

export default Element;

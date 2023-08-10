import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 780)}px;
  margin: 0 auto;
  padding-inline: ${({ padding }) => (padding !== undefined ? padding : 0)}rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-inline: ${({ paddingmobile }) =>
      paddingmobile !== undefined ? paddingmobile : 0}rem;
  }
`;

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

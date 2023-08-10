import styled, { css } from "styled-components";

export const Title = css`
  font-family: "Inter", sans-serif;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-title);
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
`;

export const Paragraph = css`
  font-family: "Inter", sans-serif;
  font-size: var(--font-size-paragraph);
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  font-weight: ${({ weight }) =>
    weight ? weight : "var(--font-weight-regular)"};
  font-style: ${({ style }) => (style ? style : "none")};
`;

export const StyledH2 = styled.h2`
  ${Title};
`;

export const StyledH3 = styled.h3`
  ${Title};
`;

export const StyledParagraph = styled.p`
  ${Paragraph};
`;

export const StyledLabel = styled.label`
  ${Paragraph};
`;

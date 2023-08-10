import styled from "styled-components";

export const StyledImage = styled.img`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  align-self: ${({ alignself }) => (alignself ? alignself : "auto")};
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

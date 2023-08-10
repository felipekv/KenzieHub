import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.3125rem;
  margin-top: 0.6875rem;
  margin-bottom: 3.125rem;

  @media (max-width: 768px) {
    margin-top: 1.125rem;
    margin-bottom: 0.875rem;
    gap: 1.125rem;
  }
`;

export const StyledDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

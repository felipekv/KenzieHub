import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 7.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 8.1875rem;
    padding-top: 2.1875rem;
    padding-bottom: 2.1875rem;
    gap: 0.625rem;
  }
`;

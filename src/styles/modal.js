import styled from "styled-components";

export const DialogContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 780)}px;
  margin: 0 auto;
  padding-inline: ${({ padding }) => (padding !== undefined ? padding : 0)}rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: var(--color-grey-3);

  form{
    margin-top: 1rem;
    margin-bottom: 0;
    padding-top: 0;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
  }

  @media (max-width: 768px) {
    padding-inline: ${({ paddingmobile }) =>
      paddingmobile !== undefined ? paddingmobile : 0}rem;
  }
`;

export const StyledBox = styled.div `
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    padding-inline: 1.375rem;
    background-color: var(--color-grey-2);

    button{
        background-color: transparent;
        border-color: transparent;
        margin-right: -12px;
    }

    @media (max-width: 768px){
        height: 2.5rem;
    }
`

export const StyledButtonsContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    gap: 1.375rem;

    @media (max-width: 768px){
      gap: 1.0938rem;
    }
`

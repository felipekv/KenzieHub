import styled from "styled-components";

export const StyledLi = styled.li `
    height: 3.0625rem;
    display: flex;
    background-color: var(--color-grey-4);
    border-radius: 0.25rem;

    &:hover{
        background-color: var(--color-grey-2);
        cursor: pointer;
        p{
            color: var(--color-grey-0);
        }
    }
`;
export const StyledCardContainer = styled.button `
    width: 100%;
    height: 100%;
    appearance: none;
    border: none;
    border-radius: 0.25rem;
    padding-inline: 1.375rem;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        padding-inline: 0.75rem;
    }
`;

import styled from "styled-components";

export const StyledUl = styled.ul `
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-grey-3);
    border-radius: 0.25rem;

    @media (max-width: 768px){
        padding-inline: 0.5313rem;
    }
`;
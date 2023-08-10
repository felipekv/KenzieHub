import { StyledH3, StyledParagraph } from "../../../../styles/typography";
import { StyledCardContainer, StyledLi } from "./style";

export const TechCard = ({ title, status, onClick, id }) => {
  return (
    <StyledLi id={id} >
        <StyledCardContainer onClick={onClick}>
            <StyledH3 color="white">{title}</StyledH3>
            <StyledParagraph color="var(--color-grey-1)">{status}</StyledParagraph>
        </StyledCardContainer>
    </StyledLi>
  );
};

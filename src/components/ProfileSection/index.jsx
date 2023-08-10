import { StyledContainer } from "../../styles/container";
import { StyledH2, StyledParagraph } from "../../styles/typography";
import { StyledSection } from "./style";

export const ProfileSection = ({
  username,
  course,
  maxWidth,
  padding,
  paddingmobile,
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      paddingmobile={paddingmobile}
    >
      <StyledSection>
        <StyledH2 color="var(--color-grey-0)">{username}</StyledH2>
        <StyledParagraph color="var(--color-grey-1)">{course}</StyledParagraph>
      </StyledSection>
    </StyledContainer>
  );
};

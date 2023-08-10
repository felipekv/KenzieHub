import { StyledButton } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledH2 } from "../../styles/typography";
import { StyledDiv, StyledSection } from "./style";
import PlusIcon from "../../assets/plus.svg";
import { TechList } from "./TechList";
import { useTechContext } from "../../providers/TechProvider";

export const TechSection = ({ maxWidth, padding, paddingmobile }) => {
  const { openAddModal } = useTechContext();
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      paddingmobile={paddingmobile}
    >
      <StyledSection>
        <StyledDiv>
          <StyledH2 color="var(--color-grey-0)">Tecnologias</StyledH2>
          <StyledButton
            btheight="sm"
            btstyle="openModal"
            onClick={openAddModal}
          >
            <img
              src={PlusIcon}
              alt="Icone do operador MAIS, referente à adicionar"
            />
          </StyledButton>
        </StyledDiv>
        <TechList />
      </StyledSection>
    </StyledContainer>
  );
};

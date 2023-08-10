import { useTechContext } from "../../../providers/TechProvider";
import { StyledUl } from "./style";
import { TechCard } from "./TechCard";

export const TechList = ({}) => {
  const { techs, openInspectModal } = useTechContext();
  return (
    <StyledUl>
      {techs &&
        techs.map((tech) => (
          <TechCard
            title={tech.title}
            status={tech.status}
            key={tech.id}
            id={tech.id}
            onClick={(e) => {
                (e.target.parentElement.id ? (openInspectModal(e.target.parentElement.id)) : null);
                (e.target.parentElement.parentElement.id ? (openInspectModal(e.target.parentElement.parentElement.id)) : null);
            }}
          />
        ))}
    </StyledUl>
  );
};

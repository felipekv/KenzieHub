import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useTechContext } from "../../providers/TechProvider";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledH2 } from "../../styles/typography";
import { Input } from "../Input";
import { Select } from "../Select";
import {
  DialogContainer,
  StyledBox,
  StyledButtonsContainer,
} from "../../styles/modal";
import CloseIcon from "../../assets/close.svg";
import { editTechSchema } from "./editTechSchema";

export const InspectModal = () => {
  const {
    inspectModalIsOpen,
    closeInspectModal,
    editTech,
    removeTech,
    techTemp,
  } = useTechContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(editTechSchema),
  });

  const submit = (formData) => {
    editTech(formData, techTemp[0].id);
    reset();
  };
  return (
    <Dialog
      open={inspectModalIsOpen}
      onClose={closeInspectModal}
      sx={{
        "& .MuiDialog-container": {
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.25rem",
          margin: 0,
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "0.25rem",
          maxWidth: "369px",
          width: "100%",
          backgroundColor: "transparent",
          marginInline: "0.7813rem",
        },
      }}
    >
      <DialogContainer maxWidth={369}>
        <StyledBox>
          <StyledH2>Cadastrar Tecnologia</StyledH2>
          <StyledButton
            btheight="sm"
            btstyle="openModal"
            onClick={closeInspectModal}
          >
            <img src={CloseIcon} alt="Icone da letra X, referente à fechar" />
          </StyledButton>
        </StyledBox>
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <Input
            label="Nome"
            type="text"
            value={techTemp[0]?.title}
            placeholder={techTemp[0]?.title}
            {...register("title")}
            error={errors.title}
            disabled={true}
          />
          <Select
            {...register("status")}
            error={errors.status}
            label="Selecionar status"
          >
            {techTemp[0]?.status === "Iniciante" ? (
              <option value="">Iniciante</option>
            ) : (
              <option value="Iniciante">Iniciante</option>
            )}
            {techTemp[0]?.status === "Intermediário" ? (
              <option value="">Intermediário</option>
            ) : (
              <option value="Intermediário">Intermediário</option>
            )}
            {techTemp[0]?.status === "Avançado" ? (
              <option value="">Avançado</option>
            ) : (
              <option value="Avançado">Avançado</option>
            )}
          </Select>
          <StyledButtonsContainer>
            <StyledButton
              btheight="lg"
              btstyle="primary"
              type="submit"
              disabled={errors.status}
            >
              Salvar alterações
            </StyledButton>
            <StyledButton
              btheight="lg"
              btstyle="disable"
              type="button"
              onClick={() => {
                removeTech(techTemp[0].id);
              }}
            >
              Excluir
            </StyledButton>
          </StyledButtonsContainer>
        </StyledForm>
      </DialogContainer>
    </Dialog>
  );
};

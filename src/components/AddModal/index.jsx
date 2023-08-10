import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useTechContext } from "../../providers/TechProvider";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledH2 } from "../../styles/typography";
import { Input } from "../Input";
import { Select } from "../Select";
import { DialogContainer, StyledBox } from "../../styles/modal";
import CloseIcon from "../../assets/close.svg";
import { createTechSchema } from "./createTechSchema";

export const AddModal = () => {
  const { addModalIsOpen, closeAddModal, createTech } = useTechContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });

  const submit = (formData) => {
    createTech(formData);
    reset();
  };
  return (
    <Dialog
      open={addModalIsOpen}
      onClose={closeAddModal}
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
            onClick={closeAddModal}
          >
            <img src={CloseIcon} alt="Icone da letra X, referente à fechar" />
          </StyledButton>
        </StyledBox>
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite o nome"
            {...register("title")}
            error={errors.title}
          />
          <Select
            {...register("status")}
            error={errors.status}
            label="Selecionar status  "
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <StyledButton btheight="lg" btstyle="primary" type="submit">
            Cadastrar Tecnologia
          </StyledButton>
        </StyledForm>
      </DialogContainer>
    </Dialog>
  );
};

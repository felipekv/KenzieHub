import { StyledContainer } from "../../styles/container";
import { StyledForm } from "../../styles/form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/buttons";
import { StyledH2, StyledParagraph } from "../../styles/typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { Select } from "../../components/Select";
import Logo from "../../assets/logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserProvider";
import { useEffect } from "react";

export const Register = () => {
  const { loading, requestRegister, navigate } = useUserContext();

  useEffect(() => {
    if(localStorage.getItem("@KenzieHub:token") && localStorage.getItem("@KenzieHub:user")){
      navigate("/");
    }
  },[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const submit = async (formData) => {
    await requestRegister(formData);
    reset();
  };

  return (
    <StyledContainer maxWidth={370} padding={1} paddingmobile={0.75}>
      <Header
        maxWidth={370}
        padding={0}
        paddingmobile={0}
        justify="space-between"
        to="/"
        btheight="md"
        btstyle="link"
        backgroundcolor="var(--color-grey-3)"
        hoverbackgroundcolor="var(--color-grey-2)"
        text="Voltar"
        src={Logo}
        alt="Logo escrito Kenzie Hub"
        height="1.3125rem"
        width="7.625rem"
        mobileheight="1.0625rem"
        mobilewidth="6.0625rem"
      />
      <StyledContainer maxWidth={370} padding="0" paddingmobile="0">
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <StyledH2>Crie sua conta</StyledH2>
          <StyledParagraph color="var(--color-grey-1)">
            Rápido e grátis, vamos nessa
          </StyledParagraph>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
            error={errors.name}
            disabled={loading}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            error={errors.password}
            disabled={loading}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            {...register("confirm")}
            placeholder="Digite novamente sua senha"
            error={errors.confirm}
            disabled={loading}
          />
          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
            error={errors.bio}
            disabled={loading}
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
            error={errors.contact}
            disabled={loading}
          />
          <Select
            label="Selecionar módulo"
            {...register("course_module")}
            error={errors.course_module}
            disabled={loading}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </Select>
          <StyledButton btheight="lg" btstyle="primary" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledContainer>
  );
};

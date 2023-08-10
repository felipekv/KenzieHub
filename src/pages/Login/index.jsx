import { StyledContainer } from "../../styles/container";
import { StyledForm } from "../../styles/form";
import { Input } from "../../components/Input";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledH2, StyledParagraph } from "../../styles/typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import Logo from "../../assets/logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserProvider";
import { useEffect } from "react";

export const Login = () => {
  const { loading, requestLogin, navigate } = useUserContext();

  useEffect(() => {
    if(localStorage.getItem("@KenzieHub:token") && localStorage.getItem("@KenzieHub:user")){
      navigate("/home");
    }
  },[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = async (formData) => {
    await requestLogin(formData);
    reset();
  };

  return (
    <>
      <Header
        maxWidth={370}
        padding={0}
        paddingmobile={0}
        justify="center"
        src={Logo}
        alt="Logo escrito Kenzie Hub"
        height="1.25rem"
        width="9rem"
      />
      <StyledContainer maxWidth={370} padding={1} paddingmobile={0.75}>
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <StyledH2>Login</StyledH2>
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
          <StyledButton btheight="lg" btstyle="primary">
            {loading ? "Entrando..." : "Entrar"}
          </StyledButton>
          <StyledParagraph color="var(--color-grey-1)">
            Ainda não possui uma conta?
          </StyledParagraph>
          <StyledLink
            to="/register"
            btheight="lg"
            btstyle="link"
            width="100%"
            backgroundcolor="var(--color-grey-1)"
            hoverbackgroundcolor="var(--color-grey-2)"
            disabled={loading}
          >
            Cadastrar
          </StyledLink>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

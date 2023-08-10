import { useContext } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const requestLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);

      if (data) {
        localStorage.setItem("@KenzieHub:userID", data?.user?.id);
        localStorage.setItem("@KenzieHub:token", data?.token);
        localStorage.setItem("@KenzieHub:user", JSON.stringify(data?.user));
        toast.success("Login efetuado com sucesso!");
        setUser(data.user);
        setLoading(false);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
      setLoading(false);
    }
  };

  const requestRegister = async (formData) => {
    const { confirm, ...newFormData } = formData;

    try {
      setLoading(true);
      const { data } = await api.post("/users", newFormData);

      if (data) {
        toast.success("Conta criada com sucesso!");
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      toast.error("Ops! algo deu errado");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout efetuado com sucesso!");
    localStorage.removeItem("@KenzieHub:userID");
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:user");
    
    navigate("/");
    
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        requestLogin,
        requestRegister,
        loading,
        user,
        setUser,
        handleLogout,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

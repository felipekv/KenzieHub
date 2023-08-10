import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useUserContext } from "./UserProvider";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techTemp, setTechTemp] = useState({});
  const { user, setLoading } = useUserContext();
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [inspectModalIsOpen, setInspectModalIsOpen] = useState(false);

  const openAddModal = () => {
    setAddModalIsOpen(true);
  };

  const openInspectModal = (id) => {
    setTechTemp(techs.filter((tech) => tech.id === id));
    setInspectModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const closeInspectModal = () => {
    setInspectModalIsOpen(false);
  };

  const getTechs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/users/${user.id}`);

      if (data) {
        setTechs(data.techs);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const createTech = async (formData) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      setLoading(true);
      const { data } = await api.post("/users/techs", formData, {      
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        toast.success("Tecnologia adicionada com sucesso!");
        const newTech = [data, ...techs];
        setTechs(newTech);
        setLoading(false);
        setAddModalIsOpen(false);
      }
    } catch (error) {
      toast.error("Ops! algo deu errado");
      setLoading(false);
    }
  };

  const editTech = async (formData, id) => {
    const token = localStorage.getItem("@KenzieHub:token");
    const { title, ...newFormData } = formData;
    try {
      setLoading(true);
      const { data } = await api.put(`/users/techs/${id}`, newFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        toast.success("Tecnologia editada com sucesso!");
        let tempData = [];
        tempData = techs.filter((tech) => tech.id !== id);
        tempData.push(data);
        setTechs(tempData);
        setLoading(false);
        setInspectModalIsOpen(false);
      }
    } catch (error) {
      toast.error("Ops! algo deu errado");
      setLoading(false);
    }
  };

  const removeTech = async (id) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      setLoading(true);

      await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia excluída com sucesso!");
      const dataTemp = techs.filter((tech) => tech.id !== id);

      setTechs(dataTemp);
      setLoading(false);
      setInspectModalIsOpen(false);
    } catch (error) {
      setLoading(false);
      return toast.error("Ops! algo deu errado");
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        setTechs,
        getTechs,
        addModalIsOpen,
        inspectModalIsOpen,
        openAddModal,
        closeAddModal,
        openInspectModal,
        closeInspectModal,
        createTech,
        editTech,
        techTemp,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => {
  return useContext(TechContext);
};

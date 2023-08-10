import { useUserContext } from "../providers/UserProvider";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
};

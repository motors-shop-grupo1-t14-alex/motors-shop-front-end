import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext/UserContext";
import { api } from "../../services/axios";

export const ProtectedRouted = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {

    const myId: string | null = localStorage.getItem("@ID");
    const tokenString = localStorage.getItem("@TOKEN");

    if (!tokenString) {
      localStorage.clear();
      navigate("/login");

      return
    }

    const token = JSON.parse(tokenString)

    const checkIfUserIsValid = async () => {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const teste = await api.get(`/users/${myId}`)
        console.log(teste)
      } catch {
        localStorage.clear();
        navigate("/login");
      }
    }
    
    checkIfUserIsValid()
    
  }, []);

  return <>{user && <Outlet />}</>;
};

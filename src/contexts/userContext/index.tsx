import { api } from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import { iLoginData, iUser, iUserContext, iUserContextProps } from "./types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iRegisterData, iRegisterUpdate, iRegisterUpdateAddress } from "../../pages/registerPage/validators";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);
  const [openModalUpdateProfile, setOpenModalUpdateProfile] = useState(false);
  const [openModalUpdateAddress, setOpenModalUpdateAddress] = useState(false);

  useEffect(() => {
    async function infoUser() {
      const token = localStorage.getItem("@TOKEN");
      const myId: string | null = localStorage.getItem("@ID");

      if (!token && !myId) {
        return;
      }
      try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const myToken = JSON.parse(token!);
        api.defaults.headers.common.authorization = `Bearer ${myToken}`;
        const response = await api.get(`/users/${myId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    infoUser();
  }, [navigate]);

  async function login(data: iLoginData) {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@ID", JSON.stringify(response.data.user.id));
      localStorage.setItem(
        "@INFOS",
        JSON.stringify({
          name: response.data.user.name,
          is_seller: response.data.user.is_seller,
          description: response.data.user.description,
        })
      );
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUser(data: iRegisterData) {
    try {
      const response = await api.post("/users", data);

      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@ID");
    localStorage.removeItem("@INFOS");
    setUser(null);
    navigate("/login");
  }

  async function onSubmitFormUpdateUserProfile (data: iRegisterUpdate) {
    const id = localStorage.getItem("@ID");
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalUpdateProfile(false);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } 
  }

  async function onSubmitFormUpdateUserAddress (data: iRegisterUpdateAddress) {
    const id = localStorage.getItem("@ID");
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    const newData = {
      address: data
    }
    
    try {
      const response = await api.patch(`/users/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalUpdateAddress(false);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } 
  }

  async function deleteUser () {
    const id = localStorage.getItem("@ID");
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalUpdateProfile(false);
      logout();
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        registerUser,
        logout,
        openModalUpdateProfile,
        setOpenModalUpdateProfile,
        openModalUpdateAddress, 
        setOpenModalUpdateAddress,
        onSubmitFormUpdateUserProfile,
        onSubmitFormUpdateUserAddress,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { api } from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import {
    iMail,
    RecoveryPass,
    iCode,
    iLoginData,
    iUser,
    iUserContext,
    iUserContextProps,
} from "./types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iRegisterData, iRegisterUpdate, iRegisterUpdateAddress } from "../../pages/registerPage/validators";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate: NavigateFunction = useNavigate();
    const [exist, setExist] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailWaring, setEmailWaring] = useState(false);
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

    const login = async (data: iLoginData) => {
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
    };

    const registerUser = async (data: iRegisterData) => {
        try {
            const newData = {
                email: data.email,
                password: data.password,
                name: data.name,
                cpf: data.cpf,
                cellphone: data.cellphone,
                birth_date: data.birth_date,
                description: data.description,
                address: {
                    cep: data.cep,
                    uf: data.state,
                    city: data.city,
                    street: data.street,
                    number: data.streetNumber,
                    complement: data.complement,
                },
            };
            const response = await api.post("/users", newData);

            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const submitPassword = async (data: RecoveryPass) => {
        const code = window.location.pathname.split("/")[2];
        try {
            await api.patch(`/users/resetPassword/${code}`, {
                password: data.password,
            });

            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@ID");
        localStorage.removeItem("@INFOS");
        setUser(null);
        navigate("/login");
    };
    const submitCode = (data: iCode) => {
        if (data.code == code) {
            setExist(true);
        } else {
            console.log("erro");
        }
    };

    const openOrCloseEmailModal = () => {
        setEmailWaring(!emailWaring)

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

    const submitMail = async (data: iMail) => {
        try {
            setLoading(true);
            await api.post("/users/resetPassword", data);
            openOrCloseEmailModal()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

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
     ,
                exist,
                setExist,
                isSubmited,
                setIsSubmited,
                code,
                setCode,
                submitCode,
                submitMail,
                loading,
                setLoading,
                submitPassword,
                openOrCloseEmailModal,
                emailWaring
            }}
    
        >
      {children}
    </UserContext.Provider>
  );
};

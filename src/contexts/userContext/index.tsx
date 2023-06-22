import { api } from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import {
    Mail,
    iCode,
    iLoginData,
    iUser,
    iUserContext,
    iUserContextProps,
} from "./types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iRegisterData } from "../../pages/registerPage/validators";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
    const navigate: NavigateFunction = useNavigate();
    const [exist, setExist] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);
    const [code, setCode] = useState("");

    const [user, setUser] = useState<iUser | null>(null);

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
    const submitCode = (data: iCode) => {
        // console.log(data);
        if (data.code == code) {
            setExist(true);
        } else {
            console.log("erro");
        }
    };

    const submitMail = async (data: Mail) => {
        const response = await api.get("/users");
        const findEmail = response.data.find(
            (elem: iUser) => elem.email == data.email
        );

        if (!findEmail) {
            console.log("nao existe");
            return;
        }

        console.log(findEmail);
        const generateCode = `${Math.floor(Math.random() * 10)}${Math.floor(
            Math.random() * 10
        )}${Math.floor(Math.random() * 10)}${Math.floor(
            Math.random() * 10
        )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

        setIsSubmited(true);
        setCode(generateCode);
        console.log(generateCode);
        console.log(data);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                registerUser,
                logout,
                exist,
                setExist,
                isSubmited,
                setIsSubmited,
                code,
                setCode,
                submitCode,
                submitMail,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

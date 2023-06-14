import api from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import { iLoginData, iUser, iUserContext, iUserContextProps } from "./types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
    const navigate: NavigateFunction = useNavigate();

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
                navigate("/");
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
            setUser(response.data.user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    );
};

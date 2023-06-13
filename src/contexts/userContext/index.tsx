import { createContext, useState } from "react";
import { iUserProviderProps, iUserProviderValue } from "./type";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {

    const [modal, setModal] = useState<boolean>(false)

    const openOrCloseModal = () => {
        setModal(!modal)
    }

    return (
        <UserContext.Provider
          value={{
            openOrCloseModal,
            modal
          }}
        >
          {children}
        </UserContext.Provider>
      );
}
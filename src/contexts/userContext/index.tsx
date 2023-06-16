import { createContext, useState } from "react";
import { iUserProviderProps, iUserProviderValue } from "./type";
import { fipe_api } from "../../services/axios";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {

  const [createAdvertsModal, setCreateAdvertsModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<string[]>([])

  const getCarBrands = async () => {
    try {
      const { data } = await fipe_api.get("/cars")
      const brandList = Object.keys(data)

      setBrands(brandList)
    } catch (error) {
      console.error(error)
    }
  };

  const openOrCloseModal = () => {
    if (!createAdvertsModal) {
      getCarBrands()
    }
    setCreateAdvertsModal(!createAdvertsModal);
  }

  return (
    <UserContext.Provider
      value={{
        openOrCloseModal,
        createAdvertsModal,
        brands
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { createContext, useState } from "react";
import { iAdvertProviderProps, iAdvertProviderValue } from "./type";
import { fipe_api } from "../../services/axios";

export const AdvertContext = createContext({} as iAdvertProviderValue);

export const AdvertProvider = ({ children }: iAdvertProviderProps) => {

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
    <AdvertContext.Provider
      value={{
        openOrCloseModal,
        createAdvertsModal,
        brands
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

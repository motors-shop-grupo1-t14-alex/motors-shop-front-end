import { createContext, useEffect, useState } from "react";
import { iAdvert, iAdvertProviderProps, iAdvertProviderValue } from "./type";
import { api, fipe_api } from "../../services/axios";

export const AdvertContext = createContext({} as iAdvertProviderValue);

export const AdvertProvider = ({ children }: iAdvertProviderProps) => {
  const [createAdvertsModal, setCreateAdvertsModal] = useState<boolean>(false);
  const [createSuccessModal, setCreateSuccessModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [adverts, setAdverts] = useState<iAdvert[]>([]);

  const getAllAdverts: () => Promise<void> = async () => {
    try {
      const { data } = await api.get(`adverts`);
      setAdverts(data.adverts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAdverts();
  }, []);

  const getCarBrands = async () => {
    try {
      const { data } = await fipe_api.get("/cars");
      const brandList = Object.keys(data);

      setBrands(brandList);
    } catch (error) {
      console.error(error);
    }
  };

  const openOrCloseAdvertModal = () => {
    if (!createAdvertsModal) {
      getCarBrands();
    }
    setCreateAdvertsModal(!createAdvertsModal);
  };

  const createAdvertSuccessModal = () => {
    setCreateSuccessModal(!createSuccessModal);
  };

  return (
    <AdvertContext.Provider
      value={{
        openOrCloseAdvertModal,
        createAdvertsModal,
        createAdvertSuccessModal,
        createSuccessModal,
        brands,
        adverts,
        setAdverts,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

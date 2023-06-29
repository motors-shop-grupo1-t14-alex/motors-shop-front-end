import { createContext, useState } from "react";
import {
  iAdvertProviderProps,
  iAdvertProviderValue,
} from "./type";
import { api, fipe_api } from "../../services/axios";
import { iAdvert } from "../../pages/userPage/types";

export const AdvertContext = createContext({} as iAdvertProviderValue);

export const AdvertProvider = ({ children }: iAdvertProviderProps) => {
  const [createAdvertsModal, setCreateAdvertsModal] = useState<boolean>(false);
  const [createSuccessModal, setCreateSuccessModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [openModalUpdateAdvert, setOpenModalUpdateAdvert] = useState<boolean>(false);
  const [advertToUpdate, setAdvertToUpdate] = useState<iAdvert>()
  const [openModalConfirmDeleteAdvert, setOpenModalConfirmDeleteAdvert] = useState<boolean>(false);

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

  const openModalUpdateAdvertAndSetAdvert = (advertInfos: iAdvert) => {
    setAdvertToUpdate(advertInfos)
    setOpenModalUpdateAdvert(true)
    getCarBrands()
  }

  const deleteAdvert = async () => {
    if (!advertToUpdate) {
      return;
    }

    const id = advertToUpdate.id;
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.delete(`/adverts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalConfirmDeleteAdvert(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdvertContext.Provider
      value={{
        openOrCloseAdvertModal,
        createAdvertsModal,
        brands,
        createAdvertSuccessModal,
        createSuccessModal,
        openModalUpdateAdvert, 
        setOpenModalUpdateAdvert,
        advertToUpdate,
        openModalUpdateAdvertAndSetAdvert,
        openModalConfirmDeleteAdvert,
        setOpenModalConfirmDeleteAdvert,
        deleteAdvert,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

import { createContext, useState } from "react";
import {
  iAdvertProviderProps,
  iAdvertProviderValue,
} from "./type";
import { api, fipe_api } from "../../services/axios";
import { iAdvert } from "../../pages/userPage/types";
import { iAdvertComment } from "../../interfaces/advert.interface";

export const AdvertContext = createContext({} as iAdvertProviderValue);

export const AdvertProvider = ({ children }: iAdvertProviderProps) => {
  const [createAdvertsModal, setCreateAdvertsModal] = useState<boolean>(false);
  const [createSuccessModal, setCreateSuccessModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [openModalUpdateAdvert, setOpenModalUpdateAdvert] = useState<boolean>(false);
  const [advertToUpdate, setAdvertToUpdate] = useState<iAdvert>()
  const [openModalConfirmDeleteAdvert, setOpenModalConfirmDeleteAdvert] = useState<boolean>(false);
  const [deleteCommentModal, setDeleteCommentModal] = useState<boolean>(false)
  const [editCommentModal, setEditCommentModal] = useState<boolean>(false)
  const [commentContent, setCommentContent] = useState<string>()
  const [commentID, setCommentID] = useState<number>()

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

  const openOrCloseDeleteCommentModal = () => {

    setDeleteCommentModal(!deleteCommentModal)

  }

  const deleteComment = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
        await api.delete(`/comment/${commentID}`, {
          headers: { Authorization: `Bearer ${token}` }
        })

        openOrCloseDeleteCommentModal()
    } catch (error) {
        console.error(error);
    }
  }

  const openOrCloseEditCommentModal = () => {
    setEditCommentModal(!editCommentModal)
  }

  const editComment = async (data: iAdvertComment) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
        await api.patch(`/comment/${commentID}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        })

        openOrCloseEditCommentModal()
    } catch (error) {
        console.error(error);
    }
  }

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
        openOrCloseDeleteCommentModal,
        deleteCommentModal,
        commentID, 
        setCommentID,
        deleteComment,
        openOrCloseEditCommentModal,
        editCommentModal,
        commentContent, 
        setCommentContent,
        editComment
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

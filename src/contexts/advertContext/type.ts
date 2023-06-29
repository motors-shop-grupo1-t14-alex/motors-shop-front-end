import { iAdvert } from "../../pages/userPage/types";

export interface iAdvertProviderProps {
    children: React.ReactNode
}

export interface iAdvertProviderValue {
    openOrCloseAdvertModal: () => void,
    createAdvertsModal: boolean,
    brands: string[],
    createAdvertSuccessModal: () => void,
    createSuccessModal: boolean,
    openModalUpdateAdvert: boolean,
    setOpenModalUpdateAdvert: React.Dispatch<React.SetStateAction<boolean>>,
    advertToUpdate: iAdvert | undefined,
    openModalUpdateAdvertAndSetAdvert: (advertInfos: iAdvert) => void,
    openModalConfirmDeleteAdvert: boolean,
    setOpenModalConfirmDeleteAdvert: React.Dispatch<React.SetStateAction<boolean>>,
    deleteAdvert: () => Promise<void>,
}
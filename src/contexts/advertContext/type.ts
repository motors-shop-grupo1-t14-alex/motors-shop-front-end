import { Dispatch, SetStateAction } from "react";
import { iAdvert } from "../../pages/userPage/types";
import { iAdvertComment } from "../../interfaces/advert.interface";

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
    openOrCloseDeleteCommentModal: () => void,
    deleteCommentModal: boolean,
    commentID: number | undefined,
    setCommentID: Dispatch<SetStateAction<number | undefined>>,
    deleteComment: () => void,
    openOrCloseEditCommentModal: () => void,
    editCommentModal: boolean,
    commentContent: string | undefined,
    setCommentContent: Dispatch<SetStateAction<string | undefined>>,
    editComment: (data: iAdvertComment) => void
}
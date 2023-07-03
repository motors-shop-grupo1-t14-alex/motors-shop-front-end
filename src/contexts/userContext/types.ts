import { Dispatch, SetStateAction } from "react";
import { iRegisterData, iUpdateAddress, iUpdateProfile } from "../../pages/registerPage/validators";

export interface iUserContext {
    user: iUser | null;
    login: (data: iLoginData) => void;
    registerUser: (data: iRegisterData) => void;
    logout: () => void;
    exist: boolean;
    setExist: Dispatch<SetStateAction<boolean>>;
    isSubmited: boolean;
    setIsSubmited: Dispatch<SetStateAction<boolean>>;
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
    submitCode: (data: iCode) => void;
    submitMail: (data: iMail) => void;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    submitPassword: (data: RecoveryPass) => void;
    openOrCloseEmailModal: () => void;
    emailWaring: boolean;
    openModalUpdateProfile: boolean;
    setOpenModalUpdateAddress: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>;
    openModalUpdateAddress: boolean;
    onSubmitFormUpdateUserProfile: (data: iUpdateProfile) => Promise<void>;
    onSubmitFormUpdateUserAddress: (data: iUpdateAddress) => Promise<void>;
    deleteUser: () => Promise<void>;
    openModalConfirmDeleteUser: boolean;
    setOpenModalConfirmDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RecoveryPass {
    password: string;
    confirmPassword: string;
}

export interface iCode {
    code: string;
}

export interface iMail {
    email: string;
}

export type CodeNumber = [number];
export interface iUserContextProps {
    children: React.ReactNode;
}

export type iUser = {
    email: string | undefined;
    name: string | undefined;
    id: string;
    birth_date: string;
    cellphone: string;
    cpf: string;
    created_at: string;
    description: string;
    is_admin: boolean;
    is_seller: boolean;
    updated_at: string;
    address: iUpdateAddress;
};

export interface iLoginData {
    email: string;
    password: string;
}

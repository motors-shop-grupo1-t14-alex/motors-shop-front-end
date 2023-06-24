import { iRegisterData, iRegisterUpdate, iRegisterUpdateAddress } from "../../pages/registerPage/validators";

export interface iUserContext {
    user: iUser | null;
    login: (data: iLoginData) => void;
    registerUser: (data: iRegisterData) => void;
    logout: () => void;
    openModalUpdateProfile: boolean;
    setOpenModalUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>
    openModalUpdateAddress: boolean;
    setOpenModalUpdateAddress: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmitFormUpdateUserProfile(data: iRegisterUpdate): Promise<void>;
    onSubmitFormUpdateUserAddress(data: iRegisterUpdateAddress): Promise<void>;
    deleteUser(): Promise<void>;
}

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
    address: iRegisterUpdateAddress;
};

export interface iLoginData {
    email: string;
    password: string;
}

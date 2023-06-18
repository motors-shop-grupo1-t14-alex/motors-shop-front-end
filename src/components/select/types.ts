import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
    title: string;
    selectTitle: string;
    children: React.ReactNode;
    boxStyle: string;
    selectStyle: string;
    register?: UseFormRegisterReturn<string>
    ref?: React.MutableRefObject<undefined>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void 
}
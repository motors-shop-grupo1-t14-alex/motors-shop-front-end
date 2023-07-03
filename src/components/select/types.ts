import { RefObject } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
    title: string;
    selectTitle: string;
    children: React.ReactNode;
    boxStyle: string;
    selectStyle: string;
    register?: UseFormRegisterReturn<string>;
    ref?: RefObject<HTMLSelectElement>;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string;
    value?: string;
}
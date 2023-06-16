import { MutableRefObject, ReactEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
    title: string;
    selectTitle: string;
    children: React.ReactNode;
    boxStyle: string;
    selectStyle: string;
    register?: UseFormRegisterReturn<string>
    ref?: any
    onChange?: (event: any) => void 
}
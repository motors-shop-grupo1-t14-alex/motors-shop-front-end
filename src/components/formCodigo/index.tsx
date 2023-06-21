import { useForm } from "react-hook-form";
import {
    verifyCodeData,
    verifyCodeSchema,
} from "../../pages/passwordRecoveryPage/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Input } from "../input";

export const FormCodigo = () => {
    const { setExist, code } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<verifyCodeData>({
        mode: "onChange",
        resolver: zodResolver(verifyCodeSchema),
    });

    const submitCode = (data: any) => {
        // console.log(data);
        if (data.code == code) {
            setExist(true);
        } else {
            console.log("erro");
        }
    };
    return (
        <form
            onSubmit={handleSubmit(submitCode)}
            className="flex flex-col transition-all gap-6 pt-8 py-5 px-4 rounded-t bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:py-11  md:px-12"
        >
            <h2 className="text-2xl w-full">
                Insira aqui o codigo enviado em seu email
            </h2>
            <section className="w-full relative flex flex-col gap-1">
                <Input
                    children={"Codigo"}
                    css="gap-1"
                    id="code"
                    inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                    placeHolder="Digite seu email"
                    type="text"
                    register={register("code")}
                />
                <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                    {errors?.code ? errors.code.message : null}
                </span>
            </section>

            <button className="p-4 bg-brand1 text-white rounded w-full">
                Enviar
            </button>
        </form>
    );
};

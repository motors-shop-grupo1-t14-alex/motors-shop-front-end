import { useForm } from "react-hook-form";
import {
    VerifyEmailData,
    verifyEmailSchema,
} from "../../pages/passwordRecoveryPage/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { CSSProperties, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import ClipLoader from "react-spinners/ClipLoader";

export const FormEmail = () => {
    const { submitMail, loading } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VerifyEmailData>({
        mode: "onBlur",
        resolver: zodResolver(verifyEmailSchema),
    });

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "white",
    };

    return (
        <form
            onSubmit={handleSubmit(submitMail)}
            className="flex flex-col transition-all gap-6 pt-8 py-5 px-4 rounded-t bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:py-11  md:px-12"
        >
            <h2 className="text-2xl w-full">Verificação de email</h2>
            <p className="font-normal text-sm">
                Enviaremos um link ao seu email para iniciar a recuperação da
                senha
            </p>
            <section className="w-full relative flex flex-col gap-1">
                <Input
                    children={"Digite seu email"}
                    css="gap-1"
                    id="emailRecovery"
                    inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                    placeHolder="Digite seu email"
                    type="email"
                    register={register("email")}
                />
                <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                    {errors?.email ? errors.email.message : null}
                </span>
            </section>

            <button
                className="p-4 bg-brand1 text-white rounded w-full"
                disabled={loading}
            >
                {loading == false ? (
                    "Enviar"
                ) : (
                    <ClipLoader
                        cssOverride={override}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                )}
            </button>
        </form>
    );
};

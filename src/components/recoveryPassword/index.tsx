import { useForm } from "react-hook-form";
import {
    RecoveryPasswordData,
    recoveryPasswordSchema,
} from "../../pages/passwordRecoveryPage/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../form";
import { Input } from "../input";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const RecoveryPasswordForm = (): JSX.Element => {
    const { submitPassword } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RecoveryPasswordData>({
        mode: "onChange",
        resolver: zodResolver(recoveryPasswordSchema),
    });

    return (
        <Form
            onSubmit={handleSubmit(submitPassword)}
            inputCSS="flex flex-col transition-all gap-6 pt-8 py-5 px-4 rounded-t bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:py-11  md:px-12"
        >
            <h2 className="text-2xl w-full">Recuperação de senha</h2>
            <section className="w-full relative flex flex-col">
                <Input
                    children={"Digite uma nova senha"}
                    css="gap-1"
                    id="password"
                    inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                    placeHolder="Digite seu email"
                    type="password"
                    register={register("password")}
                />
                <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                    {errors?.password ? errors.password.message : null}
                </span>
            </section>
            <section className="w-full relative flex flex-col">
                <Input
                    children={"Confirmar nova senha"}
                    css="gap-1"
                    id="confirmPassword"
                    inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                    placeHolder="Digite sua senha"
                    type="password"
                    register={register("confirmPassword")}
                />
                <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                    {errors?.confirmPassword
                        ? errors.confirmPassword.message
                        : null}
                </span>
            </section>

            <button className="p-4 bg-brand1 text-white rounded w-full">
                Confirmar
            </button>
        </Form>
    );
};

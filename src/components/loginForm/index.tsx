import { useForm } from "react-hook-form";
import { Input } from "../input";
import { LoginData, loginSchema } from "../../pages/loginPage/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Form } from "../form";

export const FormLogin = (): JSX.Element => {
    const { login } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        mode: "onBlur",
        resolver: zodResolver(loginSchema),
    });

    return (
        <main className="bg-grey8 flex flex-col items-center justify-center h-700px mobileGG:h-screen py-8 font-medium">
            <Form
                onSubmit={handleSubmit(login)}
                inputCSS="flex flex-col transition-all gap-6 pt-8 pb-5 px-4 rounded-t bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:pt-11 md:pb-5 md:px-12"
            >
                <h2 className="text-2xl w-full">Login</h2>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Email"}
                        css="gap-1"
                        id="email"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite seu email"
                        type="email"
                        register={register("email")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.email ? errors.email.message : null}
                    </span>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Senha"}
                        css="gap-1"
                        id="password"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite sua senha"
                        type="password"
                        register={register("password")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.password ? errors.password.message : null}
                    </span>
                </section>

                <button className="p-4 bg-brand1 text-white rounded w-full">
                    Entrar
                </button>
            </Form>

            <div className="flex flex-col transition-all gap-6 px-4 rounded-b bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:pb-11 md:px-12">
                <Link
                    to="/passwordRecovery"
                    className="text-sm opacity-80 disabled:true w-full flex justify-end items-start "
                >
                    Esqueci minha senha
                </Link>

                <p>Ainda não possui conta?</p>

                <Link
                    className="p-4 border-2 border-gray4 rounded w-full flex justify-center items-center"
                    to="/register"
                >
                    Cadastrar
                </Link>
            </div>
        </main>
    );
};

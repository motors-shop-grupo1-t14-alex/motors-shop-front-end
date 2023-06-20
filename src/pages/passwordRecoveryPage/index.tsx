import { useForm } from "react-hook-form";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RecoveryPasswordData, recoveryPasswordSchema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/form";
import { Input } from "../../components/input";

export const RecoveryPassword = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RecoveryPasswordData>({
        mode: "onChange",
        resolver: zodResolver(recoveryPasswordSchema),
    });
    return (
        <>
            <Header />
            <main className="bg-grey8 flex flex-col items-center justify-center h-700px mobileGG:h-screen py-8 font-medium">
                <Form
                    onSubmit={(data) => console.log(data)}
                    inputCSS="flex flex-col transition-all gap-6 pt-8 py-5 px-4 rounded-t bg-white justify-center items-center w-95/100 md:w-1/2 lg:w-1/3 xl:w-30/100 2xl:w-1/4 md:py-11  md:px-12"
                >
                    <h2 className="text-2xl w-full">Login</h2>
                    <section className="w-full relative flex flex-col">
                        <Input
                            children={"Digite a nova senha"}
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
                            id="password"
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
            </main>
            <Footer />
        </>
    );
};

import { zodResolver } from "@hookform/resolvers/zod";
import {
    iRegisterData,
    registerSchema,
} from "../../pages/registerPage/validators";
import { useForm } from "react-hook-form";
import { Input } from "../input";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iRegisterData>({
        mode: "onBlur",
        resolver: zodResolver(registerSchema),
    });

    return (
        <main className="bg-grey8 flex items-center justify-center h-full py-8 font-medium">
            <form
                onSubmit={handleSubmit(() => console.log("submit"))}
                className="flex flex-col gap-6 w-95/100 py-8 px-4 rounded bg-white justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4 md:py-11 md:px-12"
            >
                <h2 className="text-2xl w-full">Registro</h2>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Nome"}
                        css="gap-1"
                        id="name"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite seu nome"
                        type="text"
                        register={register("name")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.name ? errors.name.message : null}
                    </span>
                </section>
                {/* <section className="w-full relative flex flex-col">
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
                        children={"CPF"}
                        css="gap-1"
                        id="cpf"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite seu nome"
                        type="text"
                        register={register("cpf")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.cpf ? errors.cpf.message : null}
                    </span>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Telefone"}
                        css="gap-1"
                        id="cellphone"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite seu telefone"
                        type="text"
                        register={register("cellphone")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.cellphone ? errors.cellphone.message : null}
                    </span>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Data de nascimento"}
                        css="gap-1"
                        id="birthdate"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digite seu nome"
                        type="date"
                        register={register("birthdate")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.birthdate ? errors.birthdate.message : null}
                    </span>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Descrição"}
                        css="gap-1"
                        id="email"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digitar descrição"
                        type="text"
                        register={register("description")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.description
                            ? errors.description.message
                            : null}
                    </span>
                </section>
                <p>Infomações de endereço</p>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"CEP"}
                        css="gap-1"
                        id="cep"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digitar cep"
                        type="text"
                        register={register("cep")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.cep ? errors.cep.message : null}
                    </span>
                </section>
                <section className="w-full relative flex gap-1">
                    <section className="">
                        <Input
                            children={"Estado"}
                            css="gap-1"
                            id="state"
                            inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                            placeHolder="Digitar estado"
                            type="text"
                            register={register("state")}
                        />
                        <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                            {errors?.state ? errors.state.message : null}
                        </span>
                    </section>
                    <section className="">
                        <Input
                            children={"Cidade"}
                            css="gap-1"
                            id="city"
                            inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                            placeHolder="Digitar cep"
                            type="text"
                            register={register("city")}
                        />
                        <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                            {errors?.city ? errors.city.message : null}
                        </span>
                    </section>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Rua"}
                        css="gap-1"
                        id="street"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digitar sua rua"
                        type="text"
                        register={register("street")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.street ? errors.street.message : null}
                    </span>
                </section>
                <section className="w-full relative flex gap-1">
                    <section className="">
                        <Input
                            children={"Número"}
                            css="gap-1"
                            id="streetNumber"
                            inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                            placeHolder="Digitar número"
                            type="text"
                            register={register("streetNumber")}
                        />
                        <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                            {errors?.streetNumber
                                ? errors.streetNumber.message
                                : null}
                        </span>
                    </section>
                    <section className="">
                        <Input
                            children={"Complemento"}
                            css="gap-1"
                            id="complement"
                            inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                            placeHolder="Digitar Complemento"
                            type="text"
                            register={register("complement")}
                        />
                        <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                            {errors?.complement
                                ? errors.complement.message
                                : null}
                        </span>
                    </section>
                </section>

                <p>Tipo de conta</p>

                <section className="w-full relative flex flex-col">
                    <select
                        name=""
                        id=""
                        className="w-full p-3 rounded bg-white border-gray7 border-2"
                    >
                        <option value="seller">Anunciante</option>
                        <option value="user">Comprador</option>
                    </select>
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.accontType ? errors?.accontType.message : null}
                    </span>
                </section>

                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Senha"}
                        css="gap-1"
                        id="password"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digitar senha"
                        type="text"
                        register={register("password")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.password ? errors.password.message : null}
                    </span>
                </section>
                <section className="w-full relative flex flex-col">
                    <Input
                        children={"Confirmar Senha"}
                        css="gap-1"
                        id="confirmPassword"
                        inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
                        placeHolder="Digitar senha"
                        type="text"
                        register={register("confirmPassword")}
                    />
                    <span className="opacity-70 w-full absolute -bottom-5 text-sm">
                        {errors?.confirmPassword
                            ? errors.confirmPassword.message
                            : null}
                    </span>
                </section>*/}
                <button className="p-4 bg-brand1 text-white rounded w-full">
                    Finalizar cadastro
                </button>
            </form>
        </main>
    );
};

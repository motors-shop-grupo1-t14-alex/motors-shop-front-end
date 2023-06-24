import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  iRegisterUpdate,
  registerUpdateSchema,
} from "../../pages/registerPage/validators";
import { ModalTemplate } from "../modalTemplate";
import { Form } from "../form/index";
import { Input } from "../input/index";
import { Button } from "../button";

export const ModalUpdateProfile = () => {
  const { user, setOpenModalUpdateProfile, onSubmitFormUpdateUserProfile, deleteUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUpdate>({
    mode: "onChange",
    resolver: zodResolver(registerUpdateSchema),
  });

  return (
    <ModalTemplate
      title="Editar perfil"
      style="bg-white w-9/10 rounded-[8px] h-[500px] sm:h-[530px] mobileGG:h-[600px] desktopG:h-[800px] flex flex-col items-center overflow-y-scroll max-w-[520px] scrollbar-thin"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={() => setOpenModalUpdateProfile(false)}
    >
      <div className="w-9/10">
        <Form
          inputCSS=""
          onSubmit={handleSubmit(onSubmitFormUpdateUserProfile)}
        >
          <p className="text-sm text-grey1 font-medium font-inter mb-[24px]">
            Informações pessoais
          </p>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Nome"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="name"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digite seu nome"
              type="text"
              register={register("name")}
              defaultValue={user ? user.name : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.name ? errors.name.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Email"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="email"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digite seu email"
              type="email"
              register={register("email")}
              defaultValue={user ? user.email : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.email ? errors.email.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"CPF"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="cpf"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digite seu cpf"
              type="text"
              register={register("cpf")}
              defaultValue={user ? user.cpf : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.cpf ? errors.cpf.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Telefone"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="cellphone"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digite seu telefone"
              type="text"
              register={register("cellphone")}
              defaultValue={user ? user.cellphone : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.cellphone ? errors.cellphone.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Data de nascimento"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="birth_date"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digite seu nome"
              type="date"
              register={register("birth_date")}
              defaultValue={user ? user.birth_date : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.birth_date ? errors.birth_date.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Descrição"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="description"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar descrição"
              type="text"
              register={register("description")}
              defaultValue={user ? user.description : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.description ? errors.description.message : null}
            </span>
          </section>

          <div className="flex justify-between gap-2 mb-[24px]">
            <Button
              type="submit"
              css="bg-grey6 text-grey2 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-grey5 hover:text-grey2"
              onClick={() => setOpenModalUpdateProfile(false)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              css="bg-alert3 text-alert1 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-alert2 hover:text-alert1"
              onClick={() => deleteUser()}
            >
              Excluir perfil
            </Button>

            <Button
              type="submit"
              css=" bg-brand1 text-brand4 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-brand2 hover:text-white"
            >
              Salvar alterações
            </Button>
          </div>
        </Form>
      </div>
    </ModalTemplate>
  );
};

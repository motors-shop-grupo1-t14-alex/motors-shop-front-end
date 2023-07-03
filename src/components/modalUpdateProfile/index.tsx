import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  iUpdateProfile,
  updateProfileSchema,
} from "../../pages/registerPage/validators";
import { ModalTemplate } from "../modalTemplate";
import { Form } from "../form/index";
import { Input } from "../input/index";
import { Button } from "../button";

export const ModalUpdateProfile = () => {
  const { 
    user, 
    setOpenModalUpdateProfile, 
    onSubmitFormUpdateUserProfile, 
    setOpenModalConfirmDeleteUser,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateProfile>({
    mode: "onChange",
    resolver: zodResolver(updateProfileSchema),
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
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
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
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
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
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
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
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
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
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
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
            <label htmlFor="desc" className="text-sm text-grey1 font-medium font-inter">Descrição</label>
            <textarea
              className="w-full max-h-[60px] min-h-[60px] pl-[5px] pt-[5px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mb-[24px] mt-[8px]"
              id="description"
              placeholder="Digitar descrição"
              {...register("description")}
              defaultValue={user ? user.description : ""}
              ></textarea>
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.description ? errors.description.message : null}
            </span>
          </section>

          <div className="flex justify-between gap-2 mb-[24px]">
            <Button
              type="button"
              css="bg-grey6 text-grey2 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-grey5"
              onClick={() => setOpenModalUpdateProfile(false)}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              css="bg-alert3 text-alert1 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-alert2"
              onClick={() => setOpenModalConfirmDeleteUser(true)}
            >
              Excluir perfil
            </Button>

            <Button
              type="submit"
              css=" bg-brand1 text-brand4 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-brand2"
            >
              Salvar alterações
            </Button>
          </div>
        </Form>
      </div>
    </ModalTemplate>
  );
};

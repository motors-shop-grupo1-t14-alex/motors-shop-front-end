import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  iRegisterUpdateAddress,
  registerUpdateAddressSchema,
} from "../../pages/registerPage/validators";
import { ModalTemplate } from "../modalTemplate";
import { Form } from "../form/index";
import { Input } from "../input/index";
import { Button } from "../button";

export const ModalUpdateAddressProfile = () => {
  const { user, setOpenModalUpdateAddress, onSubmitFormUpdateUserAddress } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUpdateAddress>({
    mode: "onChange",
    resolver: zodResolver(registerUpdateAddressSchema),
  });

  return (
    <ModalTemplate
      title="Editar endereço"
      style="bg-white w-9/10 rounded-[8px] h-[500px] sm:h-[530px] mobileGG:h-[600px] desktopG:h-[800px] flex flex-col items-center overflow-y-scroll max-w-[520px] scrollbar-thin"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={() => setOpenModalUpdateAddress(false)}
    >
      <div className="w-9/10">
        <Form
          inputCSS=""
          onSubmit={handleSubmit(onSubmitFormUpdateUserAddress)}
        >
          <p className="text-sm text-grey1 font-medium font-inter mb-[24px]">
            Informações de endereço
          </p>

          <section className="w-full relative flex flex-col">
            <Input
              children={"CEP"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="cep"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar cep"
              type="text"
              register={register("cep")}
              defaultValue={user ? user.address.cep : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.cep ? errors.cep.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Estado"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="state"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar UF"
              type="text"
              register={register("uf")}
              defaultValue={user ? user.address.uf : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.uf ? errors.uf.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Rua"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="street"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar sua rua"
              type="text"
              register={register("street")}
              defaultValue={user ? user.address.street : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.street ? errors.street.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Número"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="number"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar número"
              type="text"
              register={register("number")}
              defaultValue={user ? user.address.number : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.number ? errors.number.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Cidade"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="city"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar cep"
              type="text"
              register={register("city")}
              defaultValue={user ? user.address.city : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.city ? errors.city.message : null}
            </span>
          </section>

          <section className="w-full relative flex flex-col">
            <Input
              children={"Complemento"}
              css="text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="complement"
              inputCSS="w-full p-3 rounded bg-white border-gray7 border-2"
              placeHolder="Digitar Complemento"
              type="text"
              register={register("complement")}
              defaultValue={user ? user.address.complement : ""}
            />
            <span className="opacity-70 w-full absolute -bottom-5 text-sm">
              {errors?.complement ? errors.complement.message : null}
            </span>
          </section>

          <div className="flex justify-end w-full gap-2 mb-[24px]">
            <Button
              type="submit"
              css="bg-grey6 text-grey2 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[126px] hover:bg-grey5 hover:text-grey2"
              onClick={() => setOpenModalUpdateAddress(false)}
            >
              Cancelar
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

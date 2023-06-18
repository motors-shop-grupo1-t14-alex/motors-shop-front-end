import { useContext } from "react";
import { AdvertContext } from "../../contexts/advertContext";
import { ModalTemplate } from "../modalTemplate";

export const CreateWithSuccessAdvertModal = (): JSX.Element => {
  const { createAdvertSuccessModal } = useContext(AdvertContext);

  return (
    <ModalTemplate
      title="Sucesso!"
      style="bg-white w-9/10 rounded-[8px] h-[270px] flex flex-col items-center max-w-[520px]"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={createAdvertSuccessModal}
    >
      <div className="w-9/10">
        <p className="text-grey1 font-medium text-sm mobileM:text-base font-inter mb-[30px]">
          Seu anúncio foi criado com sucesso!
        </p>

        <p className="text-grey2 font-normal text-sm mobileM:text-base font-inter">
          Agora você poderá ver seus negócios crescendo em grande escala
        </p>
      </div>
    </ModalTemplate>
  );
};

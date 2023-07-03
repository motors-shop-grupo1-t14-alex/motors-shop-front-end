import { ModalTemplate } from "../modalTemplate";
import { iSuccessModal } from "./type";

export const SuccesModal = ({openOrClose, textOne, textTwo}: iSuccessModal): JSX.Element => {

  return (
    <ModalTemplate
      title="Sucesso!"
      style="bg-white w-9/10 rounded-[8px] h-[270px] flex flex-col items-center max-w-[520px]"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={openOrClose}
    >
      <div className="w-9/10">
        <p className="text-grey1 font-medium text-sm mobileM:text-base font-inter mb-[30px]">
          {textOne}
        </p>

        <p className="text-grey2 font-normal text-sm mobileM:text-base font-inter">
          {textTwo}
        </p>
      </div>
    </ModalTemplate>
  );
};

import { Button } from "../button";
import { ModalTemplate } from "../modalTemplate";
import { iConfirmationDeleteModal } from "./type";

export const ConfirmationDeleteModal = ({title, openOrClose, textOne, textTwo, onClickCancel, onClickDelete, textButtonDelete}: iConfirmationDeleteModal): JSX.Element => {

  return (
    <ModalTemplate
      title={title}
      style="bg-white w-9/10 rounded-[8px] h-[330px] flex flex-col items-center max-w-[520px]"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={openOrClose}
    >
      <div className="w-9/10">
        <p className="text-grey1 font-medium text-sm mobileM:text-base font-inter mb-[30px]">
          {textOne}
        </p>

        <p className="text-grey2 font-normal text-sm mobileM:text-base font-inter mb-[30px]">
          {textTwo}
        </p>

        <div className="flex justify-end gap-2">
            <Button
              type="button"
              css="bg-grey6 text-grey2 rounded-[4px] w-[30%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-grey5"
              onClick={onClickCancel}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              css="bg-alert3 text-alert1 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-alert2"
              onClick={onClickDelete}
            >
              {textButtonDelete}
            </Button>
          </div>
      </div>
    </ModalTemplate>
  );
};

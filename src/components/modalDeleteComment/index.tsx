import { useContext } from "react";
import { Button } from "../button"
import { ModalTemplate } from "../modalTemplate"
import { AdvertContext } from "../../contexts/advertContext";

export const ModalDeleteComment = () => {

    const { openOrCloseDeleteCommentModal, deleteComment } = useContext(AdvertContext)

    
    return (
        <ModalTemplate title="Deletar comentário" style="bg-white w-9/10 rounded-[8px] sm:w-[500px] h-[300px] flex flex-col items-center" headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1" OpenOrClose={openOrCloseDeleteCommentModal}>
            <div className="w-9/10 flex flex-col justify-center items-center">
                <p className="text-center font-inter mb-10">Você deseja deletar seu comentário ?</p>
                <Button css="bg-alert3 text-alert1 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-alert2" type="button" children={"Deletar"} onClick={deleteComment}/>
            </div>
        </ModalTemplate>
    )
}
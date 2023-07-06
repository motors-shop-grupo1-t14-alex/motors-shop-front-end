import { zodResolver } from "@hookform/resolvers/zod";
import { createCommentSchema } from "../../schemas/adverts.schema";
import { Button } from "../button";
import { ModalTemplate } from "../modalTemplate";
import { useForm } from "react-hook-form";
import { iAdvertComment } from "../../interfaces/advert.interface";
import { useContext } from "react";
import { AdvertContext } from "../../contexts/advertContext";

export const ModalUpdateComment = () => {
    
    const { openOrCloseEditCommentModal, commentContent, editComment } = useContext(AdvertContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iAdvertComment>({
        mode: "onBlur",
        resolver: zodResolver(createCommentSchema),
    });

    console.error(errors)

    return (
        <ModalTemplate title="Editar comentário" style="bg-white w-9/10 rounded-[8px] sm:w-[500px] h-[350px] flex flex-col items-center" headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1" OpenOrClose={openOrCloseEditCommentModal}>
            <form className="w-9/10" onSubmit={handleSubmit(editComment)}>

                <textarea className="w-full border-2 border-grey7 min-h-[128px] max-h-[128px] rounded-[4px] py-3 px-4 mt-6" placeholder="Comentário..." {...register("comment")} defaultValue={commentContent}>
                </textarea> 
                
                <div className="flex sm:justify-end">
                    <Button children={"Editar"} type="submit" css="bg-brand1 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white hover:bg-brand2 transition mt-6 sm:-mt-14 mr-3 z-0"/>
                </div>

                </form>
        </ModalTemplate>
    )
}
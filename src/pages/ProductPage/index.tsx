import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductInfos } from "../../components/productInfos";
import { ModalDeleteComment } from "../../components/modalDeleteComment";
import { useContext } from "react";
import { AdvertContext } from "../../contexts/advertContext";
import { ModalUpdateComment } from "../../components/modalUpdateComment";

export const ProductPage = (): JSX.Element => {
    const { deleteCommentModal, editCommentModal } = useContext(AdvertContext)

    return (
        <>
        {deleteCommentModal && <ModalDeleteComment/>}
        {editCommentModal && <ModalUpdateComment/>}
        <Header/>
        <ProductInfos/>
        <Footer/>
        </>
    )
}
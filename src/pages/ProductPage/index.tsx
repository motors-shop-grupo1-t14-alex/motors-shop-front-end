import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductInfos } from "../../components/productInfos";
import { ModalDeleteComment } from "../../components/modalDeleteComment";
import { useContext } from "react";
import { AdvertContext } from "../../contexts/advertContext";

export const ProductPage = (): JSX.Element => {
    const { deleteCommentModal } = useContext(AdvertContext)

    return (
        <>
        {deleteCommentModal && <ModalDeleteComment/>}
        <Header/>
        <ProductInfos/>
        <Footer/>
        </>
    )
}
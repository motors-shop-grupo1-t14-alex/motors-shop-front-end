import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductInfos } from "../../components/productInfos";
import { ProtectedRouted } from "../../components/protectedRoutes";

export const ProductPage = (): JSX.Element => {
    return (
        <>
        <ProtectedRouted />
        <Header/>
        <ProductInfos/>
        <Footer/>
        </>
    )
}
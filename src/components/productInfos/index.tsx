import { Comment } from "../comment";
import { ProductTag } from "../productTag";
import "../../index.css";
import { Button } from "../button";
import { api } from "../../services/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iHomeProducts } from "../../interfaces/home.interface";
import { iAdvertComment, iComment } from "../../interfaces/advert.interface";
import { CommentBox } from "../commentBox";
import { createCommentSchema } from "../../schemas/adverts.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const ProductInfos =  (): JSX.Element => {

    const navigate = useNavigate()

    const [productInfos, setProductInfos] = useState<iHomeProducts>()
    const [comments, setComments] = useState<iComment[]>()

    const productId = window.location.pathname.split("/")[2]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<iAdvertComment>({
        mode: "onBlur",
        resolver: zodResolver(createCommentSchema),
    });

    const createComment = async (data: iAdvertComment) => {

        const token = localStorage.getItem("@TOKEN")

        if (!token) {
            return
        }

        const advertId = window.location.pathname.split("/")[2]

        try {
            const myToken = JSON.parse(token);
            api.defaults.headers.common.authorization = `Bearer ${myToken}`;

            await api.post(`/comment/${advertId}`, data);
            reset()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {

        const getProductInfos = async () => {
            try {
                const { data } = await api.get(`/adverts/${productId}`)
                setProductInfos(data)
            } catch (error) {
                console.error(error)
                console.log(errors)
                navigate("/")
            }
        }

        const getComments = async () => {
            try {
                const { data } = await api.get(`/comment/${productId}`)
                setComments(data)
            } catch (error) {
                console.error(error)
            }
        }

        getProductInfos()
        getComments()
    }, [])

    const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

    const redirectToSellerPage = () => {
        navigate(`/seller/${productInfos?.user?.id}`)
    }

    return (
        <main className="bg-grey7 flex flex-col items-center background-product-page-mobile sm:background-product-page-desktop">
            
            <div className="w-9/10 max-w-screen-2xl flex flex-col items-center">
                <section className="sm:flex sm:justify-between w-full">
                    <section className="flex flex-col items-center">
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] flex justify-center items-center bg-grey10 rounded-[4px] mt-11 mb-4">
                            <img className="mobileGG:max-h-[400px] mobileGG:max-w-[450px]" src={productInfos && productInfos.cover_image} alt="car-product" />
                        </div>
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5">
                                <h1 className="font-Lexend font-bold text-xl mt-11">{productInfos && productInfos.model}</h1>
                                <div className="sm:flex sm:justify-between sm:items-center">
                                    <div className="mt-10 mb-8 flex gap-3">
                                        <ProductTag content={productInfos && productInfos.year}/>
                                        <ProductTag content={productInfos && productInfos.mileage}/>
                                    </div>
                                    <p className="font-Lexend text-base font-semibold text-grey mb-6">R$ {productInfos && productInfos.price}</p>
                                </div>
                                <Button children={"Comprar"} onClick={() => window.location.replace("https://web.whatsapp.com/")} type="button" css="bg-brand1 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white hover:bg-brand2 transition"/>
                            </div>
                        </div>
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5">
                                <h2 className="font-Lexend font-bold text-xl mt-11">Descrição</h2>
                                <p className="font-Lexend text-base font-normal text-grey2 mt-8 mobileGG:w-[60vw]">{productInfos && productInfos.description}</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col items-center sm:mt-11">
                        <div className="w-full sm:9/10 max-w-[420px] h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-9/10 desktopM:w-4/5">
                                <h1 className="font-Lexend font-bold text-xl mt-11">Fotos</h1>
                                <ul className="flex flex-wrap w-full mt-8 justify-between overflow-y-hidden sm:overflow-y-scroll desktopM:overflow-y-hidden h-[250px] desktopM:h-[260px] scrollbar-thin scrollbar-thumb-grey7 p-1">
                                    {productInfos?.gallery_images.map(item => <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center"> <img className="w-full" src={item.url_image} alt="gallery-img" /> </li>)}

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>

                                    <li className="hidden w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 sm:flex justify-center items-center"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full  max-w-[420px] h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5 flex flex-col justify-center items-center gap-7">
                                <div className="w-[80px] h-[80px] bg-brand1 rounded-full flex justify-center items-center">
                                    <p className="text-white text-3xl font-medium">
                                        {verificaEspaco(productInfos?.user?.name)
                                        ? `${productInfos?.user?.name.split(" ")[0].substring(0, 1)}${productInfos?.user?.name
                                            ?.split(" ")[1]
                                            .substring(0, 1)}`
                                        : productInfos?.user?.name && `${productInfos?.user?.name[0].toUpperCase()}`}
                                    </p>
                                </div>
                                <p className="text-xl font-bold font-Lexend text-grey1">{productInfos && productInfos.user?.name}</p>
                                <p className="text-base font-normal font-Lexend text-grey2 text-center">{productInfos && productInfos.user?.description}</p>
                                <Button onClick={redirectToSellerPage} children={"Ver todos anuncios"} type="button" css="bg-grey0 w-[206px] h-[48px] rounded-[4px] font-medium text-lg text-white hover:bg-grey1 transition"/>
                            </div>
                        </div>
                    </section>
                </section>
                    <section className="flex sm:w-full flex-col items-center sm:items-start mb-10">
                        <section className="flex flex-col items-center">
                            <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[845px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                                <div className="w-4/5">
                                    <h2 className="font-Lexend font-bold text-xl mt-11 mb-6">Comentários</h2>
                                    <ul className="overflow-y-scroll max-h-[700px] scrollbar-thin scrollbar-thumb-grey7 p-2 sm:w-[70vw]">
                                    {comments?.map(item => <Comment commentInfos={item}/>)}
                                    </ul>
                                    {comments?.length === 0 && <div className="w-full h-full flex justify-center items-center"> <p className="sm:text-xl">Nenhum comentário publicado</p> </div>}
                                </div>
                            </div>
                            
                            <CommentBox handleSubmit={handleSubmit} createComment={createComment} register={register}/>
                        </section>
                    </section>
            </div>
        </main>
    )
}
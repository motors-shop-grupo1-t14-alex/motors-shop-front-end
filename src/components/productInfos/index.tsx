import { Comment } from "../comment";
import { CommentSuggestion } from "../commentSuggestion";
import { ProductTag } from "../productTag";
import { UserProfile } from "../userProfile";
import "../../index.css";
import { Button } from "../button";

export const ProductInfos = (): JSX.Element => {
    return (
        <main className="bg-grey7 flex flex-col items-center background-product-page-mobile sm:background-product-page-desktop">
            
            <div className="w-9/10 max-w-screen-2xl flex flex-col items-center">
                <section className="sm:flex sm:justify-between w-full">
                    <section className="flex flex-col items-center">
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] flex justify-center items-center bg-grey10 rounded-[4px] mt-11 mb-4">
                            <img src="../src/assets/img/car-product.svg" alt="car-product" />
                        </div>
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5">
                                <h1 className="font-Lexend font-bold text-xl mt-11">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
                                <div className="sm:flex sm:justify-between sm:items-center">
                                    <div className="mt-10 mb-8 flex gap-3">
                                        <ProductTag content={"2013"}/>
                                        <ProductTag content={"0 KM"}/>
                                    </div>
                                    <p className="font-Lexend text-base font-semibold text-grey mb-6">R$ 00.000,00</p>
                                </div>
                                <Button children={"Comprar"} type="button" css="bg-brand1 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white hover:bg-brand2 transition"/>
                            </div>
                        </div>
                        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[355px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5">
                                <h2 className="font-Lexend font-bold text-xl mt-11">Descrição</h2>
                                <p className="font-Lexend text-base font-normal text-grey2 mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col items-center sm:mt-11">
                        <div className="w-full sm:9/10 max-w-[420px] h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-9/10 desktopM:w-4/5">
                                <h1 className="font-Lexend font-bold text-xl mt-11">Fotos</h1>
                                <ul className="flex flex-wrap w-full mt-8 justify-between overflow-y-hidden sm:overflow-y-scroll desktopM:overflow-y-hidden h-[250px] desktopM:h-[260px] scrollbar-thin scrollbar-thumb-grey7 p-1">
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                    <li className="w-[70px] h-[70px] mobileM:w-[80px] mobileM:h-[80px] mobileG:w-[90px] mobileG:h-[90px] rounded-[4px] bg-grey7 mb-10 flex justify-center items-center">
                                        <img className="w-full" src="../../src/assets/img/car-gallery-image.svg" alt="gallery-img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full  max-w-[420px] h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                            <div className="w-4/5 flex flex-col justify-center items-center gap-7">
                                <img src="../../src/assets/img/user-example.svg" alt="user-profile" />
                                <p className="text-xl font-bold font-Lexend text-grey1">Samuel Leão</p>
                                <p className="text-base font-normal font-Lexend text-grey2 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <Button children={"Ver todos anuncios"} type="button" css="bg-grey0 w-[206px] h-[48px] rounded-[4px] font-medium text-lg text-white hover:bg-grey1 transition"/>
                            </div>
                        </div>
                    </section>
                </section>
                        <section className="flex sm:w-full flex-col items-center sm:items-start mb-10">
                            <section className="flex flex-col items-center">
                                <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[845px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                                    <div className="w-4/5">
                                        <h2 className="font-Lexend font-bold text-xl mt-11 mb-6">Comentários</h2>
                                        <ul className="overflow-y-scroll max-h-[700px] scrollbar-thin scrollbar-thumb-grey7 p-2">
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                            <Comment/>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[414px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                                    <div className="w-4/5 pt-9">
                                        <UserProfile/>
                                        <textarea className="w-full border-2 border-grey7 min-h-[128px] max-h-[128px] rounded-[4px] py-3 px-4 mt-6" placeholder="Carro muito confortável, foi uma ótima experiência de compra...">
                                        </textarea>
                                        <div className="flex sm:justify-end">
                                            <Button children={"Comentar"} type="button" css="bg-brand1 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white hover:bg-brand2 transition mt-6 sm:-mt-14 mr-3 z-0"/>
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-6">
                                            <CommentSuggestion content={"Gostei muito!"}/>
                                            <CommentSuggestion content={"Incrível"}/>
                                            <CommentSuggestion content={"Recomendarei para meus amigos!"}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                
            </div>
        </main>
    )
}
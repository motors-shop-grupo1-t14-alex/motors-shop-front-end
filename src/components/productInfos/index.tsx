import { Comment } from "../comment";
import { CommentSuggestion } from "../commentSuggestion";
import { ProductTag } from "../productTag";
import { UserProfile } from "../userProfile";
import "../../index.css";

export const ProductInfos = (): JSX.Element => {
    return (
        <main className="bg-grey7 flex flex-col items-center background-product-page-mobile sm:background-product-page-desktop">
            <section className="w-9/10 h-[355px] flex justify-center items-center bg-grey10 rounded-[4px] mt-11 mb-4">
                <img src="../src/assets/img/car-product.svg" alt="car-product" />
            </section>

            <section className="w-9/10 h-[355px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                <div className="w-4/5">
                    <h1 className="font-Lexend font-bold text-xl mt-11">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
                    <div className="mt-10 mb-8 flex gap-3">
                        <ProductTag content={"2013"}/>
                        <ProductTag content={"0 KM"}/>
                    </div>
                    <p className="font-Lexend text-base font-semibold text-grey">R$ 00.000,00</p>
                </div>
            </section>

            <section className="w-9/10 h-[325px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                <div className="w-4/5">
                    <h2 className="font-Lexend font-bold text-xl mt-11">Descrição</h2>
                    <p className="font-Lexend text-base font-normal text-grey2 mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>

            <section className="w-9/10 h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
                <div className="w-4/5">
                    <h1 className="font-Lexend font-bold text-xl mt-11">Fotos</h1>

                    <ul className="flex flex-wrap w-full mt-8 justify-between">
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
            </section>

            <section className="w-9/10 h-[359px] bg-grey10 mb-6 flex justify-center rounded-[4px]"> 
                <div className="w-4/5 flex flex-col justify-center items-center gap-7">
                    <img src="../../src/assets/img/user-example.svg" alt="user-profile" />
                    <p className="text-xl font-bold font-Lexend text-grey1">Samuel Leão</p>
                    <p className="text-base font-normal font-Lexend text-grey2 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
            </section>

            <section className="w-9/10 h-[845px] bg-grey10 mb-6 flex justify-center rounded-[4px]"> 
                <div className="w-4/5">
                    <h2 className="font-Lexend font-bold text-xl mt-11 mb-6">Comentários</h2>
                    <ul className="overflow-y-scroll max-h-[700px]">
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </ul>
                </div>
            </section>

            <section className="w-9/10 h-[414px] bg-grey10 mb-6 flex justify-center rounded-[4px]"> 
                <div className="w-4/5 pt-9">
                    <UserProfile/>
                    <textarea className="w-full border-2 border-grey7 min-h-[128px] max-h-[128px] rounded-[4px] py-3 px-4 mt-6" placeholder="Carro muito confortável, foi uma ótima experiência de compra...">   
                    </textarea>

                    <div className="flex flex-wrap gap-3 mt-6">
                        <CommentSuggestion content={"Gostei muito!"}/>
                        <CommentSuggestion content={"Incrível"}/>
                        <CommentSuggestion content={"Recomendarei para meus amigos!"}/>
                    </div>
                </div>
            </section>-
        </main>
    )
}
import car from "../../assets/img/car.svg";
import { Button } from "../button";
import { ProductTag } from "../productTag";

const database = {
  name: "Product title stays here - max 1 line",
  img: car,
  year: "2019",
  mileage: `0 KM`,
  price: "R$ 00.000,00",
  imgProfile: "SL",
  user: "Samuel Leão",
  is_published: true
};

export const SellerProductCard = ({advertInfos, userInfos}: any) => {
    console.log(advertInfos)
  return (
    <section className="h-[500px] pl-5">
      <div className="flex flex-col gap-4 font-inter w-[275px]">
            {
                advertInfos.is_published ? <div className="relative z-0 ml-[12px] w-[51px] h-[24px] bg-brand1 text-white text-sm font-inter px-[8px] flex justify-center items-center top-[70px]">
                <p>Ativo</p>
                </div>
                :
                <div className="relative z-0 ml-[12px] w-[61px] h-[24px] bg-grey4 text-white text-smfont-inter px-[8px] flex justify-center items-center top-[70px]">
                <p>Inativo</p>
                </div>
            }

            <div className="flex items-center bg-grey7 mt-5 h-[152px]">
                <img src={advertInfos.cover_image} alt="carro de luxo" />
            </div>

            <p className="font-Lexend font-semibold">{advertInfos.name}</p>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
            </p>

            <div className="text-brand1 font-medium leading-6 text-[14px]">
                <div className="flex gap-3 items-center">
                    <ProductTag content={advertInfos.mileage}/>
                    <ProductTag content={advertInfos.year}/>
                    <div className="flex justify-end w-[59%] text-black font-bold">
                        <span>{advertInfos.price}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-[15px] font-inter font-semibold text-grey1 text-sm">
                <Button type="button" children={"Editar"} css="w-[80px] h-[38px] border-[1.5px] border-grey1 rounded-[4px] hover:bg-grey1 hover:text-grey10 transition"/>
                <Button type="button" children={"Ver detalhes"} css="w-[126px] h-[38px] border-[1.5px] border-grey1 rounded-[4px] hover:bg-grey1 hover:text-grey10 transition"/>
            </div>
      </div>

    </section>
  );
};

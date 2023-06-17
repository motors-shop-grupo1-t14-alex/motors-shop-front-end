import { Button } from "../button";
import { ProductTag } from "../productTag";
import { iSellerProductCard } from "./type";

export const SellerProductCard = ({advertInfos}: iSellerProductCard): JSX.Element => {

  return (
      <div className="flex flex-col gap-4 font-inter w-[275px]">
            {
                advertInfos.is_published ? <div className="relative z-0 ml-[12px] w-[51px] h-[24px] bg-brand1 text-white text-sm font-inter px-[8px] flex justify-center items-center top-[70px]">
                <p>Ativo</p>
                </div>
                :
                <div className="relative z-0 ml-[12px] w-[61px] h-[24px] bg-grey4 text-white text-sm font-inter px-[8px] flex justify-center items-center top-[70px]">
                <p>Inativo</p>
                </div>
            }

            <div className="flex items-center justify-center bg-grey7 mt-5 h-[152px] w-[275px]">
                <img className="max-h-[152px] max-w-[275px]" src={advertInfos.cover_image} alt="carro de luxo" />
            </div>

            <p className="font-Lexend font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{advertInfos.model}</p>

            <p className="font-normal font-inter text-grey2 text-sm max-h-[40px] min-h-[40px] overflow-hidden text-ellipsis">
              {advertInfos.description}
            </p>

            <div className="text-brand1 font-medium leading-6 text-[14px]">
                <div className="flex gap-3 items-center justify-between">
                    <div className="flex gap-2">
                      <ProductTag content={advertInfos.mileage}/>
                      <ProductTag content={advertInfos.year}/>
                    </div>
                    <div className="flex justify-end text-black font-bold">
                        <span>R$ {advertInfos.price}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-[15px] font-inter font-semibold text-grey1 text-sm">
                <Button type="button" children={"Editar"} css="w-[80px] h-[38px] border-[1.5px] border-grey1 rounded-[4px] hover:bg-grey1 hover:text-grey10 transition"/>
                <Button type="button" children={"Ver detalhes"} css="w-[126px] h-[38px] border-[1.5px] border-grey1 rounded-[4px] hover:bg-grey1 hover:text-grey10 transition"/>
            </div>
      </div>
  );
};

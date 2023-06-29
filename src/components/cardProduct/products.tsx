import { iProductCardInfos } from "../../interfaces/home.interface";
import { ProductTag } from "../productTag";

export const CardProduct = ({infos}: iProductCardInfos): JSX.Element => {
  
  const verificaEspaco = (string: string | undefined) => 
  string && string.indexOf(" ") >= 0;

  return (
    <div className="flex flex-col gap-4 font-inter w-[275px]">

      <div className="flex items-center justify-center bg-grey7 mt-5 h-[152px] w-[275px]">
        <img className="max-h-[152px] max-w-[275px]" src={infos.cover_image} alt="carro de luxo" />
      </div>

      <p className="font-Lexend font-semibold max-w-[26ch] overflow-hidden text-ellipsis whitespace-nowrap">{infos.model}</p>

      <p className="font-normal font-inter text-grey2 text-sm max-h-[40px] min-h-[40px] overflow-hidden text-ellipsis">{infos.description}</p>

      <div className="font-inter font-medium text-sm leading-6 flex items-center gap-2">
        <span className="w-[33px] h-[33px] bg-brand1 rounded-full flex justify-center items-center">
            <p className="text-white text-base font-medium">
              {verificaEspaco(infos.user.name)
                ? `${infos.user.name?.split(" ")[0].substring(0, 1)}${infos.user.name
                ?.split(" ")[1]
                .substring(0, 1)}`
                : infos.user.name && `${infos.user.name[0].toUpperCase()}`}
            </p>
          </span>
        <span className="text-grey2">{infos.user.name}</span>
      </div>

      <div className="text-brand1 font-medium leading-6 text-[14px]">

        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-2">
            <ProductTag content={infos.mileage}/>
            <ProductTag content={infos.year}/>
          </div>

          <div className="flex justify-end text-black font-bold">
            <span>R$ {infos.price}</span>
          </div>
        </div>

        </div>
    </div>
  );
};

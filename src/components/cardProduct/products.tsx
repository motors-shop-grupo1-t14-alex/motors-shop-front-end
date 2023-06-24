import { useContext } from "react";
import car from "../../assets/img/car.svg";
import { AdvertContext } from "../../contexts/advertContext";
import { iAdvert } from "../../contexts/advertContext/type";
import { ProductTag } from "../productTag";

export const CardProduct = ({ advertInfos }: { advertInfos: iAdvert }): JSX.Element => {
  const { handleClick } = useContext(AdvertContext);
  const verificaEspaco = (string: string | undefined) => string && string.indexOf(" ") >= 0;

  return (
    <li className="flex flex-col gap-4 font-inter w-[275px]" onClick={handleClick(advertInfos)}>
      <div className="flex items-center justify-center bg-grey7 mt-5 h-[152px]">
        <img src={car} alt="carro de luxo" />
      </div>

      <p className="font-Lexend font-semibold max-w-[26ch] overflow-hidden text-ellipsis whitespace-nowrap">{advertInfos.model}</p>

      <p className="font-normal font-inter text-grey2 text-sm max-h-[40px] min-h-[40px] overflow-hidden text-ellipsis">
        {advertInfos.description}
      </p>

      <div className="font-inter font-medium text-sm leading-6">
        <span className="text-white px-2 py-2 mr-2 rounded-[50%] bg-brand1">
          {advertInfos.user !== null &&
            (verificaEspaco(advertInfos.user?.name)
              ? `${advertInfos.user?.name?.split(" ")[0].substring(0, 1)}${advertInfos.user?.name?.split(" ")[1].substring(0, 1)}`
              : advertInfos.user.name && `${advertInfos.user?.name[0].toUpperCase()}`)}
        </span>
        <span className="text-grey2">{advertInfos.user.name}</span>
      </div>

      <div className="text-brand1 font-medium leading-6 text-[14px]">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-2">
            <ProductTag content={advertInfos.mileage} />
            <ProductTag content={advertInfos.year} />
          </div>

          <div className="flex justify-end text-black font-bold">
            <span>{advertInfos.price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

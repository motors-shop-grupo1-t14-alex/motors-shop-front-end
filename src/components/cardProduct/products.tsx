import car from "../../assets/img/car.svg";
import { ProductTag } from "../productTag";

const database = {
  name: "Product title stays here - max 1 line aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  img: car,
  year: "2019",
  km: `0 KM`,
  price: "R$ 00.000,00",
  imgProfile: "SL",
  user: "Samuel Leão",
};

export const CardProduct = () => {
  return (
    <section className="pl-5 h-[400px]">

      <div className="flex flex-col gap-4 font-inter w-[275px]">

        <div className="flex items-center justify-center bg-grey7 mt-5 h-[152px]">
          <img src={car} alt="carro de luxo" />
        </div>

        <p className="font-Lexend font-semibold max-w-[26ch] overflow-hidden text-ellipsis whitespace-nowrap">{database.name}</p>

        <p className="font-normal font-inter text-grey2 text-sm max-h-[40px] min-h-[40px] overflow-hidden text-ellipsis">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting
          industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>

        <div className="font-inter font-medium text-sm leading-6">
          <span className="text-white px-2 py-2 mr-2 rounded-[50%] bg-brand1">{database.imgProfile}</span>
          <span className="text-grey2">{database.user}</span>
        </div>

        <div className="text-brand1 font-medium leading-6 text-[14px]">

          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-2">
              <ProductTag content={database.km}/>
              <ProductTag content={database.year}/>
            </div>

            <div className="flex justify-end text-black font-bold">
              <span>{database.price}</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

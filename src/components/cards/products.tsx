import car from "../../assets/img/car.svg";

const database = {
  name: "Product title stays here - max 1 line",
  img: car,
  year: "2019",
  km: `0 KM`,
  price: "R$ 00.000,00",
  imgProfile: "SL",
  user: "Samuel Leão",
};

export const CardProduct = () => {
  return (
    <section className="pl-5">
      <div className="flex flex-col gap-4 font-inter w-[275px]">
        <div className="flex items-center bg-grey7 mt-5 h-[152px]">
          <img src={car} alt="carro de luxo" />
        </div>
        <p className="font-Lexend font-semibold">{database.name}</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="font-inter font-medium text-sm leading-6">
            <span className="text-white px-2 py-2 mr-2 rounded-[50%] bg-brand1">{database.imgProfile}</span>
            <span className="text-grey2">{database.user}</span>
        </div>
        <div className="text-brand1 font-medium leading-6 text-[14px]">
          <div className="flex gap-3 items-center">
            <span className="bg-brand4 px-1 py-2 rounded-[4px]">
              {database.km}
            </span>
            <span className="bg-brand4 px-1 py-2 rounded-[4px]">
              {database.year}
            </span>
            <div className="flex justify-end w-[59%] text-black font-bold">
            <span>{database.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SellerProductCard } from "../../components/sellerProductCard";
import { api } from "../../services/axios";
import { iAdvert } from "./types";
import "../../index.css";
import { CardProduct } from "../../components/cardProduct/products";

const database = {
  imgProfile: "SL",
  name: "Samuel Leão",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quia tempore quaerat ullam dolores porro dolor quas esse, adipisci corrupti soluta necessitatibus eum corporis molestiae possimus voluptas, numquam nulla!",
};

export const PublicSellerPage = (): JSX.Element => {
  const [adverts, setAdverts] = useState<iAdvert[]>([]);

  //   useEffect(() => {
  //     const getUserAdverts = async () => {
  //       try {
  //         const { data } = await api.get(`adverts/user`);

  //         setAdverts(data.adverts);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getUserAdverts();
  //   }, []);

  return (
    <>
      <Header />

      <main className="flex flex-col items-center background-user-page">
        <section className="w-9/10 bg-grey10 rounded-[4px] mt-[65px] flex justify-center font-inter mb-[76px] max-w-screen-xl">
          <div className="flex flex-col w-9/10 py-14">
            <div className="w-[104px] h-[104px] bg-brand1 rounded-full flex justify-center items-center">
              <p className="text-white text-4xl font-medium">
                {database.imgProfile}
              </p>
            </div>

            <div className="flex gap-[9px] my-[24px]">
              <p className="text-[20px] font-semibold text-grey1 font-lexend">
                {database.name}
              </p>
              <p className="bg-brand4 text-brand1 px-[8px] py-[4px] rounded-[4px] text-sm font-medium">
                Anunciante
              </p>
            </div>

            <p>{database.description}</p>
          </div>
        </section>

        <section className="flex-col flex justify-center mb-[200px] w-9/10">
          <p className="text-2xl font-bold mb-[70px] ml-[80px]">Anúncios</p>
          <div className="flex justify-center w-full max-w-screen-l">
            <ul className="flex gap-y-14 justify-start sm:justify-between overflow-x-scroll md:flex-wrap md:overflow-hidden w-full max-w-screen-xl">
              {/* {adverts.map((items) => (
                <SellerProductCard key={items.id} advertInfos={items} />
              ))} */}
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </ul>
          </div>
        </section>

        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-10 md:mt-16 md:mb-16">
          <span className="text-grey3 m-auto md:m-0">
            <strong>1</strong> de 2
          </span>
          <span className="m-auto md:m-0 text-brand1 cursor-pointer font-bold">
            Seguinte {">"}
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};

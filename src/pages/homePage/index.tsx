import { CardProduct } from "../../components/cards/products";
import { Header } from "../../components/header";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="mb-5">
        <div className="h-[625px] bannerMobile bg-fixed bg-center bg-cover">
          <h1 className="text-center absolute px-4 text-lg font-Lexend font-medium top-44 text-white">
            <strong className="text-2xl">Motors Shop</strong>
            <br></br>
            <br></br> A melhor plataforma de anúncios de carros do país
          </h1>
        </div>
        <CardProduct />
        <div className="flex justify-center items-center mt-24 mb-12 text-white text-[16px] font-semibold">
          <button className="bg-brand1 w-[70vw] h-[48px] rounded-[4px] border-[1.5px] cursor-pointer border-brand1">
            Filtros
          </button >
        </div>
        
        <div className="flex flex-col gap-3">
            <span className="text-grey3 m-auto"><strong>1</strong> de 2</span>
            <span className="m-auto text-brand1 cursor-pointer font-bold">Seguinte {">"}</span>
        </div>
      </main>
    </>
  );
};


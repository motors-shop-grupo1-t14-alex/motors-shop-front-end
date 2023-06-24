import { useContext, useState } from "react";
import { CardProduct } from "../cardProduct/products";
import { Filter, FilterMobile } from "../filters";
import { ModalTemplate } from "../modalTemplate";
import { AdvertContext } from "../../contexts/advertContext";

export const MainHome = (): JSX.Element => {
  const [openFilter, setOpenFilter] = useState(false);
  const { adverts } = useContext(AdvertContext);

  const toggleModal = () => {
    setOpenFilter(!openFilter);
  };

  const clickFilterBtn = () => {
    toTop();
    toggleModal();
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {openFilter && (
        <ModalTemplate
          OpenOrClose={toggleModal}
          title="Filtro"
          style="bg-white w-full fixed top-0"
          headerStyle="w-9/10 my-5 mx-auto font-medium text-lg text-grey1"
          children={<FilterMobile OpenOrClose={toggleModal} />}
        />
      )}
      <main className="mb-10">
        <div className="h-[625px] md:h[300px] bannerMobile bg-fixed bg-center bg-cover md:flex md:justify-center md:items-center">
          <h1 className="text-center absolute px-4 text-lg font-Lexend font-medium top-44 text-white md:flex md:flex-col md:justify-center md:items-center">
            <strong className="text-2xl">Motors Shop</strong>
            <br></br>
            <br></br> A melhor plataforma de anúncios de carros do país
          </h1>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="w-9/10 flex justify-between max-w-screen-2xl">
            <Filter />
            <ul className="flex gap-5 overflow-x-scroll md:flex-wrap md:overflow-hidden md:w-300">
              {adverts.map((advert) => (
                <CardProduct key={advert.id} advertInfos={advert} />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center mt-24 mb-12 text-white text-[16px] font-semibold md:hidden">
          <button
            onClick={clickFilterBtn}
            className="bg-brand1 w-[70vw] h-[48px] rounded-[4px] border-[1.5px] cursor-pointer border-brand1"
          >
            Filtros
          </button>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-10 md:mt-16 md:mb-16">
          <span className="text-grey3 m-auto md:m-0">
            <strong>1</strong> de 2
          </span>
          <span className="m-auto md:m-0 text-brand1 cursor-pointer font-bold">Seguinte {">"}</span>
        </div>
      </main>
    </>
  );
};

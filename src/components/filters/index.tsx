import { Button } from "../button";

export const Filter = (): JSX.Element => {
  return (
    <div className="hidden md:block">
      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
        <p className="font-Lexend font-semibold text-grey3">General Motors</p>
        <p className="font-Lexend font-semibold text-grey3">Fiat </p>
        <p className="font-Lexend font-semibold text-grey3">Ford</p>
        <p className="font-Lexend font-semibold text-grey3">Honda</p>
        <p className="font-Lexend font-semibold text-grey3">Porsche</p>
        <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Modelo</h2>
        <p className="font-Lexend font-semibold text-grey3">Civic</p>
        <p className="font-Lexend font-semibold text-grey3">Corolla</p>
        <p className="font-Lexend font-semibold text-grey3">Cruze</p>
        <p className="font-Lexend font-semibold text-grey3">Fit</p>
        <p className="font-Lexend font-semibold text-grey3">Gol</p>
        <p className="font-Lexend font-semibold text-grey3">Ka</p>
        <p className="font-Lexend font-semibold text-grey3">Onix</p>
        <p className="font-Lexend font-semibold text-grey3">Porsche 718</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Cor</h2>
        <p className="font-Lexend font-semibold text-grey3">Azul</p>
        <p className="font-Lexend font-semibold text-grey3">Branca</p>
        <p className="font-Lexend font-semibold text-grey3">Cinza</p>
        <p className="font-Lexend font-semibold text-grey3">Prata</p>
        <p className="font-Lexend font-semibold text-grey3">Preta</p>
        <p className="font-Lexend font-semibold text-grey3">Verde</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Ano</h2>
        <p className="font-Lexend font-semibold text-grey3">2022</p>
        <p className="font-Lexend font-semibold text-grey3">2021</p>
        <p className="font-Lexend font-semibold text-grey3">2018</p>
        <p className="font-Lexend font-semibold text-grey3">2015</p>
        <p className="font-Lexend font-semibold text-grey3">2013</p>
        <p className="font-Lexend font-semibold text-grey3">2012</p>
        <p className="font-Lexend font-semibold text-grey3">2010</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Combustível</h2>
        <p className="font-Lexend font-semibold text-grey3">Diesel</p>
        <p className="font-Lexend font-semibold text-grey3">Etanol</p>
        <p className="font-Lexend font-semibold text-grey3">Gasolina</p>
        <p className="font-Lexend font-semibold text-grey3">Flex</p>
      </section>

        <section className="mb-10">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Km</h2>
            <div className="flex gap-5">
                <Button children={"Mínima"} type="button" css="bg-grey5 w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"/>
                <Button children={"Máxima"} type="button" css="bg-grey5 w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"/>
            </div>
        </section>

        <section className="mb-10">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Preço</h2>
            <div className="flex gap-5">
                <Button children={"Mínima"} type="button" css="bg-grey5 w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"/>
                <Button children={"Máxima"} type="button" css="bg-grey5 w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"/>
            </div>
        </section>
    </div>
  );
};

export const FilterMobile = ({modal, toggleModal}: any): JSX.Element => {
  return (
        <section className="z-10 relative h-[85vh] overflow-auto">
          <div className="flex pt-5 justify-between px-5 font-lexend">
            <span className="text-base leading-6 font-semibold">Filtro</span>
            <span onClick={toggleModal} className="text-grey4 text-lg ">X</span>
          </div>
          <div className="flex flex-col mt-10 px-5">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
            <p className="font-Lexend font-semibold text-grey3">
              General Motors
            </p>
            <p className="font-Lexend font-semibold text-grey3">Fiat </p>
            <p className="font-Lexend font-semibold text-grey3">Ford</p>
            <p className="font-Lexend font-semibold text-grey3">Honda</p>
            <p className="font-Lexend font-semibold text-grey3">Porsche</p>
            <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
          </div>
          <div className="flex flex-col mt-10 px-5">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
            <p className="font-Lexend font-semibold text-grey3">
              General Motors
            </p>
            <p className="font-Lexend font-semibold text-grey3">Fiat </p>
            <p className="font-Lexend font-semibold text-grey3">Ford</p>
            <p className="font-Lexend font-semibold text-grey3">Honda</p>
            <p className="font-Lexend font-semibold text-grey3">Porsche</p>
            <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
          </div>
          <div className="flex flex-col mt-10 px-5">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
            <p className="font-Lexend font-semibold text-grey3">
              General Motors
            </p>
            <p className="font-Lexend font-semibold text-grey3">Fiat </p>
            <p className="font-Lexend font-semibold text-grey3">Ford</p>
            <p className="font-Lexend font-semibold text-grey3">Honda</p>
            <p className="font-Lexend font-semibold text-grey3">Porsche</p>
            <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
          </div>
          <div className="flex flex-col mt-10 px-5">
            <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
            <p className="font-Lexend font-semibold text-grey3">
              General Motors
            </p>
            <p className="font-Lexend font-semibold text-grey3">Fiat </p>
            <p className="font-Lexend font-semibold text-grey3">Ford</p>
            <p className="font-Lexend font-semibold text-grey3">Honda</p>
            <p className="font-Lexend font-semibold text-grey3">Porsche</p>
            <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
          </div>
        </section>
  );
};

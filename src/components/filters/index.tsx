import { useContext } from "react";
import { Button } from "../button";
import { iAdvert, iFilter } from "./types";
import { AdvertContext } from "../../contexts/advertContext";

export const Filter = (): JSX.Element => {
  const { adverts, setAdverts } = useContext(AdvertContext);

  const allBrandsPerCar: Array<string> = [];
  const uniqueCarBrands: Array<string> = [...new Set(allBrandsPerCar)];
  adverts.forEach((advert) => allBrandsPerCar.push(advert.brand));

  const allModelsPerCar: Array<string> = [];
  const uniqueCarModels: Array<string> = [...new Set(allModelsPerCar)];
  adverts.forEach((advert) => allModelsPerCar.push(advert.model));

  const allColorsPerCar: Array<string> = [];
  const uniqueCarColors: Array<string> = [...new Set(allColorsPerCar)];
  adverts.forEach((advert) => allColorsPerCar.push(advert.color));

  const allManufacturedYearsPerCar: Array<string> = [];
  const uniqueYearOfManufacture: Array<string> = [...new Set(allManufacturedYearsPerCar)];
  adverts.forEach((advert) => allManufacturedYearsPerCar.push(advert.year));

  const allFuelTypesPerCar: Array<string> = [];
  const uniqueFuelTypes: Array<string> = [...new Set(allFuelTypesPerCar)];
  adverts.forEach((advert) => allFuelTypesPerCar.push(advert.fuel_type));

  const allMileagesPerCar: Array<number> = [];
  const uniqueCarMileages: Array<number> = [...new Set(allMileagesPerCar)];
  const minMileage: string = Math.min.apply(null, uniqueCarMileages).toString();
  const maxMileage: string = Math.max.apply(null, uniqueCarMileages).toString();
  adverts.forEach((advert) => allMileagesPerCar.push(parseInt(advert.mileage)));

  const allPricesPerCar: Array<number> = [];
  const uniqueCarPrices: Array<number> = [...new Set(allPricesPerCar)];
  const minPrice: string = Math.min.apply(null, uniqueCarPrices).toString();
  const maxPrice: string = Math.max.apply(null, uniqueCarPrices).toString();
  adverts.forEach((advert) => allPricesPerCar.push(parseInt(advert.price)));

  return (
    <div className="hidden md:block">
      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
        {uniqueCarBrands.map((brands) => (
          <button className="font-Lexend font-semibold text-grey3">{brands}</button>
        ))}
        <p className="font-Lexend font-semibold text-grey3">General Motors</p>
        <p className="font-Lexend font-semibold text-grey3">Fiat </p>
        <p className="font-Lexend font-semibold text-grey3">Ford</p>
        <p className="font-Lexend font-semibold text-grey3">Honda</p>
        <p className="font-Lexend font-semibold text-grey3">Porsche</p>
        <p className="font-Lexend font-semibold text-grey3">Volswagen</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Modelo</h2>
        {uniqueCarModels.map((models) => (
          <button className="font-Lexend font-semibold text-grey3">{models}</button>
        ))}
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
        {uniqueCarColors.map((colors) => (
          <button className="font-Lexend font-semibold text-grey3">{colors}</button>
        ))}
        <p className="font-Lexend font-semibold text-grey3">Azul</p>
        <p className="font-Lexend font-semibold text-grey3">Branca</p>
        <p className="font-Lexend font-semibold text-grey3">Cinza</p>
        <p className="font-Lexend font-semibold text-grey3">Prata</p>
        <p className="font-Lexend font-semibold text-grey3">Preta</p>
        <p className="font-Lexend font-semibold text-grey3">Verde</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Ano</h2>
        {uniqueYearOfManufacture.map((year) => (
          <button className="font-Lexend font-semibold text-grey3">{year}</button>
        ))}
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
        {uniqueFuelTypes.map((fuelType) => (
          <button className="font-Lexend font-semibold text-grey3">{fuelType}</button>
        ))}
        <p className="font-Lexend font-semibold text-grey3">Diesel</p>
        <p className="font-Lexend font-semibold text-grey3">Etanol</p>
        <p className="font-Lexend font-semibold text-grey3">Gasolina</p>
        <p className="font-Lexend font-semibold text-grey3">Flex</p>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Km</h2>
        <div className="flex gap-5">
          <Button
            children={"Mínima"}
            type="button"
            onClick={set}
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Preço</h2>
        <div className="flex gap-5">
          <Button
            children={"Mínima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
        </div>
      </section>
    </div>
  );
};

export const FilterMobile = ({ OpenOrClose }: iFilter): JSX.Element => {
  return (
    <section className="relative h-[85vh] overflow-auto w-9/10 my-0 mx-auto">
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
          <Button
            children={"Mínima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Preço</h2>
        <div className="flex gap-5">
          <Button
            children={"Mínima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
          />
        </div>
      </section>

      <div className="flex justify-center m-8">
        <button
          onClick={OpenOrClose}
          type="button"
          className="bg-brand1 w-[70vw] h-[48px] rounded-[4px] border-[1.5px] cursor-pointer text-white font-inter font-medium text-base"
        >
          Ver anúncios
        </button>
      </div>
    </section>
  );
};

import { useContext } from "react";
import { AdvertContext } from "../../contexts/advertContext";
import { Button } from "../button";
import { iFilter } from "./types";
import { iAdvert } from "../../contexts/advertContext/type";

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

  function filterByBrand(brand: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.brand === brand);
    setAdverts(filteredAdverts);
  }

  function filterByModel(model: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.model === model);
    setAdverts(filteredAdverts);
  }

  function filterByColor(color: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.color === color);
    setAdverts(filteredAdverts);
  }

  function filterByYear(year: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.year === year);
    setAdverts(filteredAdverts);
  }

  function filterByFuelType(fuelType: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.fuel_type === fuelType);
    setAdverts(filteredAdverts);
  }

  function filterByMinMileage() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === minMileage);
    setAdverts(filteredAdverts);
  }

  function filterByMaxMileage() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === maxMileage);
    setAdverts(filteredAdverts);
  }

  function filterByMinPrice() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === minPrice);
    setAdverts(filteredAdverts);
  }

  function filterByMaxPrice() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === maxPrice);
    setAdverts(filteredAdverts);
  }

  return (
    <div className="hidden md:block">
      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
        {uniqueCarBrands.map((brand: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByBrand(brand)}>
            {brand}
          </button>
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
        {uniqueCarModels.map((model: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByModel(model)}>
            {model}
          </button>
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
        {uniqueCarColors.map((color: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByColor(color)}>
            {color}
          </button>
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
        {uniqueYearOfManufacture.map((year: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByYear(year)}>
            {year}
          </button>
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
        {uniqueFuelTypes.map((fuelType: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByFuelType(fuelType)}>
            {fuelType}
          </button>
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
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMinMileage}
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMaxMileage}
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
            onClick={() => filterByMinPrice}
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMaxPrice}
          />
        </div>
      </section>
    </div>
  );
};

export const FilterMobile = ({ OpenOrClose }: iFilter): JSX.Element => {
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

  function filterByBrand(brand: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.brand === brand);
    setAdverts(filteredAdverts);
  }

  function filterByModel(model: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.model === model);
    setAdverts(filteredAdverts);
  }

  function filterByColor(color: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.color === color);
    setAdverts(filteredAdverts);
  }

  function filterByYear(year: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.year === year);
    setAdverts(filteredAdverts);
  }

  function filterByFuelType(fuelType: string) {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.fuel_type === fuelType);
    setAdverts(filteredAdverts);
  }

  function filterByMinMileage() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === minMileage);
    setAdverts(filteredAdverts);
  }

  function filterByMaxMileage() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === maxMileage);
    setAdverts(filteredAdverts);
  }

  function filterByMinPrice() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === minPrice);
    setAdverts(filteredAdverts);
  }

  function filterByMaxPrice() {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === maxPrice);
    setAdverts(filteredAdverts);
  }

  return (
    <section className="relative h-[85vh] overflow-auto w-9/10 my-0 mx-auto">
      <section className="mb-10">
        <h2 className="font-Lexend text-2.5xl font-bold mb-3">Marca</h2>
        {uniqueCarBrands.map((brand: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByBrand(brand)}>
            {brand}
          </button>
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
        {uniqueCarModels.map((model: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByModel(model)}>
            {model}
          </button>
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
        {uniqueCarColors.map((color: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByColor(color)}>
            {color}
          </button>
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
        {uniqueYearOfManufacture.map((year: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByYear(year)}>
            {year}
          </button>
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
        {uniqueFuelTypes.map((fuelType: string) => (
          <button className="font-Lexend font-semibold text-grey3" onClick={() => filterByFuelType(fuelType)}>
            {fuelType}
          </button>
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
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMinMileage}
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMaxMileage}
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
            onClick={() => filterByMinPrice}
          />
          <Button
            children={"Máxima"}
            type="button"
            css="bg-grey5 w-[105px] 2xl:w-[125px] h-[37px] font-Lexend font-semibold text-grey3 hover:text-white transition"
            onClick={() => filterByMaxPrice}
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

import { createContext, useEffect, useState } from "react";
import { iAdvert, iAdvertProviderProps, iAdvertProviderValue } from "./type";
import { api, fipe_api } from "../../services/axios";
import { iUser } from "../userContext/types";

export const AdvertContext = createContext({} as iAdvertProviderValue);

export const AdvertProvider = ({ children }: iAdvertProviderProps) => {
  const [createAdvertsModal, setCreateAdvertsModal] = useState<boolean>(false);
  const [createSuccessModal, setCreateSuccessModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [adverts, setAdverts] = useState<iAdvert[]>([]);

  const getAllAdverts: () => Promise<void> = async () => {
    try {
      const { data } = await api.get(`adverts`);
      setAdverts(data.adverts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAdverts();
  }, []);

  const getCarBrands = async () => {
    try {
      const { data } = await fipe_api.get("/cars");
      const brandList = Object.keys(data);

      setBrands(brandList);
    } catch (error) {
      console.error(error);
    }
  };

  const openOrCloseAdvertModal = () => {
    if (!createAdvertsModal) {
      getCarBrands();
    }
    setCreateAdvertsModal(!createAdvertsModal);
  };

  const createAdvertSuccessModal = () => {
    setCreateSuccessModal(!createSuccessModal);
  };

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

  const filterByBrand = (brand: string) => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.brand === brand);
    setAdverts(filteredAdverts);
  };

  const filterByModel = (model: string) => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.model === model);
    setAdverts(filteredAdverts);
  };

  const filterByColor = (color: string) => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.color === color);
    setAdverts(filteredAdverts);
  };

  const filterByYear = (year: string) => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.year === year);
    setAdverts(filteredAdverts);
  };

  const filterByFuelType = (fuelType: string) => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.fuel_type === fuelType);
    setAdverts(filteredAdverts);
  };

  const filterByMinMileage = () => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === minMileage);
    setAdverts(filteredAdverts);
  };

  const filterByMaxMileage = () => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.mileage === maxMileage);
    setAdverts(filteredAdverts);
  };

  const filterByMinPrice = () => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === minPrice);
    setAdverts(filteredAdverts);
  };

  const filterByMaxPrice = () => {
    const filteredAdverts: iAdvert[] = adverts.filter((advert) => advert.price === maxPrice);
    setAdverts(filteredAdverts);
  };

  const handleClick = (advertInfos?: iAdvert): iUser | undefined => {
    const user = advertInfos?.user;
    return user;
  };

  return (
    <AdvertContext.Provider
      value={{
        openOrCloseAdvertModal,
        createAdvertsModal,
        createAdvertSuccessModal,
        createSuccessModal,
        brands,
        adverts,
        setAdverts,
        uniqueCarBrands,
        uniqueCarModels,
        uniqueCarColors,
        uniqueYearOfManufacture,
        uniqueFuelTypes,
        filterByBrand,
        filterByModel,
        filterByColor,
        filterByYear,
        filterByFuelType,
        filterByMinMileage,
        filterByMaxMileage,
        filterByMinPrice,
        filterByMaxPrice,
        handleClick,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

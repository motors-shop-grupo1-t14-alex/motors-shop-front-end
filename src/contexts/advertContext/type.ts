import { iUser } from "../userContext/types";

export interface iAdvertProviderProps {
  children: React.ReactNode;
}

export interface iAdvertProviderValue {
  openOrCloseAdvertModal: () => void;
  createAdvertsModal: boolean;
  brands: string[];
  createAdvertSuccessModal: () => void;
  createSuccessModal: boolean;
  adverts: iAdvert[];
  setAdverts: React.Dispatch<React.SetStateAction<iAdvert[]>>;
  uniqueCarBrands: Array<string>;
  uniqueCarModels: Array<string>;
  uniqueCarColors: Array<string>;
  uniqueYearOfManufacture: Array<string>;
  uniqueFuelTypes: Array<string>;
  filterByBrand: (brand: string) => void;
  filterByModel: (model: string) => void;
  filterByColor: (color: string) => void;
  filterByYear: (year: string) => void;
  filterByFuelType: (fuelType: string) => void;
  filterByMinMileage: () => void;
  filterByMaxMileage: () => void;
  filterByMinPrice: () => void;
  filterByMaxPrice: () => void;
  handleClick: (advertInfos?: iAdvert) => iUser | undefined;
}

interface iGallery_images {
  url_image: string;
}

export interface iAdvert {
  brand: string;
  color: string;
  cover_image: string;
  created_at: string;
  description: string;
  fipe_price: string;
  fuel_type: string;
  gallery_images: iGallery_images[];
  id: number;
  is_published: boolean;
  mileage: string;
  model: string;
  price: string;
  updated_at: string;
  year: string;
  user: iUser;
}

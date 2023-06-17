import { iAdverts } from "../../interfaces/advert.interface";
import { Input } from "../input";
import { ModalTemplate } from "../modalTemplate";
import { createAdvertSchema } from "../../schemas/adverts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Select } from "../select";
import { useContext, useRef, useState } from "react";
import { AdvertContext } from "../../contexts/userContext";
import { api, fipe_api } from "../../services/axios";
import { iCarInfos } from "./types";

export const CreateAdvertsModal = (): JSX.Element => {
  const { brands, openOrCloseModal } = useContext(AdvertContext);

  const [models, setModels] = useState<iCarInfos[]>([])
  const [carInfos, setCarInfos] = useState<iCarInfos>()
  const [imageInputs, setImageInputs] = useState<number>(1)

  const addImageInput = () => {
    setImageInputs(imageInputs + 1)
  }

  const select = useRef()

  const getCarModels = async (event: React.ChangeEvent<HTMLInputElement>) => {

    if(!event.target) {
      return
    }

    const brand: string = event.target.value 

    try {
      const { data } = await fipe_api.get("/cars", { params: {brand: brand} })

      setModels(data)

    } catch (error) {
      console.error(error)
    }
  }

  const getCarInfos = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const model: string = event.target.value

    const carInfos: iCarInfos | undefined = models.find(item => item.name === model)

    setCarInfos(carInfos)
  }

  const fuelTypes: string[] = ["Flex", "Híbrido", "Elétrico"]

  const fuel: string | undefined = carInfos && fuelTypes[carInfos.fuel - 1]

  const fipe: string | undefined = carInfos && carInfos.value.toFixed(2) 

  const year: string | undefined = carInfos && carInfos.year
  
  const createAdverts = async (data: iAdverts): Promise<void> => {

    if(!carInfos) {
      return
    }
    
    const requestBody = {
      brand: carInfos.brand,
      model: carInfos.name,
      year: parseInt(carInfos.year),
      fuel_type: fuel,
      mileage: data.mileage,
      color: data.color,
      fipe_price: parseFloat(carInfos.value.toFixed(2)),
      price: parseFloat(data.price),
      description: data.description,
      cover_image: data.cover_image,
      gallery_images: [
        {url_image: data.gallery_images1}
      ]
    };

    const tokenString: string | null = localStorage.getItem("@TOKEN");

    if(!tokenString) {
      return
    }

    const token: string = tokenString.split('"').join("");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    
    try {
      await api.post(`adverts`, requestBody, config);
      openOrCloseModal()
    } catch (error) {
      console.log(error);
    } 
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAdverts>({
    resolver: zodResolver(createAdvertSchema),
  });

  const onSubmit: SubmitHandler<iAdverts> = (data) => createAdverts(data)

  return (
    <ModalTemplate title="Criar anuncio" style="bg-white w-[520px]" OpenOrClose={openOrCloseModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Infomações do veículo</p>

        <Select
          boxStyle=""
          selectStyle=""
          selectTitle="Selecione uma marca..."
          title="Marca"
          ref={select}
          onChange={getCarModels}
          // register={register("brand")}
        >
          {brands.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        {/* {errors.brand && <p>{errors.brand.message}</p>} */}

        <Select
          boxStyle=""
          selectStyle=""
          selectTitle="Selecione um modelo..."
          title="Modelo"
          ref={select}
          onChange={getCarInfos}
          // register={register("model")}
        >
          {models.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </Select>
        {/* {errors.model && <p>{errors.model.message}</p>} */}

        <Input
          children={"Ano"}
          css=""
          id="year"
          inputCSS="appearance-none"
          placeHolder="Ano"
          type="number"
          value={year}
          // register={register("year")}
        />
        {/* {errors.year && <p>{errors.year.message}</p>} */}

        <Input
          children={"Combustível"}
          css=""
          id="fuel"
          inputCSS=""
          placeHolder="Combustível"
          type="text"
          value={fuel}
          // register={register("fuel_type")}
        />
        {/* {errors.fuel_type && <p>{errors.fuel_type.message}</p>} */}

        <Input
          children={"Quilometragem"}
          css=""
          id="mileage"
          inputCSS=""
          placeHolder="Quilometragem"
          type="text"
          register={register("mileage")}
        />
        {errors.mileage && <p>{errors.mileage.message}</p>}

        <Input
          children={"Cor"}
          css=""
          id="color"
          inputCSS=""
          placeHolder="Cor"
          type="text"
          register={register("color")}
        />
        {errors.color && <p>{errors.color.message}</p>}

        <Input
          children={"Preço tabela FIPE"}
          css=""
          id="FipePrice"
          inputCSS="appearance-none"
          placeHolder="Preço tabela FIPE"
          type="number"
          step="0.01"
          value={fipe}
          // register={register("fipe_price")}
        />
        {/* {errors.fipe_price && <p>{errors.fipe_price.message}</p>} */}

        <Input
          children={"Preço"}
          css=""
          id="price"
          inputCSS="appearance-none"
          placeHolder="Preço"
          type="number"
          step="0.01"
          register={register("price")}
        />
        {errors.price && <p>{errors.price.message}</p>}

        <Input
          children={"Descrição"}
          css=""
          id="description"
          inputCSS=""
          placeHolder="Descrição"
          type="text"
          register={register("description")}
        />
        {errors.description && <p>{errors.description.message}</p>}

        <Input
          children={"Imagem da capa"}
          css=""
          id="principalImg"
          inputCSS=""
          placeHolder="Imagem da capa"
          type="text"
          register={register("cover_image")}
        />
        {errors.cover_image && <p>{errors.cover_image.message}</p>}

        <Input
          children={"1° Imagem da galeria"}
          css=""
          id="galeryImg"
          inputCSS=""
          placeHolder="1° Imagem da galeria"
          type="text"
          register={register("gallery_images1")}
        />
        {errors.gallery_images1 && <p>{errors.gallery_images1.message}</p>}

        {imageInputs >= 2 && 
          <div>
            <Input
            children={"2° Imagem da galeria"}
            css=""
            id="galeryImg"
            inputCSS=""
            placeHolder="2° Imagem da galeria"
            type="text"
            register={register("gallery_images2")}
          />
          {errors.gallery_images2 && <p>{errors.gallery_images2.message}</p>}
          </div>
        }
          
          {imageInputs >= 3 && 
            <div>
            <Input
              children={"3° Imagem da galeria"}
              css=""
              id="galeryImg"
              inputCSS=""
              placeHolder="3° Imagem da galeria"
              type="text"
              register={register("gallery_images3")}
            />
            {errors.gallery_images3 && <p>{errors.gallery_images3.message}</p>}
            </div>
          }
          
          {imageInputs >= 4 && 
            <div>
            <Input
              children={"4° Imagem da galeria"}
              css=""
              id="galeryImg"
              inputCSS=""
              placeHolder="4° Imagem da galeria"
              type="text"
              register={register("gallery_images4")}
            />
            {errors.gallery_images4 && <p>{errors.gallery_images4.message}</p>}
            </div>
          }
          
          {imageInputs >= 5 &&
            <div>
            <Input
              children={"5° Imagem da galeria"}
              css=""
              id="galeryImg"
              inputCSS=""
              placeHolder="5° Imagem da galeria"
              type="text"
              register={register("gallery_images5")}
            />
            {errors.gallery_images5 && <p>{errors.gallery_images5.message}</p>}
          </div>
          }
          
          {imageInputs >= 6 &&
            <div>
            <Input
              children={"6° Imagem da galeria"}
              css=""
              id="galeryImg"
              inputCSS=""
              placeHolder="6° Imagem da galeria"
              type="text"
              register={register("gallery_images6")}
            />
            {errors.gallery_images6 && <p>{errors.gallery_images6.message}</p>}
          </div>
          }
        
        { imageInputs <= 5 && <Button type="button" css="" onClick={addImageInput}>Adicionar campo para imagem da galeria</Button>}

        <div>
          <Button type="button" css="" onClick={openOrCloseModal}>
            Cancelar
          </Button>

          <Button type="submit" css="">
            Criar anúncio
          </Button>
        </div>
      </form>
    </ModalTemplate>
  );
};

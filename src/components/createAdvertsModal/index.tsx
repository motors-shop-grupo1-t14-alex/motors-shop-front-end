import { iAdverts } from "../../interfaces/advert.interface";
import { Input } from "../input";
import { ModalTemplate } from "../modalTemplate";
import { createAdvertSchema } from "../../schemas/adverts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Select } from "../select";
import { useContext, useRef, useState } from "react";
import { AdvertContext } from "../../contexts/advertContext";
import { api, fipe_api } from "../../services/axios";
import { iProductInfos } from "./types";
import { Form } from "../form";

export const CreateAdvertsModal = (): JSX.Element => {
  const { brands, openOrCloseAdvertModal, createAdvertSuccessModal } =
    useContext(AdvertContext);

  const [models, setModels] = useState<iProductInfos[]>([]);
  const [carInfos, setCarInfos] = useState<iProductInfos>();
  const [imageInputs, setImageInputs] = useState<number>(1);

  const addImageInput = () => {
    setImageInputs(imageInputs + 1);
  };

  const select = useRef();

  const getCarModels = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target) {
      return;
    }

    const brand: string = event.target.value;

    try {
      const { data } = await fipe_api.get("/cars", {
        params: { brand: brand },
      });

      setModels(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCarInfos = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const model: string = event.target.value;

    const carInfos: iProductInfos | undefined = models.find(
      (item) => item.name === model
    );

    setCarInfos(carInfos);
  };

  const fuelTypes: string[] = ["Flex", "Híbrido", "Elétrico"];

  const fuel: string | undefined = carInfos && fuelTypes[carInfos.fuel - 1];

  const fipe: string | undefined = carInfos && carInfos.value.toFixed(2);

  const year: string | undefined = carInfos && carInfos.year;

  const createAdverts = async (data: iAdverts): Promise<void> => {
    if (!carInfos) {
      return;
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
      gallery_images: [{ url_image: data.gallery_images1 }],
    };

    const tokenString: string | null = localStorage.getItem("@TOKEN");

    if (!tokenString) {
      return;
    }

    const token: string = tokenString.split('"').join("");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await api.post(`adverts`, requestBody, config);
      openOrCloseAdvertModal();
      createAdvertSuccessModal();
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

  const onSubmit: SubmitHandler<iAdverts> = (data) => createAdverts(data);

  return (
    <ModalTemplate
      title="Criar anúncio"
      style="bg-white w-9/10 rounded-[8px] h-[500px] sm:h-[530px] mobileGG:h-[600px] desktopG:h-[800px] flex flex-col items-center overflow-y-scroll max-w-[520px] scrollbar-thin"
      headerStyle="w-9/10 mb-[55px] mt-[18px] text-base font-medium font-inter text-grey1"
      OpenOrClose={openOrCloseAdvertModal}
    >
      <div className="w-9/10">
        <Form inputCSS="" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-sm text-grey1 font-medium font-inter mb-[24px]">
            Infomações do veículo
          </p>

          <Select
            boxStyle="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
            selectStyle="w-full h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
            selectTitle="Selecione uma marca..."
            title="Marca"
            ref={select}
            onChange={getCarModels}
          >
            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <Select
            boxStyle="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
            selectStyle="w-full h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
            selectTitle="Selecione um modelo..."
            title="Modelo"
            ref={select}
            onChange={getCarInfos}
          >
            {models.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>

          <div className="flex justify-between">
            <Input
              children={"Ano"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="year"
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Ano"
              type="number"
              value={year}
            />

            <Input
              children={"Combustível"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="fuel"
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Combustível"
              type="text"
              value={fuel}
            />
          </div>

          <div className="flex justify-between">
            <Input
              children={"Quilometragem"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="mileage"
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Quilometragem"
              type="text"
              register={register("mileage")}
            />

            {errors.mileage && <p>{errors.mileage.message}</p>}
            <Input
              children={"Cor"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="color"
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Cor"
              type="text"
              register={register("color")}
            />

            {errors.color && <p>{errors.color.message}</p>}
          </div>

          <div className="flex justify-between">
            <Input
              children={"Preço tabela FIPE"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="FipePrice"
              inputCSS="w-full pl-[3px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Preço tabela FIPE"
              type="number"
              step="0.01"
              value={fipe}
            />

            <Input
              children={"Preço"}
              css="w-[48%] text-sm text-grey1 font-medium font-inter mb-[24px]"
              id="price"
              inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeHolder="Preço"
              type="number"
              step="0.01"
              register={register("price")}
            />

            {errors.price && <p>{errors.price.message}</p>}
          </div>

          <div className="flex flex-col w-full text-sm text-grey1 font-medium font-inter mb-[24px]">
            <label htmlFor="desc">Descrição</label>

            <textarea
              id="desc"
              className="w-full max-h-[60px] min-h-[60px] pl-[5px] pt-[5px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
              placeholder="Descrição"
              {...register("description")}
            ></textarea>

            {errors.description && <p>{errors.description.message}</p>}
          </div>

          <Input
            children={"Imagem da capa"}
            css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
            id="principalImg"
            inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
            placeHolder="Imagem da capa"
            type="text"
            register={register("cover_image")}
          />
          {errors.cover_image && <p>{errors.cover_image.message}</p>}

          <Input
            children={"1° Imagem da galeria"}
            css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
            id="galeryImg"
            inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
            placeHolder="1° Imagem da galeria"
            type="text"
            register={register("gallery_images1")}
          />
          {errors.gallery_images1 && <p>{errors.gallery_images1.message}</p>}

          {imageInputs >= 2 && (
            <div>
              <Input
                children={"2° Imagem da galeria"}
                css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
                id="galeryImg"
                inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
                placeHolder="2° Imagem da galeria"
                type="text"
                register={register("gallery_images2")}
              />
              {errors.gallery_images2 && (
                <p>{errors.gallery_images2.message}</p>
              )}
            </div>
          )}

          {imageInputs >= 3 && (
            <div>
              <Input
                children={"3° Imagem da galeria"}
                css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
                id="galeryImg"
                inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
                placeHolder="3° Imagem da galeria"
                type="text"
                register={register("gallery_images3")}
              />
              {errors.gallery_images3 && (
                <p>{errors.gallery_images3.message}</p>
              )}
            </div>
          )}

          {imageInputs >= 4 && (
            <div>
              <Input
                children={"4° Imagem da galeria"}
                css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
                id="galeryImg"
                inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
                placeHolder="4° Imagem da galeria"
                type="text"
                register={register("gallery_images4")}
              />
              {errors.gallery_images4 && (
                <p>{errors.gallery_images4.message}</p>
              )}
            </div>
          )}

          {imageInputs >= 5 && (
            <div>
              <Input
                children={"5° Imagem da galeria"}
                css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
                id="galeryImg"
                inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
                placeHolder="5° Imagem da galeria"
                type="text"
                register={register("gallery_images5")}
              />
              {errors.gallery_images5 && (
                <p>{errors.gallery_images5.message}</p>
              )}
            </div>
          )}

          {imageInputs >= 6 && (
            <div>
              <Input
                children={"6° Imagem da galeria"}
                css="w-full text-sm text-grey1 font-medium font-inter mb-[24px]"
                id="galeryImg"
                inputCSS="w-full pl-[5px] h-[48px] border-grey7 border-[1.5px] rounded-[4px] text-grey3 font-normal mt-[8px]"
                placeHolder="6° Imagem da galeria"
                type="text"
                register={register("gallery_images6")}
              />
              {errors.gallery_images6 && (
                <p>{errors.gallery_images6.message}</p>
              )}
            </div>
          )}

          {imageInputs <= 5 && (
            <Button
              type="button"
              css="font-semibold text-xs text-brand1 bg-brand4 rounded-[4px] h-[38px] px-[10px] mb-[37px] hover:bg-grey10 hover:text-grey1 transition sm:text-sm sm:w-[315px]"
              onClick={addImageInput}
            >
              Adicionar campo para imagem da galeria
            </Button>
          )}

          <div className="flex justify-between mb-[18px] sm:justify-end gap-4">
            <Button
              type="button"
              css="bg-grey6 text-grey2 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium hover:bg-grey5 max-w-[126px]"
              onClick={openOrCloseAdvertModal}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              css="bg-brand3 text-brand4 rounded-[4px] w-[47%] h-[48px] font-inter text-base font-medium max-w-[193px] hover:bg-brand1 hover:text-white"
            >
              Criar anúncio
            </Button>
          </div>
        </Form>
      </div>
    </ModalTemplate>
  );
};

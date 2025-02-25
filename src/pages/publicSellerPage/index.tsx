import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { api } from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { iSellerInfos } from "../../interfaces/seller.interface";
import { CardProduct } from "../../components/cardProduct/products";

export const PublicSellerPage = (): JSX.Element => {
  
    const [sellerInfos, setSellerInfos] = useState<iSellerInfos>()

    const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0

    const navigate = useNavigate()

    const sellerId = window.location.pathname.split("/")[2]

    useEffect(() => {

        const getProductInfos = async () => {
            try {
                const { data } = await api.get(`/users/seller/${sellerId}`)
                setSellerInfos(data)
            } catch (error) {
                console.error(error)
                navigate("/")
            }
        }

        getProductInfos()
    }, [])

  return (
    <>
      <Header />
      
      <main className="flex flex-col items-center background-user-page">
        <section className="w-9/10 bg-grey10 rounded-[4px] mt-[65px] flex justify-center font-inter mb-[76px] max-w-screen-xl">
          <div className="flex flex-col w-9/10 mt-[40px]">
            <div className="w-[104px] h-[104px] bg-brand1 rounded-full flex justify-center items-center">
              <p className="text-white text-4xl font-medium">
                {sellerInfos !== null &&
                  (verificaEspaco(sellerInfos?.name)
                    ? `${sellerInfos?.name?.split(" ")[0].substring(0, 1)}${sellerInfos?.name
                        ?.split(" ")[1]
                        .substring(0, 1)}`
                    : sellerInfos?.name && `${sellerInfos?.name[0].toUpperCase()}`)}
              </p>
            </div>

            <div className="flex gap-[9px] my-[24px]">
              <p className="text-[20px] font-semibold text-grey1 font-lexend">
                {sellerInfos && sellerInfos.name}
              </p>
              <p className="bg-brand4 text-brand1 px-[8px] py-[4px] rounded-[4px] text-sm font-medium">
                Anunciante
              </p>
            </div>

            <p className="pb-9">
              {sellerInfos && sellerInfos.description}
            </p>

            
          </div>
        </section>

        <section className="flex justify-center mb-[200px] w-9/10">
          <ul className="flex gap-5 justify-start sm:justify-center overflow-x-scroll md:flex-wrap md:overflow-hidden w-full max-w-screen-xl">
            {sellerInfos?.adverts.map((items) => (
              <CardProduct key={items.id} infos={items} />
            ))}
          </ul>
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

import { ProtectedRouted } from "../../components/protectedRoutes";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { UserContext } from "../../contexts/userContext";
import { SellerProductCard } from "../../components/sellerProductCard";
import { api } from "../../services/axios";
import { CreateAdvertsModal } from "../../components/createAdvertsModal";
import { AdvertContext } from "../../contexts/advertContext";
import { iAdvert, iUserInfos } from "./types";
import "../../index.css";
import { CreateWithSuccessAdvertModal } from "../../components/successAdvertModal";

export const UserPage = (): JSX.Element => {
  const userInfos: iUserInfos = JSON.parse(
    localStorage.getItem("@INFOS") || "{}"
  );

  const [adverts, setAdverts] = useState<iAdvert[]>([]);

  const { user } = useContext(UserContext);

  const {
    createAdvertsModal,
    openOrCloseAdvertModal,
    createSuccessModal,
    createAdvertSuccessModal,
  } = useContext(AdvertContext);

  const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

  useEffect(() => {
    const getUserAdverts = async () => {
      const tokenString = localStorage.getItem("@TOKEN");

      if (!tokenString) {
        return;
      }

      const token: string = JSON.parse(tokenString);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const { data } = await api.get(`adverts/user`, config);

        setAdverts(data.adverts);
      } catch (error) {
        console.log(error);
      }
    };
    getUserAdverts();
  }, [createAdvertSuccessModal]);

  return (
    <>
      <ProtectedRouted />
      {createAdvertsModal && <CreateAdvertsModal />}
      {createSuccessModal && <CreateWithSuccessAdvertModal />}
      <Header />
      <main className="flex flex-col items-center background-user-page">
        <section className="w-9/10 bg-grey10 rounded-[4px] mt-[65px] flex justify-center font-inter mb-[76px] max-w-screen-xl">
          <div className="flex flex-col w-9/10 mt-[40px]">
            <div className="w-[104px] h-[104px] bg-brand1 rounded-full flex justify-center items-center">
              <p className="text-white text-4xl font-medium">
                {user !== null &&
                  (verificaEspaco(user?.name)
                    ? `${user?.name?.split(" ")[0].substring(0, 1)}${user?.name
                        ?.split(" ")[1]
                        .substring(0, 1)}`
                    : user.name && `${user?.name[0].toUpperCase()}`)}
              </p>
            </div>

            <div className="flex gap-[9px] my-[24px]">
              <p className="text-[20px] font-semibold text-grey1 font-lexend">
                {userInfos.name}
              </p>
              <p className="bg-brand4 text-brand1 px-[8px] py-[4px] rounded-[4px] text-sm font-medium">
                Anunciante
              </p>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <div className="mt-[16px] mb-[40px] ">
              <Button
                children={"Criar anuncio"}
                type="button"
                onClick={openOrCloseAdvertModal}
                css="w-[160px] h-[48px] border-brand1 border-[1.5px] rounded-[4px] text-base font-semibold text-brand1 hover:bg-brand4 transition"
              />
            </div>
          </div>
        </section>

        <section className="flex justify-center mb-[200px] w-9/10">
          <ul className="flex gap-5 justify-start sm:justify-center overflow-x-scroll md:flex-wrap md:overflow-hidden w-full max-w-screen-xl">
            {adverts.map((items) => (
              <SellerProductCard key={items.id} advertInfos={items} />
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

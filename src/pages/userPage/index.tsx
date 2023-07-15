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
import { iAdvert } from "./types";
import "../../index.css";
import { SuccesModal } from "../../components/successModal";
import { ModalUpdateProfile } from "../../components/modalUpdateProfile";
import { ModalUpdateAddressProfile } from "../../components/modalUpdateAddressProfile";
import { ModalUpdateAdvert } from "../../components/modalUpdateAdvert";
import { ConfirmationDeleteModal } from "../../components/confirmationDeleteModal";

export const UserPage = (): JSX.Element => {
    const [adverts, setAdverts] = useState<iAdvert[]>([]);

    const {
        user,
        openModalUpdateProfile,
        setOpenModalUpdateProfile,
        openModalUpdateAddress,
        setOpenModalUpdateAddress,
        deleteUser,
        openModalConfirmDeleteUser,
        setOpenModalConfirmDeleteUser,
    } = useContext(UserContext);

    const {
        createAdvertsModal,
        openOrCloseAdvertModal,
        createSuccessModal,
        createAdvertSuccessModal,
        openModalUpdateAdvert,
        openModalConfirmDeleteAdvert,
        setOpenModalConfirmDeleteAdvert,
        deleteAdvert,
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
                setAdverts(data.data);
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
            {createSuccessModal && (
                <SuccesModal
                    openOrClose={createAdvertSuccessModal}
                    textOne="Seu anúncio foi criado com sucesso!"
                    textTwo="Agora você poderá ver seus negócios crescendo em grande escala"
                />
            )}
            {openModalUpdateProfile && <ModalUpdateProfile />}
            {openModalUpdateAddress && <ModalUpdateAddressProfile />}
            {openModalUpdateAdvert && <ModalUpdateAdvert />}
            {openModalConfirmDeleteAdvert && (
                <ConfirmationDeleteModal
                    title="Excluir anúncio"
                    openOrClose={() => setOpenModalConfirmDeleteAdvert(false)}
                    textOne="Tem certeza que deseja remover este anúncio?"
                    textTwo="Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio."
                    onClickCancel={() => setOpenModalConfirmDeleteAdvert(false)}
                    onClickDelete={() => deleteAdvert()}
                    textButtonDelete="Sim, excluir anúncio"
                />
            )}
            {openModalConfirmDeleteUser && (
                <ConfirmationDeleteModal
                    title="Excluir perfil"
                    openOrClose={() => setOpenModalConfirmDeleteUser(false)}
                    textOne="Tem certeza que deseja excluir o seu perfil?"
                    textTwo="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."
                    onClickCancel={() => setOpenModalConfirmDeleteUser(false)}
                    onClickDelete={() => deleteUser()}
                    textButtonDelete="Sim, excluir minha conta"
                />
            )}
            <Header />

            <main className={`flex flex-col items-center background-user-page ${!user?.is_seller && "h-[100vh]"} desktopGG:h-[100vh]`}>
                <section className="w-9/10 bg-grey10 rounded-[4px] mt-[65px] flex justify-center font-inter max-w-screen-xl mb-[100px]">
                    <div className="flex flex-col w-9/10 mt-[40px]">
                        <div className="w-[104px] h-[104px] bg-brand1 rounded-full flex justify-center items-center mb-2">
                            <p className="text-white text-4xl font-medium">
                                {user !== null &&
                                    (verificaEspaco(user?.name)
                                        ? `${user?.name
                                              ?.split(" ")[0]
                                              .substring(0, 1)}${user?.name
                                              ?.split(" ")[1]
                                              .substring(0, 1)}`
                                        : user.name &&
                                          `${user?.name[0].toUpperCase()}`)}
                            </p>
                        </div>

                        <div className="flex gap-[9px] justify-end w-full">
                            <Button
                                children={"Editar perfil"}
                                type="button"
                                onClick={() => setOpenModalUpdateProfile(true)}
                                css="bg-brand1 text-brand4 px-[8px] py-[4px] rounded-[4px] text-sm font-medium hover:bg-brand2"
                            />
                            <Button
                                children={"Editar endereço"}
                                type="button"
                                onClick={() => setOpenModalUpdateAddress(true)}
                                css="bg-brand1 text-brand4 px-[8px] py-[4px] rounded-[4px] text-sm font-medium hover:bg-brand2"
                            />
                        </div>

                        <div className="flex gap-[9px] my-[24px]">
                            <p className="text-[20px] font-semibold text-grey1 font-lexend">
                                {user && user.name}
                            </p>
                            <p className="bg-brand4 text-brand1 px-[8px] py-[4px] rounded-[4px] text-sm font-medium">
                                {user?.is_seller ? <p>Anunciante</p> : <p>Cliente</p>}
                            </p>
                        </div>

                        <p className="py-5">{user && user.description}</p>

                        {user?.is_seller == true ? (
                            <div className="mt-[16px] mb-[40px] ">
                                <Button
                                    children={"Criar anuncio"}
                                    type="button"
                                    onClick={openOrCloseAdvertModal}
                                    css="w-[160px] h-[48px] border-brand1 border-[1.5px] rounded-[4px] text-base font-semibold text-brand1 hover:bg-brand4 transition"
                                />
                            </div>
                        ) : null}
                    </div>
                </section>

                {user?.is_seller == true ? (
                    <>
                        <section className="flex justify-center mb-[200px] w-9/10">
                            <ul className="flex gap-5 justify-start sm:justify-center overflow-x-scroll md:flex-wrap md:overflow-hidden w-full max-w-screen-xl">
                                {adverts.length === 0 && user.is_seller ? <p className="mt-[50px] sm:text-lg font-inter font-medium">Este vendedor ainda não tem anúncios</p> : ""}
                                {adverts.map((items) => (
                                    <SellerProductCard
                                        key={items.id}
                                        advertInfos={items}
                                    />
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
                    </>
                ) : null}
            </main>
            <Footer />
        </>
    );
};

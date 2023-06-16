import { ProtectedRouted } from "../../components/protectedRoutes";
import { useContext, useEffect, useState } from "react"
import { Button } from "../../components/button"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { UserContext } from "../../contexts/userContext/UserContext"
import { SellerProductCard } from "../../components/sellerProductCard"
import api from "../../services/axios"

export const UserPage = (): JSX.Element => {
  
    const userInfos = JSON.parse(localStorage.getItem('@INFOS') || '{}')

    const [adverts, setAdverts] = useState<any>([]);

    const { user } = useContext(UserContext);

    const verificaEspaco = (string: string | undefined) => string && string.indexOf(' ') >= 0;

    useEffect(() => {
        const getUserAdverts = async () => {

            const tokenString = localStorage.getItem("@TOKEN");

            if(!tokenString) {
                return
            }

            const token = tokenString.split('"').join("");

            const config = {
                headers: { Authorization: `Bearer ${token}` },
            }
        
            try {
                const { data } = await api.get(`adverts/user`, config);
              
                setAdverts(data.adverts)
                
            } catch (error) {
                console.log(error);
            }
        }
        getUserAdverts()
    }, [])

    return (
        <>
        <ProtectedRouted />
        <Header/>
        <main className="flex flex-col items-center bg-grey8">
            <section className="w-9/10 bg-grey10 rounded-[4px] mt-[65px] flex justify-center font-inter mb-[76px]">

                <div className="flex flex-col w-9/10 mt-[40px]">
                    <div className="w-[104px] h-[104px] bg-brand1 rounded-full flex justify-center items-center">
                        <p className= "text-white text-4xl font-medium">
                            {
                            user !== null &&
                            (verificaEspaco(user?.name) ?
                            `${user?.name
                                ?.split(" ")[0]
                                .substring(0, 1)}${user?.name
                                ?.split(" ")[1]
                                .substring(0, 1)}`
                                :
                                user.name && `${user?.name[0].toUpperCase()}`)
                            }
                        </p>
                    </div>

                    <div className="flex gap-[9px] my-[24px]">
                        <p className="text-[20px] font-semibold text-grey1 font-lexend">{userInfos.name}</p>
                        <p className="bg-brand4 text-brand1 px-[8px] py-[4px] rounded-[4px] text-sm font-medium">Anunciante</p>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                    
                    <div className="mt-[16px] mb-[40px] ">
                        <Button children={"Criar anuncio"} type="button" css="w-[160px] h-[48px] border-brand1 border-[1.5px] rounded-[4px] text-base font-semibold text-brand1 hover:bg-brand4 transition"/>
                    </div>
                    
                </div>
            </section>

            <section className="flex justify-center mb-[200px] w-9/10">
                <ul className="flex overflow-x-scroll md:flex-wrap md:overflow-hidden md:w-300">
                    {adverts.map(items => <SellerProductCard key={items.id} advertInfos={items} userInfos={userInfos}/>)}
                </ul>
            </section>
        </main>
        <Footer/>
        </>
    )
}


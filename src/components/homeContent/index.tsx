import { useEffect, useState } from "react"
import { CardProduct } from "../cardProduct/products"
import { Filter, FilterMobile } from "../filters"
import { ModalTemplate } from "../modalTemplate"
import { api } from "../../services/axios"
import { iHomeProducts, iPages } from "../../interfaces/home.interface"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { ProtectHomeRoute } from "../ProtectHomeRoute"

export const HomeContent = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    const [openFilter, setOpenFilter] = useState(false)
    const [adverts, setAdverts] = useState<iHomeProducts[]>([])
    const [pages, setPages] = useState<iPages>()

    const toggleModal = () => {
        setOpenFilter(!openFilter)
    }

    const clickFilterBtn = () => {
        toTop()
        toggleModal()
    }
    
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    const pageNumber = window.location.pathname.split("/")[1] || 1

    const PreviousPage = () => {
        navigate(`/${Number(pageNumber) - 1}`)
        window.location.reload()
    }

    const nextPage = () => {
        navigate(`/${Number(pageNumber) + 1}`)
        window.location.reload()
    }

    useEffect(() => {

        const takeAllAdverts = async () => {

            try {
                const { data } = await api.get("/adverts", { params: { page: pageNumber } })
                setPages({previousPage: data.prevPage, nextPage: data.nextPage})
                setAdverts(data.data)
            }
    
            catch (error) {
                console.error(error)
            }
        }

        takeAllAdverts()
    }, [navigate])

    
    return (
        <>
        <ProtectHomeRoute adverts={adverts}/>
        {openFilter && <ModalTemplate OpenOrClose={toggleModal} title="Filtro" style="bg-white w-full fixed top-0" headerStyle="w-9/10 my-5 mx-auto font-medium text-lg text-grey1" children={<FilterMobile OpenOrClose={toggleModal}/>}/> }
        <main className="mb-10">
        
        <div className="h-[625px] md:h[300px] bannerMobile bg-fixed bg-center bg-cover md:flex md:justify-center md:items-center">

          <h1 className="text-center absolute px-4 text-lg font-Lexend font-medium top-44 text-white md:flex md:flex-col md:justify-center md:items-center">
             <strong className="text-2xl">Motors Shop</strong>
             <br></br>
             <br></br> A melhor plataforma de anúncios de carros do país
          </h1>

        </div>

        <div className="mt-5 flex justify-center">

            <div className="w-9/10 flex justify-between max-w-screen-2xl">
                <Filter />
                <ul className="flex gap-5 overflow-x-scroll md:flex-wrap md:overflow-hidden md:w-300 px-[2px]">
                    {adverts.map(item => item.is_published && <CardProduct key={item.id} infos={item}/>)}
                    {adverts.length === 0 && <div className="w-full flex justify-center items-center"> <p className="text-lg sm:text-2xl">Ainda não há anúncios publicados</p> </div>}
                </ul>
            </div>
        </div>
        <div className="flex justify-center items-center mt-24 mb-12 text-white text-[16px] font-semibold md:hidden">
          <button onClick={clickFilterBtn} className="bg-brand1 w-[70vw] h-[48px] rounded-[4px] border-[1.5px] cursor-pointer border-brand1">
            Filtros
          </button >
        </div>
        
        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-10 md:mt-16 md:mb-16">
            {pages && pages.previousPage !== null ? <button onClick={PreviousPage} className="m-auto md:m-0 text-brand1 cursor-pointer font-bold">{"<"} Anterior</button> : <button className="m-auto md:m-0 text-grey3 font-bold cursor-not-allowed">{"<"} Anterior</button>}

            <strong className="text-grey3 m-auto md:m-0">{pageNumber}</strong>

            {pages && pages.nextPage !== null ? <button onClick={nextPage} className="m-auto md:m-0 text-brand1 cursor-pointer font-bold ">Seguinte {">"}</button> : <button className="m-auto md:m-0 text-grey3 font-bold cursor-not-allowed">Seguinte {">"}</button>}
        </div>

      </main>
      </>
    )
}
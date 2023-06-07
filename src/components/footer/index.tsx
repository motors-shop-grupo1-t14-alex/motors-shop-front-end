import { MdKeyboardArrowUp } from "react-icons/md";

export const Footer = (): JSX.Element => {
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex justify-center bottom-0 bg-grey0 w-full h-52 py-2.5 font-medium md:px-12 md:h-32">

            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center text-white w-9/10 max-w-screen-2xl">
                <div className="flex justify-center mt-5 md:mt-0">
                    <img src="/logo-motors-shop-white.svg" alt="logo-motors-shop-white" />
                </div>
                
                <p className="flex justify-center items-center text-sm font-inter font-normal">
                    © 2022 - Todos os direitos reservados.
                </p>
                <section className="flex justify-center items-center">
                    <button onClick={toTop} className="p-3 bg-grey1 rounded">
                        <MdKeyboardArrowUp size={20} />
                    </button>
                </section>
            </div>

        </div>
    );
};

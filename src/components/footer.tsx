import { MdKeyboardArrowUp } from "react-icons/md";

export const Footer = (): JSX.Element => {
    return (
        <div className="fixed bottom-0 bg-black w-full text-white h-26 py-2.5 flex flex-col font-medium gap-2 md:flex-row md:justify-between md:h-20 md:px-12 md:items-center">
            <section className="flex gap-2 justify-center items-baseline">
                <h2 className="text-xl">Motors</h2>
                <h2>shop</h2>{" "}
            </section>
            <p className="flex justify-center items-center text-xs font-inter">
                © 2022 - Todos os direitos reservados.
            </p>
            <section className="flex justify-center items-center">
                <button className="p-1 bg-grey1 rounded">
                    <MdKeyboardArrowUp size={25} />
                </button>
            </section>
        </div>
    );
};

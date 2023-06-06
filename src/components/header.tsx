import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = (): JSX.Element => {
    const { innerWidth } = window;
    const [isLogged, setIsLogged] = useState(false);
    const [screenSize, setScreenSize] = useState(innerWidth);

    window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
    });

    return (
        <header className="flex px-3 md:px-12 border-b-2 border-gray-300 font-medium items-center justify-between">
            <section className="flex gap-2 items-baseline xl:w-5/6 w-7/12 md:border-r-2 md:border-gray-300 ">
                <h1>Motor</h1>
                <h2 className="text-2xl text-brand1">shop</h2>
            </section>

            {screenSize < 768 ? (
                <button>
                    <AiOutlineMenu size={28} />
                </button>
            ) : isLogged == true ? (
                <section className="flex items-center justify-center pl-8 w-5/12 xl:w-1/6 gap-4">
                    <p
                        className="bg-blue-500 p-3 rounded-full text-white"
                        onClick={() => setIsLogged(!isLogged)}
                    >
                        SM
                    </p>
                    <p className="p-3 ">Samuel Leão</p>
                </section>
            ) : (
                <nav className="flex items-center justify-between pl-8 w-5/12 xl:w-1/6 ">
                    <button
                        className="p-2.5 text-gray-500 "
                        onClick={() => setIsLogged(!isLogged)}
                    >
                        Fazer login
                    </button>
                    <button className="p-2.5 w-2/5 border-2 rounded border-gray-400 shadow-md">
                        Registrar
                    </button>
                </nav>
            )}
        </header>
    );
};

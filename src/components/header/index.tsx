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
        <header className="flex justify-center border-b-2 border-gray-300 font-medium h-20">
           
            <div className="flex items-center justify-between h-full w-9/10">
                <img src="../../../public/logo-motors-shop.svg" alt="logo-motors-shop" />
                {screenSize < 768 ? (
                    <button>
                        <AiOutlineMenu size={28} />
                    </button>
                ) : isLogged == true ? (
                    <section className="flex items-center justify-center pl-8 gap-4 md:border-l-2 md:border-gray-300 h-full">
                        <p
                            className="bg-blue-500 p-3 rounded-full text-white"
                            onClick={() => setIsLogged(!isLogged)}
                        >
                            SM
                        </p>
                        <p className="p-3 ">Samuel Leão</p>
                    </section>
                ) : (
                    <nav className="flex items-center justify-between pl-8 md:border-l-2 md:border-gray-300 h-full">
                        <button
                            className="p-2.5 w-32 text-gray-500 "
                            onClick={() => setIsLogged(!isLogged)}
                        >
                            Fazer login
                        </button>
                        <button className="p-2.5 w-32 border-2 rounded border-gray-400 shadow-md">
                            Cadastrar
                        </button>
                    </nav>
                )}
            </div>

        </header>
    );
};

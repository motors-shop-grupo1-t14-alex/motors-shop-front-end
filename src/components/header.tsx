import React from "react";
import { useState } from "react";

export const Header = (): any => {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <header className="flex px-12 border-b-2 border-gray-300 font-medium ">
            <section className="flex gap-2 items-baseline border-r-2 border-gray-300 w-5/6">
                <h1>Motor</h1>
                <h2 className="text-2xl text-brand1">shop</h2>
            </section>
            {isLogged == true ? (
                <section className="flex items-center justify-center pl-8 w-1/6">
                    <p
                        className="bg-blue-500 p-3 rounded-full text-white"
                        onClick={() => setIsLogged(!isLogged)}
                    >
                        SM
                    </p>
                    <p className="p-3 ">Samuel Leão</p>
                </section>
            ) : (
                <nav className="flex items-center justify-between pl-8 w-1/6 ">
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

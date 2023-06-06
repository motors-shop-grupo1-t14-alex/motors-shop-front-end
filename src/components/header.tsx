import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.svg";

export const Header = (): any => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <header className="flex px-3 items-center border-b-2 border-gray-300 font-medium ">
      <img
        src={logo}
        alt="logotipo motors shop"
        className="w-[153.02px] h-[26.34px]"
      />
      {isLogged == true ? (
        <section className="flex items-center justify-center pl-5 w-1/6">
          <p
            className="bg-blue-500 p-3 rounded-full text-white"
            onClick={() => setIsLogged(!isLogged)}
          >
            SM
          </p>
          <p className="p-3 ">Samuel Leão</p>
        </section>
      ) : (
        <nav className="flex items-center justify-between w-[100%] ">
          <button
            className="p-2.5 w-[100%] text-gray-500 "
            onClick={() => setIsLogged(!isLogged)}
          >
            Fazer login
          </button>
          <button className="p-2.5 border-2 rounded border-gray-400 shadow-md">
            Registrar
          </button>
        </nav>
      )}
    </header>
  );
};

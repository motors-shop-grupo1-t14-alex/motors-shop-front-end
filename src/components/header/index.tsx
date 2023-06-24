import { useContext, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export const Header = (): JSX.Element => {
  const { user, logout } = useContext(UserContext);
  const { innerWidth } = window;
  const [screenSize, setScreenSize] = useState(innerWidth);
  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    if(!menu){
      return "hidden"
    } 
    return "block"
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }


  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });

  const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

  return (
    <header className="flex justify-center border-b-2 border-gray-300 font-medium h-20">
      <div className="flex items-center justify-between h-full w-9/10 max-w-screen-2xl">
        <a href="/" className="cursor-pointer">
          <img src="/logo-motors-shop.svg" alt="logo-motors-shop" />
        </a>
        {screenSize < 768 ? (
          <button onClick={toggleMenu} className="block md:hidden py-3 focus:outline-none group rounded-[10px]">
            {menu ? <AiOutlineClose size='28' /> : <AiOutlineMenu size='28' />}
            <div className={`${openMenu()} absolute z-10 top-20 right-0 h-40 w-full bg-white border rounded-b-[2.5px]`}>
              <ul className="flex gap-5 flex-col items-center w-full pt-10">
                <li className="w-9/10 flex justify-start">{window.location.href.split("/")[3] == "login" ? (
              <Link to="/login" className="p-2.5 w-32 text-brand1">
                Fazer login
              </Link>
            ) : (
              <Link
                to="/login"
                className=" text-gray-500 hover:text-brand1"
              >
                Fazer login
              </Link>
            )}</li>
              <li className="w-full flex justify-center"><Link
              className="p-2.5 w-9/10 border-2 rounded border-gray-400 shadow-md flex justify-center items-center"
              to="/register"
            >
              Cadastrar
            </Link></li>
              </ul>

            </div>
          </button>
        ) : user ? (
          <section className="flex items-center justify-center pl-8 gap-4 md:border-l-2 md:border-gray-300 h-full">
            <div className="w-[52px] h-[52px] bg-brand1 rounded-full flex justify-center items-center">
              <p className="text-white text-2xl font-medium">
                {verificaEspaco(user?.name)
                  ? `${user?.name?.split(" ")[0].substring(0, 1)}${user?.name
                      ?.split(" ")[1]
                      .substring(0, 1)}`
                  : user.name && `${user?.name[0].toUpperCase()}`}
              </p>
            </div>
            <p className="p-3 ">{user.name}</p>
            <button onClick={logout}>
              <BiLogOut size={28} />
            </button>
          </section>
        ) : (
          <nav className="flex items-center justify-between pl-8 md:border-l-2 md:border-gray-300 h-full">
            {window.location.href.split("/")[3] == "login" ? (
              <Link to="/login" className="p-2.5 w-32 text-brand1">
                Fazer login
              </Link>
            ) : (
              <Link
                to="/login"
                className="p-2.5 w-32 text-gray-500 hover:text-brand1"
              >
                Fazer login
              </Link>
            )}

            <Link
              className="p-2.5 w-32 border-2 rounded border-gray-400 shadow-md flex justify-center items-center"
              to="/register"
            >
              Cadastrar
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

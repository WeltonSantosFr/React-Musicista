import { FaGuitar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import {BsArrowBarRight, BsPencilSquare} from "react-icons/bs"
import { useState } from "react";

const LandingPage = () => {
  const [dropbar, setDropbar] = useState(false)
  const navigate = useNavigate();
  return (
    <div onClick={() => {dropbar? setDropbar(false): null}} className="overflow-x-hidden bg-gray3 h-screen w-full">
      <main className="flex justify-center w-full h-full">
        <div className="w-4/5 h-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col items-center gap-3 text-center">
            <header className="flex items-center h-28 w-full justify-between">
              <div className="flex items-center">
              <FaGuitar className="text-text w-[1.563rem] h-[1.563rem]" />
              <h1 className="text-text font-bold text-3xl">Musicista</h1>
              </div>
              
              {dropbar? <div className="w-24 h-20 rounded-md fixed top-16 right-[10%] bg-gray1 flex flex-col justify-evenly items-center">
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center" onClick={() => navigate("/login")}>Logar</button>
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center"  onClick={() => navigate("/register")}>Registrar</button>
              </div>: null}
              <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className="text-text w-[1.563rem] h-[1.563rem] md:hidden"/>

              <div className="hidden md:flex">
              <button
                className="w-40 h-14  text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
                onClick={() => navigate("/login")}
                >
                <BsArrowBarRight/>
                Logar
              </button>
              <button
                className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
                onClick={() => navigate("/register")}
              >
                <BsPencilSquare/>
                Registrar
              </button>
              </div>
            </header>
            <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:flex-row-reverse sm:justify-between sm:items-center">

          <img
            src="src\assets\leadingPageImage.png"
            alt="landingPageImage"
            className="w-[75%] rounded-[25%] sm:w-[50%] md:w-[40%] transform hover:scale-95 transition-all ease-linear"
            />
            <p className="text-text w-[100%] sm:w-[40%] text-center font-medium leading-7 text-base sm:text-xl lg:text-2xl">
              Musicista é uma plataforma feita para os amantes de musica que
              buscam aprender e entender como a magia da musica realmente é
              feita
            </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

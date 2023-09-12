import { useState } from "react";
import { FaGuitar, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [dropbar, setDropbar] = useState(false)

  return (
    <header className="w-4/5 h-full flex flex-col items-center">
      <div className="flex items-center h-28 w-full justify-between">
              <div className="flex items-center">
              <FaGuitar className="text-text w-[1.563rem] h-[1.563rem]" />
              <h1 className="text-text font-bold text-3xl">Musicista</h1>
              </div>

              {dropbar? <div className="w-24 h-20 rounded-md fixed top-[10%] right-[10%] bg-gray1 flex flex-col justify-evenly items-center">
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center" onClick={() => navigate("")}>Meu Perfil</button>
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center"  onClick={() => navigate("")}>Sair</button>
              </div>: null}
              <FaUserCircle onClick={() => setDropbar(!dropbar)} className="text-text w-[1.563rem] h-[1.563rem]"/>
      </div>

    </header>
  );
};

export default Header;


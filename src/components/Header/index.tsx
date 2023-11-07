import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaGuitar, FaHome, FaMusic, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [dropbar, setDropbar] = useState(false)

  return (
    <header className="flex items-center h-20 w-4/5 justify-between">
      <div className="flex items-center hover:cursor-pointer" onClick={() => navigate("/home")}>
        <FaGuitar className="text-text min-w-[1.563rem] min-h-[1.563rem]" />
        <h1 className="text-text font-bold text-3xl">Musicista</h1>
      </div>

      {dropbar ? <div className="w-32 h-min rounded-md fixed top-16 right-[10%] bg-dark flex flex-col justify-evenly items-center">
        
      <button
          className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
          onClick={() => navigate("/home")}
        >
          <FaHome className="ml-4"/>
          Home
        </button>
        <button
          className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
          onClick={() => navigate("/tabs")}
        >
          <FaMusic className="ml-4" />
          Tabs
        </button>
        <button
          className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
          onClick={() => navigate("/profile")}
        >
          <FaUserEdit className="ml-4"/>
          Edit User
        </button>
        <button
          className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
          onClick={() => navigate("/")}
        >
          <BsDoorOpenFill className="ml-4"/>
          Logoff
        </button>
        
      </div> : null}
      <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className="text-text w-[1.563rem] h-[1.563rem] md:hidden" />

      <div className="hidden md:flex">
        <button
          className="w-40 h-14  text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
          onClick={() => navigate("/home")}
        >
          <FaHome />
          Home
        </button>
        <button
          className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
          onClick={() => navigate("/tabs")}
        >
          <FaMusic />
          Tabs
        </button>
        <button
          className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
          onClick={() => navigate("/tabs")}
        >
          <FaUserEdit />
          Edit User
        </button>
        <button
          className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
          onClick={() => navigate("/tabs")}
        >
          <BsDoorOpenFill />
          Logoff
        </button>
      </div>
    </header>
  );
};

export default Header;


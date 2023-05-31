import { FaGuitar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-gray3 h-[6.25rem] flex items-center justify-center">
      <div
        className="flex h-full w-4/5 items-center justify-center lg:justify-start cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <FaGuitar className="text-text w-[3.125rem] h-[3.125rem]" />
        <h1 className="text-text font-bold text-5xl">Musicista</h1>
      </div>
    </header>
  );
};

export default Header;

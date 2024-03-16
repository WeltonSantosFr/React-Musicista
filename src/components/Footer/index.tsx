import { AiOutlineArrowUp, AiFillHeart } from "react-icons/ai";

const Footer = () => {
  function scrollBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="bg-black w-full h-12 flex justify-center z-10">

      <div className="flex h-12 w-11/12 justify-between items-center">
        <div className="flex justify-evenly w-60 items-center">
          <p className="text-white font-normal text-xs text-left flex flex-col sm:flex-row justify-center items-center">Feito com <AiFillHeart className="text-[rgb(220,38,38)]" /> por Welton Franco</p>
        </div>

        <button
          className="bg-gray-7 h-10 w-10 flex items-center justify-center hover:bg-gray3"
          onClick={() => scrollBackToTop()}
        >
          <AiOutlineArrowUp className="text-white w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

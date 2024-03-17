import { AiOutlineArrowUp, AiFillHeart } from "react-icons/ai";
import { Button } from "../Button";

const Footer = () => {
  function scrollBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="bg-black dark:bg-gray-7 w-full h-12 flex justify-center z-10">

      <div className="flex h-12 w-11/12 justify-between items-center">
        <div className="flex justify-evenly w-60 items-center">
          <p className="text-white font-normal text-xs text-left flex flex-col sm:flex-row justify-center items-center">Feito com <AiFillHeart className="text-[rgb(220,38,38)]" /> por Welton Franco</p>
        </div>
      <Button onClick={() => scrollBackToTop()} className="max-w-fit dark:hover:bg-gray-6">
      <AiOutlineArrowUp className="text-white dark:text-gray-3 w-5 h-5" />
      </Button>
        
      </div>
    </footer>
  );
};

export default Footer;

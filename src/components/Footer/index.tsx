import { AiOutlineArrowUp, AiFillHeart } from "react-icons/ai";

const Footer = () => {
  function scrollBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="bg-dark w-full h-[4.688rem] flex justify-center mt-5">
      <div className="flex h-full w-4/5 justify-between items-center">
        <div className="flex justify-evenly w-60 items-center">
          <p className="text-text font-semibold">Feito com</p>
          <AiFillHeart className="text-[rgb(220,38,38)]" />
          <p className="text-text font-semibold">por Welton Franco</p>
        </div>

        <button
          className="bg-[#000000] h-10 w-10 flex items-center justify-center hover:bg-gray3"
          onClick={() => scrollBackToTop()}
        >
          <AiOutlineArrowUp className="text-text w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

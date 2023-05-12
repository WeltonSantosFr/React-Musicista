import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark w-full h-[6.25rem]">
      <div className="flex h-full w-4/5 justify-end items-center">
        <button className="bg-[#000000] h-20 w-20 flex items-center justify-center">
          <AiOutlineArrowUp className="text-text w-10 h-10" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

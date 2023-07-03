import { FaGuitar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden max-h-screen">
      <main className="bg-gray3 w-full h-screen flex justify-center">
        <div className="w-4/5 h-full flex flex-col-reverse justify-evenly items-center lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center">
              <FaGuitar className="text-text w-[3.125rem] h-[3.125rem]" />
              <h1 className="text-text font-bold text-5xl">Musicista</h1>
            </div>
            <p className="text-text font-normal leading-[3.125rem] text-[1.875rem] w-[21.875rem] lg:text-[2rem] lg:w-[28.125rem] xl:text-[2.25rem] xl:w-[34.375rem] 2xl:text-[2.5rem] 2xl:w-[40.625rem]">
              Musicista é uma plataforma feita para os amantes de musica que
              buscam aprender e entender como a magia da musica realmente é
              feita
            </p>
            <div className="flex gap-5">
              <button
                className="w-full lg:w-40 h-14 bg-gray2 text-text rounded-md font-semibold hover:bg-dark hover:text-gray1"
                onClick={() => navigate("/login")}
              >
                Logar
              </button>
              <button
                className="w-full lg:w-40 h-14 bg-gray2 text-text rounded-md font-semibold hover:bg-dark hover:text-gray1"
                onClick={() => navigate("/register")}
              >
                Registrar
              </button>
            </div>
          </div>
          <img
            src="src\assets\leadingPageImage.png"
            alt="landingPageImage"
            className="w-[21.875rem] h-[21.875rem] rounded-[6.25rem] xl:w-[25rem] xl:h-[25rem] 2xl:w-[31.25rem] 2xl:h-[31.25rem] transform hover:scale-110 transition-all ease-linear"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

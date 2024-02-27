import HeaderUnlogged from "../../components/HeaderUnlogged";

const LandingPage = () => {
  
  return (
    <div className="overflow-x-hidden bg-gray3 h-screen w-full">
      <main className="flex justify-center w-full h-full">
        <div className="w-4/5 h-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col items-center gap-3 text-center">
            <HeaderUnlogged/>
            <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:flex-row-reverse sm:justify-between sm:items-center">

          <img
            src="src\assets\landingPageImage.svg"
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

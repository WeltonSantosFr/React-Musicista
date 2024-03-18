import HeaderUnlogged from "../../components/HeaderUnlogged";


const LandingPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderUnlogged />
      

      <main className="flex-grow mt-12 flex justify-center items-center">
        <div className="w-11/12 h-full flex flex-col items-center justify-center gap-10 sm:flex-row-reverse sm:justify-between sm:items-center">

          <img
            src={`https://firebasestorage.googleapis.com/v0/b/musicista-86562.appspot.com/o/assets%2FlandingPageImage.svg?alt=media&token=5ca2d925-87d5-4a60-ad28-7f616ef03457`}
            alt="landingPageImage"
            className="w-[75%] rounded-[25%] sm:w-[50%] md:w-[40%] transform hover:scale-95 transition-all ease-linear"
          />
          <p className="text-black dark:text-gray-4 w-[100%] sm:w-[40%] text-center font-medium leading-7 text-base sm:text-xl lg:text-2xl">
            Musicista é uma plataforma feita para os amantes de musica que
            buscam aprender e entender como a magia da musica realmente é
            feita
          </p>
        </div>

      </main>


    </div>
  );
};

export default LandingPage;

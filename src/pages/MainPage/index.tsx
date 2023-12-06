import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainPage = () => {
  

  return (
    <div className="bg-gray3 min-h-screen flex flex-col items-center justify-start">
      <Header/>
      <div className="bg-[#000] w-full h-screen text-text flex justify-center items-center">Content</div>
      <Footer />
    </div>
  );
};

export default MainPage;

import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState(
    [ {title:"O que são as notas musicais afinal?"}, 
      {title:"O que são triades?"}, 
      {title:"O que são tétrades?"}, 
      {title:"O que são as escalas maiores?"}, 
      {title:"O que são as menores?"}, 
      {title:"O que é um campo harmonico?"}])

  return (
    <div className="bg-gray3 min-h-screen flex flex-col items-center">
      <Header />
      <div className="w-4/5 flex flex-col gap-4">

        <div className="w-full flex flex-col sm:flex-row items-center md:justify-between gap-2.5 md:gap-0">
        <h3 className="font-semibold text-base text-text self-start">
          Bem vindo user, que tal explorar um pouco?
        </h3>

        <div className="w-full flex justify-between md:justify-end gap-2 md:w-1/2">
          <button disabled className="bg-text text-[#000] h-10 w-20 sm:w-24 rounded-xl font-medium disabled:opacity-50">Aulas</button>
          <button disabled className="bg-text text-[#000] h-10 w-20 sm:w-24 rounded-xl font-medium disabled:opacity-50">Fórum</button>
          <button disabled className="bg-text text-[#000] h-10 w-20 sm:w-24 rounded-xl font-medium disabled:opacity-50">Tabs</button>
        </div>
        
        </div>

        <div className="w-full">
          <div className="w-full h-16 flex flex-row justify-between items-center">
            <p className="text-text text-lg font-bold">Aulas</p>
            <button className="text-text text-lg font-bold">Acessar Página</button>
          </div>

          <div className="w-full flex overflow-x-auto justify-between gap-8 rounded-md">
            {lessons.map((lesson) => 
            <div className="border-2 border-text rounded-md flex flex-col justify-between min-w-[200px] max-w-[200px] min-h-[280px] max-h-[280px] items-center"> 
              <img src="src\assets\Office Icon.jpg" alt="lessonImage" className="w-[200px]"/>
              <p className="text-text font-semibold text-lg text-center">{lesson.title}</p>
              <button className="w-3/4 h-8 bg-text rounded-md mb-1 text-[#000] font-semibold">Acessar Página</button>
            </div>)}
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  );
};

export default MainPage;

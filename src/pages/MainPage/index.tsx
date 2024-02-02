import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainPage = () => {


  return (
    <div className="bg-gray3 h-screen w-screen flex flex-col justify-between items-center">
      <Header />

      <div className="w-11/12 h-full bg-grey3 flex flex-col justify-between items-center ">

        <div className="w-full h-48 bg-dark text-text text-lg font-medium flex justify-evenly items-center rounded-md">
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center gap-2">
          <h3>Dê uma olhada em nossas aulas de teoria musical!</h3>
          <p className="text-xs font-normal">Nota: Escrevi estas aulas com base em meus próprios estudos, fique a vontade para dar sugestões de novas aulas, melhorias e correções <a className="text-[rgb(0,50,255)]" onClick={() =>
                    (window.location.href = "mailto:weltonsantosfr@gmail.com")
                  }>aqui</a>
          </p>
          </div>

          <div className="w-1/2 h-full flex flex-wrap text-normal text-base gap-4 justify-center items-center">
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Notas Musicais</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Tríades</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Tétrades</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Escalas Maiores</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Escalas Menores</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Campos Harmonicos</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Modos Gregos</button>
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Acessar Pagina</button>
          
          </div>
        </div>
        




      </div>

      <Footer />
    </div>
  );
};

export default MainPage;

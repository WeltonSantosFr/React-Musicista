import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainPage = () => {


  return (
    <div className="bg-gray3 h-screen w-screen flex flex-col justify-between items-center">
      <Header />

      <div className="w-11/12 max-h-full bg-grey3 flex flex-col justify-evenly items-center gap-2">

        <div className="w-full h-48 bg-dark text-text text-sm md:text-base font-medium flex justify-evenly items-center rounded-md">
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center gap-2">
            <h3>Dê uma olhada em nossas aulas de teoria musical!</h3>
            <p className="text-xs font-normal">Nota: Escrevi estas aulas com base em meus próprios estudos, fique a vontade para dar sugestões de novas aulas, melhorias e correções <a className="text-[rgb(0,50,255)]" onClick={() =>
              (window.location.href = "mailto:weltonsantosfr@gmail.com")
            }>aqui</a>
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-wrap text-normal text-base gap-4 justify-center items-center">
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Acessar Aulas</button>
          </div>
        </div>

        <div className="w-full h-48 bg-dark text-text text-sm md:text-base font-medium flex justify-evenly items-center rounded-md">
          <div className="w-1/2 h-full flex flex-wrap text-normal text-base gap-4 justify-center items-center">
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Acesse o Blog</button>

          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center gap-2">
            <h3>Cheque o nosso blog!</h3>
            <p className="text-xs font-normal">Descubra posts interessantes, poste suas duvidas, junte-se a comunidade musicista!</p>
          </div>
        </div>

        <div className="w-full h-48 bg-dark text-text text-sm md:text-base font-medium flex justify-evenly items-center rounded-md">
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center gap-2">
            <h3>Descubra músicistas para colaborar</h3>
            <p className="text-xs font-normal">Encontre outros musicistas para colaborar, amamos musica, vamos faze-la juntos!</p>
          </div>

          <div className="w-1/2 h-full flex flex-wrap text-normal text-base gap-4 justify-center items-center">
            <button className="bg-gray2 w-28 h-20 rounded-md hover:bg-gray3">Encontrar Musicistas</button>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default MainPage;

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray3 min-h-screen flex flex-col items-center">
      <Header />
      <div className="w-4/5 flex flex-col gap-4">
        <h3 className="font-bold text-2xl text-text">
          Bem vindo user, que tal explorar um pouco?
        </h3>

        <div className="flex flex-col gap-2 rounded-lg h-min justify-evenly">
          <div className="h-1 bg-text"></div>
          <h2 className="flex font-semibold text-text">Guitarra e Violão</h2>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Básico</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <button
                className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3"
                onClick={() => navigate("/lesson/notes")}
              >
                Notas
              </button>
              <button className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3">
                Tríades
              </button>
              <button className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3">
                Tétrades
              </button>
              <button className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3">
                Escala Maior
              </button>
              <button className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3">
                Escala Menor
              </button>
              <button className="w-44 h-10 mb-2 bg-gray2 rounded-md text-text font-semibold hover:bg-gray3">
                Campo Harmônico
              </button>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Intermediário</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Avançado</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <div className="h-1 bg-text"></div>
          <h2 className="flex font-semibold text-text">Contrabaixo</h2>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Básico</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Intermediário</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Avançado</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <div className="h-1 bg-text"></div>
          <h2 className="flex font-semibold text-text">Piano e Teclado</h2>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Básico</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Intermediário</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Avançado</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <div className="h-1 bg-text"></div>
          <h2 className="flex font-semibold text-text">Bateria</h2>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Básico</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Intermediário</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
          <details className="bg-text shadow rounded">
            <summary className="list-none flex flex-wrap items-center cursor-pointer">
              <h3 className="flex flex-1 p-4 font-semibold">Avançado</h3>
              <div className="flex w-10 items-center justify-center">
                <GoTriangleRight />
              </div>
            </summary>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold">Em produção</p>
            </div>
          </details>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

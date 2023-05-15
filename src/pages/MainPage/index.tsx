import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainPage = () => {
  const [topic, setTopic] = useState<string | null>(null);
  return (
    <div className="overflow-auto max-h-screen">
      <Header />

      <div className="bg-gray3 h-screen flex justify-center">
        <div className="w-4/5 flex flex-col mt-12 gap-8">
          <p className="font-bold text-2xl text-text">
            Bem Vindo, que tal explorar um pouco?
          </p>

          <div className="text-text">
            <p className="font-normal text-2xl">Conteúdos</p>
            <div className="bg-gray1 h-[12.5rem] rounded-[0.5rem] flex justify-evenly items-center">
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("notes")}
              >
                Notas
              </button>
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("triads")}
              >
                Tríades
              </button>
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("tetrads")}
              >
                Tétrades
              </button>
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("major scale")}
              >
                Escala Maior
              </button>
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("minor scale")}
              >
                Escala Menor
              </button>
              <button
                className="bg-gray2 h-[11.25rem] w-[13.75rem] rounded-[0.5rem] hover:bg-gray3"
                onClick={() => setTopic("harmonic field")}
              >
                Campo Harmonico
              </button>
            </div>
          </div>
          {topic === "notes" ? (
            <div className="w-full flex flex-col justify-evenly self-center items-start overflow-scroll">
              <h2 className="font-bold text-text text-5xl">
                O que são as notas musicais afinal?
              </h2>
              <p className="text-text text-3xl">
                As notas musicais são frequências específicas de vibração, que
                geram um som quando são interpretadas pelo nosso cérebro, logo
                após passar pelo sistema auditivo. Todo instrumento musical
                (inclusive nossa voz, através das cordas vocais) vibra quando
                tocamos. Quando essa vibração é regular, conseguimos ouvir uma
                nota. Quando é irregular, costumamos chamar de barulho, porque
                não é produzida uma nota definida.
              </p>
              <p className="text-text text-3xl">
                Na música ocidental, nos baseamos em sete notas chamadas
                naturais. Elas formam aquela velha sequência que aprendemos
                desde a infância, o famoso Dó Ré Mi Fá Sol Lá Si (Dó). O
                interessante é que essa sequência é cíclica e aparece em
                quantidades determinadas em cada instrumento. Ou seja, quando
                vemos aquele monte de teclas em um piano, ou as diversas cordas
                e casas em um violão, temos a repetição dessas notas de diversas
                formas. O que muda é que temos para cada nota a possibilidade de
                tocá-la mais grave ou mais aguda. A frequência não é a mesma
                entre um Dó grave e um Dó agudo, porém guardam uma proporção que
                faz com que as identifiquemos ambas como Dó.
              </p>
              <p className="text-text text-3xl">
                Se você estiver se perguntando como sabemos que uma nota está
                afinada, usamos um padrão, que pode ser alterado dependendo da
                situação. Nosso padrão de afinação de baseia na nota Lá, que
                deve estar afinada em 440Hz. À partir desse padrão que as outras
                notas são afinadas, conforme a distância específica entre as
                notas.
              </p>
            </div>
          ) : topic === "triads" ? (
            <></>
          ) : topic === "tetrads" ? (
            <></>
          ) : topic === "major scale" ? (
            <></>
          ) : topic === "minor scale" ? (
            <></>
          ) : topic === "harmonic field" ? (
            <></>
          ) : (
            <div className="w-4/5 flex h-screen justify-center self-center">
              <h2 className="font-bold text-text text-6xl w-[28.125rem]">
                SELECIONE UM TÓPICO ACIMA
              </h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

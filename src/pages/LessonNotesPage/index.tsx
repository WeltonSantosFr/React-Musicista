import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const LessonNotesPage = () => {
  const navigate = useNavigate();


  return (
    <div className="bg-gray3 h-screen w-screen flex flex-col justify-between items-center">
      <Header />
      <div className="w-11/12 h-full bg-grey3 flex flex-col justify-start items-start gap-4 text-text font-normal text-lg">
        <h3 className="font-medium text-xl">
          Aula: Introdução às Notas Musicais
        </h3>
        <section>
          <p>
            Objetivo:
          </p>
          <p>
            Esta aula visa fornecer uma compreensão básica sobre notas musicais, elementos fundamentais na linguagem da música. Ao final da aula,
            você deve ser capaz de identificar as notas nas linhas e espaços de uma pauta musical, entender a relação entre as notas e um instrumento, e reconhecer as oitavas.
          </p>
        </section>

        <section>

          <h5>
            1. Definição de Notas Musicais:
          </h5>
          <p>
            Notas musicais são símbolos utilizados para representar os sons musicais. Elas são representadas por letras (A, B, C, D, E, F, G) e podem estar acompanhadas por acidentes (sustenidos ou bemóis) para indicar alterações de altura.
          </p>
        </section>

        <section>
          <h5>
            2. A Pauta Musical:
          </h5>
          <p>
            A pauta musical é um conjunto de linhas e espaços onde as notas são escritas. Uma pauta padrão possui cinco linhas e quatro espaços. Cada linha e espaço representam uma nota diferente.
          </p>
        </section>

        <section>
          <h5>
            3. As Notas nas Linhas e Espaços:
          </h5>
          <p>
            As notas nas linhas da pauta, de baixo para cima, são E, G, B, D, F (mnemônico: "Every Good Boy Does Fine"). Nos espaços, as notas são F, A, C, E (mnemônico: "FACE").
          </p>
        </section>

        <section>
          <h5>
            4. A Relação com o Teclado de um Instrumento:
          </h5>
          <p>
            No teclado de um piano, por exemplo, as notas seguem uma sequência lógica de A a G. Cada oitava no teclado contém sete notas,
            e a sequência se repete nas oitavas superiores e inferiores.
          </p>
        </section>

        <section>
          <h5>
            5. O Conceito de Oitavas:
          </h5>
          <p>
            Oitava é a distância entre uma nota e a próxima nota com o mesmo nome. Por exemplo, a oitava de C é o próximo C em uma direção ascendente ou descendente.
          </p>
        </section>

        <section>
          <h5>
            6. Notas Sustenidas e Bemóis:
          </h5>
          <p>
            Notas podem ser alteradas por sustenidos (#) ou bemóis (b). Um sustenido aumenta a altura de uma nota em meio tom, enquanto um bemol a diminui em meio tom.
          </p>
        </section>

        <section>
          <h5>
            7. Exercícios Práticos:
          </h5>
          <p>
            Pratique identificar notas em partituras.
            Associe as notas na partitura com as teclas do seu instrumento.
            Experimente tocar ou cantar escalas simples para internalizar as relações entre as notas.
          </p>
        </section>

        <section>
          <h5>
            8. Conclusão:
          </h5>
          <p>
            As notas musicais são a base da linguagem musical. Ao entender como ler, identificar e relacionar as notas, você terá uma base sólida para explorar e criar música.
            Pratique regularmente para fortalecer esses conceitos e aprimorar suas habilidades musicais.
          </p>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default LessonNotesPage;

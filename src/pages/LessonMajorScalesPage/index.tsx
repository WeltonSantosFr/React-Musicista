import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { ILesson } from "../../interfaces/lesson.interface";
import api from "../../services/api";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

const LessonMajorScalesPage = () => {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<ILesson>();
  useEffect(() => {
    api
      .post("", {
        query: `query Lesson {
            lessons(where: {title: "O que são as escalas maiores?"}) {
              id
              title
              primaryContent  
              secondTitle
              secondaryContent
              examples
              exampleContent
              exampleAssets {
                id
                url
              }
            }
          }`,
      })
      .then((res) => {
        setLesson(res.data.data.lessons[0]);
        console.log(lesson);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray3">
      <Header />
      <div className="w-4/5 flex justify-between text-text font-medium text-base mt-10">
        <button onClick={() => navigate("/lesson/tetrads")}>
          Pagina Anterior
        </button>

        <button onClick={() => navigate("/lesson/minor-scales")}>
          Proxima Pagina
        </button>
      </div>
      <div className="w-4/5 h-full mt-10 flex flex-col gap-10 text-text font-normal text-lg">
        <h3 className="font-bold text-3xl">{lesson?.title}</h3>
        {lesson?.primaryContent.map((paragraph) => (
          <p key={lesson.primaryContent.indexOf(paragraph)}>{paragraph}</p>
        ))}

        <h5 className="font-bold text-lg">{lesson?.examples}</h5>

        <div className="flex flex-col self-center items-start gap-10">
          <img
            src={lesson?.exampleAssets[0].url}
            alt="exampleAsset"
            className="rounded-[110px]"
          />
          <p className="leading-loose font-semibold text-xl ">
            {lesson?.exampleContent?.[0]}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LessonMajorScalesPage;

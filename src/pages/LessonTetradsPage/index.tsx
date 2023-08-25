import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ILesson } from "../../interfaces/lesson.interface";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LessonTetradsPage = () => {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<ILesson>();
  useEffect(() => {
    api
      .post("", {
        query: `query Lesson {
          lessons(where: {title: "O que são tétrades?"}) {
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
        <button onClick={() => navigate("/lesson/triads")}>
          Pagina Anterior
        </button>

        <button onClick={() => navigate("/lesson/major-scales")}>
          Proxima Pagina
        </button>
      </div>
      <div className="w-4/5 h-full mt-10 flex flex-col gap-10 text-text font-normal text-lg">
        <h3 className="font-bold text-3xl">{lesson?.title}</h3>
        {lesson?.primaryContent.map((paragraph) => (
          <p key={lesson.primaryContent.indexOf(paragraph)}>{paragraph}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LessonTetradsPage;

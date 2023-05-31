import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { ILesson } from "../../interfaces/lesson";
import api from "../../services/api";

const LessonTriadsPage = () => {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<ILesson>();
  useEffect(() => {
    api
      .post("", {
        query: `query Lesson {
          lessons(where: {title: "O que são tríades?"}) {
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
        <button onClick={() => navigate("/lesson/notes")}>
          Pagina Anterior
        </button>

        <button onClick={() => navigate("/lesson/tetrads")}>
          Proxima Pagina
        </button>
      </div>
      <div className="w-4/5 h-full mt-10 flex flex-col gap-10 text-text font-normal text-lg">
        <h3 className="font-bold text-3xl">{lesson?.title}</h3>
        {lesson?.primaryContent.map((paragraph) => (
          <p key={lesson.primaryContent.indexOf(paragraph)}>{paragraph}</p>
        ))}

        <h4 className="font-bold text-xl">{lesson?.secondTitle}</h4>
        {lesson?.secondaryContent?.map((paragraph) => (
          <p key={lesson.secondaryContent?.indexOf(paragraph)}>{paragraph}</p>
        ))}

        <h5 className="font-bold text-lg">{lesson?.examples}</h5>

        <div className="flex flex-col items-center gap-10">
          {lesson?.exampleAssets?.map((asset) => (
            <div key={asset.id} className="flex items-center self-start gap-5">
              <img
                src={asset.url}
                alt="exampleAsset"
                className="w-[500px] h-[500px] rounded-[100px]"
              />{" "}
              <p className="leading-loose font-semibold text-xl">
                {lesson.exampleContent[lesson.exampleAssets?.indexOf(asset)]}
              </p>{" "}
            </div>
          ))}
          <div className="flex">
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LessonTriadsPage;

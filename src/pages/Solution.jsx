import { Link } from "react-router-dom";
import { questions } from "../assets/utils/Questions";

const Solution = () => {
  const solvedQuestions = questions.filter(
    (question) => question.solved === true
  );
  return (
    <div>
      <h1>solution list</h1>
      <div className="w-[95%] mx-auto mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solvedQuestions.map((question) => {
          const { id, field, src } = question;
          return (
            <div key={id} className="bg-blue-400">
              <img src={src} alt="maths question" className="" />
              <div className="flex items-center justify-between px-2 py-4">
                <h4 className="capitalize">field: {field}</h4>
                <Link
                  to={`/solution/${id}`}
                  className="bg-red-700 text-white capitalize"
                >
                  view solution
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solution;

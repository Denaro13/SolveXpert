import { useParams } from "react-router";
import ImageContainer from "../components/ImageContainer";
import MathSolution from "../components/MathSolution";
import SolutionPreviewer from "../components/SolutionPreviewer";
import { questions } from "../assets/utils/Questions";
import { useGlobalContext } from "../contex/GlobalContex";
import { Link } from "react-router-dom";

const QuestionSolution = () => {
  const { id } = useParams();
  const { steps, setSteps } = useGlobalContext();
  const question = questions.filter((question) => question.id === id);
  const submitSolution = () => {
    console.log("solution submitted");
    // question[0].solution = steps;
    // question[0].solved = true;
    // console.log(question);
  };
  const skipQuestion = () => {
    console.log("question skipped");
    setSteps([
      { content: "", isSolution: false },
      { content: "", isSolution: true },
    ]);
  };

  return (
    <div className="  h-[calc(100vh-20rem)] mx-auto relative">
      <div className="bg-blue-200 mb-4 py-2 px-4 flex items-center justify-between">
        <Link
          to="/solve"
          className="bg-red-700 text-white px-4 py-1 rounded-xl"
          onClick={skipQuestion}
        >
          Skip
        </Link>
        <button
          type="button"
          onClick={submitSolution}
          className="bg-green-800 text-white px-4 py-1 rounded-xl"
        >
          Done
        </button>
      </div>
      <div className="flex gap-4 px-4">
        <div className=" flex gap-2 w-full ">
          <ImageContainer />
          <MathSolution />
        </div>
        <SolutionPreviewer />
      </div>
    </div>
  );
};

export default QuestionSolution;

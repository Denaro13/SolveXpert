import { useParams } from "react-router";
import ImageContainer from "../components/ImageContainer";
import MathSolution from "../components/MathSolution";
import SolutionPreviewer from "../components/SolutionPreviewer";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contex/GlobalContex";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const QuestionSolution = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState([]);
  const { steps, setSteps, setShow } = useGlobalContext();
  const navigate = useNavigate();

  const getQuestion = async () => {
    try {
      const response = await axios.get(
        `https://solvexpert-api.onrender.com/api/v1/questions/${id}`
      );
      setQuestion(response.data.question);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);
  const { _id, field, image } = question;
  const hasEmptyContent = steps.some((step) => step.content === "");

  const updateQuestion = async () => {
    try {
      const response = await axios.patch(
        `https://solvexpert-api.onrender.com/api/v1/questions/${id}`,
        {
          solution: steps,
          solved: true,
        }
      );
      setQuestion(response.data.question);
    } catch (error) {
      console.error(error);
    }
  };
  const submitSolution = () => {
    updateQuestion();
    setSteps([
      { content: "", isSolution: false, imagePath: "" },
      { content: "", isSolution: true, imagePath: "" },
    ]);
    toast.success("Great! Your solution has been recorded");
    navigate("/solve");
  };
  const skipQuestion = () => {
    setSteps([
      { content: "", isSolution: false, imagePath: "" },
      { content: "", isSolution: true, imagePath: "" },
    ]);
    setShow(false);
  };

  return (
    <div className="h-[calc(100vh-4rem)] mx-auto relative overflow-y-hidden">
      <div className="bg-blue-200 mb-4 py-2 px-4 flex items-center justify-between">
        <Link
          to="/solve"
          className="bg-red-700 text-white px-4 py-1 rounded-xl hover:bg-red-600"
          onClick={skipQuestion}
        >
          Skip
        </Link>
        <Link
          to="/solve"
          onClick={submitSolution}
          className={
            hasEmptyContent
              ? "bg-slate-600 text-white px-4 py-1 rounded-xl relative group "
              : "bg-green-800 text-white px-4 py-1 rounded-xl hover:bg-green-700"
          }
          disabled={hasEmptyContent}
        >
          Done
          <span className="absolute top--10 w-48 right-10 hidden group-hover:block bg-slate-400 text-white text-[12px] px-2 py-1 rounded-md">
            Solution cannot be submitted with empty step(s).
          </span>
        </Link>
      </div>
      <div className="flex gap-4 px-4">
        <div className=" flex gap-2 w-full">
          <ImageContainer field={field} image={image} id={_id} />
          <MathSolution />
        </div>
        <SolutionPreviewer />
      </div>
      <Link
        to="/solving-tips"
        target="_blank"
        type="button"
        className="bg-red-400 fixed bottom-5 left-3 w-[10rem] h-3rem px-2 py-1 font-bold text-white rounded-lg animate-bounce "
      >
        Important Tips!!!
      </Link>
    </div>
  );
};

export default QuestionSolution;

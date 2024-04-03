import QuestionCard from "./QuestionCard";
import { questions } from "../assets/utils/Questions";
// import { Link } from "react-router-dom";

const QuestionsList = () => {
  const filteredQuestions = questions.filter(
    (question) => question.solved === false
  );
  return (
    <div className="w-[95%] mx-auto mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredQuestions.map((question) => {
        const { id, field, src } = question;
        return <QuestionCard key={id} id={id} field={field} src={src} />;
      })}
    </div>
  );
};

export default QuestionsList;

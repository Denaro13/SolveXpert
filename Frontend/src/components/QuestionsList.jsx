import QuestionCard from "./QuestionCard";
// import { questions } from "../assets/utils/Questions";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const QuestionsList = () => {
  const [questions, setQuestions] = useState(null);
  const getQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/questions"
      );
      // console.log(response.data);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  if (questions === null) {
    return (
      <div className="w-[95%] mx-auto mt-8">
        <LoadingSpinner />
      </div>
    );
  }

  const filteredQuestions = questions.filter(
    (question) => question.solved === false
  );
  return (
    <div className="w-[95%] mx-auto mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredQuestions.map((question) => {
        const { _id, field, image } = question;
        return (
          <div key={_id} className="mx-auto">
            <QuestionCard id={_id} field={field} src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsList;

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
        "https://solvexpert-api.onrender.com/api/v1/questions"
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
  if (filteredQuestions.length < 1) {
    return (
      <div className="w-[95%] mx-auto mt-8">
        <h2>
          Whoops! Looks like we have run out of available math tasks for you.
        </h2>
      </div>
    );
  }

  return (
    <div className="w-[95%] mx-auto mt-8">
      <div>
        <h2 className="text-base sm:text-2xl md:text-3xl">
          Here are a list of available maths task:
        </h2>
      </div>
      <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((question) => {
          const { _id, field, image } = question;
          return (
            <div key={_id} className="bg-white">
              <QuestionCard id={_id} field={field} src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsList;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Solution = () => {
  const [questions, setQuestions] = useState([]);
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
  const solvedQuestions = questions.filter(
    (question) => question.solved === true
  );
  return (
    <div>
      <h1>solution list</h1>
      <div className="w-[95%] mx-auto mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solvedQuestions.map((question) => {
          const { _id, field, image } = question;
          return (
            <div key={_id} className="bg-white">
              <img src={image} alt="maths question" className="" />
              <div className="flex items-center justify-between px-2 py-4">
                <h4 className="capitalize">field: {field}</h4>
                <Link
                  to={`/solution/${_id}`}
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

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const Solution = () => {
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
      <section className="mt-8">
        <div className="w-[95%] mx-auto">
          <p className="sm:text-xl md:text-2xl mb-4">
            Making our users understand the core concept of mathematics is our
            top most priority hence our detailed step-by-step solution.
          </p>
        </div>
        <div className="w-[95%] mx-auto mt-8">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  const solvedQuestions = questions.filter(
    (question) => question.solved === true
  );
  if (solvedQuestions.length < 1) {
    return (
      <section className="mt-8">
        <div className="w-[65%] mx-auto">
          <p className="sm:text-xl md:text-2xl mb-4">
            Making our users understand the core concept of mathematics is our
            top most priority hence our detailed step-by-step solution.
          </p>
        </div>
        <div className="w-[95%] mx-auto mt-8">
          <h2>
            Whoops! Looks like we have run out of available math solution for
            you yet.
          </h2>
        </div>
      </section>
    );
  }
  return (
    <section className="py-8">
      <div className="w-[95%] mx-auto">
        <p className="sm:text-xl md:text-2xl mb-4">
          Making our users understand the core concept of mathematics is our top
          most priority hence our detailed step-by-step solution.
        </p>
      </div>
      <div className="w-[95%] mx-auto mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solvedQuestions.map((question) => {
          const { _id, field, image } = question;
          return (
            <div key={_id} className="bg-white">
              <img
                src={image}
                alt="maths question"
                className="rounded-t-lg h-40 w-full "
              />
              <div className="flex items-center justify-between px-2 py-4">
                <h4 className="capitalize font-semibold">field: {field}</h4>
                <Link
                  to={`/solution/${_id}`}
                  className="bg-red-700 text-white capitalize text-sm py-1 px-2 rounded-lg hover:bg-red-800"
                >
                  view solution
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solution;

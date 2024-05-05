import { useParams } from "react-router";
import StepByStepSolution from "../components/StepByStepSolution";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "../components/ImageModal";
import { Link } from "react-router-dom";

const ApprovedSolution = () => {
  const [question, setQuestion] = useState();
  const { id } = useParams();
  const getQuestion = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/questions/${id}`
      );
      setQuestion(response.data.question);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getQuestion();
  }, []);
  if (!question) {
    return <h1>Loading...</h1>;
  }
  const { _id, field, image, solution } = question;
  return (
    <section className=" h-[calc(100vh-4rem)] pt-4">
      <div className="mb-4 pl-4">
        <Link
          to="/solution"
          className="bg-red-700 capitalize text-white px-4 py-2 rounded-xl"
          // onClick={skipQuestion}
        >
          go back
        </Link>
      </div>
      <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 items-center md:items-start justify-center ">
        <div className=" bg-white w-1/2 h-[50%] p-4">
          <div className="mb-4">
            <h1 className="capitalize mb-2">{field} task</h1>
            <h4 className="capitalize text-sm">task id : {_id}</h4>
          </div>

          <img src={image} alt="question image" />
          <ImageModal image={image} />
        </div>
        <StepByStepSolution solution={solution} />
      </div>
    </section>
  );
};

export default ApprovedSolution;

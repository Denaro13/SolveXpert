import { useParams } from "react-router";
import { questions } from "../assets/utils/Questions";
// import { useGlobalContext } from "../contex/GlobalContex";
import StepByStepSolution from "../components/StepByStepSolution";

const ApprovedSolution = () => {
  const { id } = useParams();
  // const { steps } = useGlobalContext();
  const question = questions.filter((question) => question.id === id);
  const solution = question[0].solution;
  console.log(question);
  return (
    <section className=" h-[calc(100vh-4rem)] pt-10">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 items-center md:items-start justify-center ">
        <div className=" bg-white w-1/2 h-[50%]">
          <h1>image container</h1>
        </div>
        <StepByStepSolution solution={solution} />
      </div>
    </section>
  );
};

export default ApprovedSolution;

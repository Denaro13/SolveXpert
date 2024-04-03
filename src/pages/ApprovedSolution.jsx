import ImageContainer from "../components/ImageContainer";
import StepByStepSolution from "../components/StepByStepSolution";

const ApprovedSolution = () => {
  return (
    <section className=" flex gap-4 w-[98%] h-[calc(100vh-4rem)] mx-auto pt-4">
      <ImageContainer />
      <StepByStepSolution />
    </section>
  );
};

export default ApprovedSolution;

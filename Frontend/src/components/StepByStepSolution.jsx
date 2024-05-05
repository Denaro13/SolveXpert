import "katex/dist/katex.min.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../contex/GlobalContex";

const StepByStepSolution = ({ solution }) => {
  const {
    show,
    handleSolutionContent,
    renderSolutionContent,
    renderApprovedStepContent,
  } = useGlobalContext();

  return (
    <div
      className={
        show
          ? "w-[25rem] md:w-[50%] lg:w-[40%] h-[75vh] overflow-x-hidden rounded-3xl border-black border-[1rem]"
          : " bg-gray-500 w-[25rem] md:w-[50%] lg:w-[40%] h-[75vh] overflow-x-hidden rounded-3xl border-black border-[1rem]"
      }
    >
      {!show && (
        <div className="mt-12 w-[95%] mx-auto">
          <h1 className="text-4xl text-white font-bold mb-4">Solutions</h1>
          <div className="bg-white text-black flex flex-col rounded-2xl px-4 py-2">
            <h4 className="uppercase text-gray-400 text-xs font-bold">
              solveXpert solution
            </h4>
            <div className="text-black my-4">
              {renderSolutionContent(solution)}
            </div>
            <button
              onClick={handleSolutionContent}
              className="bg-red-700 w-[70%] text-white mx-auto my-3 p-3 rounded-full capitalize flex items-center justify-center gap-2"
            >
              Show solving steps <BsArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
      {show && (
        <>
          <div className="bg-white px-3 py-4">
            <button
              onClick={handleSolutionContent}
              className="text-red-600 flex items-center gap-2 mb-3"
            >
              <BsArrowLeft /> Back
            </button>
            <h3 className="capitalize md:text-2xl lg:text-3xl font-bold ">
              solveXpert solution
            </h3>
          </div>
          <div>
            {solution.map((step, index) => {
              return (
                <div key={index} className="bg-white mb-4 px-3 py-4">
                  <h3
                    className={
                      step.isSolution
                        ? "capitalize text-red-700 mb-2 font-bold"
                        : "capitalize text-red-700 mb-2"
                    }
                  >
                    {step.isSolution ? "solution" : `step ${index + 1}`}
                  </h3>
                  <div className="w-full mb-4">
                    {step.imagePath !== "" && (
                      <img
                        src={step.imagePath}
                        alt="image"
                        className="h-[20rem] w-full object-cover"
                      />
                    )}
                    {renderApprovedStepContent(step)}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default StepByStepSolution;

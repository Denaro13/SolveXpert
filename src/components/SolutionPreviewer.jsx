// import { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SolutionPreviewer = ({
  steps,
  renderStepContent,
  show,
  handleSolutionContent,
}) => {
  // const [show, setShow] = useState(false);

  // const handleSolutionContent = () => {
  //   setShow(!show);
  // };

  const renderSolutionContent = () => {
    const solutionStep = steps.find((step) => step.isSolution);
    if (solutionStep) {
      // renderStepContent(step);
      const parts =
        solutionStep.content.split(/(\$[^$]+\$|\$\$[^$]+\$\$|\n)/g) || [];
      return parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return (
            <BlockMath key={index} math={part.substring(2, part.length - 2)} />
          );
        } else if (part.startsWith("$") && part.endsWith("$")) {
          return (
            <InlineMath key={index} math={part.substring(1, part.length - 1)} />
          );
        } else if (part.startsWith("![Image](") && part.endsWith(")")) {
          const imageUrl = part.substring(9, part.length - 1); // Extract the image URL
          return (
            <img
              key={index}
              src={imageUrl}
              alt="Image"
              className="h-[20rem] w-full object-center"
            />
          );
        } else if (part === "\n") {
          return <br key={index} />;
        } else {
          return part;
        }
      });
    } else {
      return <div>No solution step found</div>;
    }
  };

  return (
    <div
      className={
        show
          ? " w-[25%] h-[75vh] overflow-x-hidden rounded-3xl border-black border-[1rem]"
          : " bg-gray-500 w-[25%] h-[75vh] overflow-x-hidden rounded-3xl border-black border-[1rem]"
      }
    >
      {!show && (
        <div className="mt-12 w-[95%] mx-auto">
          <h1 className="text-4xl text-white font-bold mb-4">Solutions</h1>
          <div className="bg-white text-black flex flex-col rounded-2xl px-4 py-2">
            <h4 className="uppercase text-gray-800 text-xs ">
              solveXpert solution
            </h4>
            <div className="text-black my-3">{renderSolutionContent()}</div>
            <button
              onClick={handleSolutionContent}
              className="bg-red-700 w-[70%] text-white mx-auto mt-2 p-2 rounded-full capitalize flex items-center justify-center gap-2"
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
          {steps.map((step, index) => (
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
              <div className="w-full mb-4">{renderStepContent(step)}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SolutionPreviewer;

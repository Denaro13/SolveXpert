import { FiPlusSquare } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import { RiImageAddFill } from "react-icons/ri";

const MathSolution = ({
  addStep,
  removeStep,
  handleInputChange,
  steps,
  handleImageUpload,
  setShow,
}) => {
  return (
    <div className=" bg-white w-[50%] h-[calc(100vh-6rem)] overflow-x-hidden pt-5 pb-2 px-3 shadow-xl ">
      <div className="bg-white shadow-md h-10 mx-auto flex items-center px-2 mb-4 rounded-md ">
        <button onClick={addStep}>
          <FiPlusSquare size={30} />
        </button>
      </div>
      <div className="overflow-x-hidden">
        {steps.map((step, index) => (
          <div key={index}>
            <div
              className={
                step.isSolution
                  ? "bg-red-700 text-white h-10 flex items-center justify-between rounded-t-md px-4"
                  : "bg-black text-white h-10 flex items-center justify-between rounded-t-md px-4"
              }
            >
              {/* <h3 className="uppercase font-bold">Step {index + 1}</h3> */}
              <h3 className="uppercase font-bold">
                {step.isSolution ? "solution" : `step ${index + 1}`}
              </h3>
              <div className="flex gap-1 items-center ">
                {steps.length > 1 && (
                  <button
                    onClick={() => removeStep(index)}
                    className={
                      step.isSolution
                        ? "hidden"
                        : "flex items-center text-red-400"
                    }
                  >
                    <TiTimes size={30} />
                  </button>
                )}
                <label
                  htmlFor={`file-input-${index}`}
                  className="flex items-center"
                >
                  <input
                    type="file"
                    accept="image/*"
                    id={`file-input-${index}`}
                    onChange={(e) => handleImageUpload(e, index)}
                    className="hidden"
                  />
                  {/* <BiUpload size={30} className="cursor-pointer" /> */}
                  <RiImageAddFill size={20} className="cursor-pointer" />
                </label>
              </div>
            </div>
            <div>
              <textarea
                rows={4}
                // placeholder="Enter step content"
                placeholder={`Enter ${
                  step.isSolution ? "solution" : "step"
                } content`}
                value={step.content}
                onClick={
                  step.isSolution ? () => setShow(false) : () => setShow(true)
                }
                className="w-full shadow-md mb-2 h-auto resize-none border border-gray-300 rounded-b-md p-1 focus:outline-none focus:border-blue-500 overflow-y-auto"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathSolution;

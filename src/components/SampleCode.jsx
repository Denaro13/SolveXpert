import { useState } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const SampleCode = () => {
  //   const [steps, setSteps] = useState([""]);
  const [currentStep, setCurrentStep] = useState("");

  const handleStepChange = (e) => {
    setCurrentStep(e.target.value);
  };

  const insertInlineMath = (e) => {
    const latexCode = "\\( ... \\)";
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const newStep =
      currentStep.substring(0, selectionStart) +
      latexCode +
      currentStep.substring(selectionEnd);
    setCurrentStep(newStep);
  };

  return (
    <div>
      <h2>Math Solution Steps</h2>
      <div>
        <textarea
          rows={4}
          cols={50}
          placeholder="Enter step"
          value={currentStep}
          onChange={handleStepChange}
        />
        <button onClick={insertInlineMath}>Insert Inline Math</button>
      </div>
      <div>
        <h3>Preview:</h3>
        <div id="preview-container">
          {currentStep.split("\\(").map((part, index) => {
            if (index % 2 === 0) {
              return <span key={index}>{part}</span>;
            } else {
              return <InlineMath key={index}>{"(" + part}</InlineMath>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SampleCode;

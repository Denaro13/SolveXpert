import { useState } from "react";
import ImageContainer from "../components/ImageContainer";
import MathSolution from "../components/MathSolution";
import SolutionPreviewer from "../components/SolutionPreviewer";
import { InlineMath, BlockMath } from "react-katex";

const QuestionSolution = () => {
  // const [steps, setSteps] = useState([{ content: "" }]);
  // const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState([
    { content: "", isSolution: false },
    { content: "", isSolution: true },
  ]);
  const [show, setShow] = useState(false);

  const handleSolutionContent = () => {
    setShow(!show);
  };
  const addStep = () => {
    // setSteps([...steps, { content: "" }]);
    const newStep = { content: "", isSolution: false };
    const updatedSteps = [
      ...steps.slice(0, steps.length - 1),
      newStep,
      steps[steps.length - 1],
    ];
    setSteps(updatedSteps);

    // setSteps([...steps, { content: "", imageUploaded: false }]);

    // setCurrentStepIndex(steps.length); // Set current step index to the newly added step
  };

  const handleInputChange = (index, content) => {
    const updatedSteps = [...steps];
    updatedSteps[index].content = content;
    setSteps(updatedSteps);
  };

  const removeStep = (index) => {
    const updatedSteps = steps.filter((step, i) => i !== index);
    setSteps(updatedSteps);
  };

  // const handleImageUpload = (e, index) => {
  //   const file = e.target.files[0];
  //   if (!file || steps[index].imageUploaded) return;

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const imageDataUrl = reader.result;
  //     const newContent = `${steps[index].content}\n![Image](placeholder)`;
  //     handleInputChange(index, newContent);

  //     const updatedSteps = [...steps];
  //     updatedSteps[index].imageUploaded = true;
  //     setSteps(updatedSteps);
  //   };
  // };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageDataUrl = reader.result;
      // Convert data URL to blob
      fetch(imageDataUrl)
        .then((res) => res.blob())
        .then((blob) => {
          // Create object URL from blob
          const imageUrl = URL.createObjectURL(blob);
          const newContent = `${steps[index].content}\n![Image](${imageUrl})`;
          handleInputChange(index, newContent);
        })
        .catch((error) =>
          console.error("Error converting image to blob:", error)
        );
    };
  };

  const renderStepContent = (step) => {
    const parts = step.content.split(/(\$[^$]+\$|\$\$[^$]+\$\$|\n)/g) || [];
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
  };
  // const renderStepContent = (step) => {
  //   const parts = step.content.split(/(\$[^$]+\$|\$\$[^$]+\$\$|\n)/g) || [];
  //   return parts.map((part, index) => {
  //     if (part.startsWith("$$") && part.endsWith("$$")) {
  //       return (
  //         <BlockMath key={index} math={part.substring(2, part.length - 2)} />
  //       );
  //     } else if (part.startsWith("$") && part.endsWith("$")) {
  //       return (
  //         <InlineMath key={index} math={part.substring(1, part.length - 1)} />
  //       );
  //     } else if (part === "\n") {
  //       return <br key={index} />;
  //     } else {
  //       return part;
  //     }
  //   });
  // };

  return (
    <div className="flex gap-4 w-[98%] h-[calc(100vh-4rem)] mx-auto pt-4">
      <ImageContainer />
      <MathSolution
        addStep={addStep}
        handleInputChange={handleInputChange}
        removeStep={removeStep}
        steps={steps}
        renderStepContent={renderStepContent}
        handleImageUpload={handleImageUpload}
        setShow={setShow}
      />
      <SolutionPreviewer
        steps={steps}
        renderStepContent={renderStepContent}
        show={show}
        handleSolutionContent={handleSolutionContent}
      />
    </div>
  );
};

export default QuestionSolution;

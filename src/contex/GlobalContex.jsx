import { createContext, useContext, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [steps, setSteps] = useState([
    { content: "", isSolution: false },
    { content: "", isSolution: true },
  ]);
  const [show, setShow] = useState(false);

  const handleSolutionContent = () => {
    setShow(!show);
  };
  const addStep = () => {
    const newStep = { content: "", isSolution: false };
    const updatedSteps = [
      ...steps.slice(0, steps.length - 1),
      newStep,
      steps[steps.length - 1],
    ];
    setSteps(updatedSteps);
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
  const renderSolutionContent = () => {
    const solutionStep = steps.find((step) => step.isSolution);
    if (solutionStep) {
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
    <GlobalContext.Provider
      value={{
        steps,
        show,
        setSteps,
        handleSolutionContent,
        addStep,
        handleInputChange,
        removeStep,
        handleImageUpload,
        renderStepContent,
        setShow,
        renderSolutionContent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

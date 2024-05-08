import "katex/dist/katex.min.css";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import { toast } from "react-toastify";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [steps, setSteps] = useState([
    {
      content: "",
      isSolution: false,
      imagePath: "",
    },
    {
      content: "",
      isSolution: true,
      imagePath: "",
    },
  ]);
  const [show, setShow] = useState(false);

  const handleSolutionContent = () => {
    setShow(!show);
  };
  const addStep = () => {
    const newStep = { content: "", isSolution: false, imagePath: "" };
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
  const uploadSolutionImage = async (formData, index) => {
    try {
      const response = await axios.post(
        `https://solvexpert-api.onrender.com/api/v1/questions/uploadSolutionImage`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.statusText === "OK") {
        const src = response.data.msg.src;
        const updatedSteps = [...steps];
        updatedSteps[index].imagePath = src;
        setSteps(updatedSteps);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageSize = 1024 * 1024 * 3;
    if (file.size > imageSize) {
      toast.error("image size should not be more than 3MB");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageDataUrl = reader.result;
      const formData = new FormData();
      formData.append("image", file);
      // Convert data URL to blob
      fetch(imageDataUrl)
        .then((res) => res.blob())
        .then((blob) => {
          // Create object URL from blob
          const imageUrl = URL.createObjectURL(blob);
          uploadSolutionImage(formData, index);
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
  const renderApprovedStepContent = (step) => {
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
        // const imageUrl = part.substring(9, part.length - 1); // Extract the image URL
        // console.log(imageUrl);
        return;
      } else if (part === "\n") {
        return <br key={index} />;
      } else {
        return part;
      }
    });
  };
  const renderSolutionContent = (steps) => {
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
        renderApprovedStepContent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

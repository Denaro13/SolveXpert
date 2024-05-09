import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TipsAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel4");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h1 className="sm:text-xl capitalize font-semibold">Latex</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Latex is used to write mathematical variables, symbols,
              expressions, equations etc.
            </p>
            <p>
              Not sure how to write latex? Click on the
              <a
                href="https://katex.org/docs/supported"
                className="text-red-400 "
              >
                {" "}
                link
              </a>{" "}
              to see examples.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h1 className="sm:text-xl capitalize font-semibold">
              Inline Latex
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Inline latex involves mathematical expressions written within the
              same line as normal text. Inline latex can be written on the
              platform using <span className="font-bold">$ $</span>
            </p>
            <p>
              Example: The equation of the line is
              <span className="font-bold"> $y=2x+4$</span>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h1 className="sm:text-xl capitalize font-semibold">Block Latex</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Block latex are used to display mathematical expressions on a new
              line. Block latex can be written on the platform using
              <span className="font-bold"> $$ $$</span>
              <br />
              When writing block latex always ensure to start on a new line.
            </p>
            <p>
              Example: The equation of the line is: <br />
              <span className="font-bold"> $$y=2x+4$$</span>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h1 className="sm:text-xl capitalize font-semibold">
              Using Images
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Images are important when making visual presentation to explain
              maths concepts. It is important to first upload an image before
              explaining the concepts from the image. <br />
              Kindly try and ensure you remove white spaces created when an
              image is uploaded.
            </p>
            <p className="text-red-500">
              <span className="font-bold text-lg">Important!</span>: Whenever
              you upload an image and you intend to delete the image simply just
              remove the entire step!!!
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h1 className="sm:text-xl capitalize font-semibold">
              Before Submitting
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Before submitting your solutions, always ensure you check every
              step for any possible error.
            </p>
            <p>
              This is to ensure that all solutions are accurate and will not
              hinder learners understanding.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TipsAccordion;

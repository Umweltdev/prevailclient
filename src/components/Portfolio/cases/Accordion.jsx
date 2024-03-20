import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const styles = {
  summaryHovered: {
    color: "purple",
    transitions: "1s ease-in-out",
  },
  
  isSummaryHovered: {
    fontSize: "5vw",
  },
};

export default function AccordionCase() {
  const [isSummaryHovered, setIsSummaryHovered] = React.useState(false);

  return (
    <div>
      <Accordion disableGutters>
        <AccordionSummary
          disableGutters
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={isSummaryHovered ? styles.summaryHovered : null}
          onMouseEnter={() => setIsSummaryHovered(true)}
          onMouseLeave={() => setIsSummaryHovered(false)}
        >
          Time Restrictions
        </AccordionSummary>
        <AccordionDetails>
          The owner of the company was too busy running the current company to
          devote much time to starting a new online project
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={isSummaryHovered ? styles.summaryHovered : null}
          onMouseEnter={() => setIsSummaryHovered(true)}
          onMouseLeave={() => setIsSummaryHovered(false)}
        >
          Lack Of Online Presense
        </AccordionSummary>
        <AccordionDetails>
          Prior to this, the business had no online presence. This included
          having no website, no domain name, and no digital traces at all.
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={isSummaryHovered ? styles.summaryHovered : null}
          onMouseEnter={() => setIsSummaryHovered(true)}
          onMouseLeave={() => setIsSummaryHovered(false)}
        >
          Designing website Content
        </AccordionSummary>
        <AccordionDetails>
          The client did not have the time or tools to design website content.
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={isSummaryHovered ? styles.summaryHovered : null}
          onMouseEnter={() => setIsSummaryHovered(true)}
          onMouseLeave={() => setIsSummaryHovered(false)}
        >
          Email Infrastructure
        </AccordionSummary>
        <AccordionDetails>
          There was not an email setup that worked with the business for
          business communication.
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={isSummaryHovered ? styles.summaryHovered : null}
          onMouseEnter={() => setIsSummaryHovered(true)}
          onMouseLeave={() => setIsSummaryHovered(false)}
        >
          Strategic Planning
        </AccordionSummary>
        <AccordionDetails>
          The client was unsure about the content structure of the website. They
          needed a strategic approach to effectively communicate their services
          to different target audiences, including residential and commercial
          sectors.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

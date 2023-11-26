"use client"
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';


const FaqCard = ({ data }) => {
    const { question, answer } = data;
    return (
      <Accordion
      className='bg-[#262626] text-white'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3
          className='text-base xl:text-xl'
          >
            {question}
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-sm xl:text-lg leading-normal">{answer}</p>
        </AccordionDetails>
      </Accordion>
    );
  };

  export default FaqCard;
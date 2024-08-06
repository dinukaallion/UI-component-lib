import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from './AccordionProps';

const AccordionComponent: React.FC<AccordionProps> = ({ title, content, expanded, disabled }) => {
  return (
    <Accordion defaultExpanded={expanded} disabled={disabled}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

AccordionComponent.displayName = 'AccordionComponent';

export default AccordionComponent;

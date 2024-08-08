"use client";

import { AccordionDetailsProps } from "@mui/material";
import { StyledAccordionDetails } from "./style";

const AccordionDetails = (props: AccordionDetailsProps) => {
  const { children } = props;
  return <StyledAccordionDetails>{children}</StyledAccordionDetails>;
};

export default AccordionDetails;

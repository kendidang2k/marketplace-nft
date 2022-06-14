import { Grid } from "@mui/material";
import { FitlerMbHeader } from "components/molecules/FilterMbHeader/FitlerMbHeader";
import React from "react";

interface FilterBoxProps {}

export const FilterBox: React.FC<FilterBoxProps> = ({}) => {
  return (
    <Grid>
      <FitlerMbHeader />
    </Grid>
  );
};

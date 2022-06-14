import { ButtonBase, Grid } from "@mui/material";
import React from "react";

interface FitlerMbHeaderProps {}

export const FitlerMbHeader: React.FC<FitlerMbHeaderProps> = ({}) => {
  return (
    <Grid sx={{ displayL: { xs: "block", mdL: "none" } }}>
      <ButtonBase>Filter</ButtonBase>
    </Grid>
  );
};

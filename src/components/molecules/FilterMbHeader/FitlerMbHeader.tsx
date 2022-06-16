import { ButtonBase, Grid } from "@mui/material";
import React from "react";

interface FitlerMbHeaderProps {}

export const FitlerMbHeader: React.FC<FitlerMbHeaderProps> = ({}) => {
  return (
    <Grid sx={{ display: { xs: "flex", md: "none" }, justifyContent: 'flex-end' }}>
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 25px",
          backgroundColor: '#c99681',
          fontWeight:'bold',
          borderRadius: '5px'
        }}
      >
        Filter
      </ButtonBase>
    </Grid>
  );
};

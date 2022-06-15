import { ButtonBase, Grid } from "@mui/material";
import React from "react";
import { FilterDetail } from "../FilterDetail/FilterDetail";

interface FitlerMbHeaderProps {}

export const FitlerMbHeader: React.FC<FitlerMbHeaderProps> = ({}) => {
  return (
    <Grid
      sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center',justifyContent: "flex-end", position: 'relative', height: '60px' }}
    >
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 25px",
          backgroundColor: "#c99681",
          fontWeight: "bold",
          borderRadius: "5px",
          height: '40px'
        }}
      >
        Filter
      </ButtonBase>
      <FilterDetail />
    </Grid>
  );
};

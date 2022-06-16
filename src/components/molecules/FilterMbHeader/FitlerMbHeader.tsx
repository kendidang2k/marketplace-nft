import { ButtonBase, Grid } from "@mui/material";
import React from "react";
import useFilterBoxActive from "../../../zustand/useFilterBoxActive";
import { FilterDetail } from "../FilterDetail/FilterDetail";

interface FitlerMbHeaderProps {}

export const FitlerMbHeader: React.FC<FitlerMbHeaderProps> = ({}) => {
  const { filterBoxStatus, changeFilterBoxStatus } = useFilterBoxActive();

  console.log("filterBoxStatus", filterBoxStatus);

  return (
    <Grid
      sx={{
        display: { xs: "flex", md: "block" },
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
        height: { xs: "60px", md: 0 },
        borderBottom: "1px solid #282c34",
      }}
    >
      <ButtonBase
        onClick={() => changeFilterBoxStatus(!filterBoxStatus)}
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 25px",
          backgroundColor: "#c99681",
          fontWeight: "bold",
          borderRadius: "5px",
          height: "40px",
        }}
      >
        Filter
      </ButtonBase>
      <FilterDetail />
    </Grid>
  );
};

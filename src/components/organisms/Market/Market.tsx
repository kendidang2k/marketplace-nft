import { Grid } from "@mui/material";
import React from "react";
import { FilterBox } from "../FilterBox/FilterBox";

interface MarketProps {}

export const Market: React.FC<MarketProps> = ({}) => {
  return (
    <Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <FilterBox />
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </Grid>
  );
};

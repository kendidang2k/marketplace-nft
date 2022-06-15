import { Grid } from "@mui/material";
import React from "react";
import { DrakerList } from "../DrakerList/DrakerList";
import { FilterBox } from "../FilterBox/FilterBox";

interface MarketProps {}

export const Market: React.FC<MarketProps> = ({}) => {
  return (
    <Grid sx={{height: '100%'}}>
      <Grid container >
        <Grid item xs={12} md={4}>
          <FilterBox />
        </Grid>
        <Grid item xs={12} md={8} >
          <DrakerList />
        </Grid>
      </Grid>
    </Grid>
  );
};

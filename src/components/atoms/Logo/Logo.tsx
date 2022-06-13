import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo.jpg"

type Props = {
  isNameVisible: boolean;
};

export const Logo: React.FC<{ isNameVisible: boolean }> = () => {
  return (
    <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content'}}>
      <img src={logo} alt="Logo" width={"160px"}/>
      <Typography component={'span'} sx={{color: '#fd936d', fontWeight: 'bold', fontSize: '30px'}}>MarketPlace</Typography>
    </Grid>
  );
};

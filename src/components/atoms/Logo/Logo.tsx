import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo.jpg";

type Props = {
  isNameVisible: boolean;
};

export const Logo: React.FC<{ isNameVisible: boolean }> = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
      }}
    >
      <Box
        component="img"
        sx={{ width: { xs: "140px" } }}
        alt="Logo"
        src={logo}
      />
    </Grid>
  );
};

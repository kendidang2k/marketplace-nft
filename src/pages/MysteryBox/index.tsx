import { Grid } from "@mui/material";
import { BoxList } from "components/organisms/BoxList/BoxList";
import React from "react";
import bgImg from '../../assets/images/mystery-box-bg.jpg'

interface MysteryBoxProps {}

export const MysteryBox: React.FC<MysteryBoxProps> = ({}) => {
  return (
    <Grid
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        // backgroundColor: "#13161b",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid sx={{width: '100%', height: '100%'}}>
        <BoxList />
      </Grid>
    </Grid>
  );
};

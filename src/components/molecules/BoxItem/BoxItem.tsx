import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import './index.scss'

interface BoxItemProps {
  title: String;
  img: any;
  circleImg: any;
  price: number;
}

export const BoxItem: React.FC<BoxItemProps> = ({
  title,
  img,
  price,
  circleImg,
}) => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "60%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box
        className="circle"
        component={"img"}
        src={circleImg}
        alt="box img"
        sx={{ width: "100%", position: "absolute", left: "0", top: '8%', zIndex: '1' }}
      />
      <Typography
        component={"p"}
        sx={{
          color: "transparent",
          fontSize: "35px",
          fontWeight: "bold",
          backgroundImage: `linear-gradient(to right,#cb9b51 22%, #f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 78%,#695832 100%)`,
          backgroundClip: "text",
        }}
      >
        {title}
      </Typography>
      <Box
        component={"img"}
        src={img}
        alt="box img"
        sx={{ width: { xs: "300px", md: "300px" }, zIndex: 2 }}
      />
      <Typography
        component={"p"}
        sx={{ fontSize: "35px", color: "#fff", fontWeight: "bold" }}
      >
        ${price}
      </Typography>
    </Grid>
  );
};

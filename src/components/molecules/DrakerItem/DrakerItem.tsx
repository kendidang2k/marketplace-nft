import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import fire from "../../../assets/images/fire.svg";

export interface DrakerItemProps {
  id: number;
  type: string;
  drakerName: string;
  imageURL: string;
  price: number;
}

export const DrakerItem: React.FC<DrakerItemProps> = ({
  id,
  type,
  drakerName,
  imageURL,
  price,
}) => {
  console.log("type", type);

  return (
    <Grid
      sx={{
        position: 'relative',
        backgroundColor: "#1c1f25",
        border: "1px solid #282c34",
        width: { xs: "220px", md: "170px" },
        height: "280px",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "10px",
        padding: "15px",
      }}
    >
      <Typography
        component={"p"}
        sx={{
          backgroundColor: `#900000`,
          width: "fit-content",
          padding: "1px 10px",
          borderRadius: "5px",
          color: "#fff",
          fontSize: "13px",
        }}
      >
        #{id}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: "#fff",
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={fire}
          alt="icon"
          sx={{ width: "15px", marginRight: "5px" }}
        />
        {drakerName}
      </Typography>
      <Box
        component={"img"}
        src={imageURL}
        alt="Draker image"
        sx={{ width: "100%" }}
      />
      <Typography component={"p"} sx={{position: 'absolute', bottom: '5px', left:'20px', color: '#fff', fontSize: '14px'}}>{price}$</Typography>
    </Grid>
  );
};

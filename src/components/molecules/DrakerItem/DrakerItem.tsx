import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
        backgroundColor: "#1c1f25",
        border: "1px solid #282c34",
        width: { xs: "220px", md: "170px" },
        height: "300px",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "10px",
        padding: "15px",
      }}
    >
      <Typography
        component={"p"}
        sx={{
          backgroundColor: `${type}`,
          width: "fit-content",
          padding: "1px 10px",
          borderRadius: "5px",
          color: "#fff",
          fontSize: "13px",
        }}
      >
        {id}
      </Typography>
      <Typography component={"p"}>{drakerName}</Typography>
      <Box
        component={"img"}
        src={imageURL}
        alt="Draker image"
        sx={{ width: "100%" }}
      />
      <Typography component={"p"}>{price}</Typography>
    </Grid>
  );
};

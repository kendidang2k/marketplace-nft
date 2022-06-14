import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface DrakerItemProps {
  id: number;
  drakerName: string;
  imageURL: string;
  price: number;
}

export const DrakerItem: React.FC<DrakerItemProps> = ({
  id,
  drakerName,
  imageURL,
  price,
}) => {
  return (
    <Grid>
      <Typography component={"p"}>{id}</Typography>
      <Typography component={"p"}>{drakerName}</Typography>
      <Box component={"img"} src={imageURL} alt="Draker image" />
      <Typography component={"p"}>{price}</Typography>
    </Grid>
  );
};

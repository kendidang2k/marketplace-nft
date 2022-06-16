import { ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";
import fireIcon from "../../../assets/images/fire.svg";
import waterIcon from "../../../assets/images/water-icon.png";
import earthIcon from "../../../assets/images/earth-icon.png";
import { Box } from "@mui/system";

interface ClassGroupProps {}

const classGroupData = [
  {
    title: "Fire",
    icon: fireIcon,
  },
  {
    title: "Water",
    icon: waterIcon,
  },
  {
    title: "Earth",
    icon: earthIcon,
  },
];

export const ClassGroup: React.FC<ClassGroupProps> = ({}) => {
  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      {classGroupData.map((item, index) => {
        return (
          <ButtonBase
            key={index}
            sx={{
              backgroundColor: "#1c1f25",
              padding: "2px 15px",
              display: "flex",
              alignItems: "center",
              margin: "15px",
              borderRadius: "5px",
            }}
          >
            <Box
              component={"img"}
              src={item.icon}
              alt="icon"
              sx={{ width: "12px" }}
            />
            <Typography
              component={"p"}
              sx={{ marginLeft: "10px", color: "#fff" }}
            >
              {item.title}
            </Typography>
          </ButtonBase>
        );
      })}
    </Grid>
  );
};

import { ButtonBase, Grid, Typography } from "@mui/material";
import RangeSlider from "components/atoms/RangeSlider/RangeSlider";
import React from "react";
import useFilterBoxActive from "../../../zustand/useFilterBoxActive";
import { ClassGroup } from "../ClassGroup/ClassGroup";
import "./index.scss";

interface FilterDetailProps {}

export const FilterDetail: React.FC<FilterDetailProps> = ({}) => {
  const { filterBoxStatus, changeFilterBoxStatus } = useFilterBoxActive();

  return (
    <Grid
      className={
        filterBoxStatus ? "filter__box__active" : "filter__box__inactive"
      }
      sx={{
        width: "100%",
        height: "calc(100vh - 60px - 60px)",
        position: "absolute",
        left: "0",
        top: "60px",
        backgroundColor: "#13161b",
        zIndex: "10",
        padding: "10px 15px 0 0",
        transition: ".5s ease-in-out",
        borderRight: "1px solid #282c34" 
      }}
    >
      <Grid
        sx={{
          display: "flex",
          borderBottom: "1px solid #282c34",
          paddingLeft: "10px",
        }}
      >
        <Typography
          component={"p"}
          sx={{ fontSize: "30px", fontWeight: "bold", color: "#c99681" }}
        >
          Filter
        </Typography>
        <ButtonBase sx={{ color: "#004bfb", marginLeft: "15px" }}>
          Reset
        </ButtonBase>
      </Grid>
      <Grid sx={{ padding: "20px 20px", borderBottom: "1px solid #282c34" }}>
        <Typography
          component={"p"}
          sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
        >
          Price Range
        </Typography>
        <RangeSlider />
      </Grid>
      <Grid sx={{ padding: "20px 20px", borderBottom: "1px solid #282c34" }}>
        <Typography
          component={"p"}
          sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
        >
          Class
        </Typography>
        <ClassGroup />
      </Grid>
    </Grid>
  );
};

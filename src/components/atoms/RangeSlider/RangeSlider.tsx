import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, InputBase, Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}$`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between  ",
        }}
      >
        <InputBase
          value={`${value[0]}$`}
          sx={{
            width: "40%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            padding: "0 10px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        />
        <Typography component={"p"} sx={{ color: "#fff", fontSize: "25px" }}>
          -
        </Typography>
        <InputBase
          value={`${value[1]}$`}
          sx={{
            width: "40%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            padding: "0 10px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        />
      </Grid>
    </Box>
  );
}

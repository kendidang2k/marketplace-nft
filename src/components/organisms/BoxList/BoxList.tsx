import { Box, Grid } from "@mui/material";
import { BoxItem } from "components/molecules/BoxItem/BoxItem";
import React from "react";
import box1 from "../../../assets/images/box1.png";
import box3 from "../../../assets/images/box3.png";
import box4 from "../../../assets/images/box4.png";
import circle from "../../../assets/images/circle1.png";
import circle2 from "../../../assets/images/circle2.png";
import circle3 from "../../../assets/images/circle3.png";

interface BoxListProps {}

const BoxListData = [
  {
    title: "Silver Box",
    img: box4,
    circleImg: circle3,
    price: 20,
  },
  {
    title: "Golden Box",
    img: box1,
    circleImg: circle2,
    price: 30,
  },
  {
    title: "Diamond Box",
    img: box3,
    circleImg: circle,
    price: 40,
  },
];

export const BoxList: React.FC<BoxListProps> = ({}) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",

        padding: "0 15%",
      }}
    >
      {BoxListData.map((item, index) => {
        return (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyConten: "center",
              flexDirection: { sx: "column", md: "row" },
            }}
          >
            <BoxItem
              title={item.title}
              img={item.img}
              price={item.price}
              circleImg={item.circleImg}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

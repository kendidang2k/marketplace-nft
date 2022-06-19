import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  DrakerItem,
  DrakerItemProps,
} from "components/molecules/DrakerItem/DrakerItem";
import React, { useState } from "react";
import rongBac from "../../../assets/images/RongBac.png";
import rongVang from "../../../assets/images/RongVang.png";
import kyLan from "../../../assets/images/kylan.png";

interface DrakerListProps {}

const drakerListData: Array<DrakerItemProps> = [
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: rongBac,
    price: 30,
    type: "fire",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: rongVang,
    price: 20,
    type: "water",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: kyLan,
    price: 23,
    type: "earth",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: rongVang,
    price: 13,
    type: "fire",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: kyLan,
    price: 23,
    type: "earth",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: rongVang,
    price: 13,
    type: "fire",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: kyLan,
    price: 23,
    type: "earth",
  },
  {
    id: 12312,
    drakerName: "asdasdasd",
    imageURL: rongVang,
    price: 13,
    type: "fire",
  },
];

export const DrakerList: React.FC<DrakerListProps> = ({}) => {
  const [typeColor, setTypeColor] = useState("");

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems:'flex-start',
        alignContent: 'flex-start',
        justifyContent: "center",
        height: {
          xs: "calc(100vh - 60px - 60px)",
          md: "calc(100vh - 60px - 100px)",
        },
        overflowY: "scroll",
      }}
    >
      {drakerListData &&
        drakerListData.map((item, index) => {
          return (
            <Box key={index}>
              <DrakerItem
                id={item.id}
                drakerName={item.drakerName}
                imageURL={item.imageURL}
                price={item.price}
                type={item.type}
              />
            </Box>
          );
        })}
    </Grid>
  );
};

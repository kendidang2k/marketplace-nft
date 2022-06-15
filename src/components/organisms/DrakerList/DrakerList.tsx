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
];

export const DrakerList: React.FC<DrakerListProps> = ({}) => {
  const [typeColor, setTypeColor] = useState("");

  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: 'calc(100vh - 60px - 60px)', overflow: 'scroll' }}>
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

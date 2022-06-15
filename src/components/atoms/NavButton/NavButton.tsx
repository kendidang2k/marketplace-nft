import { Box } from "@mui/material";
import React from "react";
import { FiMenu } from "react-icons/fi";
import useNavbarActive from "../../../zustand/useNavbarActive";

interface NavButtonProps {}

export const NavButton: React.FC<NavButtonProps> = ({}) => {
  const { navStatus, changeNavStatus } = useNavbarActive();

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "absolute",
        left: "20px",
        top: "20%",
        color: "#fff",
        fontSize: "25px",
      }}
      onClick={() => changeNavStatus(!navStatus)}
    >
      <FiMenu />
    </Box>
  );
};

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Logo } from "components/atoms/Logo/Logo";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AiFillHome, AiFillCodeSandboxCircle } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import useNavbarActive from "../../../zustand/useNavbarActive";
import useNavbar from "../../../zustand/useNavbar";

interface NavbarProps {}

interface navItem {
  title: String;
  link: string;
  icon?: any;
}

const navItemList: Array<navItem> = [
  {
    title: "Marketplace",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Inventory",
    link: "/inventory",
    icon: <MdInventory />,
  },
  {
    title: "Mystery Box",
    link: "/mystery-box",
    icon: <AiFillCodeSandboxCircle />,
  },
];

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { navStatus, changeNavStatus } = useNavbarActive();

  return (
    <Box
      className={navStatus ? "nav__active" : "nav__inactive"}
      sx={{
        position: { xs: "fixed", md: "relative" },
        left: 0,
        width: "100%",
        height: { xs: "100vh", md: "100vh" },
        backgroundColor: "#0000000",
        transition: "0.3s ease-in-out",
      }}
    >
      <Grid
        onClick={() => {
          changeNavStatus(!navStatus);
        }}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0000000",
          zIndex: "1",
          position: "absolute",
          left: "0",
          top: "0",
        }}
      ></Grid>
      <Grid
        className="navbar"
        sx={{
          width: { xs: "80%", md: "100%" },
          height: "100%",
          backgroundColor: "#13161b",
          borderRight: "0.2px solid #282c34",
          position: "relative",
          zIndex: "10",
        }}
      >
        <Logo isNameVisible={false} />
        <Grid sx={{ marginTop: "30px", width: "100%" }}>
          {navItemList.map((item: navItem, index: number) => {
            return (
              <Box key={index} sx={{ marginTop: "10px" }}>
                <Link className="nav__link" to={item.link || "/"}>
                  <Typography
                    component={"span"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      fontSize: "25px",
                    }}
                  >
                    {item.icon}
                  </Typography>
                  {item.title}
                </Link>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

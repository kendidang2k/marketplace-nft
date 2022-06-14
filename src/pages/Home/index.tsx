import { Grid, Typography } from "@mui/material";
import ConnectWalletModal from "components/organisms/ConnectWalletModal/ConnectWalletModal";
import GlobalModal from "components/organisms/GlobalModal/GlobalModal";
import { Header } from "components/organisms/Header/Header";
import { Navbar } from "components/organisms/Navbar/Navbar";
import useAccount from "hooks/useAccount";
import React, { useEffect } from "react";
import useNavbarActive from "../../zustand/useNavbarActive";

export const Home: React.FC = ({}) => {
  // const isNavActive = useNavbarActive((state) => state.navStatus);
  // const setIsNavActive = useNavbarActive((state) => state.changeNavStatus);

  // console.log("isNavActive", isNavActive);

  useEffect(() => {
    GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />);
  }, []);
  const account = useAccount();

  return (
    <Grid>
      <Grid container sx={{ backgroundColor: "#13161b" }}>
        <Grid item xs={12} md={4} sx={{ height: "100%", zIndex: "10" }}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            maxWidth: { xs: "375px", sm: "650px", md: "1350px", lg: "1850px" },
            margin: "auto",
            height: "auto",
            zIndex: "5",
          }}
        >
          <Header title={"Marketplace"} />
          Hello world !!!
          <p>Your address is {account}</p>
        </Grid>
        <GlobalModal />
      </Grid>
    </Grid>
  );
};

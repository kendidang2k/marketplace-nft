import { Grid, Typography } from "@mui/material";
import ConnectWalletModal from "components/organisms/ConnectWalletModal/ConnectWalletModal";
import GlobalModal from "components/organisms/GlobalModal/GlobalModal";
import { Header } from "components/organisms/Header/Header";
import { Market } from "components/organisms/Market/Market";
import { Navbar } from "components/organisms/Navbar/Navbar";
import useAccount from "hooks/useAccount";
import React, { useEffect } from "react";

export const Home: React.FC = ({}) => {
  useEffect(() => {
    GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />);
  }, []);
  const account = useAccount();

  return (
    <Grid sx={{height: '100vh', overflow: 'hidden'}}>
      <Grid
        container
        sx={{ backgroundColor: "#13161b", width: "100%", overflowX: "hidden" }}
      >
        <Grid item xs={12} md={4} sx={{ height: "100%", zIndex: "10" }}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            height: "auto",
            zIndex: "5",
          }}
        >
          <Header title={"Marketplace"} />
          <Market />
        </Grid>
        <GlobalModal />
      </Grid>
    </Grid>
  );
};
